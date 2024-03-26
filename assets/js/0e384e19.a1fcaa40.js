"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1,tags:["introudction"]},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Civitai is a labor of love from a small team. After being inspired daily by the incredible progress of the Stable Diffusion community and the explosion of custom fine-tuned models, textual inversions, and more, we wanted to see if we could create something that would continue to help the community grow and thrive.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/developer/docs/intro",draft:!1,tags:[{label:"introudction",permalink:"/developer/docs/tags/introudction"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["introudction"]},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/developer/docs/category/getting-started"}},s={},u=[{value:"Our Core Team",id:"our-core-team",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Civitai")," is a labor of love from a small team. After being inspired daily by the incredible progress of the Stable Diffusion community and the explosion of custom fine-tuned models, textual inversions, and more, we wanted to see if we could create something that would continue to help the community grow and thrive."),(0,o.kt)("p",null,"After seeing a gap around sharing the custom models that were being made by the community, we decided to try our hand a putting together a tool that would make it easy for anyone to share, find, and review models. While there were existing services like HuggingFace that allowed users to expose their models as repositories, we felt that it was missing a few key features that would really allow it to serve as a home for the growing community and use case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A way for creators to tag models with things that make sense to the SD community"),(0,o.kt)("li",{parentName:"ul"},"A good way for people interested in the model to review and share their creations"),(0,o.kt)("li",{parentName:"ul"},"A simpler upload and download interface (how many of us are really familiar with code repos)"),(0,o.kt)("li",{parentName:"ul"},"An indexed and visual browsing experience of all the models available"),(0,o.kt)("li",{parentName:"ul"},"An API that can be used by SD tools to tap into the growing library of models, embeds, aesthetic gradients, and hyper networks available")),(0,o.kt)("p",null,"We hope you'll appreciate what we've put together and we look forward to hearing what you think of the tool \u2764\ufe0f"),(0,o.kt)("h2",{id:"our-core-team"},"Our Core Team"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JustMaier"},"Justin Maier")," - Project Lead, full-stack dev"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bkdiehl"},"Briant Diehl")," - Full-stack dev"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/manuelurenah"},"Manuel Urenah")," - Full-stack dev"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/maxhulker"},"Max Hulker")," - Community manager"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/koenbeuk"},"Koen Bekkenutte")," - Dev-ops")))}d.isMDXComponent=!0}}]);