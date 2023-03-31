"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-libraries-node",title:"Pulsar Node.js client",sidebar_label:"Node.js client"},l=void 0,o={unversionedId:"client-libraries-node",id:"client-libraries-node",title:"Pulsar Node.js client",description:"You can use a Pulsar Node.js client to create Pulsar producers, consumers, and readers in Node.js. All the methods in Pulsar Node.js clients are thread-safe.",source:"@site/docs/client-libraries-node.md",sourceDirName:".",slug:"/client-libraries-node",permalink:"/docs/next/client-libraries-node",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-node.md",tags:[],version:"current",frontMatter:{id:"client-libraries-node",title:"Pulsar Node.js client",sidebar_label:"Node.js client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/next/client-libraries-python-use"},next:{title:"Set up",permalink:"/docs/next/client-libraries-node-setup"}},s={},c=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use a Pulsar Node.js client to create Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#producer"},"producers"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#consumer"},"consumers"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader"},"readers")," in Node.js. All the methods in Pulsar Node.js clients are thread-safe."),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-node-setup"},"Set up Node.js client library")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-node-initialize"},"Initialize a Node.js client")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-node-use"},"Use a Node.js client"))),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-clients"},"Work with clients")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-producers"},"Work with producers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-consumers"},"Work with consumers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-readers"},"Work with readers"))),(0,a.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-node-configs"},"Node.js client configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname://release-notes/client-node/"},"Release notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client feature matrix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/blob/master/index.d.ts"},"Type definitions")," used in TypeScript (for 1.3.0 or later versions).")))}u.isMDXComponent=!0}}]);