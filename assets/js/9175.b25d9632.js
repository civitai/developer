(self.webpackChunkcivitai_developer=self.webpackChunkcivitai_developer||[]).push([[9175],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32924:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(87462),r=n(67294),a=n(72389),c=n(86010),s=n(66412),l=n(35281),i=n(37016);const u="codeBlockContainer_Ckt0";function p(e){let{as:t,...n}=e;const a=(0,s.p)(),p=(0,i.QC)(a);return r.createElement(t,(0,o.Z)({},n,{style:p,className:(0,c.default)(n.className,u,l.k.common.codeBlock)}))}const d={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function m(e){let{children:t,className:n}=e;return r.createElement(p,{as:"pre",tabIndex:0,className:(0,c.default)(d.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:d.codeBlockLines},t))}var f=n(86668),g=n(85448),y=n(23746);const h="codeLine_lJS_",b="codeLineNumber_Tfdd",v="codeLineContent_feaV";function k(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,c.default)(n,a&&h)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:b}),r.createElement("span",{className:v},u)):u,r.createElement("br",null))}var E=n(95999);function N(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function B(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const j={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function w(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus()}(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.default)("clean-btn",n,j.copyButton,o&&j.copyButtonCopied),onClick:l},r.createElement("span",{className:j.copyButtonIcons,"aria-hidden":"true"},r.createElement(N,{className:j.copyButtonIcon}),r.createElement(B,{className:j.copyButtonSuccessIcon})))}function C(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const O="wordWrapButtonIcon_Bwma",L="wordWrapButtonEnabled_EoeP";function T(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.default)("clean-btn",t,o&&L),"aria-label":a,title:a},r.createElement(C,{className:O,"aria-hidden":"true"}))}function P(e){let{children:t,className:n="",metastring:a,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:h,magicComments:b}}=(0,f.L)(),v=m??(0,i.Vo)(n)??h,E=(0,s.p)(),N=(0,g.F)(),B=(0,i.bc)(a)||l,{lineClassNames:j,code:C}=(0,i.nZ)(t,{metastring:a,language:v,magicComments:b}),O=u??(0,i.nt)(a);return r.createElement(p,{as:"div",className:(0,c.default)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`)},B&&r.createElement("div",{className:d.codeBlockTitle},B),r.createElement("div",{className:d.codeBlockContent},r.createElement(y.ZP,(0,o.Z)({},y.lG,{theme:E,code:C,language:v??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,c.default)(t,d.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.default)(d.codeBlockLines,O&&d.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(k,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:j[t],showLineNumbers:O})))))})),r.createElement("div",{className:d.buttonGroup},(N.isEnabled||N.isCodeScrollable)&&r.createElement(T,{className:d.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),r.createElement(w,{className:d.codeButton,code:C}))))}function x(e){let{children:t,...n}=e;const c=(0,a.default)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?P:m;return r.createElement(l,(0,o.Z)({key:String(c)},n),s)}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(87462),r=n(67294),a=n(86010),c=n(95999),s=n(86668),l=n(39960);const i="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function p(e){let{as:t,id:n,...p}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!n)return r.createElement(t,(0,o.Z)({},p,{id:void 0}));const m=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:n});return r.createElement(t,(0,o.Z)({},p,{className:(0,a.default)("anchor",d?u:i,p.className),id:n}),p.children,r.createElement(l.default,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>s});var o=n(67294),r=n(902);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,o.useState)(),s=(0,o.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,o.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=a);const c=(0,r.zX)(t),s=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,s),()=>t.disconnect()}),[e,c,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function s(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),s=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return c(a,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:s}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>a});var o=n(92949),r=n(86668);function a(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>p,bc:()=>i,nZ:()=>d,nt:()=>u});var o=n(87594),r=n.n(o);const a=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,s={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=s[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(a)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function p(e){return e.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")}function d(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:i}=t;if(i&&c.test(i)){const e=i.match(c).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(s),t)}}(o,a),p=n.split("\n"),d=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),g=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<p.length;){const e=p[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?d[m[t]].range+=`${r},`:f[t]?d[f[t]].start=r:g[t]&&(d[g[t]].range+=`${d[g[t]].start}-${r-1},`),p.splice(r,1)}n=p.join("\n");const y={};return Object.entries(d).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{y[e]??=[],y[e].push(t)}))})),{lineClassNames:y,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>c});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),c={Prism:o.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=l({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?l({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=o[c]++)<r[c];){var d=void 0,m=t[c],f=n[c][a];if("string"==typeof f?(m=c>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var g=d.split(i),y=g.length;s.push({types:m,content:g[0]});for(var h=1;h<y;h++)u(s),l.push(s=[]),s.push({types:m,content:g[h]})}else c++,t.push(m),n.push(d),o.push(0),r.push(d.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);