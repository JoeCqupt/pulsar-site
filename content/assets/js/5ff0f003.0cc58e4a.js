"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,b=p["".concat(s,".").concat(c)]||p[c]||g[c]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"setup-debugging",title:"Debugging Pulsar source code in IDE",sidebar_label:"Debugging",description:"Getting started to debugging Pulsar in IDE."},i=void 0,l={unversionedId:"setup-debugging",id:"setup-debugging",title:"Debugging Pulsar source code in IDE",description:"Getting started to debugging Pulsar in IDE.",source:"@site/contribute/setup-debugging.md",sourceDirName:".",slug:"/setup-debugging",permalink:"/contribute/setup-debugging",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-debugging.md",tags:[],version:"current",lastUpdatedBy:"Julien Jakubowski",lastUpdatedAt:1709408074,formattedLastUpdatedAt:"Mar 2, 2024",frontMatter:{id:"setup-debugging",title:"Debugging Pulsar source code in IDE",sidebar_label:"Debugging",description:"Getting started to debugging Pulsar in IDE."},sidebar:"sidebarDevelopment",previous:{title:"Setting up an IDE",permalink:"/contribute/setup-ide"},next:{title:"Coding conventions",permalink:"/contribute/develop-coding-conventions"}},s={},u=[{value:"Debugging Pulsar in Standalone Mode",id:"debugging-pulsar-in-standalone-mode",level:2},{value:"Download and Extract Pulsar Binary Distribution",id:"download-and-extract-pulsar-binary-distribution",level:3},{value:"Run Pulsar in Standalone Mode with Debugger Options",id:"run-pulsar-in-standalone-mode-with-debugger-options",level:3},{value:"Configure IntelliJ IDEA for Remote Debugging",id:"configure-intellij-idea-for-remote-debugging",level:2},{value:"Debugging the source version of Pulsar",id:"debugging-the-source-version-of-pulsar",level:2},{value:"Debugging pulsar-shell and pulsar-client",id:"debugging-pulsar-shell-and-pulsar-client",level:2}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Debugging the Pulsar with its source code can be essential for identifying and resolving issues during development. This page provides step-by-step instructions on debugging Pulsar in standalone mode and debugging the source version of Apache Pulsar."),(0,a.kt)("h2",{id:"debugging-pulsar-in-standalone-mode"},"Debugging Pulsar in Standalone Mode"),(0,a.kt)("h3",{id:"download-and-extract-pulsar-binary-distribution"},"Download and Extract Pulsar Binary Distribution"),(0,a.kt)("p",null,"Download the binary distribution of the desired Pulsar release and extract it to a directory of your choice."),(0,a.kt)("h3",{id:"run-pulsar-in-standalone-mode-with-debugger-options"},"Run Pulsar in Standalone Mode with Debugger Options"),(0,a.kt)("p",null,"Navigate to the Pulsar directory and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar standalone -nss -nfw\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"suspend=n")," allows the process to start without waiting for the debugger to connect immediately. You can change ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend=n")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend=y")," if you want the process to wait for the debugger to connect.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In your IDE, follow the instructions at ",(0,a.kt)("a",{parentName:"p",href:"/contribute/setup-ide"},"Setting up an IDE")," to configure your IDE for Pulsar development.")),(0,a.kt)("h2",{id:"configure-intellij-idea-for-remote-debugging"},"Configure IntelliJ IDEA for Remote Debugging"),(0,a.kt)("p",null,"First, Open Your Pulsar Project in IntelliJ IDEA:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open IntelliJ IDEA."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"File > Open")," and navigate to your Pulsar project.")),(0,a.kt)("p",null,"Then, create a Remote Debugger Configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"Run/Debug Configurations")," dialog by clicking on the dropdown near the top-right corner (next to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Run/Debug")," button) and selecting ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit Configurations"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," button to add a new configuration and choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Remote")," from the list."),(0,a.kt)("li",{parentName:"ol"},'Provide a name for your configuration (e.g., "Pulsar Remote Debugger"). '),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Debugger mode")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Attach to remote JVM"),"."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Host")," to localhost or the IP address of the machine running Pulsar."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Port")," to the same port number used in your Pulsar startup command (e.g., 5005)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok")," to save the configuration.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To reset the persistent state, you can remove data under the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," folder before starting, with: ",(0,a.kt)("inlineCode",{parentName:"p"},"rm -rf data"),".")),(0,a.kt)("h2",{id:"debugging-the-source-version-of-pulsar"},"Debugging the source version of Pulsar"),(0,a.kt)("p",null,"Clone and compile Pulsar from source code and run Pulsar in standalone mode with debugger options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/apache/pulsar\ncd pulsar\nmvn -Pcore-modules,-main -T 1C install -DskipTests -Dspotbugs.skip=true\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar standalone -nss -nfw\n')),(0,a.kt)("h2",{id:"debugging-pulsar-shell-and-pulsar-client"},"Debugging pulsar-shell and pulsar-client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# For Pulsar-Shell\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-shell\n# For Pulsar-Client\n# Consumer\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-client consume -s sub apache/pulsar/test-topic -n 0  \n# Producer\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n')),(0,a.kt)("p",null,"Ensure that the debugger is configured in your IDE to connect to the specified port."),(0,a.kt)("p",null,"By following these steps, you can effectively debug both the standalone mode and the source version of Apache Pulsar, including pulsar-shell and pulsar-client processes."))}g.isMDXComponent=!0}}]);