"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7799],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,g=s["".concat(u,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(4778),a=(r(959),r(7942));const l={title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",authors:"gaoxu",tags:["REST API","\u8bbe\u8ba1"]},o=void 0,i={permalink:"/blog/2020/07/31/rest-api-design",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2020-07-31-rest-api-design/index.md",source:"@site/blog/2020-07-31-rest-api-design/index.md",title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",description:"\u672c\u6587\u5efa\u8bae\u8bfb\u8005\uff1a",date:"2020-07-31T00:00:00.000Z",formattedDate:"2020\u5e747\u670831\u65e5",tags:[{label:"REST API",permalink:"/blog/tags/rest-api"},{label:"\u8bbe\u8ba1",permalink:"/blog/tags/\u8bbe\u8ba1"}],readingTime:12.67,hasTruncateMarker:!0,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",authors:"gaoxu",tags:["REST API","\u8bbe\u8ba1"]},prevItem:{title:"JetBrains\u5168\u7cfb\u5217\u8f6f\u4ef6\u6fc0\u6d3b\u6559\u7a0b",permalink:"/blog/2021/11/01/jetbrains-crack"},nextItem:{title:"CentOS 7 \u4e0b yum \u5b89\u88c5\u548c\u914d\u7f6e NFS",permalink:"/blog/2020/07/28/centos7-install-nfs"}},u={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5efa\u8bae\u8bfb\u8005\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5de5\u7a0b\u5e08\u3001\u67b6\u6784\u5e08"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u8ddf\u540e\u7aef\u534f\u540c\u7684\u524d\u7aef\u5de5\u7a0b\u5e08"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5API\u63d0\u4f9b\u670d\u52a1\u7684\u8f6f\u4ef6\u63d0\u4f9b\u5546")),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u540d\u4f18\u79c0\u7684\u540e\u7aef\u7a0b\u5e8f\u5458\uff0c\u4f60\u7167\u7740\u4ea7\u54c1\u9700\u6c42\u8bbe\u8ba1\u597d\u4e86\u6a21\u578b\uff0c\u8bbe\u8ba1\u597d\u4e86\u5173\u8054\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u628a\u8fd9\u4e9b\u6a21\u578b\u548c\u5173\u7cfb\u4e00\u518d\u6253\u78e8\u4e86\u4e00\u756a\u4e4b\u540e\uff0c\u4f60\u60f3\u662f\u65f6\u5019\u628aAPI\u8bbe\u8ba1\u51fa\u6765\uff0c\u4e0e\u524d\u7aef\u6c9f\u901a\u4e86\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u95ee\u9898\u6765\u4e86\uff1a"),(0,a.kt)("p",null,"\u4e00\u65e6 API \u8fdb\u5165\u524d\u7aef APP \u4ee3\u7801\uff0c\u6216\u8005\u662f\u88ab\u4f60\u7684\u987e\u5ba2\u5e7f\u6cdb\u4f7f\u7528\u7684\u8bdd\uff0c\u518d\u6765\u5927\u6539\u5c31\u975e\u5e38\u9ebb\u70e6\u4e86\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c APP \u7248\u672c 1.0 \u7528\u4e86\u4e00\u4e2a\u63a5\u53e3 A\uff0c\u8fd9\u4e2a\u63a5\u53e3 A \u5982\u679c\u8981\u8fdb\u884c\u5927\u6539\uff0c\u90a3\u4e48\u5fc5\u987b\u5c06 A \u7ef4\u6301\u81f3\u6240\u6709\u7528\u6237\u5347\u7ea7\u8fc7 APP 1.0 \u540e\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u6837\u907f\u514d API \u53d1\u5e03\u4e4b\u540e\u5927\u6539\u5462\uff1f\u6709\u6ca1\u6709\u4e00\u4e9b\u63d0\u524d\u53ef\u4ee5\u6ce8\u610f\u5230\u7684\u8bbe\u8ba1\u51c6\u5219\u53ef\u4ee5\u5e2e\u6211\u4eec\u907f\u5f00 API \u8bbe\u8ba1\u4e2d\u7684\u5404\u79cd\u5751\uff1f"),(0,a.kt)("p",null,"\u7b54\u6848\u662f\u6709\u7684\u3002\u7f51\u4e0a\u5145\u6ee1\u4e86\u5404\u79cd\u5bf9 API \u8bbe\u8ba1\u7684\u5efa\u8bae\uff0c\u800c\u8fd9\u7bc7\u6587\u7ae0\u91cc\u6211\u4eec\u7ed3\u5408\u5361\u62c9\u641c\u7d22\u8bbe\u8ba1 API \u7684\u7ecf\u9a8c\uff0c\u628a REST API \u7684\u6700\u4f73\u5b9e\u8df5\u548c\u5e38\u89c1\u7684\u5751\u90fd\u603b\u7ed3\u51fa\u6765\uff0c\u505a\u6210\u4e00\u4e2a\u6559\u7a0b\uff0c\u5e0c\u671b\u53ef\u4ee5\u5728\u5e2e\u5230\u6b63\u5728\u8bbe\u8ba1/\u4f7f\u7528 API \u7684\u4f60\u3002"))}m.isMDXComponent=!0}}]);