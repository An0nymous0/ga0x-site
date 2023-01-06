"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6057],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,v=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const o={title:"macOS\u8fd0\u884cJava GUI\u7a0b\u5e8f\u63d0\u793a\u7f3a\u5c11\u5b57\u4f53\u6216\u63d0\u793a\u8fd0\u884c\u5931\u8d25\u95ee\u9898\u89e3\u51b3",authors:"gaoxu",tags:["JAVA"]},i=void 0,l={permalink:"/blog/2022/09/26/macOS-Failed-to-run-java-gui",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2022-09-26-macOS-Failed-to-run-java-gui.md",source:"@site/blog/2022-09-26-macOS-Failed-to-run-java-gui.md",title:"macOS\u8fd0\u884cJava GUI\u7a0b\u5e8f\u63d0\u793a\u7f3a\u5c11\u5b57\u4f53\u6216\u63d0\u793a\u8fd0\u884c\u5931\u8d25\u95ee\u9898\u89e3\u51b3",description:"\u51fa\u73b0\u8b66\u544a",date:"2022-09-26T00:00:00.000Z",formattedDate:"2022\u5e749\u670826\u65e5",tags:[{label:"JAVA",permalink:"/blog/tags/java"}],readingTime:.24666666666666667,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"macOS\u8fd0\u884cJava GUI\u7a0b\u5e8f\u63d0\u793a\u7f3a\u5c11\u5b57\u4f53\u6216\u63d0\u793a\u8fd0\u884c\u5931\u8d25\u95ee\u9898\u89e3\u51b3",authors:"gaoxu",tags:["JAVA"]},prevItem:{title:"macOS\u7ba1\u7406\u591a\u4e2aJava JDK \u7248\u672c",permalink:"/blog/2022/09/29/how-to-manage-multiple-java-versions-on-mac"},nextItem:{title:"JavaVM FATAL: Failed to load the jvm library",permalink:"/blog/2022/09/21/JavaVM-FATAL-Failed-to-load-the-jvm-library"}},c={authorsImageUrls:[void 0]},u=[{value:"\u51fa\u73b0\u8b66\u544a",id:"\u51fa\u73b0\u8b66\u544a",level:3},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u51fa\u73b0\u8b66\u544a"},"\u51fa\u73b0\u8b66\u544a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'Warning: the fonts "Times" and "Lucida Bright" are not available for the Java logical font "Serif", which may have unexpected appearance or behavior. Re-enable the "Times" font to remove this warning.\n')),(0,n.kt)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,n.kt)("p",null,"\u4f60\u7684\u82f9\u679c\u7535\u8111\u7f3a\u5c11Times\u5b57\u4f53"),(0,n.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("p",null,"\u8fdb\u5165\u4e0b\u65b9\u94fe\u63a5\u4e0b\u8f7d\u5b57\u4f53\u53cc\u51fb\u5b89\u88c5\u5c31\u597d\u4e86\n",(0,n.kt)("a",{parentName:"p",href:"https://www.freebestfonts.com/timr45w-font"},"https://www.freebestfonts.com/timr45w-font")))}m.isMDXComponent=!0}}]);