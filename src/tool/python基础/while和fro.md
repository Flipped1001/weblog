---
title: while和for
date: 2022-06-07
tags:
 - 循环
categories:
 - python
 - 基础
---


```python
age=input("请输入你的年龄")
print("你的年龄是%s" % age)
# input语句会将所有输入的数据当成字符串，如果需要自行转换类型

#
age=input("请输入你的年龄")
print("你的年龄是%s" % age)
age=int(age)

if age < 18 :
    print("未成年")
else:
    print("成年")

#    
tall=int(input("请输入你的身高"))
vip=int(input("请输入你的VIP等级"))

if tall<120:
    print("你可以不买票")
elif vip>3:
    print("您快去")
else:
    print("去买票")
    
    
# 1-10内的随机数    
num=random.randint(1,10)
print(num)


# while循环
i=0
while i<10:
    print("第%s次循环" % i)
    i+=1
    
    
    
# 99乘法表
i=0
while i<=9:
    j=1
    while j<=i:
        print(f"{j} * {i}  = {j*i}\t",end=" ")
        j+=1
    i+=1
    print()
    
    
#for循环
 name="Flipped1001"
 for i in name:
     print(i,end="")

 const=0
 name="itheima is a brand of itcast"

 for i in name:
     if i == 'a' :
         const=const+1

 print(const)


# range(num1,num2,step):获取一个从num1到num2步长为step的数字序列(不会包含num2)
for i in range(1,18,2)
    print(i)
    
    
num=101
count=0
for i in range(1,num):
    if i %2 ==0:
        count+=1

print(f"在0到{num-1}内有{count}个偶数")

# 使用for循环99乘法表
for i in range(1,10):
    for j in range(1,i+1):
        print(f"{j} * {i} = {j*i}\t",end=" ")

    print()
    
# continue 跳过本次循环
# 直接结束所在循环
```

