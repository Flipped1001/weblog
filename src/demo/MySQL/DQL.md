---
title: SQL的DQL
date: 2022-06-01
tags:
 - sql
categories:
 - mysql
---

## DQL

DQL数据查询语言，用来查询数据库中表的记录

```sql
FROM: 确定要查询的表。
JOIN: 如果有多表查询，处理表连接。
WHERE: 过滤符合条件的记录。
GROUP BY: 将记录进行分组。
HAVING: 过滤分组后的记录。
SELECT: 选择要返回的列。
DISTINCT: 去除重复的记录。
ORDER BY: 对记录进行排序。
LIMIT/OFFSET: 返回限定的记录数。

#基本查询
1.查询多个字段
SELECT 字段1，字段2，字段3....FROM 表名;
SELECT * FROM 表名;

2.设置别名
SELECT 字段1[AS 别名1],字段2[AS 别名2]...FROM 表名;
#例子
SELECT `workadress` AS '工作地点' FROM `emp`;
也可以省去AS
SELECT `workadress` '工作地点' FROM `emp`;

3.去除重复记录
SELECT DISTINCT 字段列表 FROM 表名;
#例子
SELECT DISTINCT `workadress` '工作地点' FROM `emp`;

#条件查询
SELECT 字段列表 FROM 表名 WHERE 条件列表;
#例子
SELECT * FROM `emp`	WHERE `idcard` IS NOT NULL;
SELECT * FROM `emp` WHERE `age` > 15 AND `age` < 20;
SELECT * FROM `emp` WHERE `age` BETWEEN 15 AND 20;
SELECT * FROM `emp` WHERE `age`= 18 OR `age`= 20 OR `age`= 40;
SELECT * FROM `emp` WHERE `age` IN(18,20,40);
查询两个字的姓名
SELECT * FROM `emp` WHERE `name` LIKE '__';
```



| 比较运算符          | 功能                                    |
| ------------------- | --------------------------------------- |
| >                   | 大于                                    |
| >=                  | 大于等于                                |
| <                   | 小于                                    |
| <=                  | 小于等于                                |
| =                   | 等于                                    |
| <> 或 !=            | 不等                                    |
| BETWEEN ... AND ... | 在某个范围之内(含最小、最大值)          |
| IN( ... )           | 在in之后的列表中的值,多选一             |
| LIKE  占位符        | 模糊匹配(_匹配单个字符,%匹配任意个字符) |
| IS NULL             | 是NULL                                  |
|                     |                                         |

| 逻辑运算符 | 功能                       |
| ---------- | -------------------------- |
| AND 或 &&  | 并且(多个条件同时成立)     |
| OR 或Ⅱ     | 或者(多个条件任意一个成立) |
| NOT 或!    | 非,不是                    |
|            |                            |

### 聚合函数

| 函数  | 功能     |
| ----- | -------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |
|       |          |

```sql
SELECT 聚合函数(字段列表) FROM 表名;

#统计数量
SELECT COUNT(*) FROM `emp`;
SELECT COUNT(`id`) FROM `emp`;

#统计平均数
SELECT AVG(`age`) FROM `emp`;

#统计最大值
SELECT MAX(`age`) FROM `emp`;

#最小值
SELECT MIN(`age`) FROM `emp`;

SELECT SUM(`age`) FROM `emp` WHERE `workadress` = `西安`;
```

```sql
SELECT 字段列表 FROM 表名[WHERE 条件]GROUP BY 分组字段[HAVING 分组后的过滤条件];

#根据性别分组，并计算总和
SELECT `gender` ,COUNT(*) FROM `emp` GROUP BY `gender`; 

#根据性别分组，并计算年龄平均值
SELECT `gender`, AVG(`age`) FROM `emp` GROUP BY `gender`;

#查询年龄小于45，根据工作地址分组，并获取人数大于三的工作地址
SELECT `workadress`, COUNT(*) FROM `emp`WHERE `age` < 45 GROUP BY `workadress` HAVING COUNT(*) > 3;

```

1.where与having区别

- 执行时机不同: where是分组之前进行过滤,不满足where条件,不参与分组;而having是分组之后对结果进行过滤。
- 判断条件不同:where不能对聚合函数进行判断,而having可以。

**注意**
**· 执行顺序:where>聚合函数>having。**
**· 分组之后,查询的字段一般为聚合函数和分组字段,查询其他字段无任何意义。**

```sql
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1，字段2 排序方式2;

#根据年龄进行升序排序
SELECT * FROM `emp` ORDER BY `age` ASC;

#根据年龄进行升序排序，如果年龄相同，再按照入职时间进行降序排序
SELECT * FROM `emp` ORDER BY `age` ASC, `entrydate` DESC;
```

1. 排序方式

   ASC: 升序(默认值)

   DESC:  降序

   **注意:如果是多字段排序,当第一个字段值相同时,才会根据第二个字段进行排序。**

```sql
SELECT 字段列表 FROM 表名 LIMIT 起始索引,查询记录数;

#查询第一页数据，每页展示十条数据
SELECT * FROM `emp` LIMIT 0,10;

#查询第二页数据，每页展示十条数据
SELECT * FROM `emp` LIMIT 10,10;
```

**注意**

- **起始索引从0开始,起始索引=(查询页码-1)*每页显示记录数。**
- **分页查询是数据库的方言,不同的数据库有不同的实现,MySQL中是LIMIT。**
- **如果查询的是第一页数据,起始索引可以省略,直接简写为limit 10。**

```sql
1. 查询年龄为20,21,22,23岁的员工信息。
2. 查询性别为男,并且年龄在20-40岁(含)以内的姓名为三个字的员工。
3. 统计员工表中,年龄小于60岁的,男性员工和女性员工的人数。
4. 查询所有年龄小于等于35岁员工的姓名和年龄,并对查询结果按年龄升序排序,如果年龄相同按入职时间降序排序。
5. 查询性别为男,且年龄在20-40岁(含)以内的前5个员工信息,对查询的结果按年龄升序排序,年龄相同按入职时间升序排序。

SELECT * FROM `emp` WHERE `age` IN (20,21,22,23);
SELECT * FROM `emp` WHERE `age`>=20 AND `age`<=40 AND `name` LIKE '___';
SELECT `gender`, COUNT(*) FROM `emp` WHERE `age` < 60 GROUP BY `gender`;
SELECT  `name`,`age`  FROM `emp` WHERE `age`<=35 ORDER BY `age` , `entrydate` DESC;
SELECT * FROM `emp` WHERE `gender` = '男' AND `age`>=20 AND `age`<=40 ORDER BY  `entydate` ASC  LIMIT 5 ;
```

## 