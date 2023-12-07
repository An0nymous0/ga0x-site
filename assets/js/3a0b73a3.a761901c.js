"use strict";(self.webpackChunkga0x_site=self.webpackChunkga0x_site||[]).push([[1709],{7627:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=s(1527),t=s(6120);const r={title:"Kubernetes \u4f7f\u7528 cert-manager \u96c6\u6210 istio gateway \u5b9e\u73b0 ACME \u9881\u53d1\u7684\u6c38\u4e45\u514d\u8d39TLS HTTPS \u8bc1\u4e66",sidebar_label:"cert-manager"},c="cert-manager",i={id:"kubernetes/cert-manager-istio-ingress-gateway",title:"Kubernetes \u4f7f\u7528 cert-manager \u96c6\u6210 istio gateway \u5b9e\u73b0 ACME \u9881\u53d1\u7684\u6c38\u4e45\u514d\u8d39TLS HTTPS \u8bc1\u4e66",description:"\u6709\u65f6\u5019\u4f7f\u7528Kubernetes\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f \u53d1\u73b0\u90fd\u7ed5\u4e0d\u5f00\u5b83\u7684\u751f\u6001\u7cfb\u7edf \u5f00\u53d1\u4eba\u5458\u5982\u679c\u60f3\u66f4\u597d\u7684\u5229\u7528k8s\u5c31\u5fc5\u987b\u4e86\u89e3\u5b83\u7684\u5e95\u5c42\u903b\u8f91 \u56e0\u4e3ak8s\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u90e8\u7f72\u73af\u5883\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u597d\u591a\u516c\u53f8\u60f3\u505aDevOps\u53d1\u73b0\u505a\u4e0d\u6210\u7684\u539f\u56e0\uff0c\u56e0\u4e3a\u5f53\u4e0b\u7684\u6280\u672f \u5f00\u53d1\u4e0d\u61c2\u7f51\u7edc\u548c\u8fd0\u7ef4 \u8fd0\u7ef4\u4e0d\u61c2\u5f00\u53d1\u5c31\u8c08\u4e0d\u4e0a\u6df1\u5ea6\u96c6\u6210\u3002",source:"@site/docs/kubernetes/cert-manager-istio-ingress-gateway.md",sourceDirName:"kubernetes",slug:"/kubernetes/cert-manager-istio-ingress-gateway",permalink:"/docs/kubernetes/cert-manager-istio-ingress-gateway",draft:!1,unlisted:!1,editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/docs/kubernetes/cert-manager-istio-ingress-gateway.md",tags:[],version:"current",lastUpdatedAt:1675419671,formattedLastUpdatedAt:"2023\u5e742\u67083\u65e5",frontMatter:{title:"Kubernetes \u4f7f\u7528 cert-manager \u96c6\u6210 istio gateway \u5b9e\u73b0 ACME \u9881\u53d1\u7684\u6c38\u4e45\u514d\u8d39TLS HTTPS \u8bc1\u4e66",sidebar_label:"cert-manager"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Linux \u4e0a\u6d4b\u8bd5\u786c\u76d8IO\u8bfb\u5199\u901f\u5ea6",permalink:"/docs/Linux/test-io"},next:{title:"CentOS9 kubeadm \u5b89\u88c5 K8s(containerd)",permalink:"/docs/kubernetes/kubeadm-install-k8s"}},l={},o=[{value:"\u901a\u8fc7 helm \u5b89\u88c5 cert-manager",id:"\u901a\u8fc7-helm-\u5b89\u88c5-cert-manager",level:2},{value:"\u914d\u7f6e Issuer",id:"\u914d\u7f6e-issuer",level:2},{value:"\u914d\u7f6e Certificate",id:"\u914d\u7f6e-certificate",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u786e\u5b9a cert-manager \u662f\u5426\u5df2\u7ecf\u6210\u529f\u7533\u8bf7\u5230\u8bc1\u4e66",id:"\u786e\u5b9a-cert-manager-\u662f\u5426\u5df2\u7ecf\u6210\u529f\u7533\u8bf7\u5230\u8bc1\u4e66",level:3},{value:"\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u5df2\u7ecf\u5b58\u5728",id:"\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u5df2\u7ecf\u5b58\u5728",level:3},{value:"\u914d\u7f6e Gateway \u8ba9\u6211\u4eec\u7684\u57df\u540d\u652f\u6301 HTTPS",id:"\u914d\u7f6e-gateway-\u8ba9\u6211\u4eec\u7684\u57df\u540d\u652f\u6301-https",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u6709\u65f6\u5019\u4f7f\u7528Kubernetes\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f \u53d1\u73b0\u90fd\u7ed5\u4e0d\u5f00\u5b83\u7684\u751f\u6001\u7cfb\u7edf \u5f00\u53d1\u4eba\u5458\u5982\u679c\u60f3\u66f4\u597d\u7684\u5229\u7528k8s\u5c31\u5fc5\u987b\u4e86\u89e3\u5b83\u7684\u5e95\u5c42\u903b\u8f91 \u56e0\u4e3ak8s\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u90e8\u7f72\u73af\u5883\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u597d\u591a\u516c\u53f8\u60f3\u505aDevOps\u53d1\u73b0\u505a\u4e0d\u6210\u7684\u539f\u56e0\uff0c\u56e0\u4e3a\u5f53\u4e0b\u7684\u6280\u672f \u5f00\u53d1\u4e0d\u61c2\u7f51\u7edc\u548c\u8fd0\u7ef4 \u8fd0\u7ef4\u4e0d\u61c2\u5f00\u53d1\u5c31\u8c08\u4e0d\u4e0a\u6df1\u5ea6\u96c6\u6210\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"cert-manager",children:"cert-manager"}),"\n",(0,a.jsx)(n.p,{children:"cert-manager \u662f\u5c06\u8bc1\u4e66\u548c\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u4f5c\u4e3a\u8d44\u6e90\u6dfb\u52a0\u5230k8s\u96c6\u7fa4\u4e2d \u5e76\u4e14\u7b80\u5316\u8bc1\u4e66\u83b7\u53d6\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b\uff0c\u505a\u5230\u5168\u7a0b\u81ea\u52a8\u5316\u7eed\u671f\u548c\u9881\u53d1\u8bc1\u4e66\u3002"}),"\n",(0,a.jsx)(n.h1,{id:"istio",children:"istio"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u7528\u4e86istio\u505aService Mesh \u540c\u65f6\u4f7f\u7528Istio Gateway\u505a\u4e3a\u5165\u53e3\u7f51\u5173\u7684\u8bdd\u90a3\u4e48\u8fd8\u9700\u8981 Istio Ingress Gateways \u6765\u914d\u5408\u5b8c\u6210\u9a8c\u8bc1\u9881\u53d1\u548c\u7eed\u671f\u9a8c\u8bc1\u7684\u5de5\u4f5c\u3002"}),"\n",(0,a.jsx)(n.h1,{id:"helm",children:"helm"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u7528 helm \u6765\u5b89\u88c5 cert-manager \u5230 k8s \u96c6\u7fa4\u4e2d\u3002"}),"\n",(0,a.jsx)(n.h1,{id:"\u5f00\u59cb",children:"\u5f00\u59cb"}),"\n",(0,a.jsx)(n.h2,{id:"\u901a\u8fc7-helm-\u5b89\u88c5-cert-manager",children:"\u901a\u8fc7 helm \u5b89\u88c5 cert-manager"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u6dfb\u52a0 helm \u4ed3\u5e93"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm repo add jetstack https://charts.jetstack.io\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u66f4\u65b0 helm chart \u7f13\u5b58"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm repo update\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5b89\u88c5 cert-manager"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.10.1 \\\n  --set installCRDs=true\n\t--set prometheus.enabled=false\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n cert-manager\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# \u6240\u6709 pod \u5b9e\u4f8b STATUS \u72b6\u6001 \u4e3a Running \u8868\u793a\u5b89\u88c5\u6210\u529f\nNAME                                     READY   STATUS    RESTARTS   AGE\ncert-manager-6b9564cd76-8fhkr            1/1     Running   0          47h\ncert-manager-cainjector-f5897494-wxzvs   1/1     Running   0          47h\ncert-manager-webhook-88c498bd4-rs9hf     1/1     Running   0          47h\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u662f\u64cd\u4f5c\u6bd4\u8f83\u4e25\u8c28\u7684\u751f\u4ea7\u73af\u5883\u5efa\u8bae \u901a\u8fc7-f values.yaml \u914d\u7f6e\u6587\u4ef6\u5b89\u88c5 \u5e76\u4e14\u628a\u6587\u4ef6\u6258\u7ba1\u5230\u4f01\u4e1a\u81ea\u5df1\u7684git\u4e0a\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u914d\u7f6e-issuer",children:"\u914d\u7f6e Issuer"}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5 cert-manager \u540e\u7b2c\u4e00\u4ef6\u4e8b\u5c31\u662f\u914d\u7f6e\u4e00\u4e2a Issuer \u6216 ClusterIssuer\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u80fd\u591f\u8ba9\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08CA\uff09\u7b7e\u7f72\u8bc1\u4e66\u4ee5\u53ca\u54cd\u5e94\u8bc1\u4e66\u7b7e\u540d\u7684\u8bf7\u6c42\u3002 Issuer \u548c ClusterIssuer \u7684\u533a\u522b\u662f ClusterIssuer \u96c6\u7fa4\u8303\u56f4\u7684\u8d44\u6e90 \u4e5f\u5c31\u610f\u5473\u7740\u662f\u8de8\u7a7a\u95f4\u7684\u3002 \u4e0b\u9762\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a ClusterIssuer"}),"\n",(0,a.jsx)(n.p,{children:"cluster-issuer.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-cluster\n  namespace: istio-system\nspec:\n  acme:\n    email: aaa@bbb.com\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: letsencrypt-cluster\n    solvers:\n    - http01:\n        ingress:\n          class: istio # \u6ce8\u610f\u6b64\u5904\u5fc5\u987b\u662f istio \u56e0\u4e3a\u672c\u6587\u662f\u57fa\u4e8e Istio Ingress Gateways \u4f5c\u4e3a\u5165\u53e3\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f cluster-issuer.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u56e0\u4e3a\u60f3\u8981\u7533\u8bf7\u8bc1\u4e66 \u5bf9\u5e94\u7684\u9881\u53d1\u673a\u6784\u9700\u8981\u9a8c\u8bc1 \u8fd9\u4e00\u6b65\u914d\u7f6e\u597d\u4e4b\u540e cert-manager \u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u9a8c\u8bc1 \u6211\u4eec\u7528\u7684\u65b9\u5f0f\u662f ACME HTTP-01 \u4e5f\u5c31\u662f\u9881\u53d1\u524d\u673a\u6784\u9700\u8981\u901a\u8fc7\u7ed9\u4f60\u7684\u5bc6\u94a5\u6765\u9a8c\u8bc1\u57df\u540d\u662f\u4f60\u7684\u3002\u81f3\u4e8e\u9a8c\u8bc1\u8fc7\u7a0b cert-manager \u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u5efa\u7acb Ingerss \u8d44\u6e90\u6765\u5b8c\u6210\u9a8c\u8bc1 \u4e4b\u540e\u4f1a\u81ea\u52a8\u5220\u9664\u3002\u53e6\u4e00\u79cd\u65b9\u5f0f\u662fDNS01 \u4f46\u662f\u9700\u8981 DNS \u63d0\u4f9b\u5546\u7684\u652f\u6301 \u5177\u4f53\u7ec6\u8282\u672c\u6587\u6682\u4e0d\u505a\u8be6\u7ec6\u8bf4\u660e\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u914d\u7f6e-certificate",children:"\u914d\u7f6e Certificate"}),"\n",(0,a.jsx)(n.p,{children:"\u5230\u4e86\u8fd9\u4e00\u6b65\u6211\u4eec\u5c31\u8981\u7ed9\u57df\u540d\u7533\u8bf7\u8bc1\u4e66\u4e86"}),"\n",(0,a.jsx)(n.p,{children:"public-gateway-example-com-tls.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: public-gateway-example-com # \u6839\u636e\u81ea\u5df1\u7684\u57df\u540d\u914d\u7f6e\n  namespace: istio-system\nspec:\n  secretName: public-gateway-example-com-tls # \u6839\u636e\u81ea\u5df1\u7684\u57df\u540d\u914d\u7f6e\n  commonName: public-gateway.example.com # \u6839\u636e\u81ea\u5df1\u7684\u57df\u540d\u914d\u7f6e\n  dnsNames:\n  - public-gateway.example.com # \u6839\u636e\u81ea\u5df1\u7684\u57df\u540d\u914d\u7f6e\n  issuerRef:\n    name: letsencrypt-cluster\n    kind: ClusterIssuer\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f public-gateway-example-com-tls.yaml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u68c0\u67e5",children:"\u68c0\u67e5"}),"\n",(0,a.jsx)(n.h3,{id:"\u786e\u5b9a-cert-manager-\u662f\u5426\u5df2\u7ecf\u6210\u529f\u7533\u8bf7\u5230\u8bc1\u4e66",children:"\u786e\u5b9a cert-manager \u662f\u5426\u5df2\u7ecf\u6210\u529f\u7533\u8bf7\u5230\u8bc1\u4e66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u279c  ~ kubectl get certificate -A\nNAMESPACE      NAME                            READY   SECRET                              AGE\nistio-system   public-gateway-example-com   True    public-gateway-example-com-tls   46h\n"})}),"\n",(0,a.jsx)(n.p,{children:"READY \u662f True \u8868\u793a\u6210\u529f"}),"\n",(0,a.jsx)(n.h3,{id:"\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u5df2\u7ecf\u5b58\u5728",children:"\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u5df2\u7ecf\u5b58\u5728"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u279c  ~ k get secrets -n istio-system                 \nNAME                                                        TYPE                                  DATA   AGE\npublic-gateway-example-com-tls                           kubernetes.io/tls                     2      46h\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u914d\u7f6e-gateway-\u8ba9\u6211\u4eec\u7684\u57df\u540d\u652f\u6301-https",children:"\u914d\u7f6e Gateway \u8ba9\u6211\u4eec\u7684\u57df\u540d\u652f\u6301 HTTPS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: gateway\nspec:\n  selector:\n    istio: ingressgateway\n  servers:\n  - port:\n      number: 443\n      name: https\n      protocol: HTTPS\n    tls:\n      mode: SIMPLE\n      credentialName: public-gateway-example-com-tls # \u8fd9\u91cc\u8981\u4e0e\u751f\u6210\u7684 secretName \u5339\u914d\n    hosts:\n    - public-gateway.example.com # \u8fd9\u91cc\u8981\u4e0e Certificate \u8d44\u6e90\u4e2d\u7684 dnsNames \u5339\u914d\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5230\u4e86\u8fd9\u4e00\u6b65\u8bbf\u95ee\u4f60\u7684\u57df\u540d\u5e94\u8be5\u5df2\u7ecf\u662f https \u7684\u4e86\uff0c\u81f3\u4e8e\u81ea\u52a8\u66f4\u65b0 cert-manager \u4f1a\u5e2e\u6211\u4eec\u81ea\u52a8\u5b8c\u6210\uff0c\u5982\u679c\u6709\u7279\u5b9a\u9700\u8981\u53ef\u4ee5\u81ea\u884c\u53bb\u5b98\u7f51\u67e5\u770b Certificate \u8d44\u6e90\u7684\u914d\u7f6e\u9879\uff0c\u540c\u65f6 Istio Ingress Gateway \u7684\u5e95\u5c42\u662f\u57fa\u4e8e envoyproxy \u7684\uff0cenvoyproxy \u672c\u8eab\u6709\u79d8\u5bc6\u53d1\u73b0\u670d\u52a1 (SDS) \u5b83\u4f1a\u5e2e\u6211\u4eec\u68c0\u67e5\u8bc1\u4e66\u548c\u63a8\u9001\u5230\u9700\u8981\u7528\u5230\u8bc1\u4e66\u7684 Envoy \u5b9e\u4f8b\u4e0a\uff0c Envoy \u4f1a\u7acb\u5373\u4f7f\u7528\u65b0\u8bc1\u4e66\u5e76\u4e14\u65e0\u5e8f\u4eba\u5de5\u5e72\u9884\u91cd\u65b0\u90e8\u7f72\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u60f3\u6dfb\u52a0\u901a\u914d\u7b26\u8bc1\u4e66 *.example.com \u5219\u5fc5\u987b\u7528dns-01\u65b9\u5f0f\u83b7\u53d6\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003 Let\u2019s Encrypt \u8bf4\u660e ",(0,a.jsx)(n.a,{href:"https://letsencrypt.org/zh-cn/docs/faq/#let-s-encrypt-%E9%A2%81%E5%8F%91%E9%80%9A%E9%85%8D%E7%AC%A6%E8%AF%81%E4%B9%A6%E5%90%97",children:"\u9881\u53d1\u901a\u914d\u7b26\u8bc1\u4e66"})]}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: all-example-com-tls\n  namespace: istio-system\nspec:\n  secretName: all-example-com-tls\n  commonName: '*.example.com'\n  dnsNames:\n  - example.com\n  - '*.example.com'\n  issuerRef:\n    name: letsencrypt-cluster\n    kind: ClusterIssuer\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(n.p,{children:["\u3010Istio \u96c6\u6210 cert-manager\u3011",(0,a.jsx)(n.a,{href:"https://istio.io/latest/docs/ops/integrations/certmanager/",children:"https://istio.io/latest/docs/ops/integrations/certmanager/"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u3010Secret discovery service (SDS)\u3011",(0,a.jsx)(n.a,{href:"https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds",children:"https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u3010ACME DNS01\u3011",(0,a.jsx)(n.a,{href:"https://cert-manager.io/docs/configuration/acme/dns01/",children:"https://cert-manager.io/docs/configuration/acme/dns01/"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u3010helm \u5b89\u88c5 cert-manager\u6587\u6863\u3011",(0,a.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/helm/",children:"https://cert-manager.io/docs/installation/helm/"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6120:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var a=s(959);const t={},r=a.createContext(t);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);