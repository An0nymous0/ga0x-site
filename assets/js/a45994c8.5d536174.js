"use strict";(self.webpackChunkga0x_site=self.webpackChunkga0x_site||[]).push([[7949],{410:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=t(1527),s=t(6120);const n={title:"helm prometheus-operator ServiceMonitor \u548c PodMonitor \u4e0d\u80fd\u5728\u5176\u4ed6\u540d\u79f0\u7a7a\u95f4\u4e2d\u5de5\u4f5c",authors:"gaoxu",tags:["Kubernetes","Helm","Prometheus Operator"]},i=void 0,l={permalink:"/blog/2024/04/04/helm-prometheus-operator-servicemonitor-podmonitor-not-work",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2024-04-04-helm-prometheus-operator-servicemonitor-podmonitor-not-work.md",source:"@site/blog/2024-04-04-helm-prometheus-operator-servicemonitor-podmonitor-not-work.md",title:"helm prometheus-operator ServiceMonitor \u548c PodMonitor \u4e0d\u80fd\u5728\u5176\u4ed6\u540d\u79f0\u7a7a\u95f4\u4e2d\u5de5\u4f5c",description:"prometheus \u64cd\u4f5c\u5458\u4e0d\u652f\u6301\u57fa\u4e8e\u6ce8\u91ca\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u800c\u662f\u4f7f\u7528PodMonitor\u6216ServiceMonitorCRD \u6765\u4ee3\u66ff\uff0c\u56e0\u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u914d\u7f6e\u9009\u9879\u3002\u6709\u5173\u5982\u4f55\u4f7f\u7528PodMonitors/ServiceMonitors\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605prometheus-operator/prometheus-operator\u6b64\u5904\u6587\u6863\u7684\u8bf4\u660e\uff1a",date:"2024-04-04T00:00:00.000Z",formattedDate:"2024\u5e744\u67084\u65e5",tags:[{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Helm",permalink:"/blog/tags/helm"},{label:"Prometheus Operator",permalink:"/blog/tags/prometheus-operator"}],readingTime:.76,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"helm prometheus-operator ServiceMonitor \u548c PodMonitor \u4e0d\u80fd\u5728\u5176\u4ed6\u540d\u79f0\u7a7a\u95f4\u4e2d\u5de5\u4f5c",authors:"gaoxu",tags:["Kubernetes","Helm","Prometheus Operator"]},unlisted:!1,nextItem:{title:"Kubernetes \u96c6\u7fa4\u5bb9\u5668\u5185\u8bbf\u95ee\u57df\u540d\u7684 \u5bf9\u5e94\u7684EXTERNAL-IP \u4e0d\u901a\u95ee\u9898",permalink:"/blog/2023/12/18/kubernetes-domain-accesses-externalip-error"}},a={authorsImageUrls:[void 0]},m=[{value:"helm -f values.yaml \u589e\u52a0\u4e0b\u9762\u914d\u7f6e",id:"helm--f-valuesyaml-\u589e\u52a0\u4e0b\u9762\u914d\u7f6e",level:2},{value:"helm --set",id:"helm---set",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["prometheus \u64cd\u4f5c\u5458\u4e0d\u652f\u6301\u57fa\u4e8e\u6ce8\u91ca\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u800c\u662f\u4f7f\u7528",(0,r.jsx)(o.code,{children:"PodMonitor"}),"\u6216",(0,r.jsx)(o.code,{children:"ServiceMonitor"}),"CRD \u6765\u4ee3\u66ff\uff0c\u56e0\u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u914d\u7f6e\u9009\u9879\u3002\u6709\u5173\u5982\u4f55\u4f7f\u7528PodMonitors/ServiceMonitors\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(o.code,{children:"prometheus-operator/prometheus-operator"}),"\u6b64\u5904\u6587\u6863\u7684\u8bf4\u660e\uff1a"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md#include-servicemonitors",children:"\u670d\u52a1\u76d1\u63a7\u5668"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md#include-podmonitors",children:"Pod \u76d1\u89c6\u5668"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/running-exporters.md",children:"\u8fd0\u884c\u51fa\u53e3\u5546"})}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cPrometheus \u4f1a\u5728\u5176\u547d\u540d\u7a7a\u95f4\u5185\u53d1\u73b0 PodMonitors \u548c ServiceMonitors\uff0c\u5b83\u4eec\u7684\u53d1\u5e03\u6807\u7b7e\u4e0e prometheus-operator \u7248\u672c\u76f8\u540c\u3002\u6709\u65f6\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u53d1\u73b0\u81ea\u5b9a\u4e49 PodMonitors/ServiceMonitors\uff0c\u4f8b\u5982\u7528\u4e8e\u4ece\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6293\u53d6\u6570\u636e\u3002\u5728\u4e0d\u5f71\u54cd\u9ed8\u8ba4 PodMonitors/ServiceMonitors \u53d1\u73b0\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5141\u8bb8 Prometheus \u53d1\u73b0\u5176\u547d\u540d\u7a7a\u95f4\u5185\u7684\u6240\u6709 PodMonitors/ServiceMonitors\uff0c\u800c\u4e0d\u5e94\u7528\u6807\u7b7e\u8fc7\u6ee4\u3002\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u5c06",(0,r.jsx)(o.code,{children:"prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues"}),"\u548c\u8bbe\u7f6e",(0,r.jsx)(o.code,{children:"prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues"}),"\u4e3a",(0,r.jsx)(o.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsx)(o.h2,{id:"helm--f-valuesyaml-\u589e\u52a0\u4e0b\u9762\u914d\u7f6e",children:"helm -f values.yaml \u589e\u52a0\u4e0b\u9762\u914d\u7f6e"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"prometheus:\n  prometheusSpec: \n    podMonitorSelectorNilUsesHelmValues: false\n    serviceMonitorSelectorNilUsesHelmValues: false\n"})}),"\n",(0,r.jsx)(o.h2,{id:"helm---set",children:"helm --set"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"helm --set prometheus.prometheusSpec.podMonitorSelectorNilUsesHelmValues=false --set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false\n"})})]})}function c(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6120:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>i});var r=t(959);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);