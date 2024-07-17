---
title: 第N高的数据
date: 2024-04-12
tags:
 - leecode
categories:
 - leecode
 - sql
---

```sql
-- LeetCode 
-- 176.第二高的薪水
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (
  SELECT MAX(salary) FROM Employee
    )
    
 -- 子查询找到最大的 `salary`,外层查询找到出最大值的剩余数中的最大值
 
 SELECT
    (SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1) AS SecondHighestSalary
-- 由于需要输出null，使用 LIMIT 1 OFFSET 1 时，如果表中的行数少于2行，即只有1行或者为空，那么查询将不会返回任何结果，包括 null，所以将查询设为一个子查询，这样外层查询在无数据查询的情况下会返回一个null

SELECT
    IFNULL(
      (SELECT DISTINCT Salary
       FROM Employee
       ORDER BY Salary DESC
        LIMIT 1 OFFSET 1),
    NULL) AS SecondHighestSalary
-- 使用IFNULL，将空值的情况返回一个NULL值

-- 177.第N高的薪水
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE M INT;
SET M=N-1;
  RETURN (
    SELECT IFNULL(
      (
      SELECT DISTINCT salary 
      FROM Employee 
      ORDER BY salary DESC 
      LIMIT 1 OFFSET M
    ),null) AS getNthHighestSalary
  );
END

-- 在 LIMIT 子句中使用 OFFSET 时，不能直接将参数N递给 OFFSET。参数必须是一个常量或一个变量，不能是函数参数。
-- DECLARE M INT 声明了一个变量
-- SET M = N-1 赋值
```

### 1. `LIMIT M, 1`

- 这种语法用于从查询结果的第 `M` 行开始，返回接下来的1行数据。
- 这里的 `M` 是一个整数，表示从结果集的哪一条记录开始返回数据。
- 这种语法通常用于分页或获取某一个特定位置的记录。

### 2. `LIMIT offset, count`

- 这种语法用于跳过查询结果的前 `offset` 条记录，然后返回接下来的 `count` 条记录。
- `offset` 是一个整数，表示要跳过的记录数。
- `count` 也是一个整数，表示在跳过 `offset` 条记录后，要返回的记录数。