(function(e){function t(t){for(var n,o,l=t[0],f=t[1],s=t[2],u=0,p=[];u<l.length;u++)o=l[u],a[o]&&p.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=f(f.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function l(e){return f.p+"js/"+({"platform~profile":"platform~profile",platform:"platform",profile:"profile"}[e]||e)+"."+{"platform~profile":"b897c50d",platform:"b141130e",profile:"7c90c34e"}[e]+".js"}function f(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.e=function(e){var t=[],r={platform:1,profile:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({"platform~profile":"platform~profile",platform:"platform",profile:"profile"}[e]||e)+"."+{"platform~profile":"31d6cfe0",platform:"db5dd003",profile:"c1c61be2"}[e]+".css",o=f.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],s=l.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,r(a)},p.href=o;var c=document.getElementsByTagName("head")[0];c.appendChild(p)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=i);var s,u=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,f.nc&&p.setAttribute("nonce",f.nc),p.src=l(e),s=function(t){p.onerror=p.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:p})},12e4);p.onerror=p.onload=s,u.appendChild(p)}return Promise.all(t)},f.m=e,f.c=n,f.d=function(e,t,r){f.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,t){if(1&t&&(e=f(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(f.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)f.d(r,n,function(t){return e[t]}.bind(null,n));return r},f.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="/prestige-demo/",f.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("c21b"),o=r.n(n);o.a},"4f9b":function(e,t,r){"use strict";var n=r("fcae"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),l={},f=Object(i["a"])(l,o,a,!1,null,null,null);f.options.__file="App.vue";var s=f.exports,u=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("img",{staticClass:"logo w3-animate-top",attrs:{alt:"Prestige logo",src:r("9279")}}),n("div",{staticClass:"links"},[n("router-link",{attrs:{to:"/platform",target:"_blank"}},[n("h1",{staticClass:"w3-animate-right",attrs:{id:"platform"}},[e._v("Sample Partners")])]),n("router-link",{attrs:{to:"/profile",target:"_blank"}},[n("h1",{staticClass:"w3-animate-left",attrs:{id:"profile"}},[e._v("My Profile")])]),e._m(0)],1),e._m(1)])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://platformproject.herokuapp.com/api-docs/",target:"_blank"}},[r("h1",{staticClass:"w3-animate-right",attrs:{id:"api"}},[e._v("API Specifications")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tagline"},[r("span",{staticClass:"w3-animate-bottom"},[e._v("Your "),r("u",[e._v("prestige")]),e._v(", Our "),r("i",[e._v("business")]),e._v(".")])])}],m={name:"home"},d=m,h=(r("4f9b"),Object(i["a"])(d,p,c,!1,null,"a0ab30ae",null));h.options.__file="Home.vue";var v=h.exports;n["a"].use(u["a"]);var g=new u["a"]({mode:"hash",base:"/prestige-demo/",routes:[{path:"/",name:"home",component:v},{path:"/platform",name:"platform",component:function(){return Promise.all([r.e("platform~profile"),r.e("platform")]).then(r.bind(null,"b084"))}},{path:"/profile",name:"profile",component:function(){return Promise.all([r.e("platform~profile"),r.e("profile")]).then(r.bind(null,"c66d"))}}]}),b=r("5f30"),_=r.n(b);n["a"].use(_.a),n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(e){return e(s)}}).$mount("#app")},9279:function(e,t,r){e.exports=r.p+"img/logo-black.7c6cd05d.png"},c21b:function(e,t,r){},fcae:function(e,t,r){}});
//# sourceMappingURL=app.c1311084.js.map