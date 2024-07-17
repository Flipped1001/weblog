---
title: SQL的DML
date: 2022-05-29
tags:
 - sql
categories:
 - mysql
---

##  DML

DML数据库操作语言，用来对数据库表中的数据进行增删改查

```sql
#给指定字段添加数据
INSERT INTO 表名(字段名1，字段名2,...)VALUE(值1，值2)
#例子
INSERT INTO `flipped-user1`(`NAME`，`AGE`)VALUE('ALice',30)

#给全部的字段添加数据
INSERT INTO 表名 VALUES(值1，值2,..)
#例子
INSERT INTO `flipped-user1`VALUES(NULL,'Alice',30);

#批量添加数据
INSERT INTO 表名(字段名1,字段名2, .. )VALUES(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );
INSERT INTO 表名VALUES(值1,值2,.),(值1,值2, .. ),(值1,值2, ... );
#例子
INSERT INTO `flipped-user1` (`NAME`, `AGE`) VALUES ('Alice', 2), ('Bob', 3), ('Charlie', 4);

#修改数据
UPDATE 表名 SET 字段名1=值1,字段名2=值2,...[WHERE 条件];
#例子
UPDATE `flipped-user1`SET name = '倪浩'  WHERE name='flipped';

#删除数据（NULL 是一个特殊的值，不能使用普通的等号（=）进行比较，应该使用 IS NULL 进行比较）
DELETE FROM 表名 [WHERE 条件]
DELETE FROM `flipped-user1` WHERE `name` IS NULL;
```

## 