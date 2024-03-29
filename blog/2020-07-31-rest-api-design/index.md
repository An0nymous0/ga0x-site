---
title: 优秀的 REST API 设计指南
authors: gaoxu
tags: [REST API, 设计]
---

本文建议读者：

- 后端工程师、架构师
- 需要跟后端协同的前端工程师
- 以API提供服务的软件提供商

## 前言

------

作为一名优秀的后端程序员，你照着产品需求设计好了模型，设计好了关联关系。

把这些模型和关系一再打磨了一番之后，你想是时候把API设计出来，与前端沟通了。

这时候问题来了：

一旦 API 进入前端 APP 代码，或者是被你的顾客广泛使用的话，再来大改就非常麻烦了。比如说，如果 APP 版本 1.0 用了一个接口 A，这个接口 A 如果要进行大改，那么必须将 A 维持至所有用户升级过 APP 1.0 后。

那么怎么样避免 API 发布之后大改呢？有没有一些提前可以注意到的设计准则可以帮我们避开 API 设计中的各种坑？

答案是有的。网上充满了各种对 API 设计的建议，而这篇文章里我们结合卡拉搜索设计 API 的经验，把 REST API 的最佳实践和常见的坑都总结出来，做成一个教程，希望可以在帮到正在设计/使用 API 的你。

<!--truncate-->

## REST API 是什么 - 程序员与服务之间沟通的语言

------

任何语言的本质都是一套规则的合集。比如说，中文里要求句子要有主谓宾，而作为母语为中文的我们，一旦有人说了一句缺少主语的话，我们会直觉性地感觉很奇怪。

比如说，如果有人对你说“是一个神人”。

你会直觉地问：究竟谁是一个神人？

同样的，在各个程序的沟通中，或者各个服务的沟通中，我们也需要类似“语言”的东西，让我们可以不需要太多的上下文，就可以前端理解后端、后端也理解前端。

设想一下，有多少次你跟前端一起需要前后端 `联调`？有多少次前端觉得你定义的 API 不够方便直观，一定要你多返回一个参数或者改一下端点路径？

其实本质上，你们在 `联调` 时就是在尝试设计一个“语言”，以方便互相可以更容易地理解对方。

比如说，后端会要求前端说，你调用 `POST /user/abc` 就可以创建一个名为 `abc` 用户了。

短线来讲这当然没问题，你们可以几乎任意地定义 API 端点，任意地调整传递的参数。但是一旦项目开始变复杂，问题就开始出现了。

- 首先大家有不同的经验和喜好，对 API 的定义可能千差万别，所谓众口难调
- 系统开始复杂后，各个系统之间的 API 因为定义的人的不同，会开始出现不一致，导致每个端口调用前需要详细阅读文档（如果有的话）或者与 API 设计者无穷无尽地讨论和会议
- 如果你的 API 是面向客户的，比如如果你是一家软件服务公司，那么你自定义的 API 会增加客户接入的成本
- 等等等等

因此，要是有一套人类通用的"语言“或者”规范“，来指导大家定义 API 的方式，那样该多好？

REST API 就是这样一种规范，它是目前整个互联网应用最广泛的 API 规范。有意思的是，REST是由它的提出者 Roy Fielding 在他读书期间，写的博士论文里提出的。

