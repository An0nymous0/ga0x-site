"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[705],{705:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(4778),r=n(959),o=n(1766),l=n(9013),a=n.n(l),u=n(8372),c=n(874),s=n(9031),m=new(a())("#copy");function f(){const{register:e,handleSubmit:t,watch:n,setValue:l,formState:{errors:a}}=(0,o.cI)({defaultValues:{input:"A1\nA2\nA3\nA4",prefix:"'",suffix:"',",output:""}});return r.createElement("form",{onSubmit:t((e=>{var t="",n=e.prefix,i=e.suffix;e.input.split("\n").forEach((function(e,r){t+=n+e+i+"\r"})),l("output",t),console.log(t)}))},r.createElement(c.ZP,{container:!0,spacing:2},r.createElement(c.ZP,{item:!0,xs:10},r.createElement(u.Z,(0,i.Z)({id:"input",label:"\u8bf7\u8f93\u5165\u6587\u672c\u4fe1\u606f\uff1a",multiline:!0,rows:4,fullWidth:!0},e("input")))),r.createElement(c.ZP,{item:!0,xs:10},r.createElement(u.Z,(0,i.Z)({id:"prefix",label:"\u524d\u7f00",variant:"outlined"},e("prefix")))),r.createElement(c.ZP,{item:!0,xs:10},r.createElement(u.Z,(0,i.Z)({id:"suffix",label:"\u540e\u7f00",variant:"outlined"},e("suffix")))),r.createElement(c.ZP,{item:!0,xs:10},r.createElement(u.Z,(0,i.Z)({id:"output",multiline:!0,rows:4,fullWidth:!0,InputProps:{readOnly:!0}},e("output")))),r.createElement(c.ZP,{item:!0,xs:10},r.createElement(s.Z,{variant:"outlined",type:"submit",className:"margin-right--sm"},"\u8f6c\u6362"),r.createElement(s.Z,{id:"copy",variant:"outlined","data-clipboard-target":"#output"},"\u590d\u5236"))))}m.on("success",(function(e){console.info("Action:",e.action),console.info("Text:",e.text),console.info("Trigger:",e.trigger)})),m.on("error",(function(e){console.error("Action:",e.action),console.error("Trigger:",e.trigger)}))}}]);