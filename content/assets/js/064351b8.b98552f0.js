"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker"},o=void 0,l={unversionedId:"standalone-docker",id:"version-2.11.x/standalone-docker",title:"Set up a standalone Pulsar in Docker",description:"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container.",source:"@site/versioned_docs/version-2.11.x/standalone-docker.md",sourceDirName:".",slug:"/standalone-docker",permalink:"/docs/2.11.x/standalone-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/standalone-docker.md",tags:[],version:"2.11.x",frontMatter:{id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker"}},i={},u=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."),(0,r.kt)("p",null,"If you have not installed Docker, download it following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,r.kt)("h2",{id:"start-pulsar-in-docker"},"Start Pulsar in Docker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For macOS, Linux, and Windows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.11.0 bin/pulsar standalone\n")))),(0,r.kt)("p",null,"A few things to note about this command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes to not start "fresh" every\ntime the container is restarted. For details on the volumes, you can use ',(0,r.kt)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>"),"."),(0,r.kt)("li",{parentName:"ul"},"For Docker on Windows, make sure to configure it to use Linux containers."),(0,r.kt)("li",{parentName:"ul"},"The docker container will run as UID 10000 and GID 0, by default. You'll need to ensure the mounted volumes give write permission to either UID 10000 or GID 0. Note that UID 10000 is arbitrary, so it is recommended to make these mounts writable for the root group (GID 0).")),(0,r.kt)("p",null,"If you start Pulsar successfully, you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you start a local standalone cluster, a ",(0,r.kt)("inlineCode",{parentName:"p"},"public/default"))),(0,r.kt)("p",null,"A namespace is created automatically, which is used for development purposes. All Pulsar topics are managed within namespaces.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/concepts-messaging#topics"},"Topics"),"."),(0,r.kt)("h2",{id:"use-pulsar-in-docker"},"Use Pulsar in Docker"),(0,r.kt)("p",null,"Pulsar offers client libraries for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-java"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-python"},"Python"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,r.kt)("p",null,"The following example will guide you to get started with Pulsar quickly by using the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/3.1.x"},"Python client API"),"."),(0,r.kt)("p",null,"Install the Pulsar Python client library directly from ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client\n")),(0,r.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.kt)("p",null,"Create a consumer and subscribe to the topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n")),(0,r.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.kt)("p",null,"Now start a producer to send some test messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n")),(0,r.kt)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,r.kt)("p",null,"In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/admin-api-overview"},"Admin API Overview"),"."),(0,r.kt)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n")),(0,r.kt)("p",null,"The output is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n')))}d.isMDXComponent=!0}}]);