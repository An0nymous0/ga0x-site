"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2502],{7942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(4778),o=(r(959),r(7942));const a={title:"CentOS 7 \u4e0b yum \u5b89\u88c5\u548c\u914d\u7f6e NFS",authors:"gaoxu",tags:["CentOS"]},i=void 0,l={permalink:"/blog/2020/07/28/centos7-install-nfs",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2020-07-28-centos7-install-nfs.md",source:"@site/blog/2020-07-28-centos7-install-nfs.md",title:"CentOS 7 \u4e0b yum \u5b89\u88c5\u548c\u914d\u7f6e NFS",description:"\u524d\u8a00",date:"2020-07-28T00:00:00.000Z",formattedDate:"2020\u5e747\u670828\u65e5",tags:[{label:"CentOS",permalink:"/blog/tags/cent-os"}],readingTime:1.7633333333333334,hasTruncateMarker:!0,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"CentOS 7 \u4e0b yum \u5b89\u88c5\u548c\u914d\u7f6e NFS",authors:"gaoxu",tags:["CentOS"]},prevItem:{title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",permalink:"/blog/2020/07/31/rest-api-design"},nextItem:{title:"\u4e86\u89e3\u4e00\u81f4\u6027\u54c8\u5e0c",permalink:"/blog/consistent-hash"}},c={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NFS \u662f Network File System \u7684\u7f29\u5199\uff0c\u5373\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\u3002\u529f\u80fd\u662f\u8ba9\u5ba2\u6237\u7aef\u901a\u8fc7\u7f51\u7edc\u8bbf\u95ee\u4e0d\u540c\u4e3b\u673a\u4e0a\u78c1\u76d8\u91cc\u7684\u6570\u636e\uff0c\u4e3b\u8981\u7528\u5728\u7c7bUnix\u7cfb\u7edf\u4e0a\u5b9e\u73b0\u6587\u4ef6\u5171\u4eab\u7684\u4e00\u79cd\u65b9\u6cd5\u3002 \u672c\u4f8b\u6f14\u793a CentOS 7 \u4e0b\u5b89\u88c5\u548c\u914d\u7f6e NFS \u7684\u57fa\u672c\u6b65\u9aa4\u3002")))}m.isMDXComponent=!0}}]);