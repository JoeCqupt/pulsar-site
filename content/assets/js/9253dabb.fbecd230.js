"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15195],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),g=n,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(m,l(l({ref:a},s),{},{components:t})):r.createElement(m,l({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},45648:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(58168),n=(t(96540),t(15680));const o={id:"document-contribution",title:"Updating document"},l=void 0,i={unversionedId:"document-contribution",id:"document-contribution",title:"Updating document",description:"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents.",source:"@site/contribute/document-contribution.md",sourceDirName:".",slug:"/document-contribution",permalink:"/contribute/document-contribution",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/document-contribution.md",tags:[],version:"current",lastUpdatedBy:"Yajun Zhao",lastUpdatedAt:1709801533,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{id:"document-contribution",title:"Updating document"},sidebar:"sidebarDevelopment",previous:{title:"Introduction",permalink:"/contribute/document-intro"},next:{title:"Release policy",permalink:"/contribute/release-policy"}},p={},u=[{value:"Source repositories",id:"source-repositories",level:2},{value:"Update versioned docs",id:"update-versioned-docs",level:2},{value:"Update reference docs",id:"update-reference-docs",level:2},{value:"Update configuration docs",id:"update-configuration-docs",level:3},{value:"Update command-line tool docs",id:"update-command-line-tool-docs",level:3},{value:"Update feature matrix",id:"update-feature-matrix",level:2}],s={toc:u},c="wrapper";function d(e){let{components:a,...o}=e;return(0,n.yg)(c,(0,r.A)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents."),(0,n.yg)("h2",{id:"source-repositories"},"Source repositories"),(0,n.yg)("p",null,"Currently, the source of documents and website (where the docs are finally published) are located at the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"apache/pulsar-site")," repo."),(0,n.yg)("h2",{id:"update-versioned-docs"},"Update versioned docs"),(0,n.yg)("p",null,"If you want to update versioned docs, go to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/versioned_docs"},"versioned_docs folder")," to find your desired one."),(0,n.yg)("p",null,"For versions prior to 2.8, Pulsar releases versioned docs for each patch release. You can update the exact versioned doc."),(0,n.yg)("p",null,"For versions start from 2.8, Pulsar release versioned docs for each minor release. Apart from updating the content, you should take care of adding specific instructions."),(0,n.yg)("p",null,"For example, if you want to add docs for an improvement introduced in 2.8.2, you can add the following instructions:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},":::note\n\nThis <fix / improvment> is available for 2.8.2 and later versions.\n\n:::\n")),(0,n.yg)("h2",{id:"update-reference-docs"},"Update reference docs"),(0,n.yg)("p",null,"If you want to update ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/"},"Pulsar reference docs"),", you should update the corresponding source files."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Some reference docs are generated from code ",(0,n.yg)("strong",{parentName:"li"},"automatically"),". If you want to update the docs, you need to update the source code files."),(0,n.yg)("li",{parentName:"ul"},"Some configuration docs are updated ",(0,n.yg)("strong",{parentName:"li"},"manually")," using markdown files.")),(0,n.yg)("h3",{id:"update-configuration-docs"},"Update configuration docs"),(0,n.yg)("p",null,"Docs for configs of bundled components are generated from command-line tools ",(0,n.yg)("strong",{parentName:"p"},"automatically"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Components"),(0,n.yg)("th",{parentName:"tr",align:null},"Update where ..."))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Broker"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java"},"org.apache.pulsar.broker.ServiceConfiguration"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WebSocket"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-websocket/src/main/java/org/apache/pulsar/websocket/service/WebSocketProxyConfiguration.java"},"org.apache.pulsar.websocket.service.WebSocketProxyConfiguration"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Proxy"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-proxy/src/main/java/org/apache/pulsar/proxy/server/ProxyConfiguration.java"},"org.apache.pulsar.proxy.server.ProxyConfiguration"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Standalone"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java"},"org.apache.pulsar.broker.ServiceConfiguration"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Client"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ClientConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ClientConfigurationData"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Producer"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ProducerConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ProducerConfigurationData"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Consumer"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ConsumerConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ConsumerConfigurationData"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Reader"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ReaderConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ReaderConfigurationData"))))),(0,n.yg)("p",null,"Docs for configs of external components (whose source code is hosted outside the Pulsar repositories) are updated ",(0,n.yg)("strong",{parentName:"p"},"manually"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Components"),(0,n.yg)("th",{parentName:"tr",align:null},"Update where ..."))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BookKeeper"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-bookkeeper.md"},"reference-configuration-bookkeeper.md"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Log4j"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j.md"},"reference-configuration-log4j.md"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Log4j shell"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j-shell.md"},"reference-configuration-log4j-shell.md"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-zookeeper.md"},"reference-configuration-zookeeper.md"))))),(0,n.yg)("h3",{id:"update-command-line-tool-docs"},"Update command-line tool docs"),(0,n.yg)("p",null,"Docs for bundled Java-based command-line tools are generated ",(0,n.yg)("strong",{parentName:"p"},"automatically"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Components"),(0,n.yg)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar"),(0,n.yg)("td",{parentName:"tr",align:null},"Different subcommands of ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/bin/pulsar"},"bin/pulsar")," are updated in different code files")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-admin"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/admin/cli"},"Classes under the admin command-line folder"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-client"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/client/cli"},"Classes under the client command-line folder"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-perf"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("li",null,(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/proxy/socket/client"},"The ",(0,n.yg)("inlineCode",{parentName:"a"},"websocket-producer")," subcommand")),(0,n.yg)("li",null,(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/testclient"},"Other subcommands")))))),(0,n.yg)("p",null,"Docs for external command-line tools or bare scripts are updated ",(0,n.yg)("strong",{parentName:"p"},"manually"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Components"),(0,n.yg)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-shell"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-shell/pulsar-shell.md"},"pulsar-shell.md"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-daemon"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-daemon/pulsar-daemon.md"},"pulsar-daemon.md"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bookkeeper"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/bookkeeper/bookkeeper.md"},"bookkeeper.md"))))),(0,n.yg)("h2",{id:"update-feature-matrix"},"Update feature matrix"),(0,n.yg)("p",null,"Pulsar feature matrix introduces the features supported by language-specific clients and functions. It includes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///client-feature-matrix"},"Client Feature Matrix")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=328808194"},"Function Feature Matrix"))),(0,n.yg)("p",null,"You need to update the feature matrix as soon as your related commits get merged. The workflow is illustrated as follows."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Client Feature Matrix Workflow",src:t(1722).A,width:"584",height:"442"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Submit your code and doc PRs."),(0,n.yg)("li",{parentName:"ol"},"Get your PRs reviewed and merged."),(0,n.yg)("li",{parentName:"ol"},"Update the feature matrix to flag your contribution.")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"For how to update the ",(0,n.yg)("a",{parentName:"li",href:"pathname:///client-feature-matrix"},"Client Feature Matrix"),", see ",(0,n.yg)("a",{parentName:"li",href:"/contribute/site-intro#how-to-update-data-driven-pages"},"How to update data-driven pages"),"."),(0,n.yg)("li",{parentName:"ul"},"If you have problems in editing the spreadsheet of ",(0,n.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=328808194"},"Function Feature Matrix"),", you can reach out to ",(0,n.yg)("inlineCode",{parentName:"li"},"dev@pulsar.apache.org"),"."))))}d.isMDXComponent=!0},1722:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/client-matrix-workflow-e5e553d47d971e39c37b9ed5cdee3ff3.png"}}]);