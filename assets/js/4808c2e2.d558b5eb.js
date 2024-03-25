"use strict";(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[8245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(p,".").concat(f)]||u[f]||g[f]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:1,tags:["setup"]},o="Setting Up",s={unversionedId:"getting-started/setup-profile",id:"getting-started/setup-profile",title:"Setting Up",description:"Create an API key",source:"@site/docs/getting-started/setup-profile.md",sourceDirName:"getting-started",slug:"/getting-started/setup-profile",permalink:"/developer/docs/getting-started/setup-profile",draft:!1,tags:[{label:"setup",permalink:"/developer/docs/tags/setup"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["setup"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/developer/docs/category/getting-started"},next:{title:"AI Resource (AIR)",permalink:"/developer/docs/getting-started/ai-resource-identifier"}},p={},c=[{value:"Create an API key",id:"create-an-api-key",level:2},{value:"Turn on AI Resource Identifier",id:"turn-on-ai-resource-identifier",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up"},"Setting Up"),(0,i.kt)("h2",{id:"create-an-api-key"},"Create an API key"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"https://civitai.com/user/account"},"civitia.com"),' select your profile icon in the top right. In the dropdown you will see "Account settings". On this page you can generate a new API key. ',(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"API key generation",src:r(82771).Z,title:"API key generation",width:"1030",height:"518"}),"\n",(0,i.kt)("em",{parentName:"p"},"API key management section in profile.")),(0,i.kt)("h2",{id:"turn-on-ai-resource-identifier"},"Turn on AI Resource Identifier"),(0,i.kt)("p",null,'Also within the Account settings is a section called "Browsing settings". Within these settings we want to toggle on the ',(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/ai-resource-identifier"},"AI Resource Identifier"),". In next section we will cover how to use this for image generation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Browsing settings AIR toggle",src:r(6351).Z,title:"Browsing settings AIR toggle",width:"1034",height:"1420"}),"\n",(0,i.kt)("em",{parentName:"p"},"Browsing settings toggles for AIR")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"The API key will work for the public API and the JavaScript SDK.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},6351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/air-toggle-17ac25b54590e3c99bc414e43cdb289f.png"},82771:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-keys-3dfd697bf70022e3b8a551a13e05fb5f.png"}}]);