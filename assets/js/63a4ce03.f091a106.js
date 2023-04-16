"use strict";(self.webpackChunksma_2023_01=self.webpackChunksma_2023_01||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Actualizaciones",c={unversionedId:"cambios/actualizaciones",id:"cambios/actualizaciones",title:"Actualizaciones",description:"Las siguientes dependencias se actualizaron:",source:"@site/docs/cambios/actualizaciones.md",sourceDirName:"cambios",slug:"/cambios/actualizaciones",permalink:"/sma-2023-documentation/docs/cambios/actualizaciones",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cambios/actualizaciones.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cambios - Tercer corte",permalink:"/sma-2023-documentation/docs/category/cambios---tercer-corte"},next:{title:"Cambios en el Front End",permalink:"/sma-2023-documentation/docs/cambios/cambiosFront"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"actualizaciones"},"Actualizaciones"),(0,r.kt)("p",null,"Las siguientes dependencias se actualizaron:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next 13.3"),(0,r.kt)("li",{parentName:"ul"},"React 18.2")),(0,r.kt)("p",null,"Para obtener estas versiones deben estar en la ",(0,r.kt)("strong",{parentName:"p"},"rama dev")," y ejecutar el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")),(0,r.kt)("admonition",{title:"Error en Windows",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"En next 13.3 actualmente hay un problema al ejecutar el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," en Windows. Este problema no ocurre en Linux o Mac."),(0,r.kt)("p",{parentName:"admonition"},"Si les sale el siguiente error al intentar cargar la p\xe1gina ",(0,r.kt)("inlineCode",{parentName:"p"},"SyntaxError: Unexpected token u in JSON at position 0")," realizar los siguientes pasos para solucionarlo."),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Detener el comando ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")),(0,r.kt)("li",{parentName:"ol"},"Ir al archivo ubicado en ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules\\next\\dist\\build\\webpack\\loaders\\next-flight-loader\\index.js")),(0,r.kt)("li",{parentName:"ol"},"Reemplazar la l\xednea ",(0,r.kt)("inlineCode",{parentName:"li"},'const proxy = createProxy("${this.resourcePath}")')," por ",(0,r.kt)("inlineCode",{parentName:"li"},"const proxy = createProxy(String.raw\\`${this.resourcePath}\\`)")),(0,r.kt)("li",{parentName:"ol"},"Eliminar la carpeta ",(0,r.kt)("inlineCode",{parentName:"li"},".next")," del proyecto"),(0,r.kt)("li",{parentName:"ol"},"Volver a ejecutar el comando ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev"))),(0,r.kt)("p",{parentName:"admonition"},"Con esto ya debe ejecutar sin problemas el proyecto en Windows, para m\xe1s informaci\xf3n de este error pueden seguir este issue en Github ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/issues/47704"},"https://github.com/vercel/next.js/issues/47704"))))}m.isMDXComponent=!0}}]);