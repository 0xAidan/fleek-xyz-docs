"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5832],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),y=r,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},1099:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={draft:!1,title:"Managed Deployments",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},a=void 0,l={unversionedId:"Sites/managed",id:"Sites/managed",title:"Managed Deployments",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",source:"@site/docs/Sites/managed.md",sourceDirName:"Sites",slug:"/Sites/managed",permalink:"/docs/Sites/managed",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Managed Deployments",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Sites",permalink:"/docs/Sites/"},next:{title:"Self Managed Deployments",permalink:"/docs/Sites/self-hosted"}},s={},u=[{value:"Connect your code repository",id:"connect-your-code-repository",level:3},{value:"Select your repository and branch",id:"select-your-repository-and-branch",level:3},{value:"Configure your build settings",id:"configure-your-build-settings",level:3},{value:"Build Parameters",id:"build-parameters",level:4},{value:"After Creating the site",id:"after-creating-the-site",level:3},{value:"Monitor the deployment",id:"monitor-the-deployment",level:4},{value:"Configure your custom domain",id:"configure-your-custom-domain",level:4},{value:"Configure your ENS domain",id:"configure-your-ens-domain",level:4},{value:"Deleting a Site",id:"deleting-a-site",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Deploying a site using Fleek pipeline is a simple process. You can connect your code repository to Fleek and we will take care of the build and deploy process. This allows you to focus on your code and not worry about the infrastructure."),(0,r.kt)("p",null,"This is a multistep process that will require you to connect your code repository, configure your build settings, and deploy your site."),(0,r.kt)("h3",{id:"connect-your-code-repository"},"Connect your code repository"),(0,r.kt)("p",null,'The first step is to connect your code repository to Fleek. You can do this by going to the Sites section and clicking on the "Connect Repository" button.'),(0,r.kt)("p",null,"In this process you will need to select the repository provider and authorize Fleek to access your repository. Once you have authorized Fleek, you will be able to select the repository and branch you want to deploy."),(0,r.kt)("h3",{id:"select-your-repository-and-branch"},"Select your repository and branch"),(0,r.kt)("p",null,"The second step is to select the repository. By giving access to Fleek we will be listing all the available repositories you have access to. You can select the repository you want to deploy and the branch you want to deploy."),(0,r.kt)("h3",{id:"configure-your-build-settings"},"Configure your build settings"),(0,r.kt)("p",null,"Fleek will automatically recognize the framework, build commands and publish directory for your site. If you want to customize this, you can do it in the build settings section."),(0,r.kt)("p",null,"In the advance settings you can also configure the environment variables you want to use in your build process."),(0,r.kt)("h4",{id:"build-parameters"},"Build Parameters"),(0,r.kt)("p",null,"This are the build parameters you can configure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Framework"),": The framework used to build your site. EG: Gatsby, Hugo, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Build command"),": The commands to execute to build the site. EG: npm install && npm run build"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Publish directory"),": The name of the directory containing the index.html file of your site after it has been built"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Docker image"),": The name of the docker image on docker hub in which your site will be built, defaults to node:slim. Fleek provides images for many popular frameworks, but you can use any that suits your project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment variables"),": The values of your environment variables. It is here for example that you might set your environment as production")),(0,r.kt)("h3",{id:"after-creating-the-site"},"After Creating the site"),(0,r.kt)("p",null,"Once your site is created we will trigger the initial deployment. This process can take a few minutes depending on the size of your site. Once the deployment is completed you will be able to see the site url and the status of the deployment."),(0,r.kt)("h4",{id:"monitor-the-deployment"},"Monitor the deployment"),(0,r.kt)("p",null,"You can monitor the deployment process by clicking on the deployments tab in the site overview. You will find the list of all the deployments for your site and the status of each deployment. By clicking on the deployment you will be able to see the logs of the deployment process."),(0,r.kt)("p",null,"In case a deployment failes you can retry it directly from the deployments page."),(0,r.kt)("h4",{id:"configure-your-custom-domain"},"Configure your custom domain"),(0,r.kt)("p",null,"Once the deployment is completed you will be able to configure your custom domain. To do this, go to the settings page and click on the domains tab. In this page you will be able to add your custom domain and configure it to use your site."),(0,r.kt)("p",null,"You can follow a guide on how to configure your custom domain ",(0,r.kt)("a",{parentName:"p",href:"/docs/domains/custom-domains"},"here"),"."),(0,r.kt)("h4",{id:"configure-your-ens-domain"},"Configure your ENS domain"),(0,r.kt)("p",null,"You can also configure your ENS domain. To do this, go to the settings page and click on the domains tab. In this page you will be able to add your ENS domain and configure it to use your site."),(0,r.kt)("p",null,"You can follow a guide on how to configure your ENS domain ",(0,r.kt)("a",{parentName:"p",href:"/docs/domains/ens"},"here"),"."),(0,r.kt)("h3",{id:"deleting-a-site"},"Deleting a Site"),(0,r.kt)("p",null,"To delete a site, go to the site overview and click on the settings icon. In the general settings page, click on the ",(0,r.kt)("strong",{parentName:"p"},"Delete Site")," button. This will remove the site from your account and will no longer serving the content of your site."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a site will remove all the deployments and domains associated with the site. This action cannot be undone.")))}d.isMDXComponent=!0}}]);