总结一下，REST API 有一套 API 设计的准则，它规范了 API 设计的框架，使得服务间、程序员之间有一个通用的沟通语言。如果需要读 API 更广泛的定义，请参考文章[什么是 API](https://kalasearch.cn/blog/what-is-api)

REST API是沟通语言

## REST API 内具体规定了什么

------

REST API 规范了 API 设计的两大核心原则

1. API应该作用于 Resource（资源）上
2. 对资源的操作应使用对应语义的几种操作，包括： GET, POST, PUT, PATCH, DELETE

我们来详细解释一下这两点

### 什么是 REST API 里的 Resource（即资源）

这里的资源是指你的 API 用户可操作的逻辑对象，举个例子

如果你的 API 中允许调用者对用户进行操作，比如说用户注册，那么 API 类似于

```
POST /users
```

在这里，资源即为 `users`。在很多情况下，API 中的资源与你的数据模型（也就是数据库的表）是一一对应的。当然也有例外情况，比如说你的数据库中存有用户，但是你现在想要让调用者可以创建“管理员”，那么 API 可能是

```
POST /admins
```

然而，你的表中并没有 `admins` 这个表，而是否是 admin 是 Users 表中的一个属性，比如 `role=admin`。

请注意，REST API中的资源一定需要是名词，即一定是一个实在存在的概念比如 `用户`, `帐号`, `车票`等，或一个抽象的概念比如 `权限` 等。如果你需要提供一个创建某种资源的API接口，上述则可以表述为

```
POST /indexes
POST /accounts
POST /docs
```

等等。

通常对于资源的命名，我们建议统一命名为为英文的复数。比如说 `users` 而不是 `user`。同时请注意保持一致性，在所有地方用一样的复数。

### 什么是 REST API 里的操作

一旦你定义了资源，接下来你需要定义允许调用者在这些资源上做什么操作。

比如说，以携程抢车票网站为例，我们可能允许调用者进行以下操作

- `GET /tickets` - 列出所有车票
- `GET /tickets/9839` - 列出 id 为 9839 这张车票的信息
- `POST /tickets` - 创建一张车票
- `PUT /tickets/9839` - 更新 9839 这张车票的信息
- `PATCH /tickets/9839` - 部分修改 983 这张车票的信息，比如只修改车票价格
- `DELETE /tickets/9839` - 删掉 9839 这张车票

请注意，到这里为止，你应该可以总结出来REST的大致设计思路了。它由两部分组成，第一部分是 `操作`，第二部分是可操作的 `资源`。比如上文中的 `GET /tickets`，操作是 GET，可操作的资源是车票。

那么读到这里，如果你严格遵循了REST的设计准则，以及你的调用者也了解 REST 的准则的话，那么对于很多 API 调用，你们不用再参考互相写的文档了。如果需要调用一张车票的信息，你的调用者自然会知道应该用GET去查看一个车票资源的信息，即 `GET /tickets/:ticketId`。这样就极大降低了沟通成本和出错成本，提升效率。

### 如何在 API 中表示实体（数据库表）间关系

在后端设计中，有的资源逻辑上无法独立存在。比如说，在卡拉搜索的例子里，用户的文档是无法独立于索引存在的。那么自然地，我们用

```
GET /indexes/index_abc/docs/1
```

来表达获取索引 `index_abc` 中编号为 `1` 的文档。因此，对于所有资源需要依赖于另一个资源存在时，我们就按顺序在端点中将资源列出来。对于卡拉搜索中，索引和文档的关系，我们有以下接口

- `GET /indexes/index_abc/docs/1` - 获取index id为 `index_abc` 下的id为 `1` 的文档
- `GET /indexes/index_abc/docs` - 获取index id为 `index_abc` 下的所有文档
- `POST /indexes/index_abc/docs` - 在index id为 `index_abc` 的索引中，添加文档 ...

如果一个资源可以独立于另一个资源存在，并且你期望你的API调用者频繁调用，那么可以考虑直接提供子端点。比如说，如果一个宠物店主人和宠物信息分别都常常被同时调用，那么你可以考虑

```text
GET /owners/  - 获取所有主人信息
GET /owners/1/pets/ 获取 id 为 1 的主人的所有宠物
GET /pets/ - 获取所有宠物信息（宠物店所有宠物）
GET /pets/13 - 直接获取 id 为 13 的宠物
```

### REST API中如何表示一个动作

有时候，当我们试图表达一些接口时，会发现REST的准则很难直接应用。比如说，当你需要一个接口让用户登录时

```
POST /users/signin
```

但要注意，这里的 `signin` 即登录，是一个动词。这里是采用REST准则时需要考虑的地方，你有三个选择

1. 如果你希望严格地遵循 REST 原则，那么你需要找一个替代动词的名词。比如说，这里的 `signin` 可以替换为`login`。或者，如果你是以 token 密钥的方式登录的话，也许可以改为 `POST /users/token`，即创建一个 user token(也就是登录了)
2. 在某些实在困难的地方，放弃严格的REST原则
3. 参考一些成功的 REST API 并寻找类似的 API，参考他们的命名设计

对于3，我强烈建议你参考 github 的 API，原因不光是其极为规范，还有它覆盖了极多的 API 调用的情景，因此大概率你可以找到个类似的命名参考。

比如说，在 github 上，如果让你来设计加星这个操作，你会把端点被设计成什么样？

Github把加星端点设计为 `PUT /gists/:id/star`，把取消加星设计为 `DELETE /gitsts/:id/star`。这样就完美地遵循了 REST 名词作为资源的准则，把动词"加星“完美地用 `PUT/DELETE` 两个操作，清晰地表达了出来。

## REST API 设计常见问题和建议

------

上面我们描述了 REST 设计的准则，而在准则中并不包括其它”最佳实践“。

这里的最佳实践，其实并没有什么客观标准，只是软件工程和架构经过多年的发展，REST API 的设计也从十几年前简单的web 应用，到应用到现在越来越复杂企业级软件中。因此，如果你刚刚开始学习 REST API 的设计，参考这些实践经验将会有非常大的帮助，可以帮你少走不少绕路。



[![REST API 最佳实践](1.png)](1.png)REST API 最佳实践



### REST API 如何区分版本

在设计 REST API 时，你应该时刻准备好不断更新 API。想要把 API稳定后再一次发布多数情况下是不实际的——老板要催进度，用户要催功能。因此，在设计 API 的时候就应该把支持 API 改动设计到API本身中。

多数情况下，在一版 API 已经成熟的前提下，可以提前发布，同时开始进行下一版的开发。而你只需要在URL中区分好 API 的版本即可。

比如说，如果在大致将 v1 开发完毕后，v1 前缀的 API 就应该稳定下来，所有的改动进入 v2。同时你应该开始通知所有使用 v1 的用户，给他们几周到几个月的时间，帮助他们平滑迁移到 v2

带有版本前缀的 API 示例如下

```curl
GET /v1/indexes/
GET /v1/indexes/abc/
POST /v1/indexes/
```

### REST API 应该返回什么

作为一个通则，我们建议 REST API 永远返回 JSON 格式的结果。

原因有几个：

首先，JSON 作为互联网上使用最广泛的格式，在几乎任何语言的任何框架中都有广泛的支持。

同时，由于其高度的可读性，如果需要阅读返回内容，JSON 会让你的调用者阅读起来方便很多。

最后，JSON 的高压缩率可以在需要时方便地帮你提升传输效率和速度。

### 为什么要给你的 API 编写文档

写代码时，遇到稍复杂的逻辑，我们会发现如果没有注释，一个月后回来发现自己当时写的代码根本不像自己亲生的。再试图熟悉时，可能几个小时就过去了。

同样，对于 API 来说，如果你不写文档，那么在集成时，你的调用者肯定一边骂，一边尝试各种参数组合。为了让你的调用者有更顺滑的接入体验，每个 API 的设计者都应该把 API 文档作为与 API 的代码一样重要的模块。

好的 API 文档不光可以方便调用者的接入，更可以方便让你把 API 更改等信息传递出去，而不是一个一个单独通知你的用户。同时在编写文档时，你也会尝试着以你描述地方式接入，间接做了一次"dog food"自测。

如果你是面向开发者的 API 的话，优秀的 API 文档还可以作为强大的品牌宣传。在卡拉搜索我们花大力气维护我们的文档，同时我们也参考和致敬其它我们用过或者觉得值得夸奖的 API 文档：

- [卡拉搜索 API 文档 - 用 API 实现搜索引擎](https://kalasearch.cn/docs)
- [Leancloud API文档](https://leancloud.cn/docs/rest_api.html)
- [Github API 文档](https://developer.github.com/v3/)

### 默认开启 Gzip 和 Pretty print

在返回你的 REST API 结果时，我们建议打开 Gzip 和 Pretty print 两个选项。

#### 打开 Gzip

Gzip 非常好理解，在目前的普通手机算力已经接近十几年前的顶配计算机的前提下，CPU 不再是运算的瓶颈。而网络带宽的扩宽速度则远没有追上 CPU 变快的速度。因此，如果有可能的话，用 CPU 的时间换取网络的传输时间是非常值得的。这也就是说，打开默认 Gzip 压缩，会让你的 JSON 结果耗费少量的服务器 CPU，但却能大大加快传输速度。

因此我们建议默认将 Gzip 打开。

#### 打开 Pretty Print

什么是 Pretty print 呢？简单说就是在 JSON 中插入空格和换行，让 JSON 变得美观，方便人阅读。比如下面不是Pretty print:

```text
{"name":"大话西游","actor":"周星驰”}
```

而下面是打开 Pretty print 后的同一个 JSON

```text
{
  "name": "大话西游",
  "actor": "周星驰”
}
```

在 JSON 稍变得复杂之后，如果没有 Pretty print 的 JSON 将会变得完全不可读。虽然打开 Pretty print 会增加一些空白字符，但是由于打开 Gzip 压缩，这些空白字符所占用的空间都会被压缩掉，所以并不用担心网络传输时，JSON 变得更大更慢。

## 总结

API是程序员与程序员沟通的语言，一个优秀的API不光可以让你维护起来更轻松，也会让你的调用者在使用时更得心应手。遵循 REST 准则设计出来的优秀的 API，可以减少你与调用者之间的沟通成本，让你可以用更多的时间专注在其它更重要的事情上。