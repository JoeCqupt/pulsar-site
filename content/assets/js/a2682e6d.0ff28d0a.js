"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},o=void 0,l={unversionedId:"functions-overview",id:"version-2.2.1/functions-overview",title:"Pulsar Functions overview",description:"Pulsar Functions are lightweight compute processes that",source:"@site/versioned_docs/version-2.2.1/functions-overview.md",sourceDirName:".",slug:"/functions-overview",permalink:"/docs/2.2.1/functions-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/functions-overview.md",tags:[],version:"2.2.1",frontMatter:{id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Schema Registry",permalink:"/docs/2.2.1/concepts-schema-registry"},next:{title:"Getting started",permalink:"/docs/2.2.1/functions-quickstart"}},s={},u=[{value:"Goals",id:"goals",level:2},{value:"Inspirations",id:"inspirations",level:2},{value:"Programming model",id:"programming-model",level:2},{value:"Word count example",id:"word-count-example",level:3},{value:"Content-based routing example",id:"content-based-routing-example",level:3},{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Fully Qualified Function Name (FQFN)",id:"fully-qualified-function-name-fqfn",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Supported languages",id:"supported-languages",level:2},{value:"The Pulsar Functions API",id:"the-pulsar-functions-api",level:2},{value:"Function context",id:"function-context",level:3},{value:"Language-native functions",id:"language-native-functions",level:3},{value:"The Pulsar Functions SDK",id:"the-pulsar-functions-sdk",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"Deployment",id:"deployment",level:2},{value:"Local run mode",id:"local-run-mode",level:3},{value:"Cluster run mode",id:"cluster-run-mode",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"Function instance resources",id:"function-instance-resources",level:3},{value:"Logging",id:"logging",level:3},{value:"User configuration",id:"user-configuration",level:3},{value:"Triggering Pulsar Functions",id:"triggering-pulsar-functions",level:3},{value:"Processing guarantees",id:"processing-guarantees",level:2},{value:"Metrics",id:"metrics",level:2},{value:"State storage",id:"state-storage",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics,"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message,"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Here's an example Pulsar Function for Java (using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#java-native-functions"},"native interface"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) { return String.format("%s!", input); }\n}\n\n')),(0,i.kt)("p",null,"Here's an equivalent function in Python (also using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#python-native-functions"},"native interface"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\ndef process(input):\n    return "{0}!".format(input)\n\n')),(0,i.kt)("p",null,"Functions are executed each time a message is published to the input topic. If a function is listening on the topic ",(0,i.kt)("inlineCode",{parentName:"p"},"tweet-stream"),", for example, then the function would be run each time a message is published to that topic."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"The core goal behind Pulsar Functions is to enable you to easily create processing logic of any level of complexity without needing to deploy a separate neighboring system (such as ",(0,i.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm"),", ",(0,i.kt)("a",{parentName:"p",href:"https://apache.github.io/incubator-heron"},"Apache Heron"),", ",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", etc.). Pulsar Functions is essentially ready-made compute infrastructure at your disposal as part of your Pulsar messaging system. This core goal is tied to a series of other goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Developer productivity (",(0,i.kt)("a",{parentName:"li",href:"#language-native-functions"},"language-native")," vs. ",(0,i.kt)("a",{parentName:"li",href:"#the-pulsar-functions-sdk"},"Pulsar Functions SDK")," functions)"),(0,i.kt)("li",{parentName:"ul"},"Easy troubleshooting"),(0,i.kt)("li",{parentName:"ul"},"Operational simplicity (no need for an external processing system)")),(0,i.kt)("h2",{id:"inspirations"},"Inspirations"),(0,i.kt)("p",null,"The Pulsar Functions feature was inspired by (and takes cues from) several systems and paradigms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stream processing engines such as ",(0,i.kt)("a",{parentName:"li",href:"http://storm.apache.org/"},"Apache Storm"),", ",(0,i.kt)("a",{parentName:"li",href:"https://apache.github.io/incubator-heron"},"Apache Heron"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://flink.apache.org"},"Apache Flink")),(0,i.kt)("li",{parentName:"ul"},'"Serverless" and "Function as a Service" (FaaS) cloud platforms like ',(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Amazon Web Services Lambda"),", ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/"},"Google Cloud Functions"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/functions/"},"Azure Cloud Functions"))),(0,i.kt)("p",null,"Pulsar Functions could be described as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Lambda"),"-style functions that are"),(0,i.kt)("li",{parentName:"ul"},"specifically designed to use Pulsar as a message bus")),(0,i.kt)("h2",{id:"programming-model"},"Programming model"),(0,i.kt)("p",null,"The core programming model behind Pulsar Functions is very simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions receive messages from one or more ",(0,i.kt)("strong",{parentName:"li"},"input ",(0,i.kt)("a",{parentName:"strong",href:"/docs/2.2.1/reference-terminology#topic"},"topics")),". Every time a message is received, the function can do a variety of things:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Apply some processing logic to the input and write output to:"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"output topic")," in Pulsar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#state-storage"},"Apache BookKeeper")),(0,i.kt)("li",{parentName:"ul"},"Write logs to a ",(0,i.kt)("strong",{parentName:"li"},"log topic")," (potentially for debugging purposes)"),(0,i.kt)("li",{parentName:"ul"},"Increment a ",(0,i.kt)("a",{parentName:"li",href:"#word-count-example"},"counter"))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions core programming model",src:t(74922).Z,width:"1712",height:"1049"})),(0,i.kt)("h3",{id:"word-count-example"},"Word count example"),(0,i.kt)("p",null,"If you were to implement the classic word count example using Pulsar Functions, it might look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions word count example",src:t(73011).Z,width:"1769",height:"916"})),(0,i.kt)("p",null,"If you were writing the function in ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#functions-for-java"},"Java")," using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#java-sdk-functions"},"Pulsar Functions SDK for Java"),", you could write the function like this..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.example.functions;\n\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountFunction implements Function<String, Void> {\n    // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) {\n        Arrays.asList(input.split(" ")).forEach(word -> {\n            String counterKey = word.toLowerCase();\n            context.incrCounter(counterKey, 1)\n        });\n        return null;\n    }\n}\n\n')),(0,i.kt)("p",null,"...and then ",(0,i.kt)("a",{parentName:"p",href:"#cluster-run-mode"},"deploy it")," in your Pulsar cluster using the ",(0,i.kt)("a",{parentName:"p",href:"#command-line-interface"},"command line")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-jar-with-dependencies.jar \\\n  --classname org.example.functions.WordCountFunction \\\n  --tenant public \\\n  --namespace default \\\n  --name word-count \\\n  --inputs persistent://public/default/sentences \\\n  --output persistent://public/default/count\n\n")),(0,i.kt)("h3",{id:"content-based-routing-example"},"Content-based routing example"),(0,i.kt)("p",null,"The use cases for Pulsar Functions are essentially endless, but let's dig into a more sophisticated example that involves content-based routing."),(0,i.kt)("p",null,"Imagine a function that takes items (strings) as input and publishes them to either a fruits or vegetables topic, depending on the item. Or, if an item is neither a fruit nor a vegetable, a warning is logged to a ",(0,i.kt)("a",{parentName:"p",href:"#logging"},"log topic"),". Here's a visual representation:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions routing example",src:t(72047).Z,width:"1772",height:"836"})),(0,i.kt)("p",null,"If you were implementing this routing functionality in Python, it might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Function\n\nclass RoutingFunction(Function):\n    def __init__(self):\n        self.fruits_topic = "persistent://public/default/fruits"\n        self.vegetables_topic = "persistent://public/default/vegetables"\n\n    @staticmethod\n    def is_fruit(item):\n        return item in ["apple", "orange", "pear", "other fruits..."]\n\n    @staticmethod\n    def is_vegetable(item):\n        return item in ["carrot", "lettuce", "radish", "other vegetables..."]\n\n    def process(self, item, context):\n        if self.is_fruit(item):\n            context.publish(self.fruits_topic, item)\n        elif self.is_vegetable(item):\n            context.publish(self.vegetables_topic, item)\n        else:\n            warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n            context.get_logger().warn(warning)\n\n')),(0,i.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,i.kt)("p",null,"Pulsar Functions are managed using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool (in particular the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-pulsar-admin#functions"},(0,i.kt)("inlineCode",{parentName:"a"},"functions"))," command). Here's an example command that would run a function in ",(0,i.kt)("a",{parentName:"p",href:"#local-run-mode"},"local run mode"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-functions localrun \\\n  --inputs persistent://public/default/test_src \\\n  --output persistent://public/default/test_result \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction\n\n")),(0,i.kt)("h2",{id:"fully-qualified-function-name-fqfn"},"Fully Qualified Function Name (FQFN)"),(0,i.kt)("p",null,"Each Pulsar Function has a ",(0,i.kt)("strong",{parentName:"p"},"Fully Qualified Function Name")," (FQFN) that consists of three elements: the function's tenant, namespace, and function name. FQFN's look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\ntenant/namespace/name\n\n")),(0,i.kt)("p",null,"FQFNs enable you to, for example, create multiple functions with the same name provided that they're in different namespaces."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Pulsar Functions can be configured in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Via ",(0,i.kt)("a",{parentName:"li",href:"#command-line-interface"},"command-line arguments")," passed to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.2.1/reference-pulsar-admin#functions"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions"))," interface"),(0,i.kt)("li",{parentName:"ul"},"Via ",(0,i.kt)("a",{parentName:"li",href:"http://yaml.org/"},"YAML")," configuration files")),(0,i.kt)("p",null,"If you're supplying a YAML configuration, you must specify a path to the file on the command line. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --function-config-file ./my-function.yaml\n\n")),(0,i.kt)("p",null,"And here's an example ",(0,i.kt)("inlineCode",{parentName:"p"},"my-function.yaml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nname: my-function\ntenant: public\nnamespace: default\njar: ./target/my-functions.jar\nclassName: org.example.pulsar.functions.MyFunction\ninputs:\n- persistent://public/default/test_src\noutput: persistent://public/default/test_result\n\n")),(0,i.kt)("p",null,"You can also mix and match configuration methods by specifying some function attributes via the CLI and others via YAML configuration."),(0,i.kt)("h2",{id:"supported-languages"},"Supported languages"),(0,i.kt)("p",null,"Pulsar Functions can currently be written in ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#functions-for-java"},"Java")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#functions-for-python"},"Python"),". Support for additional languages is coming soon."),(0,i.kt)("h2",{id:"the-pulsar-functions-api"},"The Pulsar Functions API"),(0,i.kt)("p",null,"The Pulsar Functions API enables you to create processing logic that is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type safe. Pulsar Functions can process raw bytes or more complex, application-specific types."),(0,i.kt)("li",{parentName:"ul"},"Based on SerDe (",(0,i.kt)("strong",{parentName:"li"},"Ser"),"ialization/",(0,i.kt)("strong",{parentName:"li"},"De"),'serialization). A variety of types are supported "out of the box" but you can also create your own custom SerDe logic.')),(0,i.kt)("h3",{id:"function-context"},"Function context"),(0,i.kt)("p",null,"Each Pulsar Function created using the ",(0,i.kt)("a",{parentName:"p",href:"#the-pulsar-functions-sdk"},"Pulsar Functions SDK")," has access to a context object that both provides:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A wide variety of information about the function, including:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of the function"),(0,i.kt)("li",{parentName:"ul"},"The tenant and namespace of the function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#user-configuration"},"User-supplied configuration")," values")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Special functionality, including:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ability to produce ",(0,i.kt)("a",{parentName:"li",href:"#logging"},"logs")," to a specified logging topic"),(0,i.kt)("li",{parentName:"ul"},"The ability to produce ",(0,i.kt)("a",{parentName:"li",href:"#metrics"},"metrics"))),(0,i.kt)("h3",{id:"language-native-functions"},"Language-native functions"),(0,i.kt)("p",null,'Both Java and Python support writing "native" functions, i.e. Pulsar Functions with no dependencies.'),(0,i.kt)("p",null,"The benefit of native functions is that they don't have any dependencies beyond what's already available in Java/Python \"out of the box.\" The downside is that they don't provide access to the function's ",(0,i.kt)("a",{parentName:"p",href:"#function-context"},"context"),", which is necessary for a variety of functionality, including ",(0,i.kt)("a",{parentName:"p",href:"#logging"},"logging"),", ",(0,i.kt)("a",{parentName:"p",href:"#user-configuration"},"user configuration"),", and more."),(0,i.kt)("h2",{id:"the-pulsar-functions-sdk"},"The Pulsar Functions SDK"),(0,i.kt)("p",null,"If you'd like a Pulsar Function to have access to a ",(0,i.kt)("a",{parentName:"p",href:"#function-context"},"context object"),", you can use the ",(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions SDK"),", available for both ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#functions-for-java"},"Java")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#functions-for-python"},"Python"),"."),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"Here's an example Java function that uses information about its context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class ContextAwareFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context, context) {\n        Logger LOG = context.getLogger();\n        String functionTenant = context.getTenant();\n        String functionNamespace = context.getNamespace();\n        String functionName = context.getName();\n        LOG.info("Function tenant/namespace/name: {}/{}/{}", functionTenant, functionNamespace, functionName);\n        return null;\n    }\n}\n\n')),(0,i.kt)("h3",{id:"python"},"Python"),(0,i.kt)("p",null,"Here's an example Python function that uses information about its context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Function\n\nclass ContextAwareFunction(Function):\n    def process(self, input, context):\n        log = context.get_logger()\n        function_tenant = context.get_function_tenant()\n        function_namespace = context.get_function_namespace()\n        function_name = context.get_function_name()\n        log.info("Function tenant/namespace/name: {0}/{1}/{2}".format(function_tenant, function_namespace, function_name))\n\n')),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"The Pulsar Functions feature was built to support a variety of deployment options. At the moment, there are two ways to run Pulsar Functions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Deployment mode"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#local-run-mode"},"Local run mode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The function runs in your local environment, for example on your laptop ",(0,i.kt)("a",{parentName:"td",href:"#cluster-run-mode"},"Cluster mode"))))),(0,i.kt)("h3",{id:"local-run-mode"},"Local run mode"),(0,i.kt)("p",null,"If you run a Pulsar Function in ",(0,i.kt)("strong",{parentName:"p"},"local run")," mode, it will run on the machine from which the command is run (this could be your laptop, an ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"AWS EC2")," instance, etc.). Here's an example ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-pulsar-admin#localrun"},(0,i.kt)("inlineCode",{parentName:"a"},"localrun"))," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,i.kt)("p",null,"By default, the function will connect to a Pulsar cluster running on the same machine, via a local broker service URL of ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),". If you'd like to use local run mode to run a function but connect it to a non-local Pulsar cluster, you can specify a different broker URL using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--brokerServiceUrl")," flag. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n\n")),(0,i.kt)("h3",{id:"cluster-run-mode"},"Cluster run mode"),(0,i.kt)("p",null,"When you run a Pulsar Function in ",(0,i.kt)("strong",{parentName:"p"},"cluster mode"),", the function code will be uploaded to a Pulsar broker and run ",(0,i.kt)("em",{parentName:"p"},"alongside the broker")," rather than in your ",(0,i.kt)("a",{parentName:"p",href:"#local-run-mode"},"local environment"),". You can run a function in cluster mode using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-pulsar-admin#create-1"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," command. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,i.kt)("p",null,"This command will upload ",(0,i.kt)("inlineCode",{parentName:"p"},"myfunc.py")," to Pulsar, which will use the code to start one ",(0,i.kt)("a",{parentName:"p",href:"#parallelism"},"or more")," instances of the function."),(0,i.kt)("h3",{id:"parallelism"},"Parallelism"),(0,i.kt)("p",null,"By default, only one ",(0,i.kt)("strong",{parentName:"p"},"instance")," of a Pulsar Function runs when you create and run it in ",(0,i.kt)("a",{parentName:"p",href:"#cluster-run-mode"},"cluster run mode"),". You can also, however, run multiple instances in parallel. You can specify the number of instances when you create the function, or update an existing single-instance function with a new parallelism factor."),(0,i.kt)("p",null,"This command, for example, would create and run a function with a parallelism of 5 (i.e. 5 instances):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --name parallel-fun \\\n  --tenant public \\\n  --namespace default \\\n  --py func.py \\\n  --classname func.ParallelFunction \\\n  --parallelism 5\n\n")),(0,i.kt)("h3",{id:"function-instance-resources"},"Function instance resources"),(0,i.kt)("p",null,"When you run Pulsar Functions in ",(0,i.kt)("a",{parentName:"p",href:"#cluster-run-mode"},"cluster run")," mode, you can specify the resources that are assigned to each function ",(0,i.kt)("a",{parentName:"p",href:"#parallelism"},"instance"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Resource"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Specified as..."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Runtimes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of cores"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Docker (coming soon)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Process, Docker")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Disk space"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Docker")))),(0,i.kt)("p",null,"Here's an example function creation command that allocates 8 cores, 8 GB of RAM, and 10 GB of disk space to a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n\n")),(0,i.kt)("p",null,"For more information on resources, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-deploying#resources"},"Deploying and Managing Pulsar Functions")," documentation."),(0,i.kt)("h3",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Pulsar Functions created using the ",(0,i.kt)("a",{parentName:"p",href:"#the-pulsar-functions-sdk"},"Pulsar Functions SDK")," can send logs to a log topic that you specify as part of the function's configuration. The function created using the command below, for example, would produce all logs on the ",(0,i.kt)("inlineCode",{parentName:"p"},"persistent://public/default/my-func-1-log")," topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --name my-func-1 \\\n  --log-topic persistent://public/default/my-func-1-log \\\n  # Other configs\n\n")),(0,i.kt)("p",null,"Here's an example ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#java-logging"},"Java function")," that logs at different log levels based on the function's input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class LoggerFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        Logger LOG = context.getLogger();\n        if (input.length() <= 100) {\n            LOG.info("This string has a length of {}", input);\n        } else {\n            LOG.warn("This string is getting too long! It has {} characters", input);\n        }\n    }\n}\n\n')),(0,i.kt)("h3",{id:"user-configuration"},"User configuration"),(0,i.kt)("p",null,"Pulsar Functions can be passed arbitrary key-values via the command line (both keys and values must be strings). This set of key-values is called the functions ",(0,i.kt)("strong",{parentName:"p"},"user configuration"),". User configurations must consist of JSON strings."),(0,i.kt)("p",null,"Here's an example of passing a user configuration to a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions create \\\n  --user-config \'{"key-1":"value-1","key-2","value-2"}\' \\\n  # Other configs\n\n')),(0,i.kt)("p",null,"Here's an example of a function that accesses that config map:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class ConfigMapFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        String val1 = context.getUserConfigValue("key1").get();\n        String val2 = context.getUserConfigValue("key2").get();\n        context.getLogger().info("The user-supplied values are {} and {}", val1, val2);\n        return null;\n    }\n}\n\n')),(0,i.kt)("h3",{id:"triggering-pulsar-functions"},"Triggering Pulsar Functions"),(0,i.kt)("p",null,"Pulsar Functions running in ",(0,i.kt)("a",{parentName:"p",href:"#cluster-run-mode"},"cluster mode")," can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-deploying#triggering-pulsar-functions"},"triggered")," via the ",(0,i.kt)("a",{parentName:"p",href:"#command-line-interface"},"command line"),". With triggering you can easily pass a specific value to a function and get the function's return value ",(0,i.kt)("em",{parentName:"p"},"without")," needing to worry about creating a client, sending a message to the right input topic, etc. Triggering can be very useful for---but is by no means limited to---testing and debugging purposes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Triggering a function is ultimately no different from invoking a function by producing a message on one of the function's input topics. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-pulsar-admin#trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions trigger"))," command is essentially a convenient mechanism for sending messages to functions without needing to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-cli-tools#pulsar-client"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," tool or a language-specific client library.")),(0,i.kt)("p",null,"Let's take an example Pulsar Function written in Python (using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-api#python-native-functions"},"native interface"),") that simply reverses string inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\ndef process(input):\n    return input[::-1]\n\n")),(0,i.kt)("p",null,"If that function were running in a Pulsar cluster, it could be triggered like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name reverse-func \\\n  --trigger-value "snoitcnuf raslup ot emoclew"\n\n')),(0,i.kt)("p",null,"That should return ",(0,i.kt)("inlineCode",{parentName:"p"},"welcome to pulsar functions")," as the console output."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Instead of passing in a string via the CLI, you can also trigger a Pulsar Function with the contents of a file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--triggerFile")," flag.")),(0,i.kt)("h2",{id:"processing-guarantees"},"Processing guarantees"),(0,i.kt)("p",null,"The Pulsar Functions feature provides three different messaging semantics that you can apply to any function:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Delivery semantics"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"At-most-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Each message that is sent to the function will most likely be processed but also may not be (hence the "at most")')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"At-least-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Each message that is sent to the function could be processed more than once (hence the "at least")')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Effectively-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Each message that is sent to the function will have one output associated with it")))),(0,i.kt)("p",null,"This command, for example, would run a function in ",(0,i.kt)("a",{parentName:"p",href:"#cluster-run-mode"},"cluster mode")," with effectively-once guarantees applied:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --name my-effectively-once-function \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n")),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Pulsar Functions that use the ",(0,i.kt)("a",{parentName:"p",href:"#the-pulsar-functions-sdk"},"Pulsar Functions SDK")," can publish metrics to Pulsar. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.1/functions-metrics"},"Metrics for Pulsar Functions"),"."),(0,i.kt)("h2",{id:"state-storage"},"State storage"),(0,i.kt)("p",null,"Pulsar Functions use ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," as a state storage interface. All Pulsar installations, including local standalone installations, include a deployment of BookKeeper bookies."))}m.isMDXComponent=!0},74922:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"},72047:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pulsar-functions-routing-example-22b3f2b036505ad4d4dfd5f878de3ae3.png"},73011:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pulsar-functions-word-count-f7b0d99f0a0e03e0b20fd0aa0ff6ef48.png"}}]);