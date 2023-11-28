"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||k[m]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={draft:!1,title:"SDK",sidebarCollapsible:!1,sidebar_position:8,date:new Date("2023-01-10T09:00:00.000Z"),description:"The Fleek SDK is a set of tools that allow you to interact with Fleek\u2019s services. It\u2019s composed of a set of libraries that you can leverage to build your own application on top of Fleek\u2019s services.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"SDK/index",id:"SDK/index",title:"SDK",description:"The Fleek SDK is a set of tools that allow you to interact with Fleek\u2019s services. It\u2019s composed of a set of libraries that you can leverage to build your own application on top of Fleek\u2019s services.",source:"@site/docs/SDK/index.md",sourceDirName:"SDK",slug:"/SDK/",permalink:"/docs/SDK/",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:8,frontMatter:{draft:!1,title:"SDK",sidebarCollapsible:!1,sidebar_position:8,date:"2023-01-10T09:00:00.000Z",description:"The Fleek SDK is a set of tools that allow you to interact with Fleek\u2019s services. It\u2019s composed of a set of libraries that you can leverage to build your own application on top of Fleek\u2019s services.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Sites | CLI",permalink:"/docs/CLI/sites"},next:{title:"Projects | SDK",permalink:"/docs/SDK/projects"}},c={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Installation",id:"installation",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Available Authenticaition options",id:"available-authenticaition-options",level:4},{value:"Updating <code>AccessTokenService</code>",id:"updating-accesstokenservice",level:4},{value:"Personal Access Token Service",id:"personal-access-token-service",level:4},{value:"<em>Parameters</em>",id:"parameters",level:5},{value:"Example",id:"example",level:5},{value:"Application Access Token",id:"application-access-token",level:4},{value:"<em>Parameters</em>",id:"parameters-1",level:4},{value:"Example",id:"example-1",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Fleek SDK is a set of tools that allow you to interact with Fleek\u2019s services. It\u2019s composed of a set of libraries that you can leverage to build your own application on top of Fleek\u2019s services."),(0,r.kt)("p",null,"All of the code snippets provided in these docs are based on Typescript. We strongly encourage Typescript to get the most out of the type of safety that the SDK provides."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The SDK is available as an npm package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"copy",copy:!0},"pnpm install @fleekxyz/sdk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"copy",copy:!0},"npm install @fleekxyz/sdk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"copy",copy:!0},"yarn install @fleekxyz/sdk\n")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"To authenticate, you must provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"Access Token Service"),". Currently, there are two ",(0,r.kt)("inlineCode",{parentName:"p"},"Access Token Service")," available ",(0,r.kt)("inlineCode",{parentName:"p"},"PersonalAccessTokenService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationAccessTokenService"),", but we\u2019re working on adding more services."),(0,r.kt)("h4",{id:"available-authenticaition-options"},"Available Authenticaition options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"Auth method")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"Web Environment")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"Node Environment")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"PersonalAccessTokenService")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ApplicationAccessTokenService")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,r.kt)("h4",{id:"updating-accesstokenservice"},"Updating ",(0,r.kt)("inlineCode",{parentName:"h4"},"AccessTokenService")),(0,r.kt)("p",null,"If you need to access multiple projects or switch between them, you will need to create a new instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SDK")," with the desired ",(0,r.kt)("inlineCode",{parentName:"p"},"projectID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';\n\nconst newAccessTokenService = new PersonalAccessTokenService({\n    personalAccessToken: '<your-personal-access-token>',\n    projectId: '<your-project-id>',\n})\n\nconst fleekSdk = new FleekSdk({ accessTokenService: newAccessTokenService });\n")),(0,r.kt)("h4",{id:"personal-access-token-service"},"Personal Access Token Service"),(0,r.kt)("p",null,"The personal access token (PAT) is ment to be used in Backend Node.js environment and should be kept private, you should use an environment variable to store it."),(0,r.kt)("h5",{id:"parameters"},(0,r.kt)("em",{parentName:"h5"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"parameters")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"personalAccessToken")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Private PAT, generated from the ",(0,r.kt)("inlineCode",{parentName:"td"},"CLI"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Project Id is required for specific services.")))),(0,r.kt)("p",null,"  This method of authentication relies on a ",(0,r.kt)("inlineCode",{parentName:"p"},"personalAccessToken")," which can be obtained from the Fleek CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"copy",copy:!0},"fleek pat create\n")),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';\n\nconst patService = new PersonalAccessTokenService({\n    personalAccessToken: '<your-pat>',\n    projectId: '<your-project-id>' // Optional\n})\n\nconst fleekSdk = new FleekSdk({ accessTokenService: patService })\n")),(0,r.kt)("h4",{id:"application-access-token"},"Application Access Token"),(0,r.kt)("h4",{id:"parameters-1"},(0,r.kt)("em",{parentName:"h4"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"parameters")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"th"},"description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Client Id, generated from the ",(0,r.kt)("inlineCode",{parentName:"td"},"CLI"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"authAppsServiceUrl")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("p",null,"This method of authentication relies on a ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," which can be obtained after creating an application from the CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Create an Application and Generating a ClientId" copy',filename:'"Create',an:!0,Application:!0,and:!0,Generating:!0,a:!0,'ClientId"':!0,copy:!0},"> fleek applications create\n> \u2714 Type name of new application: \u2026 app\n> \u2714 Type white label domains separated by comma \u2026 your-app-domain.com\n> Success! Successfully created. Your new application has client's ID: client_FYMego6wIogtm36sUFQb\n")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"import { FleekSdk, ApplicationAccessTokenService } from '@fleekxyz/sdk';\n\nconst applicationService = new ApplicationAccessTokenService({\n    clientId: '<your-client-id>',\n})\n\nconst fleekSdk = new FleekSdk({ accessTokenService: applicationService })\n")))}d.isMDXComponent=!0}}]);