"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3321],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?t.createElement(f,s(s({ref:n},p),{},{components:a})):t.createElement(f,s({ref:n},p))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9993:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={title:"Aliases"},l=void 0,c={unversionedId:"aliases",id:"aliases",title:"Aliases",description:"Command Aliases",source:"@site/../docs/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/docs/aliases",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/aliases.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1693950686,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{title:"Aliases"},sidebar:"docs",previous:{title:"Just-in-Time Plugin Installation",permalink:"/docs/jit_plugins"},next:{title:"NSIS Installer Customization",permalink:"/docs/nsis-installer_customization"}},p={},d=[{value:"Command Aliases",id:"command-aliases",level:2},{value:"Flag Aliases",id:"flag-aliases",level:2},{value:"Bin Aliases",id:"bin-aliases",level:2}],m={toc:d},u="wrapper";function f(e){var n=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(u,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-aliases"},"Command Aliases"),(0,r.kt)("p",null,"Aliases let you define a string that maps to a command. This command can be run as ",(0,r.kt)("inlineCode",{parentName:"p"},"mycli config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mycli config:index"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"mycli config:list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {Command, Flags} from '@oclif/core'\n\nexport class ConfigIndex extends Command {\n  static aliases = ['config:index', 'config:list']\n}\n")),(0,r.kt)("p",null,'By default, aliases find the "real" command and just work.  If you\'re providing command aliases for backward compatibility but prefer users to use the "real" command, set ',(0,r.kt)("inlineCode",{parentName:"p"},"deprecateAliases")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to warn users about the correct name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class ConfigIndex extends Command {\n  static aliases = ['config:index', 'config:list']\n  static deprecateAliases = true\n}\n")),(0,r.kt)("h2",{id:"flag-aliases"},"Flag Aliases"),(0,r.kt)("p",null,"Like command aliases, but on an individual flag.  You can alias the name and short character, and optionally emit warnings when aliased names are used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class ConfigIndex extends Command {\n  static flags = {\n    'new-name': Flags.boolean({\n      char: 'c',\n      aliases: ['old-name', 'o'],\n      deprecateAliases: true\n    })\n  }\n}\n\n")),(0,r.kt)("h2",{id:"bin-aliases"},"Bin Aliases"),(0,r.kt)("p",null,'Creating a CLI that responds to different names or "aliases" is easy, simply add a ',(0,r.kt)("inlineCode",{parentName:"p"},"binAliases")," property to your CLI's ",(0,r.kt)("inlineCode",{parentName:"p"},"oclif")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "mycli",\n  "version": "0.0.0",\n  "description": "My CLI",\n  "main": "bin/run",\n  "bin": {\n    "mycli": "./bin/run",\n    "mycli-alias": "./bin/run"\n  },\n  "oclif": {\n    "binAliases": ["mycli", "mycli-alias"]\n  }\n}\n')),(0,r.kt)("p",null,"Adding this property allows your CLI to respond to either of those names, and is used during the bundling and building process when shipping your CLI. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," section was also modified to include both aliases, which is how npm creates bin aliases. To create a unified experience, regardless of the installation method, a CLI author must change both to match. Bin aliases also play nicely with ",(0,r.kt)("inlineCode",{parentName:"p"},"@oclif/plugin-autocomplete"),", so typing an alias and using autocomplete is the same experience as using the original name."))}f.isMDXComponent=!0}}]);