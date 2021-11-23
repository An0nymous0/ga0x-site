"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6799],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),g=n,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7165:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return g}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"graalvm \u5728 macOS Catalina \u4e0a\u63d0\u793a\u65e0\u6cd5\u9a8c\u8bc1\u5f00\u53d1\u4eba\u5458\u8b66\u544a\u95ee\u9898",authors:"gaoxu",tags:["macOS","GraalVM"]},c=void 0,u={permalink:"/blog/2021/11/03/graalvm-damaged-error",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-03-graalvm-damaged-error/index.md",source:"@site/blog/2021-11-03-graalvm-damaged-error/index.md",title:"graalvm \u5728 macOS Catalina \u4e0a\u63d0\u793a\u65e0\u6cd5\u9a8c\u8bc1\u5f00\u53d1\u4eba\u5458\u8b66\u544a\u95ee\u9898",description:"img.png",date:"2021-11-03T00:00:00.000Z",formattedDate:"November 3, 2021",tags:[{label:"macOS",permalink:"/blog/tags/mac-os"},{label:"GraalVM",permalink:"/blog/tags/graal-vm"}],readingTime:.56,truncated:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],prevItem:{title:"Spring Boot Redis lettuce\u9a71\u52a8\u8fde\u63a5\u51fa\u73b0 io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required.",permalink:"/blog/2021/11/23/lettuce-error-noauth"},nextItem:{title:"JetBrains\u5168\u7cfb\u5217\u8f6f\u4ef6\u6fc0\u6d3b\u6559\u7a0b",permalink:"/blog/2021/11/01/jetbrains-crack"}},p={authorsImageUrls:[void 0]},m=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u5982\u4f55\u89e3\u51b3",id:"\u5982\u4f55\u89e3\u51b3",children:[],level:2}],s={toc:m};function g(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:r(4691).Z})),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"\u63d0\u793a:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cgraalvm-ce-java11-20.3.0\u201d is damaged and can\u2019t be opened."),(0,o.kt)("p",{parentName:"blockquote"},"\u6216"),(0,o.kt)("p",{parentName:"blockquote"},"\u201cgraalvm-ce-java11-21.3.0\u201d\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\u3002")),(0,o.kt)("h2",{id:"\u5982\u4f55\u89e3\u51b3"},"\u5982\u4f55\u89e3\u51b3"),(0,o.kt)("p",null,"\u5728 macOS Catalina \u4e0a\uff0c\u60a8\u53ef\u80fd\u4f1a\u6536\u5230\u201c\u65e0\u6cd5\u9a8c\u8bc1\u5f00\u53d1\u4eba\u5458\u201d\u7684\u8b66\u544a\u3002\u8fd9\u662f\u56e0\u4e3a GraalVM \u5c1a\u672a\u7b7e\u540d\u548c\u8ba4\u8bc1\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u5728\u201c\u5b89\u5168\u548c\u9690\u79c1\u201d\u9996\u9009\u9879\u7a97\u683c\u4e2d\u6216\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u7981\u7528\u8be5\u68c0\u67e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xattr -r -d com.apple.quarantine /Library/Java/JavaVirtualMachines/graalvm-ce-javaV-XX.Y.Z\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/graalvm/homebrew-tap#macos-catalina-specifics"},"\u5b98\u65b9\u89e3\u91ca\u548c\u8bf4\u660e")))}g.isMDXComponent=!0},4691:function(e,t,r){t.Z=r.p+"assets/images/img-5619a4dc6afa0937df25f4b4a3854300.png"}}]);