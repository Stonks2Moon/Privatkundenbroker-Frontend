(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={1:0},a={1:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"107f6933",3:"ee03054a",4:"036e28b7",5:"3ba9b9a7",6:"027688f9",7:"d6849112",8:"3a1c612c",9:"b262a45e",10:"64e5bf09",11:"8276a1a3",12:"2fbd08f7",13:"af23a9a6"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"3416284c",3:"5d5892ef",4:"895769e1",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===r||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=c;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"save",(function(){return y})),n.d(r,"authenticateUser",(function(){return O})),n.d(r,"resetState",(function(){return S})),n.d(r,"updateStreet",(function(){return A})),n.d(r,"updateHouseNumber",(function(){return C})),n.d(r,"updatePostalCode",(function(){return D})),n.d(r,"updateCity",(function(){return N})),n.d(r,"updatePasswordHash",(function(){return T}));var o={};n.r(o),n.d(o,"acceptCookie",(function(){return I})),n.d(o,"changeLanguage",(function(){return _})),n.d(o,"changeToDarkMode",(function(){return z})),n.d(o,"save",(function(){return x})),n.d(o,"resetSettings",(function(){return B}));n("e6cf"),n("ddb0"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("eb5b");var a=n("2b0e"),s=n("1f91"),i=n("42d2"),l=n("b05d"),u=n("2a19"),c=n("515f");a["a"].use(l["a"],{config:{notify:{}},lang:s["a"],iconSet:i["a"],plugins:{Notify:u["a"],Cookies:c["a"]}});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],f={name:"App",created(){this.$q.dark.set("auto")}},h=f,m=n("2877"),g=Object(m["a"])(h,d,p,!1,null,null,null),b=g.exports,w=n("2f62"),P=n("0e44"),v=function(){return{ID:null,firstName:null,lastName:null,email:null,passwordHash:null,street:null,houseNumber:null,postalCode:null,city:null,isAuthenticated:!1}},k=n("6ca7");function y(e,t){e.ID=t.ID,e.firstName=t.firstName,e.lastName=t.lastName,e.email=t.email,e.passwordHash=t.passwordHash,e.street=t.street,e.houseNumber=t.houseNumber,e.postalCode=t.postalCode,e.city=t.city,e.isAuthenticated=!0}function O(e,t){e.isAuthenticated=t}function S(e){e.ID=null,e.firstName=null,e.lastName=null,e.email=null,e.passwordHash=null,e.street=null,e.houseNumber=null,e.postalCode=null,e.city=null,e.isAuthenticated=!1}function A(e,t){e.street=t}function C(e,t){e.houseNumber=t}function D(e,t){e.postalCode=t}function N(e,t){e.city=t}function T(e,t){e.passwordHash=t}var L=n("439d"),E={namespaced:!0,state:v,getters:k,mutations:r,actions:L},M=function(){return{acceptedCookie:!1,darkMode:!1,language:null}},j=n("45ac");function I(e,t){e.acceptedCookie=t}function _(e,t){e.language=t}function z(e,t){e.darkMode=t}function x(e,t){e.acceptedCookie=t.acceptedCookie,e.language=t.language,e.darkMode=t.darkMode}function B(e){e.acceptedCookie=!1,e.darkMode=!1,e.language=null}var V=n("d529"),q={namespaced:!0,state:M,getters:j,mutations:o,actions:V};a["a"].use(w["a"]);var H=function(){const e=new w["a"].Store({plugins:[Object(P["a"])({storage:window.sessionStorage})],modules:{user:E,settings:q},strict:!1});return e},G=n("8c4f");const R=[{path:"/login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"4632")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"013f"))},{path:"/register",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"56b4"))},{path:"/passwordReset",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"f891"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),meta:{requiresAuth:!0},children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8b24"))},{path:"profile",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"2ff9"))},{path:"home",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"bc13"))},{path:"order",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"2ab2"))},{path:"transactions",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"febe"))},{path:"order/stock/ID=:stockID",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"b302"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"e51e"))}];var F=R;a["a"].use(G["a"]);var W=function(){const e=new G["a"]({scrollBehavior:()=>({x:0,y:0}),routes:F,mode:"history",base:"/"});return e.beforeEach(((t,n,r)=>{const o=t.matched.some((e=>e.meta.requiresAuth)),a=e.app.$store.state.user.isAuthenticated,s=e.app.$q.cookies.get("cookie_moonStonks_auth");o?a||s?"/"===t.path?r("/home"):r():r("/login"):r()})),e},$=async function(){const e="function"===typeof H?await H({Vue:a["a"]}):H,t="function"===typeof W?await W({Vue:a["a"],store:e}):W;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},K=n("9483");Object(K["a"])("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var U=n("bc3a"),Z=n.n(U),J=({app:e,router:t,Vue:n})=>{const r=Z.a.create({baseURL:"https://privat.moonstonks.space/backend/"});n.prototype.$axios=r},Y=n("a925"),Q=n("fe09"),X={login:"Login",enterLoginDate:"Enter your Login-Data",logout:"Logout",forgotPassword:"Forgot Password",resetPassword:"Reset Password",sendEmail:"Send E-Mail",backToLogin:"Back to Login",register:"Register",repeatPassword:"Repeat Password",close:"Close",acceptTermsAndConditions:"I accept terms and conditions",passwordNotEqual:"Passwords are not equal",accountCreated:"Account Created",notAcceptTermsAndConditions:"You must accept terms and conditions",gotIt:"Got it",cookieAlert:"This website uses cookies to ensure you get the best experience on our website",letsGo:"Let's go",profile:"Profile",information:"Information",customerID:"Customer ID",firstname:"Firstname",lastname:"Lastname",birthday:"Birthday",email:"E-Mail",password:"Password",street:"Adress",housenumber:"Housenumber",postalCode:"Postal Code",city:"City",changePassword:"Change Password",oldPassword:"Old Password",newPassword:"New Password",repeatNewPassword:"Repeat",successfulPasswordChange:"Successfully changed Password",failedPasswordChange:"Old Password is not right",add:"add",pleaseEnter:"Please enter",gender:"Gender",male:"Male",female:"Female",divers:"Divers",accept:"Accept",settings:"Settings",darkmode:"Darkmode",language:"Language",overview:"Overview",moonStonks:"MoonStonks",order:"Order",transactions:"Transactions",newestTransactions:"Overview of the latest Transactions",deposit:"Deposit",withdrawal:"Withdrawal",shareBuy:"Share Purchase",shareSell:"Share Sale",fromDestination:"From",toDestination:"To",amount:"Amount",wallet:"Wallet",depot:"Depot",openOrders:"Open Order",value:"Value",buyPrice:"Buyrate",actualPrice:"Act. Rate",winOrLost:"P/L",pieces:"Shares",removalOfOrder:"Order-Cancellation",sureForDeleteOrder:"Are You sure you want to cancel the Order? This step can not be made undone after.",deleteOrder:"Delete Order",searchStock:"Search your Stock",stock:"Stock",popularStocks:"Popular Stocks",buy:"Buy",sell:"Sell",orderType:"Order-Type",price:"Price",onlyPositiveNumber:"Only positive numbers allowed",overallCalculatedPrice:"Temporarily Order-Price",placeOrder:"Place Order",stop:"Stop",limit:"Limit"},ee={login:"Anmelden",enterLoginData:"Gebe deine Logindaten ein",logout:"Abmelden",forgotPassword:"Passwort vergessen",resetPassword:"Passwort zurücksetzen",sendEmail:"E-Mail senden",backToLogin:"Zurück zum Anmelden",register:"Registrierung",repeatPassword:"Passwort wiederholen",close:"Schließen",acceptTermsAndConditions:"Ich akzeptiere die Nutzungsbedingungen",passwordNotEqual:"Passwörter stimmen nicht überein",accountCreated:"Account erstellt",notAcceptTermsAndConditions:"Du hast die Nutzungsbedingungen nicht akzeptiert",cookieAlert:"Diese Webseite nutzt Cookies um das beste Erlebnis auf dieser Webseite zu ermöglichen",gotIt:"Verstanden",letsGo:"Los geht's",profile:"Profil",information:"Informationen",customerID:"Kundennummer",firstname:"Vorname",lastname:"Nachname",birthday:"Geburtstag",email:"E-Mail",password:"Passwort",street:"Adresse",housenumber:"Hausnummer",postalCode:"Postleitzahl",city:"Ort",changePassword:"Passwort ändern",oldPassword:"Altes Passwort",newPassword:"Neues Passwort",repeatNewPassword:"Wiederholen",successfulPasswordChange:"Erfolgreich Passwort geändert",failedPasswordChange:"Das alte Passwort stimmt nicht überein",pleaseEnter:"Bitte angeben",gender:"Geschlecht",male:"Männlich",female:"Weiblich",divers:"Divers",decline:"Ablehnen",accept:"Annehmen",settings:"Einstellungen",darkmode:"Dunkelmodus",language:"Sprache",overview:"Überblick",moonStonks:"MoonStonks",order:"Order",transactions:"Transaktionen",newestTransactions:"Übersicht der neusten Transaktionen",deposit:"Einzahlung",withdrawal:"Auszahlung",shareBuy:"Aktienkauf",shareSell:"Aktienverkauf",fromDestination:"Von",toDestination:"Zu",amount:"Anzahl",wallet:"Verrechnungskonto",depot:"Depot",openOrders:"Offene Order",value:"Wert",buyPrice:"Kaufkurs",actualPrice:"Akt. Kurs",winOrLost:"G/V",pieces:"Stück",removalOfOrder:"Orderstornierung",sureForDeleteOrder:"Möchten Sie die Order sicher entfernen? Dieser Schritt ist nicht widerrufbar.",deleteOrder:"Order löschen",searchStock:"Suche deine gewünschte Aktie",stock:"Aktie",popularStocks:"Beliebte Aktien",buy:"Kaufen",sell:"Verkaufen",orderType:"Order-Typ",price:"Preis",onlyPositiveNumber:"Nur positive Zahlen erlaubt",overallCalculatedPrice:"Vorläufiger Order-Preis",placeOrder:"Order aufgeben",stop:"Stop",limit:"Limit"},te={"en-gb":X,"de-de":ee};a["a"].use(Y["a"]);var ne=c["a"].get("cookie_moonStonks_language");if(ne)var re=ne;else re=Q["a"].lang.getLocale();const oe=new Y["a"]({locale:re,fallbackLocale:"en-gb",messages:te});var ae=({app:e})=>{e.i18n=oe},se=n("15a8");a["a"].use(se["a"],{iconPath:"/flags"}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const ie="/";async function le(){const{app:e,store:t,router:n}=await $();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[J,ae,void 0];for(let u=0;!1===r&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:o,urlPath:s,publicPath:ie})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&new a["a"](e)}le()},"439d":function(e,t){},"45ac":function(e,t){},"6ca7":function(e,t){},d529:function(e,t){},eb5b:function(e,t,n){}});