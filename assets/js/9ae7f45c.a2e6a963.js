"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2534],{224:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>P});var l=n(2374);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),k=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=k(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=k(n),P=a,m=d["".concat(u,".").concat(P)]||d[P]||s[P]||i;return n?l.createElement(m,r(r({ref:t},o),{},{components:n})):l.createElement(m,r({ref:t},o))}));function P(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var k=2;k<i;k++)r[k]=n[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var l=n(6252),a=(n(2374),n(224));const i={title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",authors:"gaoxu",tags:["REST API","\u8bbe\u8ba1"]},r=void 0,p={permalink:"/blog/2020/07/31/rest-api-design",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2020-07-31-rest-api-design/index.md",source:"@site/blog/2020-07-31-rest-api-design/index.md",title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",description:"\u672c\u6587\u5efa\u8bae\u8bfb\u8005\uff1a",date:"2020-07-31T00:00:00.000Z",formattedDate:"2020\u5e747\u670831\u65e5",tags:[{label:"REST API",permalink:"/blog/tags/rest-api"},{label:"\u8bbe\u8ba1",permalink:"/blog/tags/\u8bbe\u8ba1"}],readingTime:12.67,hasTruncateMarker:!0,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"\u4f18\u79c0\u7684 REST API \u8bbe\u8ba1\u6307\u5357",authors:"gaoxu",tags:["REST API","\u8bbe\u8ba1"]},prevItem:{title:"JetBrains\u5168\u7cfb\u5217\u8f6f\u4ef6\u6fc0\u6d3b\u6559\u7a0b",permalink:"/blog/2021/11/01/jetbrains-crack"},nextItem:{title:"CentOS 7 \u4e0b yum \u5b89\u88c5\u548c\u914d\u7f6e NFS",permalink:"/blog/2020/07/28/centos7-install-nfs"}},u={authorsImageUrls:[void 0]},k=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"REST API \u662f\u4ec0\u4e48 - \u7a0b\u5e8f\u5458\u4e0e\u670d\u52a1\u4e4b\u95f4\u6c9f\u901a\u7684\u8bed\u8a00",id:"rest-api-\u662f\u4ec0\u4e48---\u7a0b\u5e8f\u5458\u4e0e\u670d\u52a1\u4e4b\u95f4\u6c9f\u901a\u7684\u8bed\u8a00",level:2},{value:"REST API \u5185\u5177\u4f53\u89c4\u5b9a\u4e86\u4ec0\u4e48",id:"rest-api-\u5185\u5177\u4f53\u89c4\u5b9a\u4e86\u4ec0\u4e48",level:2},{value:"\u4ec0\u4e48\u662f REST API \u91cc\u7684 Resource\uff08\u5373\u8d44\u6e90\uff09",id:"\u4ec0\u4e48\u662f-rest-api-\u91cc\u7684-resource\u5373\u8d44\u6e90",level:3},{value:"\u4ec0\u4e48\u662f REST API \u91cc\u7684\u64cd\u4f5c",id:"\u4ec0\u4e48\u662f-rest-api-\u91cc\u7684\u64cd\u4f5c",level:3},{value:"\u5982\u4f55\u5728 API \u4e2d\u8868\u793a\u5b9e\u4f53\uff08\u6570\u636e\u5e93\u8868\uff09\u95f4\u5173\u7cfb",id:"\u5982\u4f55\u5728-api-\u4e2d\u8868\u793a\u5b9e\u4f53\u6570\u636e\u5e93\u8868\u95f4\u5173\u7cfb",level:3},{value:"REST API\u4e2d\u5982\u4f55\u8868\u793a\u4e00\u4e2a\u52a8\u4f5c",id:"rest-api\u4e2d\u5982\u4f55\u8868\u793a\u4e00\u4e2a\u52a8\u4f5c",level:3},{value:"REST API \u8bbe\u8ba1\u5e38\u89c1\u95ee\u9898\u548c\u5efa\u8bae",id:"rest-api-\u8bbe\u8ba1\u5e38\u89c1\u95ee\u9898\u548c\u5efa\u8bae",level:2},{value:"REST API \u5982\u4f55\u533a\u5206\u7248\u672c",id:"rest-api-\u5982\u4f55\u533a\u5206\u7248\u672c",level:3},{value:"REST API \u5e94\u8be5\u8fd4\u56de\u4ec0\u4e48",id:"rest-api-\u5e94\u8be5\u8fd4\u56de\u4ec0\u4e48",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u7ed9\u4f60\u7684 API \u7f16\u5199\u6587\u6863",id:"\u4e3a\u4ec0\u4e48\u8981\u7ed9\u4f60\u7684-api-\u7f16\u5199\u6587\u6863",level:3},{value:"\u9ed8\u8ba4\u5f00\u542f Gzip \u548c Pretty print",id:"\u9ed8\u8ba4\u5f00\u542f-gzip-\u548c-pretty-print",level:3},{value:"\u6253\u5f00 Gzip",id:"\u6253\u5f00-gzip",level:4},{value:"\u6253\u5f00 Pretty Print",id:"\u6253\u5f00-pretty-print",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],o={toc:k};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5efa\u8bae\u8bfb\u8005\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5de5\u7a0b\u5e08\u3001\u67b6\u6784\u5e08"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u8ddf\u540e\u7aef\u534f\u540c\u7684\u524d\u7aef\u5de5\u7a0b\u5e08"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5API\u63d0\u4f9b\u670d\u52a1\u7684\u8f6f\u4ef6\u63d0\u4f9b\u5546")),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u540d\u4f18\u79c0\u7684\u540e\u7aef\u7a0b\u5e8f\u5458\uff0c\u4f60\u7167\u7740\u4ea7\u54c1\u9700\u6c42\u8bbe\u8ba1\u597d\u4e86\u6a21\u578b\uff0c\u8bbe\u8ba1\u597d\u4e86\u5173\u8054\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u628a\u8fd9\u4e9b\u6a21\u578b\u548c\u5173\u7cfb\u4e00\u518d\u6253\u78e8\u4e86\u4e00\u756a\u4e4b\u540e\uff0c\u4f60\u60f3\u662f\u65f6\u5019\u628aAPI\u8bbe\u8ba1\u51fa\u6765\uff0c\u4e0e\u524d\u7aef\u6c9f\u901a\u4e86\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u95ee\u9898\u6765\u4e86\uff1a"),(0,a.kt)("p",null,"\u4e00\u65e6 API \u8fdb\u5165\u524d\u7aef APP \u4ee3\u7801\uff0c\u6216\u8005\u662f\u88ab\u4f60\u7684\u987e\u5ba2\u5e7f\u6cdb\u4f7f\u7528\u7684\u8bdd\uff0c\u518d\u6765\u5927\u6539\u5c31\u975e\u5e38\u9ebb\u70e6\u4e86\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c APP \u7248\u672c 1.0 \u7528\u4e86\u4e00\u4e2a\u63a5\u53e3 A\uff0c\u8fd9\u4e2a\u63a5\u53e3 A \u5982\u679c\u8981\u8fdb\u884c\u5927\u6539\uff0c\u90a3\u4e48\u5fc5\u987b\u5c06 A \u7ef4\u6301\u81f3\u6240\u6709\u7528\u6237\u5347\u7ea7\u8fc7 APP 1.0 \u540e\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u6837\u907f\u514d API \u53d1\u5e03\u4e4b\u540e\u5927\u6539\u5462\uff1f\u6709\u6ca1\u6709\u4e00\u4e9b\u63d0\u524d\u53ef\u4ee5\u6ce8\u610f\u5230\u7684\u8bbe\u8ba1\u51c6\u5219\u53ef\u4ee5\u5e2e\u6211\u4eec\u907f\u5f00 API \u8bbe\u8ba1\u4e2d\u7684\u5404\u79cd\u5751\uff1f"),(0,a.kt)("p",null,"\u7b54\u6848\u662f\u6709\u7684\u3002\u7f51\u4e0a\u5145\u6ee1\u4e86\u5404\u79cd\u5bf9 API \u8bbe\u8ba1\u7684\u5efa\u8bae\uff0c\u800c\u8fd9\u7bc7\u6587\u7ae0\u91cc\u6211\u4eec\u7ed3\u5408\u5361\u62c9\u641c\u7d22\u8bbe\u8ba1 API \u7684\u7ecf\u9a8c\uff0c\u628a REST API \u7684\u6700\u4f73\u5b9e\u8df5\u548c\u5e38\u89c1\u7684\u5751\u90fd\u603b\u7ed3\u51fa\u6765\uff0c\u505a\u6210\u4e00\u4e2a\u6559\u7a0b\uff0c\u5e0c\u671b\u53ef\u4ee5\u5728\u5e2e\u5230\u6b63\u5728\u8bbe\u8ba1/\u4f7f\u7528 API \u7684\u4f60\u3002"),(0,a.kt)("h2",{id:"rest-api-\u662f\u4ec0\u4e48---\u7a0b\u5e8f\u5458\u4e0e\u670d\u52a1\u4e4b\u95f4\u6c9f\u901a\u7684\u8bed\u8a00"},"REST API \u662f\u4ec0\u4e48 - \u7a0b\u5e8f\u5458\u4e0e\u670d\u52a1\u4e4b\u95f4\u6c9f\u901a\u7684\u8bed\u8a00"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4efb\u4f55\u8bed\u8a00\u7684\u672c\u8d28\u90fd\u662f\u4e00\u5957\u89c4\u5219\u7684\u5408\u96c6\u3002\u6bd4\u5982\u8bf4\uff0c\u4e2d\u6587\u91cc\u8981\u6c42\u53e5\u5b50\u8981\u6709\u4e3b\u8c13\u5bbe\uff0c\u800c\u4f5c\u4e3a\u6bcd\u8bed\u4e3a\u4e2d\u6587\u7684\u6211\u4eec\uff0c\u4e00\u65e6\u6709\u4eba\u8bf4\u4e86\u4e00\u53e5\u7f3a\u5c11\u4e3b\u8bed\u7684\u8bdd\uff0c\u6211\u4eec\u4f1a\u76f4\u89c9\u6027\u5730\u611f\u89c9\u5f88\u5947\u602a\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u6709\u4eba\u5bf9\u4f60\u8bf4\u201c\u662f\u4e00\u4e2a\u795e\u4eba\u201d\u3002"),(0,a.kt)("p",null,"\u4f60\u4f1a\u76f4\u89c9\u5730\u95ee\uff1a\u7a76\u7adf\u8c01\u662f\u4e00\u4e2a\u795e\u4eba\uff1f"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5728\u5404\u4e2a\u7a0b\u5e8f\u7684\u6c9f\u901a\u4e2d\uff0c\u6216\u8005\u5404\u4e2a\u670d\u52a1\u7684\u6c9f\u901a\u4e2d\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u7c7b\u4f3c\u201c\u8bed\u8a00\u201d\u7684\u4e1c\u897f\uff0c\u8ba9\u6211\u4eec\u53ef\u4ee5\u4e0d\u9700\u8981\u592a\u591a\u7684\u4e0a\u4e0b\u6587\uff0c\u5c31\u53ef\u4ee5\u524d\u7aef\u7406\u89e3\u540e\u7aef\u3001\u540e\u7aef\u4e5f\u7406\u89e3\u524d\u7aef\u3002"),(0,a.kt)("p",null,"\u8bbe\u60f3\u4e00\u4e0b\uff0c\u6709\u591a\u5c11\u6b21\u4f60\u8ddf\u524d\u7aef\u4e00\u8d77\u9700\u8981\u524d\u540e\u7aef ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8054\u8c03"),"\uff1f\u6709\u591a\u5c11\u6b21\u524d\u7aef\u89c9\u5f97\u4f60\u5b9a\u4e49\u7684 API \u4e0d\u591f\u65b9\u4fbf\u76f4\u89c2\uff0c\u4e00\u5b9a\u8981\u4f60\u591a\u8fd4\u56de\u4e00\u4e2a\u53c2\u6570\u6216\u8005\u6539\u4e00\u4e0b\u7aef\u70b9\u8def\u5f84\uff1f"),(0,a.kt)("p",null,"\u5176\u5b9e\u672c\u8d28\u4e0a\uff0c\u4f60\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8054\u8c03")," \u65f6\u5c31\u662f\u5728\u5c1d\u8bd5\u8bbe\u8ba1\u4e00\u4e2a\u201c\u8bed\u8a00\u201d\uff0c\u4ee5\u65b9\u4fbf\u4e92\u76f8\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u7406\u89e3\u5bf9\u65b9\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u540e\u7aef\u4f1a\u8981\u6c42\u524d\u7aef\u8bf4\uff0c\u4f60\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /user/abc")," \u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"abc")," \u7528\u6237\u4e86\u3002"),(0,a.kt)("p",null,"\u77ed\u7ebf\u6765\u8bb2\u8fd9\u5f53\u7136\u6ca1\u95ee\u9898\uff0c\u4f60\u4eec\u53ef\u4ee5\u51e0\u4e4e\u4efb\u610f\u5730\u5b9a\u4e49 API \u7aef\u70b9\uff0c\u4efb\u610f\u5730\u8c03\u6574\u4f20\u9012\u7684\u53c2\u6570\u3002\u4f46\u662f\u4e00\u65e6\u9879\u76ee\u5f00\u59cb\u53d8\u590d\u6742\uff0c\u95ee\u9898\u5c31\u5f00\u59cb\u51fa\u73b0\u4e86\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5927\u5bb6\u6709\u4e0d\u540c\u7684\u7ecf\u9a8c\u548c\u559c\u597d\uff0c\u5bf9 API \u7684\u5b9a\u4e49\u53ef\u80fd\u5343\u5dee\u4e07\u522b\uff0c\u6240\u8c13\u4f17\u53e3\u96be\u8c03"),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5f00\u59cb\u590d\u6742\u540e\uff0c\u5404\u4e2a\u7cfb\u7edf\u4e4b\u95f4\u7684 API \u56e0\u4e3a\u5b9a\u4e49\u7684\u4eba\u7684\u4e0d\u540c\uff0c\u4f1a\u5f00\u59cb\u51fa\u73b0\u4e0d\u4e00\u81f4\uff0c\u5bfc\u81f4\u6bcf\u4e2a\u7aef\u53e3\u8c03\u7528\u524d\u9700\u8981\u8be6\u7ec6\u9605\u8bfb\u6587\u6863\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u6216\u8005\u4e0e API \u8bbe\u8ba1\u8005\u65e0\u7a77\u65e0\u5c3d\u5730\u8ba8\u8bba\u548c\u4f1a\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684 API \u662f\u9762\u5411\u5ba2\u6237\u7684\uff0c\u6bd4\u5982\u5982\u679c\u4f60\u662f\u4e00\u5bb6\u8f6f\u4ef6\u670d\u52a1\u516c\u53f8\uff0c\u90a3\u4e48\u4f60\u81ea\u5b9a\u4e49\u7684 API \u4f1a\u589e\u52a0\u5ba2\u6237\u63a5\u5165\u7684\u6210\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u7b49\u7b49\u7b49\u7b49")),(0,a.kt)("p",null,'\u56e0\u6b64\uff0c\u8981\u662f\u6709\u4e00\u5957\u4eba\u7c7b\u901a\u7528\u7684"\u8bed\u8a00\u201c\u6216\u8005\u201d\u89c4\u8303\u201c\uff0c\u6765\u6307\u5bfc\u5927\u5bb6\u5b9a\u4e49 API \u7684\u65b9\u5f0f\uff0c\u90a3\u6837\u8be5\u591a\u597d\uff1f'),(0,a.kt)("p",null,"REST API \u5c31\u662f\u8fd9\u6837\u4e00\u79cd\u89c4\u8303\uff0c\u5b83\u662f\u76ee\u524d\u6574\u4e2a\u4e92\u8054\u7f51\u5e94\u7528\u6700\u5e7f\u6cdb\u7684 API \u89c4\u8303\u3002\u6709\u610f\u601d\u7684\u662f\uff0cREST\u662f\u7531\u5b83\u7684\u63d0\u51fa\u8005 Roy Fielding \u5728\u4ed6\u8bfb\u4e66\u671f\u95f4\uff0c\u5199\u7684\u535a\u58eb\u8bba\u6587\u91cc\u63d0\u51fa\u7684\u3002"),(0,a.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\uff0cREST API \u6709\u4e00\u5957 API \u8bbe\u8ba1\u7684\u51c6\u5219\uff0c\u5b83\u89c4\u8303\u4e86 API \u8bbe\u8ba1\u7684\u6846\u67b6\uff0c\u4f7f\u5f97\u670d\u52a1\u95f4\u3001\u7a0b\u5e8f\u5458\u4e4b\u95f4\u6709\u4e00\u4e2a\u901a\u7528\u7684\u6c9f\u901a\u8bed\u8a00\u3002\u5982\u679c\u9700\u8981\u8bfb API \u66f4\u5e7f\u6cdb\u7684\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003\u6587\u7ae0",(0,a.kt)("a",{parentName:"p",href:"https://kalasearch.cn/blog/what-is-api"},"\u4ec0\u4e48\u662f API")),(0,a.kt)("p",null,"REST API\u662f\u6c9f\u901a\u8bed\u8a00"),(0,a.kt)("h2",{id:"rest-api-\u5185\u5177\u4f53\u89c4\u5b9a\u4e86\u4ec0\u4e48"},"REST API \u5185\u5177\u4f53\u89c4\u5b9a\u4e86\u4ec0\u4e48"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"REST API \u89c4\u8303\u4e86 API \u8bbe\u8ba1\u7684\u4e24\u5927\u6838\u5fc3\u539f\u5219"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API\u5e94\u8be5\u4f5c\u7528\u4e8e Resource\uff08\u8d44\u6e90\uff09\u4e0a"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u8d44\u6e90\u7684\u64cd\u4f5c\u5e94\u4f7f\u7528\u5bf9\u5e94\u8bed\u4e49\u7684\u51e0\u79cd\u64cd\u4f5c\uff0c\u5305\u62ec\uff1a GET, POST, PUT, PATCH, DELETE")),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u8be6\u7ec6\u89e3\u91ca\u4e00\u4e0b\u8fd9\u4e24\u70b9"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f-rest-api-\u91cc\u7684-resource\u5373\u8d44\u6e90"},"\u4ec0\u4e48\u662f REST API \u91cc\u7684 Resource\uff08\u5373\u8d44\u6e90\uff09"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u8d44\u6e90\u662f\u6307\u4f60\u7684 API \u7528\u6237\u53ef\u64cd\u4f5c\u7684\u903b\u8f91\u5bf9\u8c61\uff0c\u4e3e\u4e2a\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 API \u4e2d\u5141\u8bb8\u8c03\u7528\u8005\u5bf9\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bf4\u7528\u6237\u6ce8\u518c\uff0c\u90a3\u4e48 API \u7c7b\u4f3c\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /users\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u8d44\u6e90\u5373\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"users"),"\u3002\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0cAPI \u4e2d\u7684\u8d44\u6e90\u4e0e\u4f60\u7684\u6570\u636e\u6a21\u578b\uff08\u4e5f\u5c31\u662f\u6570\u636e\u5e93\u7684\u8868\uff09\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002\u5f53\u7136\u4e5f\u6709\u4f8b\u5916\u60c5\u51b5\uff0c\u6bd4\u5982\u8bf4\u4f60\u7684\u6570\u636e\u5e93\u4e2d\u5b58\u6709\u7528\u6237\uff0c\u4f46\u662f\u4f60\u73b0\u5728\u60f3\u8981\u8ba9\u8c03\u7528\u8005\u53ef\u4ee5\u521b\u5efa\u201c\u7ba1\u7406\u5458\u201d\uff0c\u90a3\u4e48 API \u53ef\u80fd\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /admins\n")),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u4f60\u7684\u8868\u4e2d\u5e76\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"admins")," \u8fd9\u4e2a\u8868\uff0c\u800c\u662f\u5426\u662f admin \u662f Users \u8868\u4e2d\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"role=admin"),"\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cREST API\u4e2d\u7684\u8d44\u6e90\u4e00\u5b9a\u9700\u8981\u662f\u540d\u8bcd\uff0c\u5373\u4e00\u5b9a\u662f\u4e00\u4e2a\u5b9e\u5728\u5b58\u5728\u7684\u6982\u5ff5\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7528\u6237"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e10\u53f7"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8f66\u7968"),"\u7b49\uff0c\u6216\u4e00\u4e2a\u62bd\u8c61\u7684\u6982\u5ff5\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6743\u9650")," \u7b49\u3002\u5982\u679c\u4f60\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u521b\u5efa\u67d0\u79cd\u8d44\u6e90\u7684API\u63a5\u53e3\uff0c\u4e0a\u8ff0\u5219\u53ef\u4ee5\u8868\u8ff0\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /indexes\nPOST /accounts\nPOST /docs\n")),(0,a.kt)("p",null,"\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u5bf9\u4e8e\u8d44\u6e90\u7684\u547d\u540d\uff0c\u6211\u4eec\u5efa\u8bae\u7edf\u4e00\u547d\u540d\u4e3a\u4e3a\u82f1\u6587\u7684\u590d\u6570\u3002\u6bd4\u5982\u8bf4 ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," \u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),"\u3002\u540c\u65f6\u8bf7\u6ce8\u610f\u4fdd\u6301\u4e00\u81f4\u6027\uff0c\u5728\u6240\u6709\u5730\u65b9\u7528\u4e00\u6837\u7684\u590d\u6570\u3002"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f-rest-api-\u91cc\u7684\u64cd\u4f5c"},"\u4ec0\u4e48\u662f REST API \u91cc\u7684\u64cd\u4f5c"),(0,a.kt)("p",null,"\u4e00\u65e6\u4f60\u5b9a\u4e49\u4e86\u8d44\u6e90\uff0c\u63a5\u4e0b\u6765\u4f60\u9700\u8981\u5b9a\u4e49\u5141\u8bb8\u8c03\u7528\u8005\u5728\u8fd9\u4e9b\u8d44\u6e90\u4e0a\u505a\u4ec0\u4e48\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u4ee5\u643a\u7a0b\u62a2\u8f66\u7968\u7f51\u7ad9\u4e3a\u4f8b\uff0c\u6211\u4eec\u53ef\u80fd\u5141\u8bb8\u8c03\u7528\u8005\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /tickets")," - \u5217\u51fa\u6240\u6709\u8f66\u7968"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /tickets/9839")," - \u5217\u51fa id \u4e3a 9839 \u8fd9\u5f20\u8f66\u7968\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /tickets")," - \u521b\u5efa\u4e00\u5f20\u8f66\u7968"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUT /tickets/9839")," - \u66f4\u65b0 9839 \u8fd9\u5f20\u8f66\u7968\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PATCH /tickets/9839")," - \u90e8\u5206\u4fee\u6539 983 \u8fd9\u5f20\u8f66\u7968\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u53ea\u4fee\u6539\u8f66\u7968\u4ef7\u683c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DELETE /tickets/9839")," - \u5220\u6389 9839 \u8fd9\u5f20\u8f66\u7968")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5230\u8fd9\u91cc\u4e3a\u6b62\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u603b\u7ed3\u51fa\u6765REST\u7684\u5927\u81f4\u8bbe\u8ba1\u601d\u8def\u4e86\u3002\u5b83\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u7b2c\u4e00\u90e8\u5206\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c"),"\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u53ef\u64cd\u4f5c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90"),"\u3002\u6bd4\u5982\u4e0a\u6587\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /tickets"),"\uff0c\u64cd\u4f5c\u662f GET\uff0c\u53ef\u64cd\u4f5c\u7684\u8d44\u6e90\u662f\u8f66\u7968\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u8bfb\u5230\u8fd9\u91cc\uff0c\u5982\u679c\u4f60\u4e25\u683c\u9075\u5faa\u4e86REST\u7684\u8bbe\u8ba1\u51c6\u5219\uff0c\u4ee5\u53ca\u4f60\u7684\u8c03\u7528\u8005\u4e5f\u4e86\u89e3 REST \u7684\u51c6\u5219\u7684\u8bdd\uff0c\u90a3\u4e48\u5bf9\u4e8e\u5f88\u591a API \u8c03\u7528\uff0c\u4f60\u4eec\u4e0d\u7528\u518d\u53c2\u8003\u4e92\u76f8\u5199\u7684\u6587\u6863\u4e86\u3002\u5982\u679c\u9700\u8981\u8c03\u7528\u4e00\u5f20\u8f66\u7968\u7684\u4fe1\u606f\uff0c\u4f60\u7684\u8c03\u7528\u8005\u81ea\u7136\u4f1a\u77e5\u9053\u5e94\u8be5\u7528GET\u53bb\u67e5\u770b\u4e00\u4e2a\u8f66\u7968\u8d44\u6e90\u7684\u4fe1\u606f\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /tickets/:ticketId"),"\u3002\u8fd9\u6837\u5c31\u6781\u5927\u964d\u4f4e\u4e86\u6c9f\u901a\u6210\u672c\u548c\u51fa\u9519\u6210\u672c\uff0c\u63d0\u5347\u6548\u7387\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728-api-\u4e2d\u8868\u793a\u5b9e\u4f53\u6570\u636e\u5e93\u8868\u95f4\u5173\u7cfb"},"\u5982\u4f55\u5728 API \u4e2d\u8868\u793a\u5b9e\u4f53\uff08\u6570\u636e\u5e93\u8868\uff09\u95f4\u5173\u7cfb"),(0,a.kt)("p",null,"\u5728\u540e\u7aef\u8bbe\u8ba1\u4e2d\uff0c\u6709\u7684\u8d44\u6e90\u903b\u8f91\u4e0a\u65e0\u6cd5\u72ec\u7acb\u5b58\u5728\u3002\u6bd4\u5982\u8bf4\uff0c\u5728\u5361\u62c9\u641c\u7d22\u7684\u4f8b\u5b50\u91cc\uff0c\u7528\u6237\u7684\u6587\u6863\u662f\u65e0\u6cd5\u72ec\u7acb\u4e8e\u7d22\u5f15\u5b58\u5728\u7684\u3002\u90a3\u4e48\u81ea\u7136\u5730\uff0c\u6211\u4eec\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /indexes/index_abc/docs/1\n")),(0,a.kt)("p",null,"\u6765\u8868\u8fbe\u83b7\u53d6\u7d22\u5f15 ",(0,a.kt)("inlineCode",{parentName:"p"},"index_abc")," \u4e2d\u7f16\u53f7\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u6587\u6863\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u6240\u6709\u8d44\u6e90\u9700\u8981\u4f9d\u8d56\u4e8e\u53e6\u4e00\u4e2a\u8d44\u6e90\u5b58\u5728\u65f6\uff0c\u6211\u4eec\u5c31\u6309\u987a\u5e8f\u5728\u7aef\u70b9\u4e2d\u5c06\u8d44\u6e90\u5217\u51fa\u6765\u3002\u5bf9\u4e8e\u5361\u62c9\u641c\u7d22\u4e2d\uff0c\u7d22\u5f15\u548c\u6587\u6863\u7684\u5173\u7cfb\uff0c\u6211\u4eec\u6709\u4ee5\u4e0b\u63a5\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /indexes/index_abc/docs/1")," - \u83b7\u53d6index id\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"index_abc")," \u4e0b\u7684id\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u7684\u6587\u6863"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /indexes/index_abc/docs")," - \u83b7\u53d6index id\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"index_abc")," \u4e0b\u7684\u6240\u6709\u6587\u6863"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /indexes/index_abc/docs")," - \u5728index id\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"index_abc")," \u7684\u7d22\u5f15\u4e2d\uff0c\u6dfb\u52a0\u6587\u6863 ...")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u8d44\u6e90\u53ef\u4ee5\u72ec\u7acb\u4e8e\u53e6\u4e00\u4e2a\u8d44\u6e90\u5b58\u5728\uff0c\u5e76\u4e14\u4f60\u671f\u671b\u4f60\u7684API\u8c03\u7528\u8005\u9891\u7e41\u8c03\u7528\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u76f4\u63a5\u63d0\u4f9b\u5b50\u7aef\u70b9\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u4e00\u4e2a\u5ba0\u7269\u5e97\u4e3b\u4eba\u548c\u5ba0\u7269\u4fe1\u606f\u5206\u522b\u90fd\u5e38\u5e38\u88ab\u540c\u65f6\u8c03\u7528\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8003\u8651"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"GET /owners/  - \u83b7\u53d6\u6240\u6709\u4e3b\u4eba\u4fe1\u606f\nGET /owners/1/pets/ \u83b7\u53d6 id \u4e3a 1 \u7684\u4e3b\u4eba\u7684\u6240\u6709\u5ba0\u7269\nGET /pets/ - \u83b7\u53d6\u6240\u6709\u5ba0\u7269\u4fe1\u606f\uff08\u5ba0\u7269\u5e97\u6240\u6709\u5ba0\u7269\uff09\nGET /pets/13 - \u76f4\u63a5\u83b7\u53d6 id \u4e3a 13 \u7684\u5ba0\u7269\n")),(0,a.kt)("h3",{id:"rest-api\u4e2d\u5982\u4f55\u8868\u793a\u4e00\u4e2a\u52a8\u4f5c"},"REST API\u4e2d\u5982\u4f55\u8868\u793a\u4e00\u4e2a\u52a8\u4f5c"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u5f53\u6211\u4eec\u8bd5\u56fe\u8868\u8fbe\u4e00\u4e9b\u63a5\u53e3\u65f6\uff0c\u4f1a\u53d1\u73b0REST\u7684\u51c6\u5219\u5f88\u96be\u76f4\u63a5\u5e94\u7528\u3002\u6bd4\u5982\u8bf4\uff0c\u5f53\u4f60\u9700\u8981\u4e00\u4e2a\u63a5\u53e3\u8ba9\u7528\u6237\u767b\u5f55\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /users/signin\n")),(0,a.kt)("p",null,"\u4f46\u8981\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"signin")," \u5373\u767b\u5f55\uff0c\u662f\u4e00\u4e2a\u52a8\u8bcd\u3002\u8fd9\u91cc\u662f\u91c7\u7528REST\u51c6\u5219\u65f6\u9700\u8981\u8003\u8651\u7684\u5730\u65b9\uff0c\u4f60\u6709\u4e09\u4e2a\u9009\u62e9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5e0c\u671b\u4e25\u683c\u5730\u9075\u5faa REST \u539f\u5219\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u627e\u4e00\u4e2a\u66ff\u4ee3\u52a8\u8bcd\u7684\u540d\u8bcd\u3002\u6bd4\u5982\u8bf4\uff0c\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"signin")," \u53ef\u4ee5\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"login"),"\u3002\u6216\u8005\uff0c\u5982\u679c\u4f60\u662f\u4ee5 token \u5bc6\u94a5\u7684\u65b9\u5f0f\u767b\u5f55\u7684\u8bdd\uff0c\u4e5f\u8bb8\u53ef\u4ee5\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /users/token"),"\uff0c\u5373\u521b\u5efa\u4e00\u4e2a user token(\u4e5f\u5c31\u662f\u767b\u5f55\u4e86)"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u67d0\u4e9b\u5b9e\u5728\u56f0\u96be\u7684\u5730\u65b9\uff0c\u653e\u5f03\u4e25\u683c\u7684REST\u539f\u5219"),(0,a.kt)("li",{parentName:"ol"},"\u53c2\u8003\u4e00\u4e9b\u6210\u529f\u7684 REST API \u5e76\u5bfb\u627e\u7c7b\u4f3c\u7684 API\uff0c\u53c2\u8003\u4ed6\u4eec\u7684\u547d\u540d\u8bbe\u8ba1")),(0,a.kt)("p",null,"\u5bf9\u4e8e3\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u4f60\u53c2\u8003 github \u7684 API\uff0c\u539f\u56e0\u4e0d\u5149\u662f\u5176\u6781\u4e3a\u89c4\u8303\uff0c\u8fd8\u6709\u5b83\u8986\u76d6\u4e86\u6781\u591a\u7684 API \u8c03\u7528\u7684\u60c5\u666f\uff0c\u56e0\u6b64\u5927\u6982\u7387\u4f60\u53ef\u4ee5\u627e\u5230\u4e2a\u7c7b\u4f3c\u7684\u547d\u540d\u53c2\u8003\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u5728 github \u4e0a\uff0c\u5982\u679c\u8ba9\u4f60\u6765\u8bbe\u8ba1\u52a0\u661f\u8fd9\u4e2a\u64cd\u4f5c\uff0c\u4f60\u4f1a\u628a\u7aef\u70b9\u88ab\u8bbe\u8ba1\u6210\u4ec0\u4e48\u6837\uff1f"),(0,a.kt)("p",null,"Github\u628a\u52a0\u661f\u7aef\u70b9\u8bbe\u8ba1\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT /gists/:id/star"),"\uff0c\u628a\u53d6\u6d88\u52a0\u661f\u8bbe\u8ba1\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /gitsts/:id/star"),'\u3002\u8fd9\u6837\u5c31\u5b8c\u7f8e\u5730\u9075\u5faa\u4e86 REST \u540d\u8bcd\u4f5c\u4e3a\u8d44\u6e90\u7684\u51c6\u5219\uff0c\u628a\u52a8\u8bcd"\u52a0\u661f\u201c\u5b8c\u7f8e\u5730\u7528 ',(0,a.kt)("inlineCode",{parentName:"p"},"PUT/DELETE")," \u4e24\u4e2a\u64cd\u4f5c\uff0c\u6e05\u6670\u5730\u8868\u8fbe\u4e86\u51fa\u6765\u3002"),(0,a.kt)("h2",{id:"rest-api-\u8bbe\u8ba1\u5e38\u89c1\u95ee\u9898\u548c\u5efa\u8bae"},"REST API \u8bbe\u8ba1\u5e38\u89c1\u95ee\u9898\u548c\u5efa\u8bae"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u63cf\u8ff0\u4e86 REST \u8bbe\u8ba1\u7684\u51c6\u5219\uff0c\u800c\u5728\u51c6\u5219\u4e2d\u5e76\u4e0d\u5305\u62ec\u5176\u5b83\u201d\u6700\u4f73\u5b9e\u8df5\u201c\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5176\u5b9e\u5e76\u6ca1\u6709\u4ec0\u4e48\u5ba2\u89c2\u6807\u51c6\uff0c\u53ea\u662f\u8f6f\u4ef6\u5de5\u7a0b\u548c\u67b6\u6784\u7ecf\u8fc7\u591a\u5e74\u7684\u53d1\u5c55\uff0cREST API \u7684\u8bbe\u8ba1\u4e5f\u4ece\u5341\u51e0\u5e74\u524d\u7b80\u5355\u7684web \u5e94\u7528\uff0c\u5230\u5e94\u7528\u5230\u73b0\u5728\u8d8a\u6765\u8d8a\u590d\u6742\u4f01\u4e1a\u7ea7\u8f6f\u4ef6\u4e2d\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u521a\u521a\u5f00\u59cb\u5b66\u4e60 REST API \u7684\u8bbe\u8ba1\uff0c\u53c2\u8003\u8fd9\u4e9b\u5b9e\u8df5\u7ecf\u9a8c\u5c06\u4f1a\u6709\u975e\u5e38\u5927\u7684\u5e2e\u52a9\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5c11\u8d70\u4e0d\u5c11\u7ed5\u8def\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(1142).Z},(0,a.kt)("img",{alt:"REST API \u6700\u4f73\u5b9e\u8df5",src:n(3967).Z,width:"700",height:"368"})),"REST API \u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h3",{id:"rest-api-\u5982\u4f55\u533a\u5206\u7248\u672c"},"REST API \u5982\u4f55\u533a\u5206\u7248\u672c"),(0,a.kt)("p",null,"\u5728\u8bbe\u8ba1 REST API \u65f6\uff0c\u4f60\u5e94\u8be5\u65f6\u523b\u51c6\u5907\u597d\u4e0d\u65ad\u66f4\u65b0 API\u3002\u60f3\u8981\u628a API\u7a33\u5b9a\u540e\u518d\u4e00\u6b21\u53d1\u5e03\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u4e0d\u5b9e\u9645\u7684\u2014\u2014\u8001\u677f\u8981\u50ac\u8fdb\u5ea6\uff0c\u7528\u6237\u8981\u50ac\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u5728\u8bbe\u8ba1 API \u7684\u65f6\u5019\u5c31\u5e94\u8be5\u628a\u652f\u6301 API \u6539\u52a8\u8bbe\u8ba1\u5230API\u672c\u8eab\u4e2d\u3002"),(0,a.kt)("p",null,"\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5728\u4e00\u7248 API \u5df2\u7ecf\u6210\u719f\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u63d0\u524d\u53d1\u5e03\uff0c\u540c\u65f6\u5f00\u59cb\u8fdb\u884c\u4e0b\u4e00\u7248\u7684\u5f00\u53d1\u3002\u800c\u4f60\u53ea\u9700\u8981\u5728URL\u4e2d\u533a\u5206\u597d API \u7684\u7248\u672c\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u5728\u5927\u81f4\u5c06 v1 \u5f00\u53d1\u5b8c\u6bd5\u540e\uff0cv1 \u524d\u7f00\u7684 API \u5c31\u5e94\u8be5\u7a33\u5b9a\u4e0b\u6765\uff0c\u6240\u6709\u7684\u6539\u52a8\u8fdb\u5165 v2\u3002\u540c\u65f6\u4f60\u5e94\u8be5\u5f00\u59cb\u901a\u77e5\u6240\u6709\u4f7f\u7528 v1 \u7684\u7528\u6237\uff0c\u7ed9\u4ed6\u4eec\u51e0\u5468\u5230\u51e0\u4e2a\u6708\u7684\u65f6\u95f4\uff0c\u5e2e\u52a9\u4ed6\u4eec\u5e73\u6ed1\u8fc1\u79fb\u5230 v2"),(0,a.kt)("p",null,"\u5e26\u6709\u7248\u672c\u524d\u7f00\u7684 API \u793a\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"GET /v1/indexes/\nGET /v1/indexes/abc/\nPOST /v1/indexes/\n")),(0,a.kt)("h3",{id:"rest-api-\u5e94\u8be5\u8fd4\u56de\u4ec0\u4e48"},"REST API \u5e94\u8be5\u8fd4\u56de\u4ec0\u4e48"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u901a\u5219\uff0c\u6211\u4eec\u5efa\u8bae REST API \u6c38\u8fdc\u8fd4\u56de JSON \u683c\u5f0f\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u539f\u56e0\u6709\u51e0\u4e2a\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\uff0cJSON \u4f5c\u4e3a\u4e92\u8054\u7f51\u4e0a\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u683c\u5f0f\uff0c\u5728\u51e0\u4e4e\u4efb\u4f55\u8bed\u8a00\u7684\u4efb\u4f55\u6846\u67b6\u4e2d\u90fd\u6709\u5e7f\u6cdb\u7684\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u7531\u4e8e\u5176\u9ad8\u5ea6\u7684\u53ef\u8bfb\u6027\uff0c\u5982\u679c\u9700\u8981\u9605\u8bfb\u8fd4\u56de\u5185\u5bb9\uff0cJSON \u4f1a\u8ba9\u4f60\u7684\u8c03\u7528\u8005\u9605\u8bfb\u8d77\u6765\u65b9\u4fbf\u5f88\u591a\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0cJSON \u7684\u9ad8\u538b\u7f29\u7387\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u65b9\u4fbf\u5730\u5e2e\u4f60\u63d0\u5347\u4f20\u8f93\u6548\u7387\u548c\u901f\u5ea6\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u7ed9\u4f60\u7684-api-\u7f16\u5199\u6587\u6863"},"\u4e3a\u4ec0\u4e48\u8981\u7ed9\u4f60\u7684 API \u7f16\u5199\u6587\u6863"),(0,a.kt)("p",null,"\u5199\u4ee3\u7801\u65f6\uff0c\u9047\u5230\u7a0d\u590d\u6742\u7684\u903b\u8f91\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u5982\u679c\u6ca1\u6709\u6ce8\u91ca\uff0c\u4e00\u4e2a\u6708\u540e\u56de\u6765\u53d1\u73b0\u81ea\u5df1\u5f53\u65f6\u5199\u7684\u4ee3\u7801\u6839\u672c\u4e0d\u50cf\u81ea\u5df1\u4eb2\u751f\u7684\u3002\u518d\u8bd5\u56fe\u719f\u6089\u65f6\uff0c\u53ef\u80fd\u51e0\u4e2a\u5c0f\u65f6\u5c31\u8fc7\u53bb\u4e86\u3002"),(0,a.kt)("p",null,"\u540c\u6837\uff0c\u5bf9\u4e8e API \u6765\u8bf4\uff0c\u5982\u679c\u4f60\u4e0d\u5199\u6587\u6863\uff0c\u90a3\u4e48\u5728\u96c6\u6210\u65f6\uff0c\u4f60\u7684\u8c03\u7528\u8005\u80af\u5b9a\u4e00\u8fb9\u9a82\uff0c\u4e00\u8fb9\u5c1d\u8bd5\u5404\u79cd\u53c2\u6570\u7ec4\u5408\u3002\u4e3a\u4e86\u8ba9\u4f60\u7684\u8c03\u7528\u8005\u6709\u66f4\u987a\u6ed1\u7684\u63a5\u5165\u4f53\u9a8c\uff0c\u6bcf\u4e2a API \u7684\u8bbe\u8ba1\u8005\u90fd\u5e94\u8be5\u628a API \u6587\u6863\u4f5c\u4e3a\u4e0e API \u7684\u4ee3\u7801\u4e00\u6837\u91cd\u8981\u7684\u6a21\u5757\u3002"),(0,a.kt)("p",null,'\u597d\u7684 API \u6587\u6863\u4e0d\u5149\u53ef\u4ee5\u65b9\u4fbf\u8c03\u7528\u8005\u7684\u63a5\u5165\uff0c\u66f4\u53ef\u4ee5\u65b9\u4fbf\u8ba9\u4f60\u628a API \u66f4\u6539\u7b49\u4fe1\u606f\u4f20\u9012\u51fa\u53bb\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u4e00\u4e2a\u5355\u72ec\u901a\u77e5\u4f60\u7684\u7528\u6237\u3002\u540c\u65f6\u5728\u7f16\u5199\u6587\u6863\u65f6\uff0c\u4f60\u4e5f\u4f1a\u5c1d\u8bd5\u7740\u4ee5\u4f60\u63cf\u8ff0\u5730\u65b9\u5f0f\u63a5\u5165\uff0c\u95f4\u63a5\u505a\u4e86\u4e00\u6b21"dog food"\u81ea\u6d4b\u3002'),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u662f\u9762\u5411\u5f00\u53d1\u8005\u7684 API \u7684\u8bdd\uff0c\u4f18\u79c0\u7684 API \u6587\u6863\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u5f3a\u5927\u7684\u54c1\u724c\u5ba3\u4f20\u3002\u5728\u5361\u62c9\u641c\u7d22\u6211\u4eec\u82b1\u5927\u529b\u6c14\u7ef4\u62a4\u6211\u4eec\u7684\u6587\u6863\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u53c2\u8003\u548c\u81f4\u656c\u5176\u5b83\u6211\u4eec\u7528\u8fc7\u6216\u8005\u89c9\u5f97\u503c\u5f97\u5938\u5956\u7684 API \u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kalasearch.cn/docs"},"\u5361\u62c9\u641c\u7d22 API \u6587\u6863 - \u7528 API \u5b9e\u73b0\u641c\u7d22\u5f15\u64ce")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leancloud.cn/docs/rest_api.html"},"Leancloud API\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.github.com/v3/"},"Github API \u6587\u6863"))),(0,a.kt)("h3",{id:"\u9ed8\u8ba4\u5f00\u542f-gzip-\u548c-pretty-print"},"\u9ed8\u8ba4\u5f00\u542f Gzip \u548c Pretty print"),(0,a.kt)("p",null,"\u5728\u8fd4\u56de\u4f60\u7684 REST API \u7ed3\u679c\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u6253\u5f00 Gzip \u548c Pretty print \u4e24\u4e2a\u9009\u9879\u3002"),(0,a.kt)("h4",{id:"\u6253\u5f00-gzip"},"\u6253\u5f00 Gzip"),(0,a.kt)("p",null,"Gzip \u975e\u5e38\u597d\u7406\u89e3\uff0c\u5728\u76ee\u524d\u7684\u666e\u901a\u624b\u673a\u7b97\u529b\u5df2\u7ecf\u63a5\u8fd1\u5341\u51e0\u5e74\u524d\u7684\u9876\u914d\u8ba1\u7b97\u673a\u7684\u524d\u63d0\u4e0b\uff0cCPU \u4e0d\u518d\u662f\u8fd0\u7b97\u7684\u74f6\u9888\u3002\u800c\u7f51\u7edc\u5e26\u5bbd\u7684\u6269\u5bbd\u901f\u5ea6\u5219\u8fdc\u6ca1\u6709\u8ffd\u4e0a CPU \u53d8\u5feb\u7684\u901f\u5ea6\u3002\u56e0\u6b64\uff0c\u5982\u679c\u6709\u53ef\u80fd\u7684\u8bdd\uff0c\u7528 CPU \u7684\u65f6\u95f4\u6362\u53d6\u7f51\u7edc\u7684\u4f20\u8f93\u65f6\u95f4\u662f\u975e\u5e38\u503c\u5f97\u7684\u3002\u8fd9\u4e5f\u5c31\u662f\u8bf4\uff0c\u6253\u5f00\u9ed8\u8ba4 Gzip \u538b\u7f29\uff0c\u4f1a\u8ba9\u4f60\u7684 JSON \u7ed3\u679c\u8017\u8d39\u5c11\u91cf\u7684\u670d\u52a1\u5668 CPU\uff0c\u4f46\u5374\u80fd\u5927\u5927\u52a0\u5feb\u4f20\u8f93\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u5efa\u8bae\u9ed8\u8ba4\u5c06 Gzip \u6253\u5f00\u3002"),(0,a.kt)("h4",{id:"\u6253\u5f00-pretty-print"},"\u6253\u5f00 Pretty Print"),(0,a.kt)("p",null,"\u4ec0\u4e48\u662f Pretty print \u5462\uff1f\u7b80\u5355\u8bf4\u5c31\u662f\u5728 JSON \u4e2d\u63d2\u5165\u7a7a\u683c\u548c\u6362\u884c\uff0c\u8ba9 JSON \u53d8\u5f97\u7f8e\u89c2\uff0c\u65b9\u4fbf\u4eba\u9605\u8bfb\u3002\u6bd4\u5982\u4e0b\u9762\u4e0d\u662fPretty print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{"name":"\u5927\u8bdd\u897f\u6e38","actor":"\u5468\u661f\u9a70\u201d}\n')),(0,a.kt)("p",null,"\u800c\u4e0b\u9762\u662f\u6253\u5f00 Pretty print \u540e\u7684\u540c\u4e00\u4e2a JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "\u5927\u8bdd\u897f\u6e38",\n  "actor": "\u5468\u661f\u9a70\u201d\n}\n')),(0,a.kt)("p",null,"\u5728 JSON \u7a0d\u53d8\u5f97\u590d\u6742\u4e4b\u540e\uff0c\u5982\u679c\u6ca1\u6709 Pretty print \u7684 JSON \u5c06\u4f1a\u53d8\u5f97\u5b8c\u5168\u4e0d\u53ef\u8bfb\u3002\u867d\u7136\u6253\u5f00 Pretty print \u4f1a\u589e\u52a0\u4e00\u4e9b\u7a7a\u767d\u5b57\u7b26\uff0c\u4f46\u662f\u7531\u4e8e\u6253\u5f00 Gzip \u538b\u7f29\uff0c\u8fd9\u4e9b\u7a7a\u767d\u5b57\u7b26\u6240\u5360\u7528\u7684\u7a7a\u95f4\u90fd\u4f1a\u88ab\u538b\u7f29\u6389\uff0c\u6240\u4ee5\u5e76\u4e0d\u7528\u62c5\u5fc3\u7f51\u7edc\u4f20\u8f93\u65f6\uff0cJSON \u53d8\u5f97\u66f4\u5927\u66f4\u6162\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"API\u662f\u7a0b\u5e8f\u5458\u4e0e\u7a0b\u5e8f\u5458\u6c9f\u901a\u7684\u8bed\u8a00\uff0c\u4e00\u4e2a\u4f18\u79c0\u7684API\u4e0d\u5149\u53ef\u4ee5\u8ba9\u4f60\u7ef4\u62a4\u8d77\u6765\u66f4\u8f7b\u677e\uff0c\u4e5f\u4f1a\u8ba9\u4f60\u7684\u8c03\u7528\u8005\u5728\u4f7f\u7528\u65f6\u66f4\u5f97\u5fc3\u5e94\u624b\u3002\u9075\u5faa REST \u51c6\u5219\u8bbe\u8ba1\u51fa\u6765\u7684\u4f18\u79c0\u7684 API\uff0c\u53ef\u4ee5\u51cf\u5c11\u4f60\u4e0e\u8c03\u7528\u8005\u4e4b\u95f4\u7684\u6c9f\u901a\u6210\u672c\uff0c\u8ba9\u4f60\u53ef\u4ee5\u7528\u66f4\u591a\u7684\u65f6\u95f4\u4e13\u6ce8\u5728\u5176\u5b83\u66f4\u91cd\u8981\u7684\u4e8b\u60c5\u4e0a\u3002"))}s.isMDXComponent=!0},1142:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/files/1-dd80166624b4ba531878842200a0d4b9.png"},3967:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1-dd80166624b4ba531878842200a0d4b9.png"}}]);