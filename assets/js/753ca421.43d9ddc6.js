"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[936],{7942:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||v[m]||l;return r?n.createElement(b,s(s({ref:t},i),{},{components:r})):n.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(4778),a=(r(959),r(7942));const l={title:"\u8ba2\u9605\u8f6c\u6362\u670d\u52a1 subconverter \u540e\u7aef\u642d\u5efa\uff0c\u652f\u6301 Clash\u3001ss\u3001Quantumult \u7b49\u7b49\u7b49",authors:"gaoxu",tags:["subconverter","Clash","Shadowrocket"]},s=void 0,o={permalink:"/blog/2023/03/07/install-subconverter",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2023-03-07-install-subconverter/index.md",source:"@site/blog/2023-03-07-install-subconverter/index.md",title:"\u8ba2\u9605\u8f6c\u6362\u670d\u52a1 subconverter \u540e\u7aef\u642d\u5efa\uff0c\u652f\u6301 Clash\u3001ss\u3001Quantumult \u7b49\u7b49\u7b49",description:"\u4e00\u822c\u642d\u5efa\u5728\u8ddf\u4ee3\u7406\u4e00\u4e2a\u673a\u5668\u4e0a \u673a\u5668\u914d\u7f6e\u4e5f\u4e0d\u9ad8\u6240\u4ee5\u76f4\u63a5\u672c\u673a\u642d\u5efa \u4e0d\u7528 docker \u4e4b\u7c7b\u7684\u4e86",date:"2023-03-07T00:00:00.000Z",formattedDate:"2023\u5e743\u67087\u65e5",tags:[{label:"subconverter",permalink:"/blog/tags/subconverter"},{label:"Clash",permalink:"/blog/tags/clash"},{label:"Shadowrocket",permalink:"/blog/tags/shadowrocket"}],readingTime:.7866666666666666,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"\u8ba2\u9605\u8f6c\u6362\u670d\u52a1 subconverter \u540e\u7aef\u642d\u5efa\uff0c\u652f\u6301 Clash\u3001ss\u3001Quantumult \u7b49\u7b49\u7b49",authors:"gaoxu",tags:["subconverter","Clash","Shadowrocket"]},prevItem:{title:"\u89e3\u51b3 MongoDB \u9a71\u52a8\u63d0\u793a not authorized \u7684\u95ee\u9898",permalink:"/blog/2023/03/16/mongo-authentication-failed"},nextItem:{title:"\u6ce8\u518cChatGPT \u6559\u4f60\u89e3\u51b3\u5730\u533a\u95ee\u9898",permalink:"/blog/2023/02/02/register-openai"}},u={authorsImageUrls:[void 0]},c=[{value:"\u4e0b\u8f7d subconverter \u540e\u7aef\u7a0b\u5e8f",id:"\u4e0b\u8f7d-subconverter-\u540e\u7aef\u7a0b\u5e8f",level:2},{value:"\u6ce8\u518c subconverter \u4e3a linux \u7cfb\u7edf\u670d\u52a1",id:"\u6ce8\u518c-subconverter-\u4e3a-linux-\u7cfb\u7edf\u670d\u52a1",level:2},{value:"1. \u7f16\u8f91 subconverter.service",id:"1-\u7f16\u8f91-subconverterservice",level:3},{value:"2. subconverter.service \u5185\u5bb9",id:"2-subconverterservice-\u5185\u5bb9",level:3},{value:"3. \u8bbe\u7f6e\u8ddf\u968f\u7cfb\u7edf\u542f\u52a8",id:"3-\u8bbe\u7f6e\u8ddf\u968f\u7cfb\u7edf\u542f\u52a8",level:3},{value:"4. \u67e5\u770b\u65e5\u5fd7",id:"4-\u67e5\u770b\u65e5\u5fd7",level:3},{value:"\u5728\u7ebf\u751f\u6210\u8f6c\u6362\u5730\u5740",id:"\u5728\u7ebf\u751f\u6210\u8f6c\u6362\u5730\u5740",level:2}],i={toc:c},p="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u822c\u642d\u5efa\u5728\u8ddf\u4ee3\u7406\u4e00\u4e2a\u673a\u5668\u4e0a \u673a\u5668\u914d\u7f6e\u4e5f\u4e0d\u9ad8\u6240\u4ee5\u76f4\u63a5\u672c\u673a\u642d\u5efa \u4e0d\u7528 docker \u4e4b\u7c7b\u7684\u4e86"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d-subconverter-\u540e\u7aef\u7a0b\u5e8f"},"\u4e0b\u8f7d subconverter \u540e\u7aef\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u4ee5 linux 64 \u4f4d cpu \u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/tindy2013/subconverter/releases/download/v0.7.2/subconverter_linux64.tar.gz\ntar zxvf subconverter_linux64.tar.gz\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5176\u4ed6\u7cfb\u7edf\u7248\u672c\u8fd9\u91cc\u627e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tindy2013/subconverter/releases"},"tindy2013/subconverter")),(0,a.kt)("h2",{id:"\u6ce8\u518c-subconverter-\u4e3a-linux-\u7cfb\u7edf\u670d\u52a1"},"\u6ce8\u518c subconverter \u4e3a linux \u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("h3",{id:"1-\u7f16\u8f91-subconverterservice"},"1. \u7f16\u8f91 subconverter.service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/systemd/system/subconverter.service\n")),(0,a.kt)("h3",{id:"2-subconverterservice-\u5185\u5bb9"},"2. subconverter.service \u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/systemd/system/subconverter.service"',title:'"/etc/systemd/system/subconverter.service"'},"[Unit]\nDescription=A API For Subscription Convert\nAfter=network.target\n\n[Service]\nType=simple\n// highlight-start\nExecStart=/root/subconverter/subconverter\nWorkingDirectory=/root/subconverter\n// highlight-end\nRestart=always\nRestartSec=10\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u4fee\u6539 ",(0,a.kt)("strong",{parentName:"p"},"ExecStart")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"WorkingDirectory ")," \u8def\u5f84"),(0,a.kt)("h3",{id:"3-\u8bbe\u7f6e\u8ddf\u968f\u7cfb\u7edf\u542f\u52a8"},"3. \u8bbe\u7f6e\u8ddf\u968f\u7cfb\u7edf\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable subconverter\nsystemctl start subconverter\n")),(0,a.kt)("h3",{id:"4-\u67e5\u770b\u65e5\u5fd7"},"4. \u67e5\u770b\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"journalctl -fu subconverter\n")),(0,a.kt)("h2",{id:"\u5728\u7ebf\u751f\u6210\u8f6c\u6362\u5730\u5740"},"\u5728\u7ebf\u751f\u6210\u8f6c\u6362\u5730\u5740"),(0,a.kt)("p",null,"\u524d\u7aef\u6211\u4eec\u4e5f\u53ef\u4ee5\u642d\u5efa\uff0c\u4f46\u662f\u6ca1\u5fc5\u8981\uff0c\u4e0b\u9762\u5206\u4eab\u4e00\u4e9b\u4e09\u65b9\u7684\u524d\u7aef\uff0c\u5f53\u7136\u4f60\u5982\u679c\u4e0d\u5728\u610f\u9690\u79c1\u524d\u540e\u7aef\u90fd\u53ef\u4ee5\u7528\u522b\u4eba\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sub.789.st/"},"789.st")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://acl4ssr-sub.github.io/"},"acl4ssr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sub.v1.mk/"},"v1.mk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://my.subcloud.xyz/"},"subcloud.xyz"))),(0,a.kt)("p",null,"\u9875\u9762\u540e\u7aef\u5730\u5740\u586b\u5199\u6211\u4eec\u7684\u5730\u5740\u5c31\u53ef\u4ee5 https://\u4f60\u7684\u4e3b\u673aip:25500/sub?"))}v.isMDXComponent=!0}}]);