(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={1:0},a={1:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"ab676c39",3:"e8b3571a",4:"1bbe8719",5:"3bf12045",6:"c113ee7c",7:"1dfe7bfc",8:"a762a2dd",9:"3e29f7e7",10:"ba397d0b"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"844df14a",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"save",(function(){return P})),n.d(o,"authenticateUser",(function(){return A})),n.d(o,"resetState",(function(){return S}));var r={};n.r(r),n.d(r,"acceptCookie",(function(){return N})),n.d(r,"changeLanguage",(function(){return O})),n.d(r,"changeToDarkMode",(function(){return j})),n.d(r,"save",(function(){return T})),n.d(r,"resetSettings",(function(){return _}));n("e6cf"),n("ddb0"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("eb5b");var a=n("2b0e"),i=n("1f91"),s=n("42d2"),c=n("b05d"),l=n("2a19"),u=n("515f");a["a"].use(c["a"],{config:{notify:{}},lang:i["a"],iconSet:s["a"],plugins:{Notify:l["a"],Cookies:u["a"]}});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],p={name:"App",created(){this.$q.dark.set("auto")}},g=p,m=n("2877"),h=Object(m["a"])(g,d,f,!1,null,null,null),b=h.exports,w=n("2f62"),v=n("0e44"),y=function(){return{firstName:null,lastName:null,email:null,passwordHash:null,birthday:null,gender:null,isAuthenticated:!1}},k=n("6ca7");function P(e,t){e.firstName=t.firstName,e.lastName=t.lastName,e.gender=t.gender,e.email=t.email,e.passwordHash=t.passwordHash,e.birthday=t.birthday,e.isAuthenticated=!0}function A(e,t){e.isAuthenticated=t}function S(e){e.firstName=null,e.lastName=null,e.gender=null,e.email=null,e.passwordHash=null,e.birthday=null,e.isAuthenticated=!1}var C=n("439d"),E={namespaced:!0,state:y,getters:k,mutations:o,actions:C},L=function(){return{acceptedCookie:!1,darkMode:!1,language:null}},M=n("45ac");function N(e,t){e.acceptedCookie=t}function O(e,t){e.language=t}function j(e,t){e.darkMode=t}function T(e,t){e.acceptedCookie=t.acceptedCookie,e.language=t.language,e.darkMode=t.darkMode}function _(e){e.acceptedCookie=!1,e.darkMode=!1,e.language=null}var x=n("d529"),D={namespaced:!0,state:L,getters:M,mutations:r,actions:x};a["a"].use(w["a"]);var q=function(){const e=new w["a"].Store({plugins:[Object(v["a"])({storage:window.sessionStorage})],modules:{user:E,settings:D},strict:!1});return e},z=n("8c4f");const B=[{path:"/login",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"4632")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"013f"))},{path:"/register",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"56b4"))},{path:"/passwordReset",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"f891"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),meta:{requiresAuth:!0},children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))},{path:"profile",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"2ff9"))},{path:"home",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"bc13"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var G=B;a["a"].use(z["a"]);var I=function(){const e=new z["a"]({scrollBehavior:()=>({x:0,y:0}),routes:G,mode:"history",base:"/"});return e.beforeEach(((t,n,o)=>{const r=t.matched.some((e=>e.meta.requiresAuth)),a=e.app.$store.state.user.isAuthenticated,i=e.app.$q.cookies.get("cookie_moonStonks_auth");r?a||i?"/"===t.path?o("/home"):o():o("/login"):o()})),e},R=async function(){const e="function"===typeof q?await q({Vue:a["a"]}):q,t="function"===typeof I?await I({Vue:a["a"],store:e}):I;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},V=n("9483");Object(V["a"])("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var $=n("bc3a"),H=n.n($),F=({app:e,router:t,Vue:n})=>{const o=H.a.create({baseURL:"https://productive.com/"});n.prototype.$axios=o},U=n("a925"),W=n("fe09"),J={login:"Login",enterLoginDate:"Enter your Login-Data",logout:"Logout",forgotPassword:"Forgot Password",resetPassword:"Reset Password",sendEmail:"Send E-Mail",backToLogin:"Back to Login",register:"Register",repeatPassword:"Repeat Password",close:"Close",acceptTermsAndConditions:"I accept terms and conditions",passwordNotEqual:"Passwords are not equal",accountCreated:"Account Created",notAcceptTermsAndConditions:"You must accept terms and conditions",gotIt:"Got it",cookieAlert:"This website uses cookies to ensure you get the best experience on our website",letsGo:"Let's go",profile:"Profile",information:"Information",firstname:"Firstname",lastname:"Lastname",birthday:"Birthday",email:"E-Mail",password:"Password",add:"add",pleaseEnter:"Please enter",gender:"Gender",male:"Male",female:"Female",divers:"Divers",accept:"Accept",settings:"Settings",darkmode:"Darkmode",language:"Language",overview:"Overview",moonStonks:"MoonStonks"},K={login:"Anmelden",enterLoginData:"Gebe deine Logindaten ein",logout:"Abmelden",forgotPassword:"Passwort vergessen",resetPassword:"Passwort zurücksetzen",sendEmail:"E-Mail senden",backToLogin:"Zurück zum Anmelden",register:"Registrierung",repeatPassword:"Passwort wiederholen",close:"Schließen",acceptTermsAndConditions:"Ich akzeptiere die Nutzungsbedingungen",passwordNotEqual:"Passwörter stimmen nicht überein",accountCreated:"Account erstellt",notAcceptTermsAndConditions:"Du hast die Nutzungsbedingungen nicht akzeptiert",cookieAlert:"Diese Webseite nutzt Cookies um das beste Erlebnis auf dieser Webseite zu ermöglichen",gotIt:"Verstanden",letsGo:"Los geht's",profile:"Profil",information:"Informationen",firstname:"Vorname",lastname:"Nachname",birthday:"Geburtstag",email:"E-Mail",password:"Passwort",pleaseEnter:"Bitte angeben",gender:"Geschlecht",male:"Männlich",female:"Weiblich",divers:"Divers",decline:"Ablehnen",accept:"Annehmen",settings:"Einstellungen",darkmode:"Dunkelmodus",language:"Sprache",overview:"Überblick",moonStonks:"MoonStonks"},Q={"en-gb":J,"de-de":K};a["a"].use(U["a"]);var Y=u["a"].get("cookie_moonStonks_language");if(Y)var Z=Y;else Z=W["a"].lang.getLocale();const X=new U["a"]({locale:Z,fallbackLocale:"en-gb",messages:Q});var ee=({app:e})=>{e.i18n=X},te=n("15a8");a["a"].use(te["a"],{iconPath:"/flags"}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const ne="/";async function oe(){const{app:e,store:t,router:n}=await R();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[F,ee,void 0];for(let l=0;!1===o&&l<s.length;l++)if("function"===typeof s[l])try{await s[l]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:r,urlPath:i,publicPath:ne})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new a["a"](e)}oe()},"439d":function(e,t){},"45ac":function(e,t){},"6ca7":function(e,t){},d529:function(e,t){},eb5b:function(e,t,n){}});