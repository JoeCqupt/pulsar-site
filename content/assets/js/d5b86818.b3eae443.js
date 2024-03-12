"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11285],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},i="CVE-2023-31007: Apache Pulsar: Broker does not always disconnect client when authentication data expires",c={unversionedId:"CVE-2023-31007",id:"CVE-2023-31007",title:"CVE-2023-31007: Apache Pulsar: Broker does not always disconnect client when authentication data expires",description:"Affected versions:",source:"@site/security/CVE-2023-31007.md",sourceDirName:".",slug:"/CVE-2023-31007",permalink:"/security/CVE-2023-31007",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"Credit:",id:"credit",level:2},{value:"References:",id:"references",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cve-2023-31007-apache-pulsar-broker-does-not-always-disconnect-client-when-authentication-data-expires"},"CVE-2023-31007: Apache Pulsar: Broker does not always disconnect client when authentication data expires"),(0,a.yg)("h2",{id:"affected-versions"},"Affected versions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar before 2.9.5"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 2.10.0 through 2.10.3"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 2.11.0")),(0,a.yg)("h2",{id:"description"},"Description:"),(0,a.yg)("p",null,"Improper Authentication vulnerability in Apache Software Foundation Apache Pulsar Broker allows a client to stay connected to a broker after authentication data expires if the client connected through the Pulsar Proxy when the broker is configured with authenticateOriginalAuthData=false or if a client connects directly to a broker with a specially crafted connect command when the broker is configured with authenticateOriginalAuthData=false."),(0,a.yg)("p",null,"This issue affects Apache Pulsar: through 2.9.4, from 2.10.0 through 2.10.3, 2.11.0."),(0,a.yg)("p",null,"2.9 Pulsar Broker users should upgrade to at least 2.9.5.\n2.10 Pulsar Broker users should upgrade to at least 2.10.4.\n2.11 Pulsar Broker users should upgrade to at least 2.11.1.\n3.0 Pulsar Broker users are unaffected.\nAny users running the Pulsar Broker for 2.8.* and earlier should upgrade to one of the above patched versions."),(0,a.yg)("h2",{id:"credit"},"Credit:"),(0,a.yg)("p",null,"Michael Marshall of DataStax (finder)"),(0,a.yg)("h2",{id:"references"},"References:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/qxn99xxyp0zv6jchjggn3soyo5gvqfxj"},"https://lists.apache.org/thread/qxn99xxyp0zv6jchjggn3soyo5gvqfxj")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cve.org/CVERecord?id=CVE-2023-31007"},"https://www.cve.org/CVERecord?id=CVE-2023-31007"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}d.isMDXComponent=!0}}]);