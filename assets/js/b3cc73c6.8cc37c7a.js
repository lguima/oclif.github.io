"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9638],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},5217:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=o(7462),r=o(3366),n=(o(7294),o(3905)),i=["components"],s={title:"How We Work"},l=void 0,c={unversionedId:"how_we_work",id:"how_we_work",title:"How We Work",description:"oclif is an open-source project built and maintained by Salesforce and an essential component of Salesforce's developer experiences, powering millions of users' CLIs a day via the Salesforce CLI, the Heroku CLI and others.",source:"@site/../docs/how_we_work.md",sourceDirName:".",slug:"/how_we_work",permalink:"/docs/how_we_work",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/how_we_work.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1693950686,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{title:"How We Work"},sidebar:"docs",previous:{title:"Related Repositories",permalink:"/docs/related_repos"},next:{title:"Feedback",permalink:"/docs/feedback"}},u={},p=[{value:"Code of Conduct &amp; Community Guidelines",id:"code-of-conduct--community-guidelines",level:2},{value:"Work Tracking",id:"work-tracking",level:2},{value:"Issues",id:"issues",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Blog Posts",id:"blog-posts",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Updates to How We Work",id:"updates-to-how-we-work",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)(f,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"oclif is an open-source project built and maintained by Salesforce and an essential component of Salesforce's developer experiences, powering millions of users' CLIs a day via the Salesforce CLI, the Heroku CLI and ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/browse/depended/@oclif/core"},"others"),"."),(0,n.kt)("p",null,"As an open-source project, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oclif"},"oclif repos live on GitHub")," and are published to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=oclif"},"npmjs.com"),"."),(0,n.kt)("h2",{id:"code-of-conduct--community-guidelines"},"Code of Conduct & Community Guidelines"),(0,n.kt)("p",null,"We are thrilled to offer oclif as open-source. As such, please review our project ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/salesforce/oss-template/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct"),". If you have any questions or concerns, please ",(0,n.kt)("a",{parentName:"p",href:"/docs/feedback"},"contact us"),"."),(0,n.kt)("h2",{id:"work-tracking"},"Work Tracking"),(0,n.kt)("p",null,"We use a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/oclif/projects/1"},"GitHub Project board")," to manage our work across all oclif repos. This board is used kanban style, in which, cards (i.e. work items) move left to right as they progress towards \u201cDone\u201d and higher priority cards sit towards the top of the columns, with lower priority cards sitting further below."),(0,n.kt)("h2",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Issues are made in their corresponding repo as appropriate. If you are unsure which repo an issue might belong to, make an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oclif/oclif/issues"},"issue in the oclif repo"),"."),(0,n.kt)("p",null,"We triage issues as we can, usually with a week of when it was created (unfortunately, we can make no commitment to when an issue will be triaged)."),(0,n.kt)("p",null,"Issues triaged by an our team will be marked with one of the following labels :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cbug\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cenhancement\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cdocs\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cwont-fix\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cinvalid\u201d"),(0,n.kt)("li",{parentName:"ul"},"\u201cduplicate\u201d")),(0,n.kt)("p",null,"An issue will be considered stale after a month has passed with no further feedback or input from the author after input from an oclif team member. Stale issues will be notified with a comment of its stale state and any actions needed to take to keep it alive."),(0,n.kt)("p",null,"An issue will be closed if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It has been fixed via a PR"),(0,n.kt)("li",{parentName:"ul"},"Has a \u201cwont-fix\u201d, \u201cinvalid\u201d or \u201cduplicate\u201d label"),(0,n.kt)("li",{parentName:"ul"},"A week has passed after a stale issue notification has been posted with no further feedback or input from the author")),(0,n.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"We review repo PRs as we can, usually with two weeks of when it was created (unfortunately, we can make no commitment to when a PR will be reviewed)."),(0,n.kt)("p",null,"PRs reviewers may seek additional changes or clarifying input from the author as appropriate."),(0,n.kt)("p",null,"Note: It is often more conducive to first open an issue and solicit feedback on possible solutions for your PR. We hate to see PR\u2019s we don\u2019t end up accepting and this helps to avoid that!"),(0,n.kt)("p",null,"A PR will be considered stale after a month has passed with no further feedback or input from the author after input from an oclif team member. Stale PRs will be notified with a comment of its stale state and any actions needed to take to keep it alive."),(0,n.kt)("p",null,"A PR will be closed if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It has been merged"),(0,n.kt)("li",{parentName:"ul"},"After a dialogue with the author informing them why the PR cannot be accepted"),(0,n.kt)("li",{parentName:"ul"},"A week has passed after a stale PR notification has been posted with no further feedback or input from the author")),(0,n.kt)("h2",{id:"deprecations"},"Deprecations"),(0,n.kt)("p",null,"oclif packages follow semantic versioning and therefore only deprecate features in new major version releases."),(0,n.kt)("p",null,"In the exceptional case a deprecation needs to happen outside a new major version, we will notify users via our blog or, as appropriate, with deprecation warnings in the tooling itself."),(0,n.kt)("h2",{id:"blog-posts"},"Blog Posts"),(0,n.kt)("p",null,"We aim to announce most features via ",(0,n.kt)("a",{parentName:"p",href:"/blog"},"our blog"),". Be sure to check back regularly to see new announcements!"),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"See our ",(0,n.kt)("a",{parentName:"p",href:"/docs/feedback"},"Feedback page"),"."),(0,n.kt)("h2",{id:"updates-to-how-we-work"},"Updates to How We Work"),(0,n.kt)("p",null,"Please check back periodically to review any updates to this page."))}m.isMDXComponent=!0}}]);