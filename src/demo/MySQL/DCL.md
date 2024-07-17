---
title: SQL的DCL
date: 2022-05-05
tags:
 - sql
categories:
 - mysql
---

## DCL

DCL数据控制语言，用来创建数据库用户,控制数据库的访问权限

```sql
1. 查询用户
USE mysql;
SELECT * FROM `user`;
2. 创建用户
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
3. 修改用户密码
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';
4. 删除用户
DROP USER '用户名'@'主机名';

#创建用户只能在当前主机上访问，密码123456
CREATE USER 'main'@'localhost' IDENTIFIED BY '123456';
#创建用户能在任意主机上访问，密码123456
CREATE USER 'main'@'%' IDENTIFIED BY '123456';

#修改用户密码
ALTER USER 'mian'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

#删除用户
DROP USER 'mian'@'localhost';
```

**注意:**

- **主机名可以使用%通配。**
- **这类SQL开发人员操作的比较少,主要是DBA(Database Administrator 数据库管理员)使用。**



| 权限                |        说明        |
| :------------------ | :----------------: |
| ALL, ALL PRIVILEGES |      所有权限      |
| SELECT              |      查询数据      |
| INSERT              |      插入数据      |
| UPDATE              |      修改数据      |
| DELETE              |      删除数据      |
| ALTER               |       修改表       |
| DROP                | 删除数据库/表/视图 |
| CREATE              |   创建数据库/表    |
|                     |                    |

```sql
1. 查询权限
SHOW GRANTS FOR '用户名’@'主机名’;
2. 授予权限
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';
3. 撤销权限
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';
```

注意:

- **多个权限之间,使用逗号分隔**
- **授权时,数据库名和表名可以使用*进行通配,代表所有。**