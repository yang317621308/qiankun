(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vue-app"]=t():e["vue-app"]=t()})(window,(function(){return function(e){function t(t){for(var o,r,i=t[0],l=t[1],c=t[2],s=0,f=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function i(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"5da05ca0"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="static/css/"+({about:"about"}[e]||e)+"."+{about:"bd86ca5c"}[e]+".css",a=l.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===o||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp_vue"]=window["webpackJsonp_vue"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=s;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return D})),n.d(t,"mount",(function(){return B})),n.d(t,"unmount",(function(){return I}));n("b0c0"),n("96cf");var o=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("83f4"),n("5c96")),a=n.n(r),u=(n("0fae"),n("2b0e")),i=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},c=[],s=(n("034f"),n("2877")),f={},p=Object(s["a"])(f,l,c,!1,null,null,null),d=p.exports,m=(n("d3b7"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Vue.js Demo"}}),o("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("Open Dialog")]),o("el-dialog",{attrs:{"before-close":e.handleClose,visible:e.dialogVisible,title:"Dialog",width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("dialog message")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("cancel")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("ok")])],1)])],1)}),v=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("p",[n("i",{staticClass:"el-icon-s-promotion"}),e._v(" vue version: "+e._s(e.vueVersion)+", element-ui version: "+e._s(e.elementVersion)+" ")])])},b=[],g={name:"HelloWorld",props:{msg:String},data:function(){return{vueVersion:u["default"].version,elementVersion:a.a.version}}},_=g,y=(n("d79e"),Object(s["a"])(_,h,b,!1,null,"f92eb628",null)),w=y.exports,O={name:"home",components:{HelloWorld:w},data:function(){return{dialogVisible:!1}},methods:{handleClose:function(e){this.$confirm("Sure to close？").then((function(t){e()})).catch((function(e){}))}}},j=O,E=Object(s["a"])(j,m,v,!1,null,null,null),x=E.exports;u["default"].use(i["a"]);var k=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=k,C=n("2f62");u["default"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});u["default"].config.productionTip=!1,u["default"].use(a.a);var N=null,A=null;function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;N=new i["a"]({base:window.__POWERED_BY_QIANKUN__?"/vue":"/",mode:"history",routes:S}),A=new u["default"]({router:N,store:P,render:function(e){return e(d)}}).$mount(t?t.querySelector("#app"):"#app")}function T(e){e.onGlobalStateChange&&e.onGlobalStateChange((function(t,n){return console.log("[onGlobalStateChange - ".concat(e.name,"]:"),t,n)}),!0),e.setGlobalState&&e.setGlobalState({ignore:e.name,user:{name:e.name}})}function D(){return R.apply(this,arguments)}function R(){return R=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue app bootstraped");case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function B(e){return H.apply(this,arguments)}function H(){return H=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),T(t),V(t);case 3:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function I(){return L.apply(this,arguments)}function L(){return L=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.$destroy(),A.$el.innerHTML="",A=null,N=null;case 4:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||V()},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"85ec":function(e,t,n){},ac89:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},d79e:function(e,t,n){"use strict";var o=n("ac89"),r=n.n(o);r.a}})}));
//# sourceMappingURL=app.1c7efb3a.js.map