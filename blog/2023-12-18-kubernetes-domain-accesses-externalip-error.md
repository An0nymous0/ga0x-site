---
title: 'Kubernetes 集群容器内访问域名的 对应的EXTERNAL-IP 不通问题'
authors: gaoxu
tags: [Kubernetes]
---

> 问题出现在 Kubernetes 1.26 版本以后的集群，因为 1.26 版本修改了externalTrafficPolicy：Local 的处理逻辑

## 重现过程

假设我们在Kubernetes集群中部署了一个应用服务,对外暴露的是myapp.com域名。

首先,这个域名通过DNS解析指向了myapp服务的一个External IP。

然后,因为需要通过设置 svc LoadBalancer 模式自动获取云服务商的IP,同时厂商要求这个服务的 externalTrafficPolicy 要被设置成 Local 模式才可以获取。

Local模式要求服务的后端Pod必须与请求Pod在同一个节点上,流量才会转发过去。

开始的时候,服务运行在Node1上,Node1里的Pod访问都OK。

但是Node2里的Pod试图访问,由于myapp服务现在都在Node1上,Node2的请求被断路代理拒绝了。

于是 Node2里的Pod访问myapp域名就失败了!

另外,随着Pod的重启,比如myapp自己就重启了几次,每次IP和名字都会变......

所以Node1外的其它节点,以及集群外的用户,访问这个域名时,成功与否的概率其实很低很随机。

这就是因为一开始做了那个“Local”的限制,违反了服务可发现与负载均衡的初衷。

## 原因

1. 对应的 svc externalTrafficPolicy 为 Local 模式
2. Local 模式要求客户端和后端Pod在同一节点
3. 不存在本地端点 - 将丢弃流量,不会转发

## 为什么 1.26 版本以前的集群可以

### 1.26版本之前:

- 存在本地端点 - 转发流量到后端Pod
- 不存在本地端点 - 仍会尝试转发流量到其他节点

### 1.26版本之后:

- 存在本地端点 - 转发流量到后端Pod
- 不存在本地端点 - 将丢弃流量,不会转发

### 总结区别:

1.26之前:即使没有本地端点,也会转发流量到其他节点

1.26之后:严格限制必须有本地端点,否则一律丢弃流量

## 现象

- pod 内访问域名或 EXTERNAL-IP `无响应` 或者 `Failed to connect`
- 带有 Istio Envoy Sidecar 代理的 pod 访问 会返回 `TCP connection reset by peer`
    1. 因为流量先被istio-proxy拦截，建立7层连接，所以telnet能通，curl表现为等响应
    2. 然后istio-proxy去upstream，即请求x.x.x.x(EXTERNAL-IP)，等拿到x.x.x.x(EXTERNAL-IP)的回应后，再回给业务容器。
    3. 由于是Local模式，且节点上没有ep，导致istio-proxy在upstream建连失败而超时，于是再回给业务容器503
- 对应的 EXTERNAL-IP 节点内的 pod 访问没问题
- 容器外部访问没问题

## 解决方案

### 修改访问方式

将对应的访问地址改成 svc name 这也是 k8s 推荐的集群内服务之间的访问方式

### 腾讯云

将 LoadBalancer 对应的 ip 设置为 直连 Pod 模式 Service,对应[文档](https://cloud.tencent.com/document/product/457/41897)
