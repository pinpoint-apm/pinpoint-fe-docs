"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[625],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=k(n),g=r,N=u["".concat(d,".").concat(g)]||u[g]||o[g]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},237:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Options",p={unversionedId:"guide/options",id:"guide/options",title:"Options",description:"Interface",source:"@site/i18n/ko/docusaurus-plugin-content-docs-scatterchart/current/guide/options.md",sourceDirName:"guide",slug:"/guide/options",permalink:"/pinpoint-fe-docs/ko/scatterchart/guide/options",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sb",previous:{title:"Guide",permalink:"/pinpoint-fe-docs/ko/scatterchart/category/guide"},next:{title:"API",permalink:"/pinpoint-fe-docs/ko/scatterchart/guide/api"}},d={},k=[{value:"Interface",id:"interface",level:2},{value:"<code>AxisOption</code>",id:"axisoption",level:3},{value:"<code>TickOption</code>",id:"tickoption",level:4},{value:"<code>DataOption</code>",id:"dataoption",level:3},{value:"<code>LegendOption</code>",id:"legendoption",level:3},{value:"<code>PointOption</code>",id:"pointoption",level:3},{value:"<code>BackgroundOption</code>",id:"backgroundoption",level:3},{value:"<code>GridOption</code>",id:"gridoption",level:3},{value:"<code>GuideOption</code>",id:"guideoption",level:3},{value:"<code>DragOption</code>",id:"dragoption",level:4},{value:"<code>RenderOption</code>",id:"renderoption",level:3},{value:"<code>PaddingOption</code>",id:"paddingoption",level:3}],m={toc:k};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"options"},"Options"),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ScatterChartOption {\n  axis: {x: AxisOption, y: AxisOption};\n  data: DataOption[];\n  background?: BackgroundOption;\n  grid?: GridOption;\n  guide?: GuideOption;\n  legend?: LegendOption;\n  padding?: Padding;\n  point?: PointOption;\n  render?: RenderOption;\n}\n")),(0,r.kt)("h3",{id:"axisoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"AxisOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd95\uc758 \ucd5c\uc18c\uac12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd95\uc758 \ucd5c\ub300\uac12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"padding"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd95\uc758 tick \uc624\ud504\uc14b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\uac01 \ucd95\uc758 \uc0c9\uc0c1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tick"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tickoption"},"TickOption")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"tickoption"},(0,r.kt)("inlineCode",{parentName:"h4"},"TickOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud45c\uc2dc\ud560 \ucd95\uc758 tick \uac1c\uc218")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(value: number) => string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ud45c\uc2dc\ud560 tick\uc758 \ud615\ud0dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"black")),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"black"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"tick\uc758 \uae38\uc774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"font"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default font"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud3f0\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"padding"),(0,r.kt)("td",{parentName:"tr",align:null},"typeof ",(0,r.kt)("a",{parentName:"td",href:"#paddingoption"},"PaddingOption")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{ top: 2, bottom: 2, left: 2, right: 2 }"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud328\ub529")))),(0,r.kt)("h3",{id:"dataoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"DataOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130 \ud0c0\uc785 (\ubc94\ub840\uc5d0 \ud45c\ud604\ub428)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ud574\ub2f9 \ud0c0\uc785\uc758 \ub370\uc774\ud130 \ud45c\ud604\uc5d0 \uc0ac\uc6a9\ub420 \uc0c9\uc0c1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130 \uac04 \uc704\uce58\uac00 \uacb9\uce60 \uacbd\uc6b0 \ub80c\ub354\ub9c1 \uc6b0\uc120\uc21c\uc704 \uacb0\uc815\uc5d0 \uc0ac\uc6a9. \uc22b\uc790\uac00 \ub0ae\uc744 \uc218\ub85d \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc74c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"radius"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud574\ub2f9 \ub370\uc774\ud130\ub97c \ud45c\ud604\ud560 \uc810\uc758 \ubc18\uc9c0\ub984")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opacity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud574\ub2f9 \ub370\uc774\ud130 \uc0c9\uc0c1\uc758 \ubd88\ud22c\uba85\ub3c4")))),(0,r.kt)("h3",{id:"legendoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"LegendOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formatLabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(label: string) => string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data.type")),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc94\ub840 \ub77c\ubca8 \ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud55c \ud3ec\ub9f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formatValue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(value: number) => string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc94\ub840 \ub370\uc774\ud130 count\uc5d0 \ub300\ud55c \ud3ec\ub9f7")))),(0,r.kt)("h3",{id:"pointoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"PointOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"radius"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ub97c \ud45c\ud604\ud560 \uc810\uc758 \ubc18\uc9c0\ub984")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opacity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ub97c \uc0c9\uc0c1\uc758 \ubd88\ud22c\uba85\ub3c4")))),(0,r.kt)("h3",{id:"backgroundoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"BackgroundOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"white")),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\uacbd\uc0c9")))),(0,r.kt)("h3",{id:"gridoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"GridOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," \uc77c \uacbd\uc6b0 \uadf8\ub9ac\ub4dc\ub97c \uc228\uae40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#d1d1d1")),(0,r.kt)("td",{parentName:"tr",align:null},"\uadf8\ub9ac\ub4dc \uc120\uc758 \uc0c9\uc0c1")))),(0,r.kt)("h3",{id:"guideoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"GuideOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"white")),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\uc774\ub4dc \ud14d\uc2a4\ud2b8\uc758 \uc0c9\uc0c1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"black")),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\uc774\ub4dc\ub77c\ubca8 \uc120\uc758 \uc0c9\uc0c1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"black")),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\uc774\ub4dc\ub77c\ubca8\uc758 \ubc30\uacbd\uc0c9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#dragoption"},"DragOption")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"dragoption"},(0,r.kt)("inlineCode",{parentName:"h4"},"DragOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#469ae4")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub4dc\ub798\uadf8 \uc601\uc5ed \ub458\ub808\uc120 \uc0c9\uc0c1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string(hex, rgb, rgba)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgba(225,225,225,0.4)")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub4dc\ub798\uadf8 \uc601\uc5ed\uc758 \ubc30\uacbd\uc0c9")))),(0,r.kt)("h3",{id:"renderoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"RenderOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"render")," api \ud638\ucd9c \uc2dc \uae30\uc874 data\uc5d0 \ucd94\uac00\ud574\uc11c \uadf8\ub9bd\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawOutOfRange"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"axis y\uc758 max\uac12\uc744 \ubc97\uc5b4\ub098\ub294 \ub370\uc774\ud130\ub3c4 \uadf8\ub9bd\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub294 max \ucd95\uc5d0 \uadf8\ub824\uc9d1\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"paddingoption"},(0,r.kt)("inlineCode",{parentName:"h3"},"PaddingOption")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"right"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);