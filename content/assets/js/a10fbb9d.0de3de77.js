"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89273],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51294:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"io-twitter",title:"Twitter Firehose Connector",sidebar_label:"Twitter Firehose Connector",original_id:"io-twitter"},l=void 0,o={unversionedId:"io-twitter",id:"version-2.2.0/io-twitter",title:"Twitter Firehose Connector",description:"The Twitter Firehose connector is used for receiving tweets from Twitter Firehose and writing",source:"@site/versioned_docs/version-2.2.0/io-twitter.md",sourceDirName:".",slug:"/io-twitter",permalink:"/docs/2.2.0/io-twitter",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/io-twitter.md",tags:[],version:"2.2.0",frontMatter:{id:"io-twitter",title:"Twitter Firehose Connector",sidebar_label:"Twitter Firehose Connector",original_id:"io-twitter"}},u={},p=[{value:"Source Configuration Options",id:"source-configuration-options",level:2}],c={toc:p},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Twitter Firehose connector is used for receiving tweets from Twitter Firehose and writing\nthe tweets to Pulsar topics."),(0,a.kt)("h2",{id:"source-configuration-options"},"Source Configuration Options"),(0,a.kt)("p",null,"You can get the OAuth credentials from ",(0,a.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en.html"},"Twitter Developers Portal"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerKey"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"Twitter OAuth Consumer Key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerSecret"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"Twitter OAuth Consumer Secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"Twitter OAuth Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenSecret"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"Twitter OAuth Secret")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientName"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'openconnector-twitter-source"')),(0,a.kt)("td",{parentName:"tr",align:null},"Client name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientHosts"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://stream.twitter.com")),(0,a.kt)("td",{parentName:"tr",align:null},"Twitter Firehose hosts that client connects to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientBufferSize"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"50000")),(0,a.kt)("td",{parentName:"tr",align:null},"The buffer size for buffering tweets fetched from Twitter Firehose")))))}m.isMDXComponent=!0}}]);