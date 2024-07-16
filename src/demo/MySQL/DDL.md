---
title: SQL的DDL
date: 2024-06-15
tags:
 - SQL
categories:
 - mysql
---

<!-- more -->


数据库（DB）

MySql关系型数据库：

建立在关系模型基础上，有多张相互连接的二维表组成的数据库

**推荐使用反引号**：

- 列名或表名包含特殊字符（如 `-`、`/`、空格等）。
- 列名或表名与SQL保留字冲突（如 `SELECT`、`FROM` 等）。
- 保证兼容性和可读性。

**可以不使用反引号**：

- 列名和表名没有特殊字符，也不与保留字冲突。
- 简化书写。



SQL：

| 分类 |            全称            |                         说明                          |
| :--: | :------------------------: | :---------------------------------------------------: |
| DDL  |  Data Definition Language  | 数据定义语言，用来定义数据库对象（数据库，表，字段）  |
| DML  | Data Manipulation language |  数据库操作语言，用来对数据库表中的数据进行增删改查   |
| DQL  |    Data Query language     |        数据查询语言，用来查询数据库中表的记录         |
| DCL  |   Data Control Language    | 数据控制语言，用来创建数据库用户,控制数据库的访问权限 |
|      |                            |                                                       |

## DDL

DDL数据库定义语言，用来定义数据库对象（数据库，表，字段）

DDL数据库操作：

```sql
#查询所有数据库
SHOW DATABASES;
#查询当前数据库
SELECT DATABASES();

#创建
CREATE DATABASES[IF NOT EXISTS]数据库名[DEFAULT CHARSET 字符集][COLLATE 排序规则];

#删除
DROP DATABASES[IF EXISTS]数据库名;

#使用
USE 数据库名;
```

DDL表操作：

```sql
#查询当前数据库的所有表
SHOW TABLES;

#查询某个表的数据结构
DESC 表名;

#查询指定表的建表语句
SHOW CREATE TABLE 表名;

#添加字段
ALTER TABLE 表名 ADD 字段名 类型(长度)[COMMENT 注释][约束];
#例子
ALTER TABLE `flipped-user1` ADD `WORK` VARCHAR(50) COMMENT '工作';

#修改数据类型
ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);

#修改字段名和字段类型
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度)[COMMENT 注释][约束];

#删除字段
ALTER TABLE 表名 DROP 字段名;

#修改表名
ALTER TABLE 表名 RENAME TO 新表名;

#删除表
DROP TABLE[IF EXISTS]表名;

#删除指定表并重新创建该表
TRUNCATE TABLE　表名;

#新建表
CREATE TABLE emp (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    address VARCHAR(255),
    entrydate DATE
);


```

数值类型：

| 类型         | 大小   | 有符号（SINGED）范围   | 无符号（UNSINGED）范围 | 描述           |
| ------------ | ------ | ---------------------- | ---------------------- | -------------- |
| TINYINT      | 1 byte | （-128，127）          | （0，255）             | 小整数值       |
| SMALLINT     | 2 byte | （-32768，32767）      | （0，65535）           | 大整数值       |
| MEDIUMINT    | 3 byte | （-8388608，8388607）  | （0，16777215）        | 大整数值       |
| INT或INTEGER | 4 byte | （-2^31^,2^31^-1）     | （0，2^32^-1）         | 大整数值       |
| BIGINT       | 8 byte | （-2^63^,2^63^-1）     | （0，2^64^-1）         | 极大整数值     |
| FLOAT        | 4 byte |                        |                        | 单精度浮点数值 |
| DOUBLE       | 8 byte |                        |                        | 双精度浮点数值 |
| DECIMAL      |        | 依赖M(精度)D(标度)的值 |                        | 小数值         |
|              |        |                        |                        |                |

字符类型：

| 类型       | 大小               | 描述                         |
| ---------- | ------------------ | ---------------------------- |
| CHAR       | 0-255 bytes        | 定长字符串                   |
| VARCHAR    | 0-65535 bytes      | 变长字符串                   |
| TINYBLOB   | 0-255 bytes        | 不超过255个字符的二进制数据  |
| TINYTEXT   | 0-255 bytes        | 短文本字符串                 |
| BLOB       | 0-65535 bytes      | 二进制形式的长文本数据       |
| TEXT       | 0-65535 bytes      | 长文本数据                   |
| MEDIUMBLOB | 0-16777215 bytes   | 二进制形式的中等长度文本数据 |
| MEDIUMTEXT | 0-16777215 bytes   | 中等长度文本数据             |
| LONGBLOB   | 0-4294967295 bytes | 二进制形式的极大文本数据     |
| LONGTEXT   | 0-4294967295 bytes | 极大文本数据                 |
|            |                    |                              |

日期类型：

| 类型      | 大小 | 范围                                       | 格式                   | 描述                    |
| :-------- | :--- | :----------------------------------------- | ---------------------- | :---------------------- |
| DATE      | 3    | 1000-01-01 至 9999-12-31                   | YYYY-MM-DD             | 日期值                  |
| TIME      | 3    | -838:59:59 至 838:59:59                    | HH: MM: SS             | 时间值或持续时间        |
| YEAR      | 1    | 1901 至 2155                               | YYYY                   | 年份值                  |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31+3:59:59  | YYYY-MM-DD HH: MM: SS  | 混合日期和时间值        |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH : MM: SS | 混合日期和时间值,时间戳 |
|           |      |                                            |                        |                         |