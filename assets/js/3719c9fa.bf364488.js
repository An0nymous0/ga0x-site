"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2949],{224:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2374);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=n(6252),a=(n(2374),n(224));const o={title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f"},l=void 0,m={unversionedId:"kubernetes/prometheus-k8s-monitor",id:"kubernetes/prometheus-k8s-monitor",title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",description:"\u73af\u5883",source:"@site/docs/kubernetes/prometheus-k8s-monitor.md",sourceDirName:"kubernetes",slug:"/kubernetes/prometheus-k8s-monitor",permalink:"/docs/kubernetes/prometheus-k8s-monitor",draft:!1,editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/docs/kubernetes/prometheus-k8s-monitor.md",tags:[],version:"current",lastUpdatedAt:1663755618,formattedLastUpdatedAt:"2022\u5e749\u670821\u65e5",frontMatter:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1",permalink:"/docs/kubernetes/local-debugging"}},i={},p=[{value:"\u73af\u5883",id:"\u73af\u5883",level:2},{value:"helm \u5b89\u88c5 kube-prometheus-stack",id:"helm-\u5b89\u88c5-kube-prometheus-stack",level:2},{value:"\u5305\u542b\u7ec4\u4ef6",id:"\u5305\u542b\u7ec4\u4ef6",level:3},{value:"\u6dfb\u52a0\u7b26\u5408 prometheus \u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\uff08\u4ee5 Java Spring Boot2 \u5e94\u7528\u793a\u4f8b\uff09",id:"\u6dfb\u52a0\u7b26\u5408-prometheus-\u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\u4ee5-java-spring-boot2-\u5e94\u7528\u793a\u4f8b",level:2},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",level:2},{value:"\u6536\u96c6\u6307\u6807",id:"\u6536\u96c6\u6307\u6807",level:2},{value:"Grafana",id:"grafana",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"Prometheus Push Gateway with Micrometer",id:"prometheus-push-gateway-with-micrometer",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"kubernetes"),(0,a.kt)("p",{parentName:"admonition"},"helm: 3"),(0,a.kt)("p",{parentName:"admonition"},"kube-prometheus-stack: \u96c6\u6210 Grafana \u5e76\u4e14\u7b26\u5408k8s\u7684 prometheus \u5806"),(0,a.kt)("p",{parentName:"admonition"},"spring boot: 2.5.5"),(0,a.kt)("p",{parentName:"admonition"},"java: 11")),(0,a.kt)("h2",{id:"helm-\u5b89\u88c5-kube-prometheus-stack"},"helm \u5b89\u88c5 kube-prometheus-stack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n# \u5b89\u88c5\u5728monitoring\u7a7a\u95f4\u4e0b \u8bb0\u5f97\u6539 [RELEASE_NAME]\nhelm install [RELEASE_NAME] -n monitoring prometheus-community/kube-prometheus-stack\n")),(0,a.kt)("h3",{id:"\u5305\u542b\u7ec4\u4ef6"},"\u5305\u542b\u7ec4\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4ecb\u7ecd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus Operator \u63d0\u4f9bKubernetes\u539f\u751f\u90e8\u7f72\u548c\u7ba1\u7406 Prometheus\u53ca\u76f8\u5173\u76d1\u63a7\u7ec4\u4ef6\u3002\u8be5\u9879\u76ee\u7684\u76ee\u7684\u662f\u7b80\u5316\u548c\u81ea\u52a8\u5316\u57fa\u4e8e Prometheus \u7684 Kubernetes \u96c6\u7fa4\u76d1\u63a7\u5806\u6808\u7684\u914d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u7684 Prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65f6\u5e8f\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u7684 Alertmanager"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus node-exporter"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u6536\u96c6\u96c6\u7fa4\u4e3b\u673a\u5173\u952e\u6307\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus Adapter for Kubernetes Metrics APIs"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes \u8d44\u6e90\u6307\u6807\u3001 \u81ea\u5b9a\u4e49\u6307\u6807\u548c \u5916\u90e8\u6307\u6807API \u7684\u5b9e\u73b0\uff08\u9002\u7528\u4e8e k8s \u53d1\u73b0\u6ce8\u518c Prometheus \u7684\u5173\u952e\u5b9e\u73b0\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-state-metrics"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c Kubernetes API \u670d\u52a1\u5668\u5e76\u751f\u6210\u5173\u4e8e\u5bf9\u8c61\u72b6\u6001\u7684\u6307\u6807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b3e\u5f00\u6e90\u6570\u636e\u53ef\u89c6\u5316\u9762\u677f\uff08\u76d1\u63a7\u548c\u6570\u636e\u7edf\u8ba1\uff09")))),(0,a.kt)("p",null,"\u8bbf\u95ee\u6211\u4eec\u521a\u90e8\u7f72\u7684\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n monitoring service/prometheus-kube-prometheus-prometheus 9090\nkubectl port-forward -n monitoring service/prometheus-grafana 8080:80\n")),(0,a.kt)("p",null,"\u6211\u4eec\u8bbf\u95ee Prometheus UI \u548c Grafana UI\u3002\u5206\u522b\u8bbf\u95eehttp://localhost:9090\u3001http://locahost:8080\u3002grafana \u7684\u51ed\u636e\u662fusername: admin& password: prom-operator\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u4ece k8s secrets \u4e2d\u83b7\u53d6\u5bc6\u7801\u6216\u8005\u5b89\u88c5\u65f6\u6307\u5b9a helm\u7684values\u53d8\u91cf\u6765\u81ea\u5b9a\u4e49\u5bc6\u7801\u3002"),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u7b26\u5408-prometheus-\u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\u4ee5-java-spring-boot2-\u5e94\u7528\u793a\u4f8b"},"\u6dfb\u52a0\u7b26\u5408 prometheus \u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\uff08\u4ee5 Java Spring Boot2 \u5e94\u7528\u793a\u4f8b\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-actuator'\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n\n    implementation 'io.micrometer:micrometer-registry-prometheus'\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n  metrics:\n    tags:\n      application: ${spring.application.name}\n    enable:\n      all: true\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u5e94\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/metrics"),"\u5730\u5740\u65f6\u6211\u4eec\u4f1a\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u683c\u5f0f\u7684\u6307\u6807\u4ee3\u8868\u914d\u7f6e\u6210\u529f\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," ",(0,a.kt)("inlineCode",{parentName:"p"}," <metric name>{<label name>=<label value>, ...} <metric_value>")," ")),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e3a\u7b80\u5316\u7248\u672c\uff0c\u751f\u4ea7\u73af\u5883\u80af\u5b9a\u4e0d\u6b62\u5982\u6b64\uff0c\u8bf7\u5927\u5bb6\u6839\u636e\u81ea\u5df1\u7684\u670d\u52a1\u5fae\u8c03")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deployment.yaml"',title:'"deployment.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: spring-boot-monitor-demo-v1\n  namespace: prod\n  labels:\n    app: spring-boot-monitor-demo\n    version: v1\nspec:\n  selector:\n    matchLabels:\n      app: spring-boot-monitor-demo\n      version: v1\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: spring-boot-monitor-demo\n        version: v1\n    spec:\n      containers:\n        - name: spring-boot-monitor-demo\n          image: demo/spring-boot-monitor-demo:v1.0\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 8080\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="service.yaml"',title:'"service.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: spring-boot-monitor-demo\n  namespace: prod\n  labels:\n    app: spring-boot-monitor-demo\n    service: spring-boot-monitor-demo\n    monitor: prometheus # \u5173\u952e\uff5e\uff5e\uff5e\nspec:\n  selector:\n    app: spring-boot-monitor-demo\n  ports:\n    - protocol: TCP\n      port: 8080\n      targetPort: 8080\n      name: http \n")),(0,a.kt)("h2",{id:"\u6536\u96c6\u6307\u6807"},"\u6536\u96c6\u6307\u6807"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u4e3a\u6838\u5fc3\u90e8\u5206\uff0c\u6765\u544a\u8bc9 prometheus \u6355\u6349\u6211\u4eec\u5e94\u7528\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/prometheus")," \u7684\u5173\u952e\u6307\u6807")),(0,a.kt)("p",null,"prometheus \u5806\u6808\u7684 helm \u5b89\u88c5\u521b\u5efa\u4e86\u4e00\u4e9b CRD\u3002\u5176\u4e2d\u4e4b\u4e00\u662f\u670d\u52a1\u76d1\u89c6\u5668(\u4e0a\u9762\u4ecb\u7ecd\u5230\u7684Prometheus Adapter for Kubernetes Metrics APIs)\u3002\u670d\u52a1\u76d1\u89c6\u5668\u662f\u6211\u4eec\u58f0\u660e\u4ece\u54ea\u4e2a\u670d\u52a1\u6293\u53d6\u6307\u6807\u548c\u95f4\u9694\u7684\u5730\u65b9\u3002\u4e0e\u5176\u4ed6 k8s \u8d44\u6e90\u4e00\u6837\uff0c\u5b83\u4e5f\u9002\u7528\u4e8e\u5339\u914d\u6807\u7b7e\u3002\n\u4e00\u4ef6\u91cd\u8981\u7684\u4e8b\u60c5\u662f\u76d1\u63a7\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 prometheus \u5bf9\u8c61\u5728\u6211\u4eec\u62e5\u6709\u6807\u7b7e\u4e4b\u524d\u4e0d\u4f1a\u77e5\u9053\u8fd9\u4e2a\u670d\u52a1\u76d1\u89c6\u5668 release: prometheus\u3002\u5982\u679c\u6211\u4eec\u63cf\u8ff0prometheus resource\u3002kubectl describe prometheuses.monitoring.coreos.com -n monitoring\u6211\u4eec\u4f1a\u53d1\u73b0\u5b83\u4e0e\u6b64\u6807\u7b7e\u4e0a\u7684\u670d\u52a1\u76d1\u89c6\u5668\u76f8\u5339\u914d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  Service Monitor Selector:\n    Match Labels:\n      Release:  prometheus\n")),(0,a.kt)("p",null,"\u5728monitoring\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4ee5\u4e0b\u670d\u52a1\u76d1\u63a7\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# spring boot \u6807\u51c6\u901a\u7528\u76d1\u63a7\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: spring-boot-common\n  namespace: monitoring # namespace\u56fa\u5b9a\uff0c\u4e0d\u8981\u4fee\u6539\n  labels:\n    release: prometheus\nspec:\n  endpoints:\n    - interval: 30s\n      port: http\n      path: /actuator/prometheus  # \u586b\u5199Prometheus Exporter\u5bf9\u5e94\u7684Path\u7684\u503c\uff0c\u4e0d\u586b\u9ed8\u8ba4/metrics\n  namespaceSelector:  # \u9009\u62e9\u8981\u76d1\u63a7service\u6240\u5728\u7684namespace\n    matchNames:\n      - prod\n  selector: # \u586b\u5199\u8981\u76d1\u63a7service\u7684Label\u503c\uff0c\u4ee5\u5b9a\u4f4d\u76ee\u6807service\n    matchLabels:\n      monitor: prometheus\n")),(0,a.kt)("p",null,"\u5728prometheus\u63a7\u5236\u53f0\u670d\u52a1\u53d1\u73b0\u4e2d\uff0c\u6211\u4eec\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684\u76ee\u6807\u670d\u52a1spring-boot-monitor-demo(\u5982\u679cDeployment\u4e2d\u914d\u7f6e\u591a\u4e2a\u5b9e\u4f8b\u540c\u6837\u4f1a\u6709\u591a\u884c\u4fe1\u606f\u5c55\u793a)\n",(0,a.kt)("img",{alt:"prometheus-k8s-monitor-1.png",src:n(1252).Z,width:"1207",height:"246"})),(0,a.kt)("h2",{id:"grafana"},"Grafana"),(0,a.kt)("p",null,"\u5728Grafana UI\u4e2d\u6dfb\u52a0 Dashboards \u6a21\u677fID\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/4701"},"4701")," \u67e5\u770b\u6211\u4eec\u7684\u6210\u679c\u3002\n",(0,a.kt)("img",{alt:"prometheus-k8s-monitor-1.png",src:n(7620).Z,width:"1365",height:"656"})),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("h3",{id:"prometheus-push-gateway-with-micrometer"},"Prometheus Push Gateway with Micrometer"),(0,a.kt)("p",null,"\u9664\u672c\u6587\u65b9\u6cd5\u4e4b\u5916\u8fd8\u6709\u53e6\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u628a\u5173\u952e\u6307\u6807\u63a8\u9001\u7ed9Prometheus\uff0c\u4e0d\u8fc7\u4e0d\u5efa\u8bae ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/pushing/#should-i-be-using-the-pushgateway"},"\u539f\u56e0\u53c2\u8003")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://iamonkar.dev/prometheus-k8s/"},"Monitoring applications in K8s with Prometheus")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/1416/56031"},"Prometheus \u76d1\u63a7\u670d\u52a1 - Spring Boot \u63a5\u5165")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://micrometer.io/docs"},"micrometer\u5b98\u65b9\u6587\u6863")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://dbaplus.cn/news-134-3247-1.html"},"micrometer\u5b98\u65b9\u6587\u6863"))))}u.isMDXComponent=!0},1252:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-k8s-monitor-1-81d635860d0907299e05d432e20fba60.png"},7620:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-k8s-monitor-2-0eb240cbcd459ebd180e993f841ce5cf.png"}}]);