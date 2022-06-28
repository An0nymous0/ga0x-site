"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1498],{2506:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(102),r=a(7294),l=a(6010),i=a(9825),o=a(3488),s=a(3699),c=a(7325),m="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",p="sidebarItem__DBe",g="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function v(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:p},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:h},e.title))})))))}var f=a(3086);function E(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return r.createElement(f.Zo,{component:E,props:e})}function Z(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(b,{sidebar:t}):r.createElement(v,{sidebar:t}):null}var _=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,_),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(Z,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},6847:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(6010),l=a(7325),i=a(3699),o=a(9524),s=a(3777),c=a(3905),m=a(6551),u=a(8028),d=a(4597);function p(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function g(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(p,{href:s,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(p,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var h="authorCol_sTYa",v="imageOnlyAuthorRow_vA2J",f="imageOnlyAuthorCol_kG3X";function E(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?v:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?f:h),key:t},n.createElement(g,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var b="blogPostTitle_Ikge",Z="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function N(e){var t,a,p=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=(0,o.C)().withBaseUrl,h=e.children,v=e.frontMatter,f=e.assets,N=e.metadata,k=e.truncated,y=e.isBlogPostPage,T=void 0!==y&&y,P=N.date,w=N.formattedDate,C=N.permalink,I=N.tags,L=N.readingTime,x=N.title,F=N.editUrl,R=N.authors,A=null!=(t=f.image)?t:v.image,M=!T&&k,S=I.length>0,D=T?"h1":"h2";return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(D,{className:b,itemProp:"headline"},T?x:n.createElement(i.Z,{itemProp:"url",to:C},x)),n.createElement("div",{className:(0,r.Z)(Z,"margin-vert--md")},n.createElement("time",{dateTime:P,itemProp:"datePublished"},w),void 0!==L&&n.createElement(n.Fragment,null," \xb7 ",p(L))),n.createElement(E,{authors:R,assets:f})),A&&n.createElement("meta",{itemProp:"image",content:g(A,{absolute:!0})}),n.createElement("div",{id:T?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,h)),(S||k)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",T&&_)},S&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},n.createElement(d.Z,{tags:I})),T&&F&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:F})),M&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":S})},n.createElement(i.Z,{to:N.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},n.createElement("b",null,n.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8028:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(7325),l=a(3702),i=a(3117),o=a(102),s=a(6010),c="iconEdit_eYIM",m=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,m);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(u,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3899:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(102),l=a(7294),i=a(6010),o=a(7325),s=a(107),c="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",u=["as","id"];function d(e){var t=e.as,a=e.id,d=(0,r.Z)(e,u),p=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},d,{className:(0,i.Z)("anchor",p?m:c),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},d,{id:void 0}))}},6551:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),r=a(4137),l=a(3117),i=a(102),o=a(1514),s=["mdxType","originalType"];var c=a(5893);var m=a(3699);var u=a(6010),d=a(1048),p=a(4639),g="details_lb9f",h="isBrowser_bmU9",v="collapsibleContent_i85q",f=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function Z(e){var t=e.summary,a=e.children,r=(0,i.Z)(e,f),o=(0,d.Z)(),s=(0,n.useRef)(null),c=(0,p.u)({initialState:!r.open}),m=c.collapsed,Z=c.setCollapsed,_=(0,n.useState)(r.open),N=_[0],k=_[1];return n.createElement("details",(0,l.Z)({},r,{ref:s,open:N,"data-collapsed":m,className:(0,u.Z)(g,o&&h,r.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;E(t)&&b(t,s.current)&&(e.preventDefault(),m?(Z(!1),k(!0)):Z(!0))}}),null!=t?t:n.createElement("summary",null,"Details"),n.createElement(p.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){Z(e),k(!e)}},n.createElement("div",{className:v},a)))}var _="details_b_Ee";function N(e){var t=Object.assign({},e);return n.createElement(Z,(0,l.Z)({},t,{className:(0,u.Z)("alert alert--info",_,t.className)}))}var k=a(3899);function y(e){return n.createElement(k.Z,e)}var T="containsTaskList_mC6p";var P="img_ev3q";var w={head:function(e){var t=n.Children.map(e.children,(function(e){return n.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var a=e.props,r=(a.mdxType,a.originalType,(0,i.Z)(a,s));return n.createElement(e.props.originalType,r)}return e}(e):e}));return n.createElement(o.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(c.Z,e)},a:function(e){return n.createElement(m.Z,e)},pre:function(e){var t;return n.createElement(c.Z,(0,n.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return n.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(N,(0,l.Z)({},e,{summary:a}),r)},ul:function(e){return n.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&T))}));var t},img:function(e){return n.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,P))}));var t},h1:function(e){return n.createElement(y,(0,l.Z)({as:"h1"},e))},h2:function(e){return n.createElement(y,(0,l.Z)({as:"h2"},e))},h3:function(e){return n.createElement(y,(0,l.Z)({as:"h3"},e))},h4:function(e){return n.createElement(y,(0,l.Z)({as:"h4"},e))},h5:function(e){return n.createElement(y,(0,l.Z)({as:"h5"},e))},h6:function(e){return n.createElement(y,(0,l.Z)({as:"h6"},e))}};function C(e){var t=e.children;return n.createElement(r.Zo,{components:w},t)}},3672:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(3699);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},3852:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(3699),i="tag_zVej",o="tagRegular_sFm0",s="tagWithCount_h2kH";function c(e){var t=e.permalink,a=e.label,c=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,c?s:o)},a,c&&n.createElement("span",null,c))}},4597:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(7325),i=a(3852),o="tags_jXut",s="tag_QGVx";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{label:t,permalink:a}))}))))}},3777:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(7294),r=a(9962),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),o}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}}}}]);