---
title: 'Kubernetes 使用 cert-manager 集成 istio gateway 实现 ACME 颁发的永久免费TLS HTTPS 证书'
sidebar_label: 'cert-manager'
---

> 有时候使用Kubernetes开发应用程序 发现都绕不开它的生态系统 开发人员如果想更好的利用k8s就必须了解它的底层逻辑 因为k8s不仅仅是一个部署环境，这也是为什么好多公司想做DevOps发现做不成的原因，因为当下的技术 开发不懂网络和运维 运维不懂开发就谈不上深度集成。
>

# cert-manager

cert-manager 是将证书和证书颁发机构作为资源添加到k8s集群中 并且简化证书获取和更新的过程，做到全程自动化续期和颁发证书。

# istio

如果你的集群用了istio做Service Mesh 同时使用Istio Gateway做为入口网关的话那么还需要 Istio Ingress Gateways 来配合完成验证颁发和续期验证的工作。

# helm

我们用 helm 来安装 cert-manager 到 k8s 集群中。

# 开始

## 通过 helm 安装 cert-manager

1. 添加 helm 仓库

```bash
helm repo add jetstack https://charts.jetstack.io
```

1. 更新 helm chart 缓存

```bash
helm repo update
```

1. 安装 cert-manager

```bash
helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.10.1 \
  --set installCRDs=true
	--set prometheus.enabled=false
```

1. 检查安装是否成功

```bash
kubectl get pods -n cert-manager
```

```bash
# 所有 pod 实例 STATUS 状态 为 Running 表示安装成功
NAME                                     READY   STATUS    RESTARTS   AGE
cert-manager-6b9564cd76-8fhkr            1/1     Running   0          47h
cert-manager-cainjector-f5897494-wxzvs   1/1     Running   0          47h
cert-manager-webhook-88c498bd4-rs9hf     1/1     Running   0          47h
```

如果是操作比较严谨的生产环境建议 通过-f values.yaml 配置文件安装 并且把文件托管到企业自己的git上。

## 配置 Issuer

安装 cert-manager 后第一件事就是配置一个 Issuer 或 ClusterIssuer，目的是为了能够让证书颁发机构（CA）签署证书以及响应证书签名的请求。 Issuer 和 ClusterIssuer 的区别是 ClusterIssuer 集群范围的资源 也就意味着是跨空间的。 下面我们来创建一个 ClusterIssuer

cluster-issuer.yaml

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-cluster
  namespace: istio-system
spec:
  acme:
    email: aaa@bbb.com
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-cluster
    solvers:
    - http01:
        ingress:
          class: istio # 注意此处必须是 istio 因为本文是基于 Istio Ingress Gateways 作为入口
```

```bash
kubectl apply -f cluster-issuer.yaml
```

因为想要申请证书 对应的颁发机构需要验证 这一步配置好之后 cert-manager 会自动帮我们验证 我们用的方式是 ACME HTTP-01 也就是颁发前机构需要通过给你的密钥来验证域名是你的。至于验证过程 cert-manager 会自动帮我们建立 Ingerss 资源来完成验证 之后会自动删除。另一种方式是DNS01 但是需要 DNS 提供商的支持 具体细节本文暂不做详细说明。

## 配置 Certificate

到了这一步我们就要给域名申请证书了

public-gateway-example-com-tls.yaml

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: public-gateway-example-com # 根据自己的域名配置
  namespace: istio-system
spec:
  secretName: public-gateway-example-com-tls # 根据自己的域名配置
  commonName: public-gateway.example.com # 根据自己的域名配置
  dnsNames:
  - public-gateway.example.com # 根据自己的域名配置
  issuerRef:
    name: letsencrypt-cluster
    kind: ClusterIssuer
```

```bash
kubectl apply -f public-gateway-example-com-tls.yaml
```

## 检查

### 确定 cert-manager 是否已经成功申请到证书

```bash
➜  ~ kubectl get certificate -A
NAMESPACE      NAME                            READY   SECRET                              AGE
istio-system   public-gateway-example-com   True    public-gateway-example-com-tls   46h
```

READY 是 True 表示成功

### 检查证书是否已经存在

```bash
➜  ~ k get secrets -n istio-system                 
NAME                                                        TYPE                                  DATA   AGE
public-gateway-example-com-tls                           kubernetes.io/tls                     2      46h
```

## 配置 Gateway 让我们的域名支持 HTTPS

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 443
      name: https
      protocol: HTTPS
    tls:
      mode: SIMPLE
      credentialName: public-gateway-example-com-tls # 这里要与生成的 secretName 匹配
    hosts:
    - public-gateway.example.com # 这里要与 Certificate 资源中的 dnsNames 匹配
```

到了这一步访问你的域名应该已经是 https 的了，至于自动更新 cert-manager 会帮我们自动完成，如果有特定需要可以自行去官网查看 Certificate 资源的配置项，同时 Istio Ingress Gateway 的底层是基于 envoyproxy 的，envoyproxy 本身有秘密发现服务 (SDS) 它会帮我们检查证书和推送到需要用到证书的 Envoy 实例上， Envoy 会立即使用新证书并且无序人工干预重新部署。

## 参考

【Istio 集成 cert-manager】[https://istio.io/latest/docs/ops/integrations/certmanager/](https://istio.io/latest/docs/ops/integrations/certmanager/)

【Secret discovery service (SDS)】[https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds)

【ACME DNS01】[https://cert-manager.io/docs/configuration/acme/dns01/](https://cert-manager.io/docs/configuration/acme/dns01/)

【helm 安装 cert-manager文档】[https://cert-manager.io/docs/installation/helm/](https://cert-manager.io/docs/installation/helm/)