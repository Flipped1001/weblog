---
title: List
date: 2022-05-07
tags:
 - list
categories:
 - python
 - 基础
---

```python
# List

# 定义
a=[]
b=list()
[1,2,3,45]

# 在python中一个list可以保存多个数据类型不同的元素，元素甚至可以是列表
my_list=['it',12,True]
print(my_list)
print(type(my_list))

# 列表的下标可以反向索引最后一个数据下标为-1，往前依次是-2、-3、-4····
# 正向索引
print(my_list[0])
print(my_list[1])
print(my_list[2])

# 反向索引
print(my_list[-1])
print(my_list[-2])
print(my_list[-3])

# 从嵌套列表中选取数据
my_list = [[1,2,3],[4,5,6]]
print(my_list[0][0])
print(my_list[0][1])
print(my_list[1][2])


# 用list的方法查询
my_list = [1, 2, 3, 4, 5, 6,]

# 查询2在list中下标
index=my_list.index(2)

# 修改特定下标的值
my_list[1]="程序猿"
print(my_list[1])

# 在指定的下标处插入某个元素
my_list.insert(1,"it")
print(my_list)

# 追加元素
my_list.append("尼豪")
print(my_list)

# 追加一堆元素，其他的list
my_list2=[7,8,9]
my_list.extend(my_list2)
print(my_list)

# 删除list中元素
del my_list2[2]
print(my_list2)

 # 下标1的元素提取出来并返回
num=my_list2.pop(1)
print(my_list2,num)

# 删除在例表中第一个匹配的值
my_list.remove("it")
print(my_list)

# 清空列表
# my_list.clear()

# 统计某元素在列表中的数量
num2=my_list.count("程序猿")
print(num2)

# 例表的长度
len(my_list) 


# 使用While遍历list
def While_list ():
    my_list = [1,2,3,4,5]
    index = 0
    while index<len(my_list):
        print(my_list[index])
        index += 1

While_list()

# 使用for遍历list
def for_list():
    my_list = [1,2,3,4,5]
    for  i in my_list:
        print(i)

for_list()
```