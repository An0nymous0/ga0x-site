---
title: '解决 MongoDB 驱动提示 not authorized 的问题'
authors: gaoxu
tags: [MongoDB, Develop]
---

开发过程中有时会遇到用户名和密码明明是对的 程序里死活都连接不上提示没有权限的问题，根源在配置和mongo的认证机制上。

首先在你连接 MongoDB 前要确定的是你应该**认证身份的数据库**和你**要使用的数据库**

## 参考一下表格获得更好的理解
| Connection parameters                                    | Authentication database | Current database |
|----------------------------------------------------------|-------------------------|------------------|
| mongo -u user -p pwd --authenticationDatabase admin myDB | admin                   | myDB             |
| mongo -u user -p pwd myDB                                | myDB                    | myDB             |
| mongo -u user -p pwd --authenticationDatabase admin      | admin                   | test             |
| mongo -u user -p pwd --host localhost:27017              | admin                   | test             |
| mongo -u user -p pwd                                     | admin                   | test             |
| mongo -u user -p pwd localhost:27017                     | test                    | test             |
| mongosh -u user -p pwd localhost:27017                   | admin                   | test             |  -> Different on mongosh and legacy mongo shell

## URI 方式

| Connection string                                      | Authentication database | Current database |
|--------------------------------------------------------|-------------------------|------------------|
| "mongodb://user:pwd@hostname/myDB?authSource=admin"    | admin                   | myDB             |
| "mongodb://user:pwd@hostname/myDB"                     | myDB                    | myDB             |
| "mongodb://user:pwd@hostname?authSource=admin"         | admin                   | test             |
| "mongodb://user:pwd@hostname"                          | admin                   | test             |

大多数情况是你没有指定 authSource 同时 要连接的数据库和用户不在一个库里，比如你创建了 admin 用户在 admin 库但是你要连接的是xxDB 导致的。

如上述 比如你填写的 URI 是 mongodb://user:pwd@hostname/myDB 那么就会报错。 修改成 mongodb://user:pwd@hostname/myDB?authSource=admin 就好了，

**authSource**是用户所在的数据库 **/myDB** 是你要连接的数据库。 这里背后其实有个逻辑 如果你的用户配置的是 userAdminAnyDatabase 权限一般会创建在 admin 库 这样在连接其他的库的时候必须指定 上述两个参数才可以。
