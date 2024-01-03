"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(i,".").concat(m)]||u[m]||s[m]||p;return n?r.createElement(y,l(l({ref:t},h),{},{components:n})):r.createElement(y,l({ref:t},h))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={id:"client-python-3.3.0",title:"Client Python 3.3.0",sidebar_label:"Client Python 3.3.0"},l=void 0,o={unversionedId:"versioned/client-python-3.3.0",id:"versioned/client-python-3.3.0",title:"Client Python 3.3.0",description:"What's Changed",source:"@site/release-notes/versioned/client-python-3.3.0.md",sourceDirName:"versioned",slug:"/versioned/client-python-3.3.0",permalink:"/release-notes/versioned/client-python-3.3.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-python-3.3.0.md",tags:[],version:"current",frontMatter:{id:"client-python-3.3.0",title:"Client Python 3.3.0",sidebar_label:"Client Python 3.3.0"}},i={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],h={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added support for KeySharedPolicy for the consumer when in KeyShared mode by @hyperevo ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/109"},"https://github.com/apache/pulsar-client-python/pull/109")),(0,a.kt)("li",{parentName:"ul"},"Bumped version to 3.3.0a1 @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/130"},"https://github.com/apache/pulsar-client-python/pull/130")),(0,a.kt)("li",{parentName:"ul"},"[docs]"," Fix the incorrect API docs generation steps in the release process by @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/131"},"https://github.com/apache/pulsar-client-python/pull/131")),(0,a.kt)("li",{parentName:"ul"},"Fix link failure on macOS @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/133"},"https://github.com/apache/pulsar-client-python/pull/133")),(0,a.kt)("li",{parentName:"ul"},"Add partitioned topic unit test for Reader @shibd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/137"},"https://github.com/apache/pulsar-client-python/pull/137")),(0,a.kt)("li",{parentName:"ul"},"feat: support batch index ack @shibd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/139"},"https://github.com/apache/pulsar-client-python/pull/139")),(0,a.kt)("li",{parentName:"ul"},"feat: support producer access mode @shibd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/138"},"https://github.com/apache/pulsar-client-python/pull/138")),(0,a.kt)("li",{parentName:"ul"},"Fix the OpenSSL 3.x symbols not found on macOS build @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/145"},"https://github.com/apache/pulsar-client-python/pull/145")),(0,a.kt)("li",{parentName:"ul"},"Upgrade the C++ client to 3.3.0 @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/146"},"https://github.com/apache/pulsar-client-python/pull/146")),(0,a.kt)("li",{parentName:"ul"},"feat: support pattern subscription non persistent topic @shibd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/134"},"https://github.com/apache/pulsar-client-python/pull/134")),(0,a.kt)("li",{parentName:"ul"},"Use f-string to show correct error message @BewareMyPower ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/147"},"https://github.com/apache/pulsar-client-python/pull/147")),(0,a.kt)("li",{parentName:"ul"},"feat: Support dead letter topic @shibd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/135"},"https://github.com/apache/pulsar-client-python/pull/135"))),(0,a.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@hyperevo made their first contribution in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/109"},"https://github.com/apache/pulsar-client-python/pull/109"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python/compare/v3.2.0...v3.3.0"},"https://github.com/apache/pulsar-client-python/compare/v3.2.0...v3.3.0")))}s.isMDXComponent=!0}}]);