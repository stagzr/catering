(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7166:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(this&&this[t]||t);else if(Array.isArray(t))e.push(a.apply(this,t));else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)r.call(t,i)&&t[i]&&e.push(this&&this[i]||i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2587)}])},2587:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return O},default:function(){return S}});var r=t(5893),a=t(3915),s=t.n(a),i=t(6041),o=t.n(i),c=t(3139),l=t.n(c),d=t(3854);function u(e){let{data:n}=e;return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)("div",{className:l().imageContainer,children:(0,r.jsx)("img",{className:l().image,src:n.image})}),(0,r.jsxs)("div",{className:l().header,children:[(0,r.jsx)("div",{className:l().arrow,children:(0,r.jsx)(d.WY3,{})}),(0,r.jsx)("h3",{children:n.name})]})]},n.name)}function h(e){let{data:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)("h2",{children:n.name}),(0,r.jsx)("div",{className:o().categories,children:n.categories.map(e=>(0,r.jsx)(u,{data:e}))})]})})}var _=t(1311),m=t.n(_),p=t(3750),x=t(7294),f=t(7166),g=t.n(f);function j(e){let{data:n}=e,[t,a]=(0,x.useState)(),s=g().bind(m()),i=s({extraInfo:!0,closed:void 0===t||!t,open:t}),o=N(n.store.openHours);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:m().navContainer,children:(0,r.jsx)("nav",{children:"G\xe5 till ica.se"})}),(0,r.jsx)("header",{className:m().header,children:(0,r.jsxs)("div",{className:m().headerContainer,children:[(0,r.jsxs)("div",{className:m().shopInfo,children:[(0,r.jsx)("h1",{children:"Ica Kvantum"}),(0,r.jsx)("span",{children:"Visa butiksinfo"}),(0,r.jsx)("button",{onClick:()=>void 0===t?a(!0):a(!t),children:(0,r.jsx)(p.IAR,{})}),(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("h3",{children:"\xd6ppettider"}),(0,r.jsx)("h4",{children:"Butiken"}),(0,r.jsx)("div",{className:m().openHours,children:o.map(e=>(0,r.jsxs)("div",{className:m().time,children:[(0,r.jsx)("span",{children:e.day}),(0,r.jsxs)("span",{children:[e.open,"-",e.close]})]},e.day))})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(v,{children:"Logga in"}),(0,r.jsx)(y,{children:"0 kr"})]})]})})]})}let v=e=>{let{children:n}=e;return(0,r.jsx)("button",{className:m().loginButton,children:n})},y=e=>{let{children:n}=e;return(0,r.jsx)("button",{className:m().cartButton,children:n})},N=e=>7!==e.length?[]:[{day:"M\xe5ndag - fredag",open:e[0].open,close:e[0].close},{day:"L\xf6rdag",open:e[5].open,close:e[5].close},{day:"S\xf6ndag",open:e[6].open,close:e[6].close}];var b=t(2814),C=t.n(b);function w(e){let{data:n}=e;return(0,r.jsxs)("section",{className:C().container,children:[(0,r.jsx)("img",{className:C().image,src:n.content.image}),(0,r.jsxs)("div",{className:C().text,children:[(0,r.jsx)("h1",{children:n.store.name}),(0,r.jsx)("h2",{children:n.content.heading}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content.intro}})]})]})}var O=!0;function S(e){let{data:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{data:n}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsx)(w,{data:n}),n.content.mainCategories.map(e=>(0,r.jsx)(h,{data:e}))]})]})}},3915:function(e){e.exports={main:"Home_main__EtNt2"}},2814:function(e){e.exports={container:"about_container__GLE4J",image:"about_image__iBTVP",text:"about_text__iQkgy"}},3139:function(e){e.exports={container:"style_container__naUqS",imageContainer:"style_imageContainer__lBOpp",image:"style_image__Xgplo",header:"style_header__Cc578",arrow:"style_arrow__Jz0BZ"}},1311:function(e){e.exports={header:"header_header__3RG80",headerContainer:"header_headerContainer__sb69X",navContainer:"header_navContainer__A7rv4",shopInfo:"header_shopInfo__10Xmy",extraInfo:"header_extraInfo__JJDZz",closed:"header_closed__1YhtI",open:"header_open__1neqN",openHours:"header_openHours__gYSx4",time:"header_time__3CaXS",timespan:"header_timespan__2hEBl",button:"header_button__3D8Ft",cartButton:"header_cartButton__GYZc_",loginButton:"header_loginButton__iHnlJ"}},6041:function(e){e.exports={container:"mainCategory_container__5heud",categories:"mainCategory_categories__nmjQy"}},8357:function(e,n,t){"use strict";t.d(n,{w_:function(){return c}});var r=t(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function c(e){return function(n){return r.createElement(l,i({attr:i({},e.attr)},n),function e(n){return n&&n.map(function(n,t){return r.createElement(n.tag,i({key:t},n.attr),e(n.child))})}(e.child))}}function l(e){var n=function(n){var t,a=e.attr,s=e.size,c=e.title,l=o(e,["attr","size","title"]),d=s||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:t,style:i(i({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return n(e)}):n(a)}}},function(e){e.O(0,[556,13,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);