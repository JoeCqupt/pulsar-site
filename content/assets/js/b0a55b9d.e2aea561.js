"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"io-kinesis",title:"AWS Kinesis Connector",sidebar_label:"AWS Kinesis Connector",original_id:"io-kinesis"},l=void 0,s={unversionedId:"io-kinesis",id:"version-2.3.1/io-kinesis",title:"AWS Kinesis Connector",description:"Sink",source:"@site/versioned_docs/version-2.3.1/io-kinesis.md",sourceDirName:".",slug:"/io-kinesis",permalink:"/docs/2.3.1/io-kinesis",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-kinesis.md",tags:[],version:"2.3.1",frontMatter:{id:"io-kinesis",title:"AWS Kinesis Connector",sidebar_label:"AWS Kinesis Connector",original_id:"io-kinesis"}},o={},p=[{value:"Sink",id:"sink",level:2},{value:"Sink Configuration Options",id:"sink-configuration-options",level:3},{value:"Message Formats",id:"message-formats",level:3},{value:"<strong>ONLY_RAW_PAYLOAD</strong>",id:"only_raw_payload",level:4},{value:"<strong>FULL_MESSAGE_IN_JSON</strong>",id:"full_message_in_json",level:4},{value:"<strong>FULL_MESSAGE_IN_FB</strong>",id:"full_message_in_fb",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sink"},"Sink"),(0,r.kt)("p",null,"The Kinesis Sink connector is used to pull data from Pulsar topics and persist the data into\nAWS Kinesis."),(0,r.kt)("h3",{id:"sink-configuration-options"},"Sink Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"kinesis end-point url can be found at : ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"https://docs.aws.amazon.com/general/latest/gr/rande.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsRegion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"appropriate aws region eg: us-west-1, us-west-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsKinesisStreamName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"kinesis stream name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsCredentialPluginName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully-Qualified class name of implementation of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),". It is a factory class which creates an AWSCredentialsProvider that will be used by Kinesis Sink. If it is empty then KinesisSink will create a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsCredentialPluginParam"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"json-parameters to initialize ",(0,r.kt)("inlineCode",{parentName:"td"},"AwsCredentialsProviderPlugin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageFormat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ONLY_RAW_PAYLOAD")),(0,r.kt)("td",{parentName:"tr",align:null},"Message format in which kinesis sink converts pulsar messages and publishes to kinesis streams")))),(0,r.kt)("h3",{id:"message-formats"},"Message Formats"),(0,r.kt)("p",null,"The available message formats are listed as below:"),(0,r.kt)("h4",{id:"only_raw_payload"},(0,r.kt)("strong",{parentName:"h4"},"ONLY_RAW_PAYLOAD")),(0,r.kt)("p",null,"Kinesis sink directly publishes pulsar message payload as a message into the configured kinesis stream."),(0,r.kt)("h4",{id:"full_message_in_json"},(0,r.kt)("strong",{parentName:"h4"},"FULL_MESSAGE_IN_JSON")),(0,r.kt)("p",null,"Kinesis sink creates a json payload with pulsar message payload, properties and encryptionCtx, and publishes json payload into the configured kinesis stream."),(0,r.kt)("h4",{id:"full_message_in_fb"},(0,r.kt)("strong",{parentName:"h4"},"FULL_MESSAGE_IN_FB")),(0,r.kt)("p",null,"Kinesis sink creates a flatbuffer serialized paylaod with pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured kinesis stream."))}m.isMDXComponent=!0}}]);