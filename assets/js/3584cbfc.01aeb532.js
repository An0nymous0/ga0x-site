"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8570],{4137:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||v[m]||l;return t?n.createElement(d,p(p({ref:a},c),{},{components:t})):n.createElement(d,p({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4960:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(7462),r=(t(7294),t(4137));const l={title:"JAVA 10 \u7279\u6027",sidebar_label:"JAVA 10"},p=void 0,o={unversionedId:"Java/JAVA-10",id:"Java/JAVA-10",title:"JAVA 10 \u7279\u6027",description:"JAVA 10 \u975eLTS (Long-Term-Support) \u7248\u672c",source:"@site/docs/Java/JAVA-10.md",sourceDirName:"Java",slug:"/Java/JAVA-10",permalink:"/docs/Java/JAVA-10",draft:!1,editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/docs/Java/JAVA-10.md",tags:[],version:"current",lastUpdatedAt:1635152455,formattedLastUpdatedAt:"2021\u5e7410\u670825\u65e5",frontMatter:{title:"JAVA 10 \u7279\u6027",sidebar_label:"JAVA 10"},sidebar:"tutorialSidebar",previous:{title:"Gradle \u6253\u5305\u5e76\u4e0a\u4f20\u5230\u79c1\u670d\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u4f9d\u8d56",permalink:"/docs/Java/gradle/gradle-publish-a-java-library-to-a-maven-private-repository"},next:{title:"JAVA 8",permalink:"/docs/Java/JAVA-8"}},i={},u=[{value:"Java 10",id:"java-10",level:2},{value:"\u5c40\u90e8\u53d8\u91cf\u7c7b\u578b\u63a8\u65ad",id:"\u5c40\u90e8\u53d8\u91cf\u7c7b\u578b\u63a8\u65ad",level:2},{value:"var \u4e0d\u5e94\u8be5\u88ab\u6ee5\u7528",id:"var-\u4e0d\u5e94\u8be5\u88ab\u6ee5\u7528",level:3},{value:"\u4e0d\u53ef\u53d8\u96c6\u5408",id:"\u4e0d\u53ef\u53d8\u96c6\u5408",level:2},{value:"\u96c6\u5408\u526f\u672c",id:"\u96c6\u5408\u526f\u672c",level:3},{value:"Optional.orElseThrow()",id:"optionalorelsethrow",level:2},{value:"\u5176\u5b83\u589e\u5f3a\u7279\u6027",id:"\u5176\u5b83\u589e\u5f3a\u7279\u6027",level:2}],c={toc:u};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"JAVA 10 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u975eLTS")," (Long-Term-Support) \u7248\u672c")),(0,r.kt)("h2",{id:"java-10"},"Java 10"),(0,r.kt)("p",null,"\u4eceJava 10 \u5f00\u59cb\uff0cJava\u7684\u8fed\u4ee3\u5468\u671f\u7f29\u77ed\u4e3a\u534a\u5e74\uff0c\u534a\u5e74\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u5c40\u90e8\u53d8\u91cf\u7c7b\u578b\u63a8\u65ad"},"\u5c40\u90e8\u53d8\u91cf\u7c7b\u578b\u63a8\u65ad"),(0,r.kt)("p",null,"\u5728Java 6\u65f6\u521d\u59cb\u5316\u4e00\u4e2aMap\u9700\u8981\u6211\u4eec\u8fd9\u6837\u6765\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<String, String> map = new HashMap<String,String>();\n")),(0,r.kt)("p",null,"\u4e8b\u5b9e\u4e0a\u6cdb\u578b\u65b9\u6cd5\u7684\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u6587\u63a8\u5bfc\u51fa\u6765\uff0c\u6240\u4ee5\u5728Java 7 \u4e2d\u7b80\u5316\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<String, String> map = new HashMap<>();\n")),(0,r.kt)("p",null,"\u5230\u4e86Java 10 \u8fdb\u4e00\u6b65\u5347\u534e\u4e86\u7c7b\u578b\u63a8\u65ad\uff0c\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var map = Map.of("hello","world");\nString var = map.get("hello");\n')),(0,r.kt)("p",null,"\u731b\u4e00\u770b\u8fd8\u4ee5\u4e3a\u662fJavascript\u7684\u5199\u6cd5\uff0c\u4e8b\u5b9e\u4e0a\u8fd9\u5c31\u662fJava\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"\u7f16\u8bd1\u5668\u4ece\u53f3\u4fa7\u7684\u521d\u59cb\u5316\u7a0b\u5e8f\u7684\u7c7b\u578b\u63a8\u65ad\u51fa\u521d\u59cb\u5316\u7c7b\u578b"),"\uff0c\u8fd9\u5c06\u5927\u91cf\u51cf\u5c11\u4e00\u4e9b\u6837\u677f\u4ee3\u7801\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0d\u8fc7\u8bf7\u6ce8\u610f\uff0c\u6b64\u7279\u6027\u4ec5\u9002\u7528\u4e8e\u521d\u59cb\u5316\u5c40\u90e8\u53d8\u91cf\uff0c\u5b83\u4e0d\u80fd\u7528\u4e8e\u6210\u5458\u53d8\u91cf\u3001\u65b9\u6cd5\u53c2\u6570\u3001\u8fd4\u56de\u7c7b\u578b\u7b49\u573a\u666f\u4e2d"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53e6\u4e00\u4ef6\u8981\u6ce8\u610f\u7684\u4e8b\u60c5\u662fvar \u5e76\u4e0d\u662fJava\u4e2d\u7684\u5173\u952e\u5b57\uff0c\u8fd9\u786e\u4fdd\u4e86Java\u7684\u5411\u540e\u517c\u5bb9\u6027\u3002\u53e6\u5916\u4f7f\u7528var\u6ca1\u6709\u8fd0\u884c\u65f6\u5f00\u9500\uff0c\u4e5f\u4e0d\u4f1a\u4f7f Java \u6210\u4e3a\u52a8\u6001\u8bed\u8a00\u3002var\u6807\u8bb0\u7684\u53d8\u91cf\u7684\u7c7b\u578b\u4ecd\u7136\u662f\u5728\u7f16\u8bd1\u65f6\u63a8\u65ad\u51fa\u6765\u3002")),(0,r.kt)("h3",{id:"var-\u4e0d\u5e94\u8be5\u88ab\u6ee5\u7528"},"var \u4e0d\u5e94\u8be5\u88ab\u6ee5\u7528"),(0,r.kt)("p",null,"\u7136\u8fd9\u6837\u201c\u723d\u8d77\u6765\u4e86\u201d\uff0c\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u4e5f\u4e0d\u5e94\u8be5\u88ab\u6ee5\u7528\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u79cd\u5199\u6cd5\u660e\u7ec6\u53ef\u8bfb\u6027\u5dee\uff0c\u5bfc\u81f4\u53d8\u91cf\u7684\u7c7b\u578b\u9700\u8981\u4f60\u53bbDEBUG:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var data = someObject.getData();\n")),(0,r.kt)("p",null,"\u6d41\u4e2d\u4e5f\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// \u53ef\u8bfb\u6027\u5dee\nvar names= apples.stream()\n.map(Apple::getName)\n.collect(Collectors.toList());\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u65f6\u5e94\u8be5\u4fdd\u8bc1\u5fc5\u8981\u7684\u53ef\u8bfb\u6027\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5728\u591a\u6001\u8fd9\u4e2a\u91cd\u8981\u7684Java\u7279\u6027\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u8868\u73b0\u7684\u5e76\u4e0d\u662f\u5f88\u5b8c\u7f8e\u3002\u5982\u679cFruit\u6709Apple\u548cOrange\u4e24\u79cd\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var x = new Apple();\n")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5bf9x\u91cd\u65b0\u8d4b\u503c\u4e3anew Orange()\u5c31\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u7f16\u8bd1\u540ex\u7684\u7c7b\u578b\u5c31\u5df2\u7ecf\u56fa\u5b9a\u4e0b\u6765\u4e86\u3002\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u548c\u6cdb\u578b\u4e00\u6837\u90fd\u662f\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u8d77\u4e86\u4f5c\u7528\u3002\u4f60\u5fc5\u987b\u4fdd\u8bc1var\u7684\u7c7b\u578b\u662f\u786e\u5b9a\u7684\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u90a3\u4e48\u8bdd\u53c8\u8bf4\u56de\u6765\u4e86\uff0cvar\u7ed3\u5408\u6cdb\u578b\u7684\u94bb\u77f3\u7b26\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),"\u4f1a\u6709\u4ec0\u4e48\u60c5\u51b5\u53d1\u751f\u5462\uff1f")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684 empList\u7684\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<Object>"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var empList = new ArrayList<>();\n")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u660e\u786e\u96c6\u5408\u4e2d\u653e\u7684\u90fd\u662fApple\u5c31\u5fc5\u987b\u5728\u53f3\u8fb9\u663e\u5f0f\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var apples = new ArrayList<Apple>();\n")),(0,r.kt)("h2",{id:"\u4e0d\u53ef\u53d8\u96c6\u5408"},"\u4e0d\u53ef\u53d8\u96c6\u5408"),(0,r.kt)("p",null,"\u5176\u5b9e\u5728Java 9\u4e2d\u4e0d\u53ef\u53d8\u96c6\u5408\u5df2\u7ecf\u5f97\u5230\u4e86\u4e00\u4e9b\u52a0\u5f3a\uff0c\u5728Java 10\u4e2d\u8fdb\u4e00\u6b65\u52a0\u5f3a\u4e86\u4e0d\u53ef\u53d8\u96c6\u5408\u3002\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u53d8\u96c6\u5408\u53d8\u5f97\u5982\u6b64\u91cd\u8981\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u53d8\u6027\uff08immutability\uff09\uff0c\u8fd9\u662f\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u57fa\u77f3\u4e4b\u4e00\uff0c\u56e0\u6b64\u52a0\u5f3a\u4e0d\u53ef\u53d8\u96c6\u5408\u6709\u52a9\u4e8e\u51fd\u6570\u5f0f\u7f16\u7a0b\u5728Java\u4e2d\u7684\u53d1\u5c55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\uff0c\u7531\u4e8e\u96c6\u5408\u4e0d\u53ef\u53d8\uff0c\u56e0\u6b64\u5c31\u4e0d\u5b58\u5728\u7ade\u6001\u6761\u4ef6\uff0c\u5929\u7136\u7684\u7ebf\u7a0b\u5b89\u5168\u6027\uff0c\u65e0\u8bba\u5728\u7f16\u7801\u8fc7\u7a0b\u4e2d\u548c\u5185\u5b58\u4f7f\u7528\u4e2d\u90fd\u6709\u4e00\u5b9a\u7684\u4f18\u52bf\uff0c\u8fd9\u79cd\u7279\u6027\u5728Scala\u548cKotlin\u8fd9\u4e24\u79cd\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5927\u653e\u5f02\u5f69\u3002")),(0,r.kt)("p",null,"\u5728Java 10 \u4e2d\u53c8\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684API\u3002"),(0,r.kt)("h3",{id:"\u96c6\u5408\u526f\u672c"},"\u96c6\u5408\u526f\u672c"),(0,r.kt)("p",null,"\u590d\u5236\u4e00\u4e2a\u96c6\u5408\u4e3a\u4e0d\u53ef\u53d8\u96c6\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Apple> copyList = List.copyOf(apples);\n")),(0,r.kt)("p",null,"\u4efb\u4f55\u4fee\u6539\u6b64\u7c7b\u96c6\u5408\u7684\u5c1d\u8bd5\u90fd\u4f1a\u5bfc\u81f4java.lang.UnsupportedOperationException\u5f02\u5e38\u3002"),(0,r.kt)("p",null,"Stream\u5f52\u7eb3\u4e3a\u4e0d\u53ef\u53d8\u96c6\u5408"),(0,r.kt)("p",null,"\u4e4b\u524dStream API\u7684\u5f52\u7eb3\u64cd\u4f5ccollect(Collector collector)\u90fd\u53ea\u4f1a\u628a\u6d41\u5f52\u7eb3\u4e3a\u53ef\u53d8\u96c6\u5408\uff0c\u73b0\u5728\u5b83\u4eec\u90fd\u6709\u5bf9\u5e94\u7684\u4e0d\u53ef\u53d8\u96c6\u5408\u4e86\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<String> names= apples.stream()\n    .map(Apple::getName)\n    .collect(Collectors.toUnmodifiableList());\n")),(0,r.kt)("h2",{id:"optionalorelsethrow"},"Optional.orElseThrow()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Optional<String> optional = Optional.ofNullable(nullableVal);\n// \u53ef\u80fd\u4f1a NoSuchElementException\nString \xa0nullable = optional.get();\n")),(0,r.kt)("p",null,"Optional\u5982\u679c\u503c\u4e3anull\u65f6\u53bbget\u4f1a\u629b\u51faNoSuchElementException\u5f02\u5e38\u3002\u4ece\u8bed\u4e49\u4e0aget\u5e94\u8be5\u80af\u5b9a\u80fd\u5f97\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u5f02\u5e38\u4e86\uff0c\u8fd9\u79cd\u6b67\u4e49\u6027\u592a\u5927\u4e86\u3002\u6240\u4ee5\u589e\u52a0\u4e86\u4e00\u4e2aorElseThrow()\u65b9\u6cd5\u6765\u589e\u5f3a\u8bed\u4e49\u6027\u3002"),(0,r.kt)("h2",{id:"\u5176\u5b83\u589e\u5f3a\u7279\u6027"},"\u5176\u5b83\u589e\u5f3a\u7279\u6027"),(0,r.kt)("p",null,"Java 10\u7684\u6027\u80fd\u4e5f\u660e\u663e\u52a0\u5f3a\u4e86\uff0c\u652f\u6301G1\u5e76\u884c\u5783\u573e\u6536\u96c6\u3002\u53e6\u5916\u5f15\u5165\u4e86\u5373\u65f6\u7f16\u8bd1\u6280\u672f(JIT)\uff0c\u8be5\u6280\u672f\u53ef\u4ee5\u52a0\u901fjava\u7a0b\u5e8f\u7684\u8fd0\u884c\u901f\u5ea6\u3002 \u53e6\u5916Java 10\u5bf9\u5bb9\u5668\u96c6\u6210\u4e5f\u8fdb\u884c\u4e86\u4f18\u5316\uff0cJVM\u4f1a\u6839\u636e\u5bb9\u5668\u7684\u914d\u7f6e\u8fdb\u884c\u9009\u62e9CPU\u6838\u5fc3\u6570\u91cf\u548c\u5185\u5b58\u5360\u7528\u3002\u8fd8\u6709\u5176\u5b83\u4e00\u4e9b\u5e95\u5c42\u4f18\u5316\u7279\u6027\u8fd9\u91cc\u5c31\u4e0d\u591a\u8bf4\u4e86\uff0c\u4e86\u89e3\u4e3a\u4e3b\uff0c\u5f53\u4f60\u8fbe\u5230\u4e00\u5b9a\u7684\u5c42\u6b21\u4f1a\u81ea\u5df1\u53bb\u4e86\u89e3\u7684\u3002\u5230\u6b64Java 10\u7684\u4e00\u4e9b\u53d8\u5316\u5c31\u5f52\u7eb3\u5b8c\u4e86\uff0c\u5176\u5b9e\u5e76\u4e0d\u662f\u5f88\u591a\uff0c\u90fd\u5f88\u597d\u638c\u63e1\u3002"))}s.isMDXComponent=!0}}]);