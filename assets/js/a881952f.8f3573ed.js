"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8955],{224:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2374);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(6252),a=(r(2374),r(224));const o={title:"JAVA 9 \u7279\u6027",sidebar_label:"JAVA 9"},i=void 0,l={unversionedId:"Java/JAVA-9",id:"Java/JAVA-9",title:"JAVA 9 \u7279\u6027",description:"JAVA 9 \u975eLTS (Long-Term-Support) \u7248\u672c",source:"@site/docs/Java/JAVA-9.md",sourceDirName:"Java",slug:"/Java/JAVA-9",permalink:"/docs/Java/JAVA-9",draft:!1,editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/docs/Java/JAVA-9.md",tags:[],version:"current",lastUpdatedAt:1662621389,formattedLastUpdatedAt:"2022\u5e749\u67088\u65e5",frontMatter:{title:"JAVA 9 \u7279\u6027",sidebar_label:"JAVA 9"},sidebar:"tutorialSidebar",previous:{title:"JAVA 8",permalink:"/docs/Java/JAVA-8"},next:{title:"\u524d\u7aefJS\u7c7b\u5e93",permalink:"/docs/front-end/js-class-library"}},c={},p=[{value:"\u521b\u5efa\u4e0d\u53ef\u53d8\u96c6\u5408",id:"\u521b\u5efa\u4e0d\u53ef\u53d8\u96c6\u5408",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"JAVA 9 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u975eLTS")," (Long-Term-Support) \u7248\u672c")),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e0d\u53ef\u53d8\u96c6\u5408"},"\u521b\u5efa\u4e0d\u53ef\u53d8\u96c6\u5408"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u96c6\u5408\u4e3a\u4e0d\u53ef\u53d8\u96c6\u5408\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"List.of()\nList.of(e1)\nList.of(e1, e2)         // fixed-argument\u8868\u5355\u6700\u591a\u53ef\u91cd\u8f7d10\u4e2a\u5143\u7d20\nList.of(elements...)   //varargs\u8868\u5355\u652f\u6301\u4efb\u610f\u6570\u91cf\u7684\u5143\u7d20\u6216\u6570\u7ec4\n")),(0,a.kt)("p",null,"Guava\u63d0\u4f9b\u7684Immutable\u4e0d\u53ef\u53d8\u96c6\u5408\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'ImmutableList immutableList = ImmutableList.of("wyp", "good");\n')))}u.isMDXComponent=!0}}]);