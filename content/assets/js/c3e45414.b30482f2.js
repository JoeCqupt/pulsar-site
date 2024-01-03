"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"develop-coding-conventions",title:"Coding conventions"},i=void 0,l={unversionedId:"develop-coding-conventions",id:"develop-coding-conventions",title:"Coding conventions",description:"The guidelines help to encourage consistency and best practices among people working on Apache Pulsar code base. You should observe the guidelines unless there is compelling reason to ignore them. Pulsar uses checkstyle to enforce coding style, refer to our checkstyle rules for all enforced checkstyle rules.",source:"@site/contribute/develop-coding-conventions.md",sourceDirName:".",slug:"/develop-coding-conventions",permalink:"/contribute/develop-coding-conventions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/develop-coding-conventions.md",tags:[],version:"current",lastUpdatedBy:"Zike Yang",lastUpdatedAt:1704274634,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"develop-coding-conventions",title:"Coding conventions"},sidebar:"sidebarDevelopment",previous:{title:"Debugging",permalink:"/contribute/setup-debugging"},next:{title:"Triaging an Issue",permalink:"/contribute/develop-triage"}},s={},u=[{value:"Java code style",id:"java-code-style",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Future",id:"future",level:2},{value:"Memory",id:"memory",level:2},{value:"Logging",id:"logging",level:2},{value:"Logging levels",id:"logging-levels",level:3},{value:"Monitoring",id:"monitoring",level:2},{value:"Unit tests",id:"unit-tests",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Concurrency",id:"concurrency",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The guidelines help to encourage consistency and best practices among people working on Apache Pulsar code base. You should observe the guidelines unless there is compelling reason to ignore them. Pulsar uses checkstyle to enforce coding style, refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/buildtools/src/main/resources/pulsar/checkstyle.xml"},"checkstyle rules")," for all enforced checkstyle rules."),(0,o.kt)("h2",{id:"java-code-style"},"Java code style"),(0,o.kt)("p",null,"Apache Pulsar code follows the ",(0,o.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html"},"Sun Java Coding Convention"),", with the following additions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Indentation should be ",(0,o.kt)("strong",{parentName:"li"},"4 spaces"),". Tabs should never be used."),(0,o.kt)("li",{parentName:"ul"},"Use curly braces even for single-line ifs and elses."),(0,o.kt)("li",{parentName:"ul"},"No @author tags in any javadoc."),(0,o.kt)("li",{parentName:"ul"},"Use try-with-resources blocks whenever is possible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TODO"),"s should be associated to at least one issue.")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Apache Pulsar uses the following libraries a lot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/guava"},"Guava")," as a fundamental core library"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://netty.io/"},"Netty")," for network communications and memory buffer management.")),(0,o.kt)("p",null,"Use these libraries whenever possible rather than introducing more dependencies."),(0,o.kt)("p",null,"Dependencies are bundled with our binary distributions, so you need to attach the relevant licenses when adding new dependencies."),(0,o.kt)("h2",{id:"future"},"Future"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," introduce in Java 8 is preferred over Guava's ",(0,o.kt)("inlineCode",{parentName:"p"},"ListenableFuture"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," whenever possible."),(0,o.kt)("h2",{id:"memory"},"Memory"),(0,o.kt)("p",null,"Use netty ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteBuf")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"java.nio.ByteBuffer")," for internal usage. As Pulsar uses Netty Buffer for memory management."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logging should be taken seriously. Please take the time to access the logs when making a change to ensure that the important things are getting logged and there is no junk there."),(0,o.kt)("li",{parentName:"ul"},"Logging statements should be complete sentences with proper capitalization that are written to be read by a person not necessarily familiar with the source code."),(0,o.kt)("li",{parentName:"ul"},"All logs should be done with ",(0,o.kt)("strong",{parentName:"li"},"SLF4j"),", never ",(0,o.kt)("inlineCode",{parentName:"li"},"System.out")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"System.err"),".")),(0,o.kt)("h3",{id:"logging-levels"},"Logging levels"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"INFO")," is the level you should assume the software will be run in. INFO messages are things which are not bad but which the user will definitely want to know about every time they occur."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TRACE")," and ",(0,o.kt)("strong",{parentName:"li"},"DEBUG")," are both things you turn on when something is wrong, and you want to figure out what is going on. ",(0,o.kt)("strong",{parentName:"li"},"DEBUG")," should not be so fine-grained that it will seriously affect performance of the program. ",(0,o.kt)("strong",{parentName:"li"},"TRACE")," can be anything. You should wrap DEBUG and TRACE statements in the ",(0,o.kt)("inlineCode",{parentName:"li"},"if (logger.isDebugEnabled())")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"if (logger.isTraceEnabled())")," check to avoid performance degradation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WARN")," and ",(0,o.kt)("strong",{parentName:"li"},"ERROR")," indicate something that is ",(0,o.kt)("em",{parentName:"li"},"BAD"),". Use WARN if you aren't totally sure it is bad, and ERROR if you are.")),(0,o.kt)("p",null,"Log the stack traces at ",(0,o.kt)("strong",{parentName:"p"},"ERROR")," level, but never at ",(0,o.kt)("strong",{parentName:"p"},"INFO")," level or below. You can log at ",(0,o.kt)("strong",{parentName:"p"},"WARN")," level if you are interested in debugging."),(0,o.kt)("h2",{id:"monitoring"},"Monitoring"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any new features should come with appropriate metrics, so monitoring the feature is working correctly."),(0,o.kt)("li",{parentName:"ul"},"Those metrics should be taken seriously and only export useful metrics that would be used on production on monitoring/alerting healthy of the system, or troubleshooting problems.")),(0,o.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New changes should come with unit tests that verify the functionality being added."),(0,o.kt)("li",{parentName:"ul"},"Unit tests should test the least amount of code possible. Don't start the whole server unless there is no other way to test a single class or small group of classes in isolation."),(0,o.kt)("li",{parentName:"ul"},"Tests should not depend on any external resources. They need to set up and teardown their own stuff."),(0,o.kt)("li",{parentName:"ul"},"It is okay to use the filesystem and network in tests since that's our business, but you need to clean up them after test."),(0,o.kt)("li",{parentName:"ul"},"DO NOT use sleep or other timing assumptions in tests. It is wrong and will fail intermittently on any test server with other things going on that causes delays."),(0,o.kt)("li",{parentName:"ul"},"You'd better add a timeout value to all test cases, to prevent a build from completing indefinitely. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"@Test(timeout=60000)"),".")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you use the config files, think of the names from the very beginning."),(0,o.kt)("li",{parentName:"ul"},"If you run the program without tuning parameters, use the default values."),(0,o.kt)("li",{parentName:"ul"},"All configuration settings should be added accordingly in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master/conf"},"default configuration file")," directory and documented accordingly.")),(0,o.kt)("h2",{id:"concurrency"},"Concurrency"),(0,o.kt)("p",null,"Apache Pulsar is a low latency system, it is implemented as a purely asynchronous service, which is accomplished as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All public classes should be ",(0,o.kt)("strong",{parentName:"li"},"thread-safe"),"."),(0,o.kt)("li",{parentName:"ul"},"Prefer using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/bookkeeper/blob/master/bookkeeper-common/src/main/java/org/apache/bookkeeper/common/util/OrderedExecutor.java"},"OrderedExecutor")," for executing any asynchronous actions. The mutations to the same instance should be submitted to the same thread to execute."),(0,o.kt)("li",{parentName:"ul"},"If synchronization and locking are required, they should be in a fine granularity way."),(0,o.kt)("li",{parentName:"ul"},"All threads should have proper meaningful name."),(0,o.kt)("li",{parentName:"ul"},"If a class is not thread-safe, it should be annotated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/misberner/jsr-305/blob/master/ri/src/main/java/javax/annotation/concurrent/NotThreadSafe.java"},"@NotThreadSafe"),". The instances that use this class is responsible for its synchronization.")),(0,o.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wire protocol should support backwards compatibility to enable no-downtime upgrades. This means the servers ",(0,o.kt)("strong",{parentName:"li"},"MUST")," be able to support requests from both old and new clients simultaneously."),(0,o.kt)("li",{parentName:"ul"},"Metadata formats and data formats should support backwards compatibility.")))}d.isMDXComponent=!0}}]);