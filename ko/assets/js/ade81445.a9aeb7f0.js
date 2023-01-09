"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[888],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4263:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Using ScatterChart Component",c={unversionedId:"getting-started/Using ScatterChart Component",id:"getting-started/Using ScatterChart Component",title:"Using ScatterChart Component",description:"Create your first ScatterChart",source:"@site/i18n/ko/docusaurus-plugin-content-docs-scatterchart/current/getting-started/Using ScatterChart Component.md",sourceDirName:"getting-started",slug:"/getting-started/Using ScatterChart Component",permalink:"/pinpoint-fe-docs/ko/scatterchart/getting-started/Using ScatterChart Component",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sb",previous:{title:"Getting Started",permalink:"/pinpoint-fe-docs/ko/scatterchart/category/getting-started"},next:{title:"Guide",permalink:"/pinpoint-fe-docs/ko/scatterchart/category/guide"}},l={},p=[{value:"Create your first ScatterChart",id:"create-your-first-scatterchart",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-scatterchart-component"},"Using ScatterChart Component"),(0,a.kt)("h2",{id:"create-your-first-scatterchart"},"Create your first ScatterChart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Create ScatterChart"',title:'"Create','ScatterChart"':!0},"import { ScatterChart } from '@pinpoint-fe/scatter-chart';\n\nconst SC = new ScatterChart(\n  document.getElementById('scatterWrapper'), \n  {\n    axis: {\n      x: {\n        min: 1669103462000,\n        max: 1669103509335,\n        format: (value) => format(value, 'HH:mm:ss'),\n      },\n      y: {\n        min: 0,\n        max: 10000,\n        format: (value) => value.toLocaleString(),\n      }\n    },\n    data: [\n      {\n        type: 'success',\n        color: 'green',\n        priority: 1,\n      },\n      {\n        type: 'fail',\n        color: 'red',\n        priority: 2,\n      },\n    ],\n    legend: {\n      formatLabel: (label) => label.toUpperCase(),\n    }\n  }\n);\n\nSC.render(data);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Params"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wrapper"),(0,a.kt)("td",{parentName:"tr",align:null},"HTMLElement"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucc28\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub420 Wrapper \uc5d8\ub9ac\uba3c\ud2b8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"/scatterchart/guide/options"},"ScatterChartOption")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"ScatterChart \uc635\uc158")))))}u.isMDXComponent=!0}}]);