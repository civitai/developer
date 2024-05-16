"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[7788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Python SDK"},l="Civitai Generator Python Client",o={unversionedId:"api/python-sdk",id:"api/python-sdk",title:"Python SDK",description:"A Python client for Civitai's generator to run Civitai models from your Python code.",source:"@site/docs/api/python-sdk.md",sourceDirName:"api",slug:"/api/python-sdk",permalink:"/docs/api/python-sdk",draft:!1,tags:[],version:"current",frontMatter:{title:"Python SDK"},sidebar:"tutorialSidebar",previous:{title:"JavaScript SDK",permalink:"/docs/api/javascript-sdk"},next:{title:"Link",permalink:"/docs/link"}},p={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Installation",id:"installation",level:2},{value:"Authenticate",id:"authenticate",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Import the Civitai SDK:",id:"import-the-civitai-sdk",level:4},{value:"Create a txt2img job:",id:"create-a-txt2img-job",level:4},{value:"Using Additional Networks",id:"using-additional-networks",level:3},{value:"<code>civitai.image.create</code>",id:"civitaiimagecreate",level:3},{value:"Additional Networks",id:"additional-networks",level:4},{value:"ControlNets",id:"controlnets",level:4},{value:"<code>civitai.jobs.get</code>",id:"civitaijobsget",level:3},{value:"<code>civitai.jobs.query</code>",id:"civitaijobsquery",level:3},{value:"<code>civitai.jobs.cancel</code>",id:"civitaijobscancel",level:3},{value:"Contributing Your Changes",id:"contributing-your-changes",level:3},{value:"Additional Guidelines",id:"additional-guidelines",level:3}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"civitai-generator-python-client"},"Civitai Generator Python Client"),(0,r.kt)("p",null,"A Python client for Civitai's generator to run Civitai models from your Python code."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"To get started with the Civitai Generator Python Client, you can use the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Google Colab Notebook"),": Jump into a pre-configured environment with a live notebook to try out the Civitai SDK."),(0,r.kt)("a",{target:"_blank",href:"https://colab.research.google.com/github/civitai/civitai-python/blob/main/examples/text2img.ipynb"},(0,r.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Streamlit Demo"),": See the Civitai SDK in action with a live Streamlit app demo. ",(0,r.kt)("a",{parentName:"p",href:"https://civitai.streamlit.app/"},"View Streamlit Demo")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pip install civitai-py\n")),(0,r.kt)("h2",{id:"authenticate"},"Authenticate"),(0,r.kt)("p",null,"Before running any Python scripts that use the API, you need to set your Civitai API token in your environment."),(0,r.kt)("p",null,"Grab your token from ",(0,r.kt)("a",{parentName:"p",href:"https://civitai.com/user/account"},"civitai.com/user/account")," and set it as an environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CIVITAI_API_TOKEN=<your token>\n")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python 3.7+")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h4",{id:"import-the-civitai-sdk"},"Import the Civitai SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import civitai\n")),(0,r.kt)("h4",{id:"create-a-txt2img-job"},"Create a txt2img job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'input = {\n    "model": "urn:air:sd1:checkpoint:civitai:4201@130072",\n    "params": {\n        "prompt": "RAW photo, face portrait photo of 26 y.o woman, wearing black dress, happy face, hard shadows, cinematic shot, dramatic lighting",\n        "negativePrompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3)",\n        "scheduler": "EulerA",\n        "steps": 20,\n        "cfgScale": 7,\n        "width": 512,\n        "height": 512,\n        "clipSkip": 2\n    }\n}\n')),(0,r.kt)("p",null,"Run a model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"response = civitai.image.create(input)\n")),(0,r.kt)("h3",{id:"using-additional-networks"},"Using Additional Networks"),(0,r.kt)("p",null,"The SDK supports additional networks: LoRA, VAE, Hypernetwork, Textual Inversion, LyCORIS, Checkpoint, and LoCon."),(0,r.kt)("p",null,"To use any of the networks availabe on Civitai, simply add the ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalNetworks")," field into the input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'input = {\n    "model": "urn:air:sd1:checkpoint:civitai:4384@128713",\n    "params": {\n        "prompt": "masterpiece, best quality, 1girl, IncrsAhri, multiple tails, fox tail, korean clothes, skirt, braid, arms behind back",\n        "negativePrompt": "(worst quality:1.4), (low quality:1.4), simple background, bad anatomy",\n        "scheduler": "EulerA",\n        "steps": 25,\n        "cfgScale": 7,\n        "width": 512,\n        "height": 768,\n        "seed": -1,\n        "clipSkip": 2\n    },\n    "additionalNetworks": {\n        "urn:air:sd1:lora:civitai:162141@182559": {\n            "type": "Lora",\n            "strength": 1.0\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"Lora")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoCon")," networks, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"strength")," of the network; for ",(0,r.kt)("inlineCode",{parentName:"p"},"TextualInversion"),", set the ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerWord")," of the network."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"civitaiimagecreate"},(0,r.kt)("inlineCode",{parentName:"h3"},"civitai.image.create")),(0,r.kt)("p",null,"Run a model with inputs you provide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"response = civitai.image.create(options)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"),". The Civitai model to use for generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.prompt")),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"),". The main prompt for the image generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.negativePrompt")),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The negative prompt for the image generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.scheduler")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"civitai/models/scheduler.py"},"Scheduler")," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The scheduler algorithm to use. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"Possible values are: ",(0,r.kt)("inlineCode",{parentName:"td"},"EulerA"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Euler"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LMS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Heun"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2A"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2SA"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2M"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPMSDE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPMFast"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPMAdaptive"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LMSKarras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2Karras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2AKarras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2SAKarras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPM2MKarras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DPMSDEKarras"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DDIM"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PLMS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UniPC"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Undefined"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LCM"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DDPM"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEIS"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.steps")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The number of steps for the image generation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.cfgScale")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The CFG scale for the image generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.width")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"),". The width of the generated image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.height")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"),". The height of the generated image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.seed")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The seed for the image generation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.clipSkip")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The number of CLIP skips for the image generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"callbackUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. URL that will be invoked upon completion of this job")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"additionalNetworks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"civitai/models/image_job_network_params.py"},"ImageJobNetworkParams")," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. An associative list of additional networks, keyed by the AIR of the network. Each network is of type ",(0,r.kt)("a",{parentName:"td",href:"civitai/models/asset_type.py"},"AssetType"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controlNets")),(0,r.kt)("td",{parentName:"tr",align:null},"Array<",(0,r.kt)("a",{parentName:"td",href:"civitai/models/image_job_control_net.py"},"ImageJobControlNet"),"> ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. An associative list of additional networks.")))),(0,r.kt)("h4",{id:"additional-networks"},"Additional Networks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"additionalNetworks")),(0,r.kt)("th",{parentName:"tr",align:null},"Record<string, ",(0,r.kt)("a",{parentName:"th",href:"civitai/models/image_job_network_params.py"},"ImageJobNetworkParams"),">"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional. An associative list of additional networks, keyed by the AIR of the network. Each network is described by an ",(0,r.kt)("inlineCode",{parentName:"th"},"ImageJobNetworkParams")," object."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"civitai/models/asset_type.py"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetType"))),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The type of the asset. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Can be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"Lora"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Hypernetwork"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TextualInversion"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Lycoris"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Checkpoint"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Vae"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LoCon"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strength")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. In case of Lora and LoCon, set the strength of the network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triggerWord")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. In case of a TextualInversion, set the trigger word of the network.")))),(0,r.kt)("h4",{id:"controlnets"},"ControlNets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"controlNets")),(0,r.kt)("th",{parentName:"tr",align:null},"Array<",(0,r.kt)("a",{parentName:"th",href:"civitai/models/image_job_control_net.py"},"ImageJobControlNet"),">"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional. An array of control networks that can be applied to the image generation process. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Each ",(0,r.kt)("inlineCode",{parentName:"th"},"ImageJobControlNet")," object in the array can have the following properties:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preprocessor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"civitai/models/image_transformer.py"},"ImageTransformer")," ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the image transformer to be applied as a preprocessor. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"Canny"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DepthZoe"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SoftedgePidinet"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Rembg"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"weight")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The weight of the control net.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startStep")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The step at which the control net starts to apply.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endStep")),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The step at which the control net stops applying.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imageUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The URL of the image associated with the controlnet.")))),(0,r.kt)("h3",{id:"civitaijobsget"},(0,r.kt)("inlineCode",{parentName:"h3"},"civitai.jobs.get")),(0,r.kt)("p",null,"Fetches job details based on a provided token or job ID. If both are provided, the token takes precedence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'job_id = "your_job_id_here"\nresponse = civitai.jobs.get(id=job_id)\n\n# OR\n\ntoken = "your_token_here"\nresponse = civitai.jobs.get(token=token)\n')),(0,r.kt)("h3",{id:"civitaijobsquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"civitai.jobs.query")),(0,r.kt)("p",null,"Retrieve a collection of jobs by querying properties, e.g., userId. You can optionally include a ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed")," boolean flag to get detailed information about the jobs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query = {\n    "properties": {\n        "userId": 4  # Querying by userId\n    }\n}\n\ndetailed = False  # Optional boolean flag to get detailed job definitions. False by default.\n\nresponse = civitai.jobs.query(detailed=detailed, query_jobs_request=query)\n')),(0,r.kt)("h3",{id:"civitaijobscancel"},(0,r.kt)("inlineCode",{parentName:"h3"},"civitai.jobs.cancel")),(0,r.kt)("p",null,"Cancel a job by its jobId."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"response = civitai.jobs.cancel(job_id)\n\n")),(0,r.kt)("p",null,"This method cancels a job that is currently scheduled or running. It requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobId")," of the job you wish to cancel. On successful cancellation, it returns a response object indicating the cancellation status."),(0,r.kt)("h3",{id:"contributing-your-changes"},"Contributing Your Changes"),(0,r.kt)("p",null,"After making your changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Push your changes to your fork."),(0,r.kt)("li",{parentName:"ol"},"Open a pull request against the main repository."),(0,r.kt)("li",{parentName:"ol"},"Describe your changes and how they improve the project or fix issues.")),(0,r.kt)("p",null,"Your contributions will be reviewed, and if accepted, merged into the project."),(0,r.kt)("h3",{id:"additional-guidelines"},"Additional Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include unit tests for new features or bug fixes."),(0,r.kt)("li",{parentName:"ul"},"Update the documentation if necessary.")),(0,r.kt)("p",null,"Thank you for contributing to the Civitai Generator Python Client! \ud83e\udd79\ud83e\udd2d"))}m.isMDXComponent=!0}}]);