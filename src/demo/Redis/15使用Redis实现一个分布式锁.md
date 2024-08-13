---
title: 分布式锁
date: 2024-04-15
tags:
 - redis
categories:
 - redis
 - 分布式锁
---

### 使用Redis实现一个分布式锁

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/google/uuid"
	"time"
)

var (
	Rdb     *redis.Client
	ctx     = context.Background()
	lockKey = "my-lock-key"
)

func getRdb() {
	Rdb = redis.NewClient(&redis.Options{
		Addr:     "8.130.17.124:6379",
		Password: "021001",
		DB:       2,
	})
	fmt.Println("Redis连接成功")
}

func Close() {
	err := Rdb.Close()
	if err != nil {
		return
	}
	fmt.Println("Redis关闭成功")
}

// 尝试去获取锁
func acquireLock() (bool, error) {
	// 生成唯一标识符作为锁的 value
	uniqueValue := uuid.New().String()
	// 使用 SETNX 命令尝试获取锁
	result, err := Rdb.SetNX(ctx, lockKey, uniqueValue, 5*time.Second).Result()
	if err != nil {
		return false, err
	}
	return result, nil
}

// 释放锁,使用Lua脚本保证只有拥有锁的客户端能释放锁
func releaseLock() (bool, error) {
	// Lua脚本
	script := `
	if redis.call("GET", KEYS[1]) == ARGV[1] then
		return redis.call("DEL", KEYS[1])
	else
		return 0
	end`

	result, err := Rdb.Eval(ctx, script, []string{lockKey}, "1").Result()
	if err != nil {
		return false, err
	}
	return result.(int64) == 1, nil
}

func main() {
	getRdb()
	defer Close()

	locked, err := acquireLock()
	if err != nil {
		fmt.Println(err)
		return
	}
	if locked {
		fmt.Println("获取锁成功")
		// 业务逻辑
		time.Sleep(6 * time.Second)

		//释放锁
		unlocked, err := releaseLock()
		if err != nil {
			fmt.Println(err)
			return
		}
		if unlocked {
			fmt.Println("锁已释放")
		} else {
			fmt.Println("未能释放锁，锁可能已被其他客户端持有")
		}
	} else {
		fmt.Println("获取锁失败,另一个进程持有锁")
	}
}
```

在加锁的时候，应该保证这个锁的key值和value值的唯一性。这样可以在后面解除锁的时候，方便定位目标是否持有锁。

 :::important 

 在Redis集群下，可以使用Redlock（红锁）来保证分布式锁的可靠性。它是基于多个Redis节点的分布式锁，**基本思路就是让客户端和多个Redis节点去申请锁，如果和超过半数以上的节点申请到锁，并且加锁时间没有超过锁的有效时间，就认为加锁成功**

 加锁失败之后，或者锁的有效期不足以对共享数据进行保护就可以释放锁；过程就是客户端向所有的Redis节点发起释放锁的操作，释放锁的操作和单节点一样，执行Lua脚本即可
 :::