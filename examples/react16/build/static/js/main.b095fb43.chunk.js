!function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["react16-main"]=n():e["react16-main"]=n()}(window,(function(){return(window.webpackJsonp_react16=window.webpackJsonp_react16||[]).push([[0],{102:function(e,n,t){e.exports=t(162)},109:function(e,n,t){},161:function(e,n,t){window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},162:function(e,n,t){"use strict";t.r(n),t.d(n,"bootstrap",(function(){return O})),t.d(n,"mount",(function(){return C})),t.d(n,"unmount",(function(){return S}));var a=t(25),o=t.n(a),r=t(44),c=t(0),u=t.n(c),l=t(2),i=t.n(l),s=t(46),m=t(4),p=t(165),f=(t(108),t(109),t(164)),d=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",{className:"app-title"},"React Demo"),u.a.createElement("p",{className:"app-lib"},"React version: ",c.version,", AntD version: ",f.a))},E=t(99),b=t(35),w=t(166),_=function(){var e=Object(c.useState)(!1),n=Object(E.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){!function(){var e=document.createElement("a");e.onclick=function(){console.log("log from UIEvent")};var n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});e.dispatchEvent(n)}()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{onClick:function(){return a(!0)}},"CLICK ME"),u.a.createElement(w.a,{visible:t,onOk:function(){return a(!1)},onCancel:function(){return a(!1)},title:"qiankun"},"Probably the most complete micro-frontends solution you ever met"))},v=function(){return u.a.createElement("h2",{className:"app-nav-item",style:{borderColor:"red"}},"Home")},h=Object(c.lazy)((function(){return t.e(3).then(t.bind(null,167))})),y=function(){return u.a.createElement(s.a,{basename:window.__POWERED_BY_QIANKUN__?"/react16":"/"},u.a.createElement("nav",null,u.a.createElement(s.b,{to:"/"},"Home"),u.a.createElement(p.a,{type:"vertical"}),u.a.createElement(s.b,{to:"/about"},"About")),u.a.createElement(c.Suspense,{fallback:null},u.a.createElement(m.c,null,u.a.createElement(m.a,{path:"/",exact:!0,component:v}),u.a.createElement(m.a,{path:"/about",component:h}))))};function k(){return u.a.createElement("div",{className:"app-main"},u.a.createElement(d,null),u.a.createElement(_,null),u.a.createElement(p.a,null),u.a.createElement(y,null))}t(161),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){var n=e.container;i.a.render(u.a.createElement(k,null),n?n.querySelector("#root"):document.querySelector("#root"))}function g(e){e.onGlobalStateChange((function(n,t){return console.log("[onGlobalStateChange - ".concat(e.name,"]:"),n,t)}),!0),e.setGlobalState({ignore:e.name,user:{name:e.name}})}function O(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] props from main framework",n),g(n),N(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.container,i.a.unmountComponentAtNode(t?t.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||N({}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]])}));
//# sourceMappingURL=main.b095fb43.chunk.js.map