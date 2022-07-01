"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1974],{1166:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var l=t(3117),a=t(102),u=(t(7294),t(4137)),r=t(4259),o=t(425),i=t(5893),s=["components"],c={title:"ncdu \u78c1\u76d8\u5206\u6790\u67e5\u770b\u5de5\u5177\u4f7f\u7528",authors:"gaoxu",tags:["Disk","Linux","ncdu"]},d=void 0,m={permalink:"/blog/2022/06/28/ncdu-tools",editUrl:"https://github.com/An0nymous0/ga0x-site/tree/main/blog/2022-06-28-ncdu-tools/index.mdx",source:"@site/blog/2022-06-28-ncdu-tools/index.mdx",title:"ncdu \u78c1\u76d8\u5206\u6790\u67e5\u770b\u5de5\u5177\u4f7f\u7528",description:"\u7b80\u4ecb",date:"2022-06-28T00:00:00.000Z",formattedDate:"2022\u5e746\u670828\u65e5",tags:[{label:"Disk",permalink:"/blog/tags/disk"},{label:"Linux",permalink:"/blog/tags/linux"},{label:"ncdu",permalink:"/blog/tags/ncdu"}],readingTime:1.3666666666666667,truncated:!1,authors:[{name:"xu gao",title:"Full stack developer",url:"https://github.com/an0nymous",imageURL:"https://avatars.githubusercontent.com/u/6836030?v=4",key:"gaoxu"}],frontMatter:{title:"ncdu \u78c1\u76d8\u5206\u6790\u67e5\u770b\u5de5\u5177\u4f7f\u7528",authors:"gaoxu",tags:["Disk","Linux","ncdu"]},nextItem:{title:"Redis lettuce\u9a71\u52a8\u8fde\u63a5\u51fa\u73b0 NOAUTH Authentication required.",permalink:"/blog/2021/11/23/lettuce-error-noauth"}},b={authorsImageUrls:[void 0]},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u78c1\u76d8\u4f7f\u7528\uff0c\u76f4\u63a5\uff1a",id:"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u78c1\u76d8\u4f7f\u7528\u76f4\u63a5",level:3},{value:"\u67e5\u770b\u6307\u5b9a\u76ee\u5f55",id:"\u67e5\u770b\u6307\u5b9a\u76ee\u5f55",level:3},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2}],k={toc:p};function v(e){var n=e.components,c=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,l.Z)({},k,c,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"help.png",src:t(2485).Z,width:"2948",height:"1736"}),"\nNcdu \u662f\u4e00\u4e2a\u5e26\u6709 ncurses \u63a5\u53e3\u7684\u78c1\u76d8\u4f7f\u7528\u5206\u6790\u5668\u3002 \u5b83\u65e8\u5728\u5728\u60a8\u6ca1\u6709\u53ef\u7528\u7684\u5b8c\u6574\u56fe\u5f62\u8bbe\u7f6e\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u67e5\u627e\u7a7a\u95f4\u5360\u7528\u8005\uff0c\u4f46\u5373\u4f7f\u5728\u5e38\u89c4\u684c\u9762\u7cfb\u7edf\u4e0a\u5b83\u4e5f\u662f\u4e00\u4e2a\u6709\u7528\u7684\u5de5\u5177\u3002 Ncdu \u7684\u76ee\u6807\u662f\u5feb\u901f\u3001\u7b80\u5355\u548c\u6613\u4e8e\u4f7f\u7528\uff0c\u5e76\u4e14\u5e94\u8be5\u80fd\u591f\u5728\u5b89\u88c5\u4e86 ncurses \u7684\u4efb\u4f55\u6700\u5c0f\u7684\u7c7b\u4f3c POSIX \u7684\u73af\u5883\u4e2d\u8fd0\u884c\u3002"),(0,u.kt)("p",null,"\u66ff\u4ee3",(0,u.kt)("inlineCode",{parentName:"p"},"du -h"),"\u7b49\u5de5\u5177"),(0,u.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,u.kt)(r.Z,{mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"apple",label:"macOS",default:!0,mdxType:"TabItem"},(0,u.kt)(i.Z,{language:"shell",mdxType:"CodeBlock"},"brew install ncdu")),(0,u.kt)(o.Z,{value:"orange",label:"ubuntu",mdxType:"TabItem"},(0,u.kt)(i.Z,{language:"shell",mdxType:"CodeBlock"},"apt-get install ncdu")),(0,u.kt)(o.Z,{value:"banana",label:"Centos",mdxType:"TabItem"},(0,u.kt)(i.Z,{language:"shell",mdxType:"CodeBlock"},"yum -y install ncdu"))),(0,u.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,u.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u78c1\u76d8\u4f7f\u7528\u76f4\u63a5"},"\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u78c1\u76d8\u4f7f\u7528\uff0c\u76f4\u63a5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"ncdu\n")),(0,u.kt)("h3",{id:"\u67e5\u770b\u6307\u5b9a\u76ee\u5f55"},"\u67e5\u770b\u6307\u5b9a\u76ee\u5f55"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"ncdu /  #\u6839\u76ee\u5f55\uff0c\u5168\u76d8\nncdu /home\n")),(0,u.kt)("h2",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),(0,u.kt)("p",null,"up, k \u4e0a\u79fb\u5149\u6807 ",(0,u.kt)("br",null),"\ndown, j \u5411\u4e0b\u79fb\u52a8\u5149\u6807 ",(0,u.kt)("br",null),"\nright/enter \u6253\u5f00\u9009\u4e2d\u76ee\u5f55 ",(0,u.kt)("br",null),"\nleft, <, h \u6253\u5f00\u7236\u76ee\u5f55 ",(0,u.kt)("br",null),"\nn \u6309\u540d\u79f0\u6392\u5e8f\uff08\u5347\u5e8f/\u964d\u5e8f\uff09 ",(0,u.kt)("br",null),"\ns \u6309\u5927\u5c0f\u6392\u5e8f\uff08\u5347\u5e8f/\u964d\u5e8f\uff09 ",(0,u.kt)("br",null),"\nC \u6309\u9879\u76ee\u6392\u5e8f\uff08\u5347\u5e8f/\u964d\u5e8f\uff09 ",(0,u.kt)("br",null),"\nM \u6309 mtime \u6392\u5e8f\uff08-e \u6807\u5fd7\uff09 ",(0,u.kt)("br",null),"\nd \u5220\u9664\u9009\u4e2d\u7684\u6587\u4ef6\u6216\u76ee\u5f55 ",(0,u.kt)("br",null),"\nt \u6392\u5e8f\u65f6\u5207\u6362\u6587\u4ef6\u524d\u7684\u76ee\u5f55 ",(0,u.kt)("br",null),"\ng \u663e\u793a\u767e\u5206\u6bd4\u548c/\u6216\u56fe\u8868 ",(0,u.kt)("br",null),"\nu \u663e\u793a/\u9690\u85cf\u786c\u94fe\u63a5\u5171\u4eab\u5927\u5c0f ",(0,u.kt)("br",null),"\na \u5916\u89c2\u5927\u5c0f\u548c\u78c1\u76d8\u4f7f\u7528\u7387\u4e4b\u95f4\u7684\u5207\u6362 ",(0,u.kt)("br",null),"\nc \u5207\u6362\u663e\u793a\u5b50\u9879\u8ba1\u6570 ",(0,u.kt)("br",null),"\ne \u663e\u793a/\u9690\u85cf\u9690\u85cf\u6216\u6392\u9664\u7684\u6587\u4ef6 ",(0,u.kt)("br",null),"\ni \u663e\u793a\u6240\u9009\u9879\u76ee\u7684\u4fe1\u606f ",(0,u.kt)("br",null),"\nr \u91cd\u65b0\u8ba1\u7b97\u5f53\u524d\u76ee\u5f55 ",(0,u.kt)("br",null),"\nb \u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u751f\u6210 shell ",(0,u.kt)("br",null),"\nq \u9000\u51fancdu ",(0,u.kt)("br",null)))}v.isMDXComponent=!0},425:function(e,n,t){t.d(n,{Z:function(){return r}});var l=t(7294),a=t(6010),u="tabItem_Ymn6";function r(e){var n=e.children,t=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,r),hidden:t},n)}},4259:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(3117),a=t(7294),u=t(6010),r=t(1048),o=t(3609),i=t(1943),s=t(2957),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t,r=e.lazy,m=e.block,b=e.defaultValue,p=e.values,k=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,o.l)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===b?b:null!=(n=null!=b?b:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),T=x.tabGroupChoices,Z=x.setTabGroupChoices,w=(0,a.useState)(y),N=w[0],C=w[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=T[k];null!=D&&D!==N&&f.some((function(e){return e.value===D}))&&C(D)}var _=function(e){var n=e.currentTarget,t=E.indexOf(n),l=f[t].value;l!==N&&(I(n),C(l),null!=k&&Z(k,String(l)))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var l,a=E.indexOf(e.currentTarget)+1;t=null!=(l=E[a])?l:E[0];break;case"ArrowLeft":var u,r=E.indexOf(e.currentTarget)-1;t=null!=(u=E[r])?u:E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return E.push(e)},onKeyDown:L,onFocus:_,onClick:_},r,{className:(0,u.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),r?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function b(e){var n=(0,r.Z)();return a.createElement(m,(0,l.Z)({key:String(n)},e))}},2485:function(e,n,t){n.Z=t.p+"assets/images/help-6b68b7d3ae1a5945b70901c959f12015.png"}}]);