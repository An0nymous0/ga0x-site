"use strict";(self.webpackChunkga0x_site=self.webpackChunkga0x_site||[]).push([[8785],{5310:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(1527),r=n(6120);const t={title:"macOS\u7ba1\u7406\u591a\u4e2aJava JDK \u7248\u672c",authors:"gaoxu",tags:["JAVA"]},i=void 0,l={permalink:"/blog/2022/09/29/how-to-manage-multiple-java-versions-on-mac",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2022-09-29-how-to-manage-multiple-java-versions-on-mac.md",source:"@site/blog/2022-09-29-how-to-manage-multiple-java-versions-on-mac.md",title:"macOS\u7ba1\u7406\u591a\u4e2aJava JDK \u7248\u672c",description:"\u901a\u8fc7\u914d\u7f6e\u7cfb\u7edf\u6587\u4ef6 alias \u5207\u6362",date:"2022-09-29T00:00:00.000Z",formattedDate:"2022\u5e749\u670829\u65e5",tags:[{label:"JAVA",permalink:"/blog/tags/java"}],readingTime:1.07,hasTruncateMarker:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"macOS\u7ba1\u7406\u591a\u4e2aJava JDK \u7248\u672c",authors:"gaoxu",tags:["JAVA"]},unlisted:!1,prevItem:{title:"\u6ce8\u518cChatGPT \u6559\u4f60\u89e3\u51b3\u5730\u533a\u95ee\u9898",permalink:"/blog/2023/02/02/register-openai"},nextItem:{title:"macOS\u8fd0\u884cJava GUI\u7a0b\u5e8f\u63d0\u793a\u7f3a\u5c11\u5b57\u4f53\u6216\u63d0\u793a\u8fd0\u884c\u5931\u8d25\u95ee\u9898\u89e3\u51b3",permalink:"/blog/2022/09/26/macOS-Failed-to-run-java-gui"}},o={authorsImageUrls:[void 0]},c=[{value:"\u901a\u8fc7\u914d\u7f6e\u7cfb\u7edf\u6587\u4ef6 alias \u5207\u6362",id:"\u901a\u8fc7\u914d\u7f6e\u7cfb\u7edf\u6587\u4ef6-alias-\u5207\u6362",level:2},{value:"\u901a\u8fc7 Homebrew \u5b89\u88c5 Java JDK",id:"\u901a\u8fc7-homebrew-\u5b89\u88c5-java-jdk",level:3},{value:"\u901a\u8fc7\u522b\u540d\u5207\u6362 Java JDK",id:"\u901a\u8fc7\u522b\u540d\u5207\u6362-java-jdk",level:3},{value:"\u4f7f\u7528\u8f6f\u4ef6**SDKMAN!**\u66f4\u6539",id:"\u4f7f\u7528\u8f6f\u4ef6sdkman\u66f4\u6539",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"\u901a\u8fc7\u914d\u7f6e\u7cfb\u7edf\u6587\u4ef6-alias-\u5207\u6362",children:"\u901a\u8fc7\u914d\u7f6e\u7cfb\u7edf\u6587\u4ef6 alias \u5207\u6362"}),"\n",(0,s.jsx)(a.h3,{id:"\u901a\u8fc7-homebrew-\u5b89\u88c5-java-jdk",children:"\u901a\u8fc7 Homebrew \u5b89\u88c5 Java JDK"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://brew.sh/",children:"\u4f7f\u7528Homebrew"}),"\u5b89\u88c5\u591a\u4e2a Java JDK \u7248\u672c\u3002\u8981\u5b89\u88c5 Homebrew \u8fd0\u884c\uff1a"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u73b0\u5728\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Java JDK\xa0",(0,s.jsx)(a.strong,{children:"11"}),"\u6216\u66f4\u9ad8\u7248\u672c",(0,s.jsx)(a.code,{children:"brew cask"}),"\uff1a"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"brew install --cask temurin<version>\n\n# latest version\nbrew install --cask temurin\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["JDK \u7248\u672c\xa0",(0,s.jsx)(a.strong,{children:"8"}),"\u3001",(0,s.jsx)(a.strong,{children:"9"}),"\u3001",(0,s.jsx)(a.strong,{children:"10"}),"\u548c",(0,s.jsx)(a.strong,{children:"11"}),"\u4e0d\u518d\u53d7\u652f\u6301\u3002"]})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://adoptium.net/",children:"Adoptium"}),"\u63d0\u4f9b\u8f83\u65e7\u7684 Java \u7248\u672c\u3002\u4ece Adoptium \u5b89\u88c5 Java JDK\uff1a"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"# install from third party repository\nbrew tap homebrew/cask-versions\n\nbrew install --cask temurin<version>\n\n# Java 8\nbrew install --cask temurin8\n\n# Java 11\nbrew install --cask temurin11\n\n# Java 17\nbrew install --cask temurin17\n"})}),"\n",(0,s.jsx)(a.h3,{id:"\u901a\u8fc7\u522b\u540d\u5207\u6362-java-jdk",children:"\u901a\u8fc7\u522b\u540d\u5207\u6362 Java JDK"}),"\n",(0,s.jsxs)(a.p,{children:["\u5728\u60a8\u7684\u6216\u60a8\u7684\u4e3b\u8981 Java \u7248\u672c\u4e2d\u8bbe\u7f6e",(0,s.jsx)(a.code,{children:"JAVA_HOME"}),"\u8def\u5f84\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u5df2\u5b89\u88c5\u7684 Java \u7248\u672c\u6dfb\u52a0\u5bfc\u51fa\u3002",(0,s.jsx)(a.code,{children:".zshrc"})," ",(0,s.jsx)(a.code,{children:".bash_profile"})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"export JAVA_HOME=$(/usr/libexec/java_home -v17)\n\nexport JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)\nexport JAVA_11_HOME=$(/usr/libexec/java_home -v11)\nexport JAVA_17_HOME=$(/usr/libexec/java_home -v17)\n"})}),"\n",(0,s.jsx)(a.p,{children:"\u68c0\u67e5\u9ed8\u8ba4 Java \u7248\u672c\u548c\u5b89\u88c5\u8def\u5f84\uff1a"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"java -version # 17\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:".zshrc"}),"\u4e3a\u60a8\u7684\u6216",(0,s.jsx)(a.code,{children:".bash_profile"}),"\u4e3a\u6bcf\u4e2a\u5df2\u5b89\u88c5\u7684 Java \u7248\u672c\u6dfb\u52a0\u4e00\u4e2a\u522b\u540d\u3002\u522b\u540d",(0,s.jsx)(a.code,{children:"JAVA_HOME"}),"\u4e0e\u9009\u5b9a\u7684",(0,s.jsx)(a.code,{children:"JAVA_VERSION_HOME"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"alias java8='export JAVA_HOME=$JAVA_8_HOME'\nalias java11='export JAVA_HOME=$JAVA_11_HOME'\nalias java17='export JAVA_HOME=$JAVA_17_HOME'\n"})}),"\n",(0,s.jsxs)(a.p,{children:["\u73b0\u5728\uff0c\u8981\u5728 Java \u7248\u672c\u4e4b\u95f4\u5207\u6362\uff0c\u8bf7\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u522b\u540d",(0,s.jsx)(a.code,{children:"java8"}),"\u3002\u6267\u884c",(0,s.jsx)(a.code,{children:"java -version"}),"\u4ee5\u9a8c\u8bc1\u60a8\u73b0\u5728\u4f7f\u7528\u7684\u662f\u6b63\u786e\u7684 Java \u7248\u672c"]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["Alias",(0,s.jsx)(a.strong,{children:"\u4ec5"}),"\u66f4\u6539\u4f7f\u7528\u7684\u7ec8\u7aef\u5b9e\u4f8b\u4e2d\u7684 Java \u7248\u672c"]})}),"\n",(0,s.jsx)(a.h2,{id:"\u4f7f\u7528\u8f6f\u4ef6sdkman\u66f4\u6539",children:"\u4f7f\u7528\u8f6f\u4ef6**SDKMAN!**\u66f4\u6539"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://sdkman.io/",children:(0,s.jsx)(a.strong,{children:"SDKMAN!"})})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6120:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var s=n(959);const r={},t=s.createContext(r);function i(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);