"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12693],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60847:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={},i="CVE-2024-27317: Apache Pulsar: Pulsar Functions Worker's Archive Extraction Vulnerability Allows Unauthorized File Modification",l={unversionedId:"CVE-2024-27317",id:"CVE-2024-27317",title:"CVE-2024-27317: Apache Pulsar: Pulsar Functions Worker's Archive Extraction Vulnerability Allows Unauthorized File Modification",description:"Affected versions:",source:"@site/security/CVE-2024-27317.md",sourceDirName:".",slug:"/CVE-2024-27317",permalink:"/security/CVE-2024-27317",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"References:",id:"references",level:2}],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cve-2024-27317-apache-pulsar-pulsar-functions-workers-archive-extraction-vulnerability-allows-unauthorized-file-modification"},"CVE-2024-27317: Apache Pulsar: Pulsar Functions Worker's Archive Extraction Vulnerability Allows Unauthorized File Modification"),(0,a.yg)("h2",{id:"affected-versions"},"Affected versions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 2.4.0 before 2.10.6"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 2.11.0 before 2.11.4"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 3.0.0 before 3.0.3"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 3.1.0 before 3.1.3"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar 3.2.0 before 3.2.1")),(0,a.yg)("h2",{id:"description"},"Description:"),(0,a.yg)("p",null,'In Pulsar Functions Worker, authenticated users can upload functions in jar or nar files. These files, essentially zip files, are extracted by the Functions Worker. However, if a malicious file is uploaded, it could exploit a directory traversal vulnerability. This occurs when the filenames in the zip files, which aren\'t properly validated, contain special elements like "..", altering the directory path. This could allow an attacker to create or modify files outside of the designated extraction directory, potentially influencing system behavior. This vulnerability also applies to the Pulsar Broker when it is configured with "functionsWorkerEnabled=true".'),(0,a.yg)("p",null,"This issue affects Apache Pulsar versions from 2.4.0 to 2.10.5, from 2.11.0 to 2.11.3, from 3.0.0 to 3.0.2, from 3.1.0 to 3.1.2, and 3.2.0. "),(0,a.yg)("p",null,"2.10 Pulsar Function Worker users should upgrade to at least 2.10.6.\n2.11 Pulsar Function Worker users should upgrade to at least 2.11.4.\n3.0 Pulsar Function Worker users should upgrade to at least 3.0.3.\n3.1 Pulsar Function Worker users should upgrade to at least 3.1.3.\n3.2 Pulsar Function Worker users should upgrade to at least 3.2.1."),(0,a.yg)("p",null,"Users operating versions prior to those listed above should upgrade to the aforementioned patched versions or newer versions."),(0,a.yg)("h2",{id:"references"},"References:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/ct9xmvlf7lompc1pxvlsb60qstfsm9po"},"https://lists.apache.org/thread/ct9xmvlf7lompc1pxvlsb60qstfsm9po")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cve.org/CVERecord?id=CVE-2024-27317"},"https://www.cve.org/CVERecord?id=CVE-2024-27317"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}f.isMDXComponent=!0}}]);