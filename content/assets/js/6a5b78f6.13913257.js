"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[77054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||k[m]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={id:"security-token-client",title:"Client Authentication using tokens",sidebar_label:"Client Authentication using tokens",original_id:"security-token-client"},o=void 0,l={unversionedId:"security-token-client",id:"version-2.3.2/security-token-client",title:"Client Authentication using tokens",description:"Token Authentication Overview",source:"@site/versioned_docs/version-2.3.2/security-token-client.md",sourceDirName:".",slug:"/security-token-client",permalink:"/docs/2.3.2/security-token-client",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/security-token-client.md",tags:[],version:"2.3.2",frontMatter:{id:"security-token-client",title:"Client Authentication using tokens",sidebar_label:"Client Authentication using tokens",original_id:"security-token-client"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Authentication using TLS",permalink:"/docs/2.3.2/security-tls-authentication"},next:{title:"Token authentication admin",permalink:"/docs/2.3.2/security-token-admin"}},c={},s=[{value:"Token Authentication Overview",id:"token-authentication-overview",level:2},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"Go client",id:"go-client",level:3},{value:"C++ client",id:"c-client",level:3}],u={toc:s},p="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"token-authentication-overview"},"Token Authentication Overview"),(0,r.kt)("p",null,"Pulsar supports authenticating clients using security tokens that are based on ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),")."),(0,r.kt)("p",null,'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (for example, publish messages to a topic or consume messages from a topic).'),(0,r.kt)("p",null,"The administrator (or some automated service) typically gives a user a token string."),(0,r.kt)("p",null,"The compact representation of a signed JWT is a string that looks like as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.kt)("p",null,'Application specifies the token when you are creating the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/security-token-admin"},"Token authentication admin")," for a reference on how to enable token\nauthentication on a Pulsar cluster."),(0,r.kt)("h3",{id:"cli-tools"},"CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-cli-tools#pulsar-perf"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.kt)("p",null,"The token string can also be read from a file, eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nauthParams=file:///path/to/token/file\n\n")),(0,r.kt)("h3",{id:"java-client"},"Java client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n    .build();\n\n')),(0,r.kt)("p",null,"Similarly, one can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        })\n    .build();\n\n')),(0,r.kt)("h3",{id:"python-client"},"Python client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n")),(0,r.kt)("p",null,"Alternatively, with a supplier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n\n")),(0,r.kt)("h3",{id:"go-client"},"Go client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n')),(0,r.kt)("p",null,"Alternatively, with a supplier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n        return readToken()\n    }),\n})\n\n')),(0,r.kt)("h3",{id:"c-client"},"C++ client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n')))}k.isMDXComponent=!0}}]);