"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[2964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,c=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?o.createElement(c,a(a({ref:t},d),{},{components:r})):o.createElement(c,a({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5,title:"Diffusion Partner Program"},a=void 0,s={unversionedId:"diffusion-partner-program",id:"diffusion-partner-program",title:"Diffusion Partner Program",description:'To bring down the barrier of entry for people wanting to use models available on Civitai, we partner with image generation services to offer "Run Now" functionality for many models on the site.',source:"@site/docs/diffusion-partner-program.md",sourceDirName:".",slug:"/diffusion-partner-program",permalink:"/docs/diffusion-partner-program",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Diffusion Partner Program"},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/docs/link"}},l={},p=[{value:"What it looks like",id:"what-it-looks-like",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"For &quot;On-Demand&quot; Diffusion Partners",id:"for-on-demand-diffusion-partners",level:3},{value:"For &quot;Limited Model&quot; Diffusion Partners",id:"for-limited-model-diffusion-partners",level:3},{value:"Supported Models Endpoint (For &quot;Limited Model&quot; Diffusion Partners)",id:"supported-models-endpoint-for-limited-model-diffusion-partners",level:4},{value:"Interested in joining?",id:"interested-in-joining",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'To bring down the barrier of entry for people wanting to use models available on Civitai, we partner with image generation services to offer "Run Now" functionality for many models on the site.'),(0,n.kt)("p",null,"If you own or operate an image generation service and would be interested in becoming a Diffusion Partner, we invite you to take a moment to read this to understand how the program works and then if you're interested complete our partner request form."),(0,n.kt)("h2",{id:"what-it-looks-like"},"What it looks like"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/607609/206595823-6c3c8512-7faf-4e48-9166-aaf9b257ec5b.png",alt:"Demo of the Run Now functionality"})),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Things in this industry are moving fast and this process is likely to change/improve."),(0,n.kt)("h3",{id:"for-on-demand-diffusion-partners"},'For "On-Demand" Diffusion Partners'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You provide us with a specific URL to direct users to your service to load a specific model (eg. ",(0,n.kt)("inlineCode",{parentName:"li"},"https://diffusion.run/?model={downloadUrl}"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"https://diffusion.run/?modelVersionId={modelVersionId}"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"https://diffusion.run/?modelId={modelId}"),")."),(0,n.kt)("li",{parentName:"ol"},"We list you as a Diffusion Partner on every model that you support (you have the ability to disable NSFW and specific people models)."),(0,n.kt)("li",{parentName:"ol"},"When a person selects your service from the run menu, we route them through our run endpoint and redirect them to the URL you provided.")),(0,n.kt)("h3",{id:"for-limited-model-diffusion-partners"},'For "Limited Model" Diffusion Partners'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"We provide you with a unique endpoint you can hit at any time to update our records of which model you support (details on how that works below)."),(0,n.kt)("li",{parentName:"ol"},"You periodically post the list of models you support via the provided endpoint."),(0,n.kt)("li",{parentName:"ol"},"We list you as a Diffusion Partner on every model that you support."),(0,n.kt)("li",{parentName:"ol"},"When a person selects your service from the run menu, we route them through our run endpoint and redirect them to the URL you provided.")),(0,n.kt)("h4",{id:"supported-models-endpoint-for-limited-model-diffusion-partners"},'Supported Models Endpoint (For "Limited Model" Diffusion Partners)'),(0,n.kt)("p",null,'As a "Limited Model" partner you can use this endpoint at any time to update which models you\'re listed for on the site.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Replace supported models"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"POST https://civitai.com/api/v1/partners/supported-models?token={sharedSecret}")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[{\n  "modelVersionId": 1144,\n  "runUrl": "https://diffusion.run/?yourSpecialParamsOrID"\n}]\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add supported models"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"PUT https://civitai.com/api/v1/partners/supported-models?token={sharedSecret}")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[{\n  "modelVersionId": 1144,\n  "runUrl": "https://diffusion.run/?yourSpecialParamsOrID"\n}]\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remove supported models"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE https://civitai.com/api/v1/partners/supported-models?token={sharedSecret}")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[{\n  "modelVersionId": 1144\n}]\n')),(0,n.kt)("h2",{id:"interested-in-joining"},"Interested in joining?"),(0,n.kt)("p",null,"Awesome! We're excited to work with you. Please take a moment to complete the partner request form below:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://forms.clickup.com/8459928/f/825mr-5768/VH7T2ZT9V3D9GT9ZXR"},"Partner Request Form"))," (should only take 5 minutes)"))}u.isMDXComponent=!0}}]);