"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5428],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?l.createElement(k,o(o({ref:t},s),{},{components:n})):l.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(6010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(3117),a=n(7294),r=n(6010),o=n(1048),c=n(3609),i=n(1943),u=n(2957),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,k=e.values,b=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.l)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),y=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,a.useState)(N),_=T[0],C=T[1],I=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var M=y[b];null!=M&&M!==_&&f.some((function(e){return e.value===M}))&&C(M)}var P=function(e){var t=e.currentTarget,n=I.indexOf(t),l=f[n].value;l!==_&&(O(t),C(l),null!=b&&x(b,String(l)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l,a=I.indexOf(e.currentTarget)+1;n=null!=(l=I[a])?l:I[0];break;case"ArrowLeft":var r,o=I.indexOf(e.currentTarget)-1;n=null!=(r=I[o])?r:I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:P,onClick:P},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,l.Z)({key:String(t)},e))}},6814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var l=n(3117),a=n(102),r=(n(7294),n(4137)),o=n(4259),c=n(425),i=["components"],u={title:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1",sidebar_label:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1"},s=void 0,p={unversionedId:"kubernetes/local-debugging",id:"kubernetes/local-debugging",title:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1",description:"Kubernetes \u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u7531\u591a\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\u7ec4\u6210\uff0c\u6bcf\u4e2a\u670d\u52a1\u90fd\u5728\u81ea\u5df1\u7684\u5bb9\u5668\u4e2d\u8fd0\u884c\u3002 \u5728\u8fdc\u7aef\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5f00\u53d1\u548c\u8c03\u8bd5\u8fd9\u4e9b\u670d\u52a1\u53ef\u80fd\u5f88\u9ebb\u70e6 \u6bd4\u5982\u4e91\u539f\u751f\u5fae\u670d\u52a1Istio\u3001Spring Cloud\u7b49\uff0c \u9700\u8981\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e0a\u6253\u5f00 Shell\uff0c \u4ee5\u8fd0\u884c\u8c03\u8bd5\u5de5\u5177\u3002",source:"@site/docs/kubernetes/local-debugging.mdx",sourceDirName:"kubernetes",slug:"/kubernetes/local-debugging",permalink:"/docs/kubernetes/local-debugging",draft:!1,editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/docs/kubernetes/local-debugging.mdx",tags:[],version:"current",lastUpdatedAt:1656660915,formattedLastUpdatedAt:"2022/7/1",frontMatter:{title:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1",sidebar_label:"kubernetes \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aefCSS\u7c7b\u5e93",permalink:"/docs/front-end/css-class-library"},next:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 K8s \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f",permalink:"/docs/kubernetes/prometheus-k8s-monitor"}},d={},m=[{value:"telepresence",id:"telepresence",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u8fde\u63a5\u96c6\u7fa4",id:"\u8fde\u63a5\u96c6\u7fa4",level:4},{value:"\u62e6\u622a\u670d\u52a1\u5217\u8868",id:"\u62e6\u622a\u670d\u52a1\u5217\u8868",level:4},{value:"\u62e6\u622a\u6307\u5b9a\u670d\u52a1",id:"\u62e6\u622a\u6307\u5b9a\u670d\u52a1",level:4},{value:"Telepresence \u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"telepresence-\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:3},{value:"Telepresence \u5b98\u65b9\u7f51\u7ad9",id:"telepresence-\u5b98\u65b9\u7f51\u7ad9",level:3},{value:"\u53c2\u8003\u7f51\u7ad9",id:"\u53c2\u8003\u7f51\u7ad9",level:3},{value:"kt-connect",id:"kt-connect",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-1",level:3},{value:"\u8fde\u63a5\u96c6\u7fa4",id:"\u8fde\u63a5\u96c6\u7fa4-1",level:4},{value:"\u5c06\u96c6\u7fa4\u6d41\u91cf\u8f6c\u53d1\u5230\u672c\u5730",id:"\u5c06\u96c6\u7fa4\u6d41\u91cf\u8f6c\u53d1\u5230\u672c\u5730",level:4},{value:"\u5b98\u65b9\u7f51\u7ad9",id:"\u5b98\u65b9\u7f51\u7ad9",level:3}],k={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kubernetes \u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u7531\u591a\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\u7ec4\u6210\uff0c\u6bcf\u4e2a\u670d\u52a1\u90fd\u5728\u81ea\u5df1\u7684\u5bb9\u5668\u4e2d\u8fd0\u884c\u3002 \u5728\u8fdc\u7aef\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5f00\u53d1\u548c\u8c03\u8bd5\u8fd9\u4e9b\u670d\u52a1\u53ef\u80fd\u5f88\u9ebb\u70e6 \u6bd4\u5982\u4e91\u539f\u751f\u5fae\u670d\u52a1Istio\u3001Spring Cloud\u7b49\uff0c \u9700\u8981\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e0a\u6253\u5f00 Shell\uff0c \u4ee5\u8fd0\u884c\u8c03\u8bd5\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u4e24\u6b3e\u5f00\u6e90\u5de5\u5177"),(0,r.kt)("h2",{id:"telepresence"},"telepresence"),(0,r.kt)("p",null,"Telepresence \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\u6c99\u76d2\u9879\u76ee\uff0c\u662f kubernetes \u548c openshift \u5fae\u670d\u52a1\u7684\u5feb\u901f\u672c\u5730\u5f00\u53d1\u5de5\u5177"),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"1",label:"GNU-Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. Download the latest binary (~50 MB):\nsudo curl -fL https://app.getambassador.io/download/tel2/linux/amd64/latest/telepresence -o /usr/local/bin/telepresence\n\n# 2. Make the binary executable:\nsudo chmod a+x /usr/local/bin/telepresence\n"))),(0,r.kt)(c.Z,{value:"2",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Intel Macs\n\n# Install via brew:\nbrew install datawire/blackbird/telepresence\n\n# OR install manually:\n# 1. Download the latest binary (~60 MB):\nsudo curl -fL https://app.getambassador.io/download/tel2/darwin/amd64/latest/telepresence -o /usr/local/bin/telepresence\n\n# 2. Make the binary executable:\nsudo chmod a+x /usr/local/bin/telepresence\n\n# Apple silicon Macs\n\n# Install via brew:\nbrew install datawire/blackbird/telepresence-arm64\n\n# OR Install manually:\n# 1. Download the latest binary (~60 MB):\nsudo curl -fL https://app.getambassador.io/download/tel2/darwin/arm64/latest/telepresence -o /usr/local/bin/telepresence\n\n# 2. Make the binary executable:\nsudo chmod a+x /usr/local/bin/telepresence\n"))),(0,r.kt)(c.Z,{value:"3",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Windows is in Developer Preview, here is how you can install it:\n# Make sure you run the following from Powershell as Administrator\n# 1. Download the latest windows zip containing telepresence.exe and its dependencies (~50 MB):\ncurl -fL https://app.getambassador.io/download/tel2/windows/amd64/latest/telepresence.zip -o telepresence.zip\n\n# 2. Unzip the zip file to a suitable directory + cleanup zip\nExpand-Archive -Path telepresence.zip\nRemove-Item 'telepresence.zip'\ncd telepresence\n\n# 3. Run the install-telepresence.ps1 to install telepresence's dependencies. It will install telepresence to\n# C:\\telepresence by default, but you can specify a custom path $path with -Path $path\nSet-ExecutionPolicy Bypass -Scope Process\n.\\install-telepresence.ps1\n\n# 4. Remove the unzipped directory\ncd ..\nRemove-Item telepresence\n# 5. Close your current Powershell and open a new one. Telepresence should now be usable as telepresence.exe\n")))),(0,r.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("h4",{id:"\u8fde\u63a5\u96c6\u7fa4"},"\u8fde\u63a5\u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"telepresence connect\n")),(0,r.kt)("p",null,"\u60a8\u73b0\u5728\u53ef\u4ee5\u8bbf\u95ee\u8fdc\u7a0b Kubernetes API \u670d\u52a1\u5668\uff0c\u5c31\u597d\u50cf\u60a8\u5728\u540c\u4e00\u4e2a\u7f51\u7edc\u4e0a\u4e00\u6837\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u672c\u5730\u5de5\u5177\u8fde\u63a5\u5230\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u670d\u52a1\u3002"),(0,r.kt)("h4",{id:"\u62e6\u622a\u670d\u52a1\u5217\u8868"},"\u62e6\u622a\u670d\u52a1\u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"telepresence list\n")),(0,r.kt)("h4",{id:"\u62e6\u622a\u6307\u5b9a\u670d\u52a1"},"\u62e6\u622a\u6307\u5b9a\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"telepresence intercept <service-name> --port <local-port>[:<remote-port>] --env-file <path-to-env-file>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"--port"),": \u6307\u5b9a\u670d\u52a1\u7684\u672c\u5730\u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\u7684\u7aef\u53e3\u3002\u5982\u679c\u88ab\u62e6\u622a\u7684\u670d\u52a1\u66b4\u9732\u4e86\u591a\u4e2a\u7aef\u53e3\uff0c\u5728\u5192\u53f7\u540e\u6307\u5b9a\u8981\u62e6\u622a\u7684\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"--env-file"),": \u6307\u5b9a Telepresence \u7684\u6587\u4ef6\u8def\u5f84\u4ee5\u5199\u5165\u5728 pod \u4e2d\u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u663e\u793a Telepresence \u62e6\u622a\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"example-service")," \u670d\u52a1\u7684\u6d41\u91cf\u3002\u8bf7\u6c42\u73b0\u5728\u5230\u8fbe\u96c6\u7fa4\u4e2d\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," \u4e0a\u7684\u670d\u52a1\uff0c\u88ab\u8def\u7531\u5230\u5de5\u4f5c\u7ad9\u4e0a\u7684 8080\uff0c\u5e76\u5c06\u670d\u52a1\u7684\u73af\u5883\u53d8\u91cf\u5199\u5165 ~/example-service-intercept.env\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"telepresence intercept example-service --port 8080:http --env-file ~/example-service-intercept.env\n\n# Using Deployment example-service\n# intercepted\n# Intercept name: example-service\n# State         : ACTIVE\n# Workload kind : Deployment\n# Destination   : 127.0.0.1:8080\n# Intercepting  : all TCP connections\n")),(0,r.kt)("h3",{id:"telepresence-\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"Telepresence \u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,r.kt)("p",null,"Telepresence \u4f1a\u5728\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\u65c1\u8fb9\u5b89\u88c5\u6d41\u91cf\u4ee3\u7406 sidecar\u3002 \u5f53\u5b83\u6355\u83b7\u8fdb\u5165 Pod \u7684\u6240\u6709\u6d41\u91cf\u8bf7\u6c42\u65f6\uff0c\u4e0d\u662f\u5c06\u5176\u8f6c\u53d1\u5230\u8fdc\u7a0b\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c \u800c\u662f\u8def\u7531\u6240\u6709\u6d41\u91cf\uff08\u5f53\u521b\u5efa\u5168\u5c40\u62e6\u622a\u5668\u65f6\uff09 \u6216\u6d41\u91cf\u7684\u4e00\u4e2a\u5b50\u96c6\uff08\u5f53\u521b\u5efa\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\u65f6\uff09 \u5230\u672c\u5730\u5f00\u53d1\u73af\u5883\u3002"),(0,r.kt)("h3",{id:"telepresence-\u5b98\u65b9\u7f51\u7ad9"},"Telepresence \u5b98\u65b9\u7f51\u7ad9"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.telepresence.io/"},"Telepresence")),(0,r.kt)("h3",{id:"\u53c2\u8003\u7f51\u7ad9"},"\u53c2\u8003\u7f51\u7ad9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/local-debugging/"},"\u4f7f\u7528 telepresence \u5728\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\u670d\u52a1"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.telepresence.io/docs/latest/howtos/intercepts/"},"Intercept a service in your own environment"))),(0,r.kt)("h2",{id:"kt-connect"},"kt-connect"),(0,r.kt)("p",null,"\u6765\u81ea\u963f\u91cc KtConnect\uff08Kt\u4e3aKubernetes Toolkit\u96c6\u7fa4\u5de5\u5177\u5305\u7684\u7b80\u5199\uff09\u662f\u4e00\u6b3e\u57fa\u4e8eKubernetes\u73af\u5883\u7528\u4e8e\u63d0\u9ad8\u672c\u5730\u6d4b\u8bd5\u8054\u8c03\u6548\u7387\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"1",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u8f6f\u4ef6\u5305:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_MacOS_x86_64.tar.gz"},"MacOS x86 64\u4f4d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_MacOS_arm_64.tar.gz"},"MacOS ARM 64\u4f4d"))),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e76\u5b89\u88c5KT\uff08\u4ee5x86 64\u4f4d\u7248\u672c\u4e3a\u4f8b\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -OL https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_MacOS_x86_64.tar.gz\ntar zxf ktctl_0.3.6-beta1_MacOS_x86_64.tar.gz\nmv ktctl /usr/local/bin/ktctl\nktctl --version\n"))),(0,r.kt)(c.Z,{value:"2",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"\u8f6f\u4ef6\u5305:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Linux_x86_64.tar.gz"},"Linux x86 64\u4f4d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_linux_i386.tar.gz"},"Linux x86 32\u4f4d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Linux_arm_64.tar.gz"},"Linux ARM 64\u4f4d"))),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e76\u5b89\u88c5KT\uff08\u4ee5x86 64\u4f4d\u7248\u672c\u4e3a\u4f8b\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -OL https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Linux_x86_64.tar.gz\ntar zxf ktctl_0.3.6-beta1_Linux_x86_64.tar.gz\nmv ktctl /usr/local/bin/ktctl\nktctl --version\n"))),(0,r.kt)(c.Z,{value:"3",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"\u8f6f\u4ef6\u5305:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Windows_x86_64.zip"},"Windows x86 64\u4f4d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Windows_i386.zip"},"Windows x86 32\u4f4d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/kt-connect/releases/download/v0.3.6-beta1/ktctl_0.3.6-beta1_Windows_arm_64.zip"},"Windows ARM 64\u4f4d"))),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e76\u89e3\u538b\uff0c\u5c06\u5305\u4e2d\u7684wintun.dll\u548c\u53ef\u6267\u884c\u6587\u4ef6ktctl.exe\u4e00\u8d77\u653e\u5230PATH\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684\u4efb\u610f\u4f4d\u7f6e\u3002"))),(0,r.kt)("p",null,"| \u4f60\u4e5f\u53ef\u4ee5\u4ece",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/kt-connect/releases"},"Github Releases"),"\u4e0b\u8f7d\u5386\u53f2\u7248\u672c\u7684\u8f6f\u4ef6\u5305"),(0,r.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4-1"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("h4",{id:"\u8fde\u63a5\u96c6\u7fa4-1"},"\u8fde\u63a5\u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo ktctl connect\n00:00AM INF KtConnect start at <PID>\n... ...\n00:00AM INF ---------------------------------------------------------------\n00:00AM INF  All looks good, now you can access to resources in the kubernetes cluster\n00:00AM INF ---------------------------------------------------------------\n")),(0,r.kt)("p",null,"\u73b0\u5728\u672c\u5730\u5df2\u7ecf\u80fd\u591f\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\u8d44\u6e90\u4e86\uff0c\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u6216curl\u547d\u4ee4\u6765\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://10.51.0.162:8080    # \u5728\u672c\u5730\u76f4\u63a5\u8bbf\u95eePodIP\nkt-connect demo v1\n\n$ curl http://172.21.6.39:8080    # \u5728\u672c\u5730\u8bbf\u95eeClusterIP\nkt-connect demo v1\n\n$ curl http://tomcat:8080         # \u4f7f\u7528<service>\u4f5c\u4e3a\u57df\u540d\u8bbf\u95ee\u670d\u52a1\nkt-connect demo v1\n\n$ curl http://tomcat.default:8080     # \u4f7f\u7528<servicename>.<namespace>\u57df\u540d\u8bbf\u95ee\u670d\u52a1\nkt-connect demo v1\n\n$ curl http://tomcat.default.svc.cluster.local:8080    # \u4f7f\u7528\u96c6\u7fa4\u5185\u5b8c\u6574\u57df\u540d\u8bbf\u95ee\u670d\u52a1\nkt-connect demo v1\n")),(0,r.kt)("h4",{id:"\u5c06\u96c6\u7fa4\u6d41\u91cf\u8f6c\u53d1\u5230\u672c\u5730"},"\u5c06\u96c6\u7fa4\u6d41\u91cf\u8f6c\u53d1\u5230\u672c\u5730"),(0,r.kt)("p",null,"KtConnect\u63d0\u4f9b\u4e86\u4e09\u79cd\u80fd\u591f\u8ba9\u96c6\u7fa4\u8bbf\u95ee\u672c\u5730\u670d\u52a1\u7684\u547d\u4ee4\uff0c\u5206\u522b\u7528\u4e8e\u4e0d\u540c\u7684\u8c03\u8bd5\u573a\u666f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exchange\uff1a\u5c06\u96c6\u7fa4\u6307\u5b9a\u670d\u52a1\u7684\u6240\u6709\u6d41\u91cf\u8f6c\u5411\u672c\u5730"),(0,r.kt)("li",{parentName:"ul"},"Mesh\uff1a\u5c06\u96c6\u7fa4\u6307\u5b9a\u670d\u52a1\u7684\u90e8\u5206\u6d41\u91cf\uff08\u6309Header\u6216Label\u89c4\u5219\uff09\u8f6c\u5411\u672c\u5730"),(0,r.kt)("li",{parentName:"ul"},"Preview\uff1a\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u670d\u52a1\uff0c\u5e76\u5c06\u5176\u6d41\u91cf\u8f6c\u5411\u672c\u5730")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"1",label:"Exchange",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u5c06\u96c6\u7fa4\u91cc\u8bbf\u95ee\u6307\u5b9a\u670d\u52a1\u7684\u6240\u6709\u8bf7\u6c42\u62e6\u622a\u5e76\u8f6c\u53d1\u5230\u672c\u5730\u7684\u6307\u5b9a\u7aef\u53e3\uff0c\u901a\u5e38\u7528\u4e8e\u8c03\u8bd5\u5728\u6d4b\u8bd5\u73af\u5883\u8c03\u7528\u94fe\u4e0a\u7684\u6307\u5b9a\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500 \u2500\u2500 \u2500\u2500 \u2500\u2500     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ServiceA \u251c\u2500\u252c\u2500\u25bax\u2502 ServiceB \u2502 \u250c\u2500\u25ba\u2502 ServiceC \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502    \u2500\u2500 \u2500\u2500 \u2500\u2500 \u2500\u2518 \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n         exchange             \u2502\n             \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2514\u2500\u2500\u25ba\u2502 ServiceB'\u251c\u2500\u2518\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl exchange"),"\u547d\u4ee4\u5c06\u5148\u524d\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u670d\u52a1\u6d41\u91cf\u5168\u90e8\u8f6c\u5230\u672c\u5730",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ktctl exchange tomcat --expose 8080\n00:00AM INF KtConnect start at <PID>\n... ...\n---------------------------------------------------------------\nNow all request to service 'tomcat' will be redirected to local\n---------------------------------------------------------------\n")),(0,r.kt)("p",null,"\u5728\u672c\u5730\u6216\u8005\u96c6\u7fa4\u4e2d\u8bbf\u95ee\u793a\u4f8b\u5f00\u59cb\u65f6\u90e8\u7f72\u5230\u96c6\u7fa4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u670d\u52a1\uff0c\u67e5\u770b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u5982\u679c\u672a\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl connect"),"\uff0c\u53ea\u80fd\u4ece\u96c6\u7fa4\u5185\u8bbf\u95ee")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl http://tomcat:8080\nkt-connect local v2\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8bbf\u95ee\u96c6\u7fa4\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u670d\u52a1\u7684\u8bf7\u6c42\u88ab\u8def\u7531\u5230\u4e86\u672c\u5730\u7684Tomcat\u5b9e\u4f8b\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u672c\u5730\u8c03\u8bd5\u8fd9\u4e2a\u670d\u52a1\u4e86\u3002")),(0,r.kt)(c.Z,{value:"2",label:"Mesh",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5c06\u96c6\u7fa4\u91cc\u8bbf\u95ee\u6307\u5b9a\u670d\u52a1\u7684\u90e8\u5206\u8bf7\u6c42\u62e6\u622a\u5e76\u8f6c\u53d1\u5230\u672c\u5730\u7684\u6307\u5b9a\u7aef\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ServiceA \u251c\u2500\u252c\u2500\u2500\u25ba\u2502 ServiceB \u2502\u2500\u252c\u2500\u25ba\u2502 ServiceC \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            mesh              \u2502\n             \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2514\u2500\u2500\u25ba\u2502 ServiceB'\u251c\u2500\u2518\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Mesh\u547d\u4ee4\u6709\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),"\u6a21\u5f0f\u4e0d\u9700\u8981\u989d\u5916\u7684\u670d\u52a1\u7f51\u683c\u7ec4\u4ef6\uff0c\u80fd\u591f\u76f4\u63a5\u5b9e\u73b0HTTP\u8bf7\u6c42\u7684\u81ea\u52a8\u6309\u9700\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u9a8c\u8bc1\u7ed3\u679c\uff0c\u5148\u91cd\u7f6e\u4e00\u4e0b\u96c6\u7fa4\u91ccTomcat\u670d\u52a1\u7684\u9996\u9875\u5185\u5bb9\u3002\u7136\u540e\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl mesh"),"\u547d\u4ee4\u521b\u5efa\u4ee3\u7406Pod\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl exec deployment/tomcat -c tomcat -- /bin/bash -c 'mkdir webapps/ROOT; echo \"kt-connect demo v1\" > webapps/ROOT/index.html'\n\n$ ktctl mesh tomcat --expose 8080\n00:00AM INF KtConnect start at <PID>\n... ...\n--------------------------------------------------------------\nNow you can access your service by header 'VERSION: feo3x'\n--------------------------------------------------------------\n")),(0,r.kt)("p",null,"\u5728\u547d\u4ee4\u65e5\u5fd7\u7684\u672b\u5c3e\uff0c\u8f93\u51fa\u4e86\u4e00\u4e2a\u7279\u5b9a\u7684Header\u503c\u3002\u6b64\u65f6\uff0c\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat"),"\u670d\u52a1\uff0c\u6d41\u91cf\u5c06\u6b63\u5e38\u8fdb\u5165\u96c6\u7fa4\u7684\u670d\u52a1\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl http://tomcat:8080\nkt-connect demo v1\n")),(0,r.kt)("p",null,"\u82e5\u8bf7\u6c42\u5305\u542bMesh\u547d\u4ee4\u8f93\u51fa\u7684Header\uff0c\u5219\u6d41\u91cf\u5c06\u81ea\u52a8\u88ab\u672c\u5730\u7684\u670d\u52a1\u5b9e\u4f8b\u63a5\u6536\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -H 'VERSION: feo3x' http://tomcat:8080\nkt-connect local v2\n")),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\uff0c\u53ef\u7ed3\u5408",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bewisse/modheader"},"ModHeader\u63d2\u4ef6"),"\uff0c\u4f7f\u5f97\u53ea\u6709\u5f00\u53d1\u8005\u4ece\u81ea\u5df1\u6d4f\u89c8\u5668\u53d1\u51fa\u7684\u8bf7\u6c42\u4f1a\u8bbf\u95ee\u5176\u672c\u5730\u7684\u670d\u52a1\u8fdb\u7a0b\u3002"),(0,r.kt)("p",null,"\u9664\u6b64\u4ee5\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u53ef\u7075\u6d3b\u914d\u7f6e\u8def\u7531\u89c4\u5219\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"manual"),"\u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u4e0bKtConnect\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u8def\u7531\uff0c\u5728Mesh\u547d\u4ee4\u8fd0\u884c\u540e\uff0c\u8bbf\u95ee\u6307\u5b9a\u670d\u52a1\u7684\u6d41\u91cf\u5c06\u968f\u673a\u8bbf\u95ee\u96c6\u7fa4\u670d\u52a1\u548c\u672c\u5730\u5b9e\u4f8b\u3002\u60a8\u53ef\u4ee5\u81ea\u884c\u4f7f\u7528\u4efb\u4f55\u670d\u52a1\u7f51\u683c\u7ec4\u4ef6\uff08\u8b6c\u5982Istio\uff09\u521b\u5efa\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"\u6807\u7b7e\u7684\u8def\u7531\u89c4\u5219\uff0c\u5c06\u7279\u5b9a\u6d41\u91cf\u8f6c\u53d1\u5230\u672c\u5730\u3002\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://alibaba.github.io/kt-connect/#/zh-cn/reference/manual_mesh"},"Manual Mesh"),"\u6587\u6863\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ktctl exchange"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl mesh"),"\u547d\u4ee4\u7684\u6700\u5927\u533a\u522b\u5728\u4e8e\uff0c\u524d\u8005\u4f1a\u5c06\u539f\u5e94\u7528\u5b9e\u4f8b\u6d41\u91cf\u5168\u90e8\u66ff\u6362\u4e3a\u7531\u672c\u5730\u670d\u52a1\u63a5\u6536\uff0c\u800c\u540e\u8005\u4ec5\u5c06\u5305\u542b\u6307\u5b9aHeader\u7684\u6d41\u91cf\u5bfc\u6d41\u5230\u672c\u5730\uff0c\u540c\u65f6\u4fdd\u8bc1\u6d4b\u8bd5\u73af\u5883\u6b63\u5e38\u94fe\u8def\u59cb\u7ec8\u53ef\u7528\u3002")),(0,r.kt)(c.Z,{value:"3",label:"Preview",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5c06\u672c\u5730\u8fd0\u884c\u7684\u670d\u52a1\u5b9e\u4f8b\u6ce8\u518c\u5230\u96c6\u7fa4\u4e0a\u3002\u4e0e\u524d\u4e24\u79cd\u547d\u4ee4\u4e0d\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl preview"),"\u4e3b\u8981\u7528\u4e8e\u5c06\u672c\u5730\u5f00\u53d1\u4e2d\u7684\u670d\u52a1\u63d0\u4f9b\u7ed9\u5176\u4ed6\u5f00\u53d1\u8005\u8fdb\u884c\u8054\u8c03\u548c\u9884\u89c8\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u4f1a\u5c06\u8fd0\u884c\u5728\u672c\u5730",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\u7684\u670d\u52a1\u6ce8\u518c\u5230\u6d4b\u8bd5\u96c6\u7fa4\uff0c\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat-preview"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ktctl preview tomcat-preview --expose 8080\n00:00AM INF KtConnect start at <PID>\n... ...\n---------------------------------------------------------------\nNow you can access your local service in cluster by name 'tomcat-preview'\n---------------------------------------------------------------\n")),(0,r.kt)("p",null,"\u73b0\u5728\u96c6\u7fa4\u91cc\u7684\u670d\u52a1\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat-preview"),"\u540d\u79f0\u6765\u8bbf\u95ee\u672c\u5730\u66b4\u9732\u7684\u670d\u52a1\u5b9e\u4f8b\u4e86\uff0c\u5176\u4ed6\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"ktctl connect"),"\u540e\uff0c\u76f4\u63a5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat-preview"),"\u670d\u52a1\u540d\u79f0\u6765\u9884\u89c8\u8be5\u670d\u52a1\u7684\u5b9e\u65f6\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl http://tomcat-preview:8080\nkt-connect local v2\n")))),(0,r.kt)("h3",{id:"\u5b98\u65b9\u7f51\u7ad9"},"\u5b98\u65b9\u7f51\u7ad9"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://alibaba.github.io/kt-connect/#/"},"KtConnect")))}b.isMDXComponent=!0}}]);