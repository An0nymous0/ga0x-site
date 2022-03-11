"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2949],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],m={title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f"},l=void 0,s={unversionedId:"kubernetes/prometheus-k8s-monitor",id:"kubernetes/prometheus-k8s-monitor",title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",description:"\u73af\u5883",source:"@site/docs/kubernetes/prometheus-k8s-monitor.md",sourceDirName:"kubernetes",slug:"/kubernetes/prometheus-k8s-monitor",permalink:"/docs/kubernetes/prometheus-k8s-monitor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/prometheus-k8s-monitor.md",tags:[],version:"current",lastUpdatedAt:1646986307,formattedLastUpdatedAt:"3/11/2022",frontMatter:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aefCSS\u7c7b\u5e93",permalink:"/docs/front-end/css-class-library"}},p={},u=[{value:"\u73af\u5883",id:"\u73af\u5883",level:2},{value:"helm \u5b89\u88c5 kube-prometheus-stack",id:"helm-\u5b89\u88c5-kube-prometheus-stack",level:2},{value:"\u5305\u542b\u7ec4\u4ef6",id:"\u5305\u542b\u7ec4\u4ef6",level:3},{value:"\u6dfb\u52a0\u7b26\u5408 prometheus \u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\uff08\u4ee5 Java Spring Boot2 \u5e94\u7528\u793a\u4f8b\uff09",id:"\u6dfb\u52a0\u7b26\u5408-prometheus-\u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\u4ee5-java-spring-boot2-\u5e94\u7528\u793a\u4f8b",level:2},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",level:2},{value:"\u6536\u96c6\u6307\u6807",id:"\u6536\u96c6\u6307\u6807",level:2},{value:"Grafana",id:"grafana",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"Prometheus Push Gateway with Micrometer",id:"prometheus-push-gateway-with-micrometer",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:u};function d(e){var t=e.components,m=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,m,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"kubernetes"),(0,o.kt)("p",{parentName:"div"},"helm: 3"),(0,o.kt)("p",{parentName:"div"},"kube-prometheus-stack: \u96c6\u6210 Grafana \u5e76\u4e14\u7b26\u5408k8s\u7684 prometheus \u5806"),(0,o.kt)("p",{parentName:"div"},"spring boot: 2.5.5"),(0,o.kt)("p",{parentName:"div"},"java: 11"))),(0,o.kt)("h2",{id:"helm-\u5b89\u88c5-kube-prometheus-stack"},"helm \u5b89\u88c5 kube-prometheus-stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n# \u5b89\u88c5\u5728monitoring\u7a7a\u95f4\u4e0b \u8bb0\u5f97\u6539 [RELEASE_NAME]\nhelm install [RELEASE_NAME] -n monitoring prometheus-community/kube-prometheus-stack\n")),(0,o.kt)("h3",{id:"\u5305\u542b\u7ec4\u4ef6"},"\u5305\u542b\u7ec4\u4ef6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4ecb\u7ecd"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Prometheus Operator"),(0,o.kt)("td",{parentName:"tr",align:null},"Prometheus Operator \u63d0\u4f9bKubernetes\u539f\u751f\u90e8\u7f72\u548c\u7ba1\u7406 Prometheus\u53ca\u76f8\u5173\u76d1\u63a7\u7ec4\u4ef6\u3002\u8be5\u9879\u76ee\u7684\u76ee\u7684\u662f\u7b80\u5316\u548c\u81ea\u52a8\u5316\u57fa\u4e8e Prometheus \u7684 Kubernetes \u96c6\u7fa4\u76d1\u63a7\u5806\u6808\u7684\u914d\u7f6e\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u7684 Prometheus"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65f6\u5e8f\u6570\u636e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u7684 Alertmanager"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62a5\u8b66\u670d\u52a1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Prometheus node-exporter"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u6536\u96c6\u96c6\u7fa4\u4e3b\u673a\u5173\u952e\u6307\u6807")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Prometheus Adapter for Kubernetes Metrics APIs"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes \u8d44\u6e90\u6307\u6807\u3001 \u81ea\u5b9a\u4e49\u6307\u6807\u548c \u5916\u90e8\u6307\u6807API \u7684\u5b9e\u73b0\uff08\u9002\u7528\u4e8e k8s \u53d1\u73b0\u6ce8\u518c Prometheus \u7684\u5173\u952e\u5b9e\u73b0\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-state-metrics"),(0,o.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c Kubernetes API \u670d\u52a1\u5668\u5e76\u751f\u6210\u5173\u4e8e\u5bf9\u8c61\u72b6\u6001\u7684\u6307\u6807")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b3e\u5f00\u6e90\u6570\u636e\u53ef\u89c6\u5316\u9762\u677f\uff08\u76d1\u63a7\u548c\u6570\u636e\u7edf\u8ba1\uff09")))),(0,o.kt)("p",null,"\u8bbf\u95ee\u6211\u4eec\u521a\u90e8\u7f72\u7684\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n monitoring service/prometheus-kube-prometheus-prometheus 9090\nkubectl port-forward -n monitoring service/prometheus-grafana 8080:80\n")),(0,o.kt)("p",null,"\u6211\u4eec\u8bbf\u95ee Prometheus UI \u548c Grafana UI\u3002\u5206\u522b\u8bbf\u95eehttp://localhost:9090\u3001http://locahost:8080\u3002grafana \u7684\u51ed\u636e\u662fusername: admin& password: prom-operator\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u4ece k8s secrets \u4e2d\u83b7\u53d6\u5bc6\u7801\u6216\u8005\u5b89\u88c5\u65f6\u6307\u5b9a helm\u7684values\u53d8\u91cf\u6765\u81ea\u5b9a\u4e49\u5bc6\u7801\u3002"),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u7b26\u5408-prometheus-\u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\u4ee5-java-spring-boot2-\u5e94\u7528\u793a\u4f8b"},"\u6dfb\u52a0\u7b26\u5408 prometheus \u683c\u5f0f\u8f93\u51fa\u7684\u6307\u6807\uff08\u4ee5 Java Spring Boot2 \u5e94\u7528\u793a\u4f8b\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-actuator'\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n\n    implementation 'io.micrometer:micrometer-registry-prometheus'\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n  metrics:\n    tags:\n      application: ${spring.application.name}\n    enable:\n      all: true\n")),(0,o.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u5e94\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"/actuator/metrics"),"\u5730\u5740\u65f6\u6211\u4eec\u4f1a\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," \u683c\u5f0f\u7684\u6307\u6807\u4ee3\u8868\u914d\u7f6e\u6210\u529f\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("inlineCode",{parentName:"p"}," <metric name>{<label name>=<label value>, ...} <metric_value>")," ")),(0,o.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e3a\u7b80\u5316\u7248\u672c\uff0c\u751f\u4ea7\u73af\u5883\u80af\u5b9a\u4e0d\u6b62\u5982\u6b64\uff0c\u8bf7\u5927\u5bb6\u6839\u636e\u81ea\u5df1\u7684\u670d\u52a1\u5fae\u8c03"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deployment.yaml"',title:'"deployment.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: spring-boot-monitor-demo-v1\n  namespace: prod\n  labels:\n    app: spring-boot-monitor-demo\n    version: v1\nspec:\n  selector:\n    matchLabels:\n      app: spring-boot-monitor-demo\n      version: v1\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: spring-boot-monitor-demo\n        version: v1\n    spec:\n      containers:\n        - name: spring-boot-monitor-demo\n          image: demo/spring-boot-monitor-demo:v1.0\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 8080\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="service.yaml"',title:'"service.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: spring-boot-monitor-demo\n  namespace: prod\n  labels:\n    app: spring-boot-monitor-demo\n    service: spring-boot-monitor-demo\n    monitor: prometheus # \u5173\u952e\uff5e\uff5e\uff5e\nspec:\n  selector:\n    app: spring-boot-monitor-demo\n  ports:\n    - protocol: TCP\n      port: 8080\n      targetPort: 8080\n      name: http \n")),(0,o.kt)("h2",{id:"\u6536\u96c6\u6307\u6807"},"\u6536\u96c6\u6307\u6807"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b64\u5904\u4e3a\u6838\u5fc3\u90e8\u5206\uff0c\u6765\u544a\u8bc9 prometheus \u6355\u6349\u6211\u4eec\u5e94\u7528\u7a0b\u5e8f ",(0,o.kt)("inlineCode",{parentName:"p"},"/actuator/prometheus")," \u7684\u5173\u952e\u6307\u6807"))),(0,o.kt)("p",null,"prometheus \u5806\u6808\u7684 helm \u5b89\u88c5\u521b\u5efa\u4e86\u4e00\u4e9b CRD\u3002\u5176\u4e2d\u4e4b\u4e00\u662f\u670d\u52a1\u76d1\u89c6\u5668(\u4e0a\u9762\u4ecb\u7ecd\u5230\u7684Prometheus Adapter for Kubernetes Metrics APIs)\u3002\u670d\u52a1\u76d1\u89c6\u5668\u662f\u6211\u4eec\u58f0\u660e\u4ece\u54ea\u4e2a\u670d\u52a1\u6293\u53d6\u6307\u6807\u548c\u95f4\u9694\u7684\u5730\u65b9\u3002\u4e0e\u5176\u4ed6 k8s \u8d44\u6e90\u4e00\u6837\uff0c\u5b83\u4e5f\u9002\u7528\u4e8e\u5339\u914d\u6807\u7b7e\u3002\n\u4e00\u4ef6\u91cd\u8981\u7684\u4e8b\u60c5\u662f\u76d1\u63a7\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 prometheus \u5bf9\u8c61\u5728\u6211\u4eec\u62e5\u6709\u6807\u7b7e\u4e4b\u524d\u4e0d\u4f1a\u77e5\u9053\u8fd9\u4e2a\u670d\u52a1\u76d1\u89c6\u5668 release: prometheus\u3002\u5982\u679c\u6211\u4eec\u63cf\u8ff0prometheus resource\u3002kubectl describe prometheuses.monitoring.coreos.com -n monitoring\u6211\u4eec\u4f1a\u53d1\u73b0\u5b83\u4e0e\u6b64\u6807\u7b7e\u4e0a\u7684\u670d\u52a1\u76d1\u89c6\u5668\u76f8\u5339\u914d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  Service Monitor Selector:\n    Match Labels:\n      Release:  prometheus\n")),(0,o.kt)("p",null,"\u5728monitoring\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4ee5\u4e0b\u670d\u52a1\u76d1\u63a7\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# spring boot \u6807\u51c6\u901a\u7528\u76d1\u63a7\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: spring-boot-common\n  namespace: monitoring # namespace\u56fa\u5b9a\uff0c\u4e0d\u8981\u4fee\u6539\n  labels:\n    release: prometheus\nspec:\n  endpoints:\n    - interval: 30s\n      port: http\n      path: /actuator/prometheus  # \u586b\u5199Prometheus Exporter\u5bf9\u5e94\u7684Path\u7684\u503c\uff0c\u4e0d\u586b\u9ed8\u8ba4/metrics\n  namespaceSelector:  # \u9009\u62e9\u8981\u76d1\u63a7service\u6240\u5728\u7684namespace\n    matchNames:\n      - prod\n  selector: # \u586b\u5199\u8981\u76d1\u63a7service\u7684Label\u503c\uff0c\u4ee5\u5b9a\u4f4d\u76ee\u6807service\n    matchLabels:\n      monitor: prometheus\n")),(0,o.kt)("p",null,"\u5728prometheus\u63a7\u5236\u53f0\u670d\u52a1\u53d1\u73b0\u4e2d\uff0c\u6211\u4eec\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684\u76ee\u6807\u670d\u52a1spring-boot-monitor-demo(\u5982\u679cDeployment\u4e2d\u914d\u7f6e\u591a\u4e2a\u5b9e\u4f8b\u540c\u6837\u4f1a\u6709\u591a\u884c\u4fe1\u606f\u5c55\u793a)\n",(0,o.kt)("img",{loading:"lazy",alt:"prometheus-k8s-monitor-1.png",src:n(2314).Z,width:"1207",height:"246"})),(0,o.kt)("h2",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"\u5728Grafana UI\u4e2d\u6dfb\u52a0 Dashboards \u6a21\u677fID\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/4701"},"4701")," \u67e5\u770b\u6211\u4eec\u7684\u6210\u679c\u3002\n",(0,o.kt)("img",{loading:"lazy",alt:"prometheus-k8s-monitor-1.png",src:n(4094).Z,width:"1365",height:"656"})),(0,o.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,o.kt)("h3",{id:"prometheus-push-gateway-with-micrometer"},"Prometheus Push Gateway with Micrometer"),(0,o.kt)("p",null,"\u9664\u672c\u6587\u65b9\u6cd5\u4e4b\u5916\u8fd8\u6709\u53e6\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u628a\u5173\u952e\u6307\u6807\u63a8\u9001\u7ed9Prometheus\uff0c\u4e0d\u8fc7\u4e0d\u5efa\u8bae ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/pushing/#should-i-be-using-the-pushgateway"},"\u539f\u56e0\u53c2\u8003")),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://iamonkar.dev/prometheus-k8s/"},"Monitoring applications in K8s with Prometheus")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/1416/56031"},"Prometheus \u76d1\u63a7\u670d\u52a1 - Spring Boot \u63a5\u5165")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://micrometer.io/docs"},"micrometer\u5b98\u65b9\u6587\u6863")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://dbaplus.cn/news-134-3247-1.html"},"micrometer\u5b98\u65b9\u6587\u6863"))))}d.isMDXComponent=!0},2314:function(e,t,n){t.Z=n.p+"assets/images/prometheus-k8s-monitor-1-81d635860d0907299e05d432e20fba60.png"},4094:function(e,t,n){t.Z=n.p+"assets/images/prometheus-k8s-monitor-2-0eb240cbcd459ebd180e993f841ce5cf.png"}}]);