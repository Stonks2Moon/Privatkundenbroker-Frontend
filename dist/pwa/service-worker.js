if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,a,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"private-moonstonks"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/css/2.3416284c.css",revision:"5a22d0bdb20dde52992bc9d7fd3ffda3"},{url:"/css/3.5d5892ef.css",revision:"1c2acbfe9c0c95fac573d4a40ad53dde"},{url:"/css/app.192ba775.css",revision:"f448b399dedd7bdb56cb368e490002e2"},{url:"/css/vendor.e4b55042.css",revision:"de06c7f2d2a68edc5c1f84a0c2e55b4c"},{url:"/favicon.ico",revision:"7746d6e5622609c57e965c20fa8fe141"},{url:"/flags/de.svg",revision:"a9fc0bda59e60be25196f7f613f34d15"},{url:"/flags/gb.svg",revision:"478d0d0999b6ac573981e5243f9a486b"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/fa-brands-400.5f63cb7f.woff",revision:"0ce1e868452204695c8ac1c70f693c2d"},{url:"/fonts/fa-brands-400.6e63bd22.woff2",revision:"0c9f225e8f69c622f681cf1ed973cc3d"},{url:"/fonts/fa-regular-400.2c154b0f.woff2",revision:"847712aaabbeba674afdda86d31cab17"},{url:"/fonts/fa-regular-400.ea5a41ec.woff",revision:"3cace4a04d941b5981ba32c6ce9afae1"},{url:"/fonts/fa-solid-900.3eb06c70.woff2",revision:"9ae050d1876ac1763eb6afe4264e6d5a"},{url:"/fonts/fa-solid-900.f4f93856.woff",revision:"4bfbf7eb4b19d9ff9293eb177b6d0070"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.88e9c0a1.woff",revision:"faf8cf1dfc1041c90658f00660a13ed3"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.b8c10426.woff2",revision:"f981396cef4edf9567e88e792cf6dba6"},{url:"/icons/apple-icon-120x120.png",revision:"9fd7215a1e5b386dc96d0be3945f5f21"},{url:"/icons/apple-icon-152x152.png",revision:"e319b461abad2359135a9887832a5151"},{url:"/icons/apple-icon-167x167.png",revision:"6dca5a37cc1d5a3e693b78667cc85aaa"},{url:"/icons/apple-icon-180x180.png",revision:"566511ff3365f44b4ba1a3b99bb1e2c3"},{url:"/icons/apple-launch-1125x2436.png",revision:"021ee59de65659fad061bada7a2e8ff8"},{url:"/icons/apple-launch-1242x2208.png",revision:"35b4fb6187b90f37fe83e76b4a305897"},{url:"/icons/apple-launch-1242x2688.png",revision:"6049a73c69d28e736f356f5b24252107"},{url:"/icons/apple-launch-1536x2048.png",revision:"f5656f66e5772411d9079e8a4217a547"},{url:"/icons/apple-launch-1668x2224.png",revision:"7e300458dce9c78304965d915f7aad13"},{url:"/icons/apple-launch-1668x2388.png",revision:"fc5f93ca193f5aa27fa041bba5ade9f1"},{url:"/icons/apple-launch-2048x2732.png",revision:"a06d1096c37b99029e80bee8a62f1492"},{url:"/icons/apple-launch-640x1136.png",revision:"f13d3f479b4e0a262075db40ac641c37"},{url:"/icons/apple-launch-750x1334.png",revision:"93be2f277a838bd11214de607cb1224b"},{url:"/icons/apple-launch-828x1792.png",revision:"0a0a09bdef9c4394ea4d4e6d2ea13b94"},{url:"/icons/favicon-128x128.png",revision:"15da80e7017011c22d59ee1df0b2a91e"},{url:"/icons/favicon-16x16.png",revision:"39d03bef12b3563c99e173c052b3f7b6"},{url:"/icons/favicon-32x32.png",revision:"3dd3702b9221c124a0999d858149147a"},{url:"/icons/favicon-96x96.png",revision:"d7f4e51d0d5f1c44c77a014fca01a1ac"},{url:"/icons/icon-128x128.png",revision:"15da80e7017011c22d59ee1df0b2a91e"},{url:"/icons/icon-192x192.png",revision:"8f0b9b85787f176b236db255c1a902b0"},{url:"/icons/icon-256x256.png",revision:"428e9d85d96733cfd714bfda1528adbc"},{url:"/icons/icon-384x384.png",revision:"75c72bce0d9d85c8843771e3870f4706"},{url:"/icons/icon-512x512.png",revision:"c046d96145298c1be5918c0fd9fbd533"},{url:"/icons/ms-icon-144x144.png",revision:"8bc0ebe445dd2d2afe6e3451323da6c2"},{url:"/icons/safari-pinned-tab.svg",revision:"1f204899c8e104cef4a907e531ed4f5c"},{url:"/img/quasar-logo-full.68ae1645.svg",revision:"c3e886514c633b21c81db623874d06cd"},{url:"/index.html",revision:"e470f5fd7ae49d62e57cd1b59207ad4a"},{url:"/js/10.27ebbc5e.js",revision:"a61cd13500348650de971a4b8e917b43"},{url:"/js/11.74d0b007.js",revision:"22c924be3e9c5b53d52f1ed5379192bc"},{url:"/js/12.9654bf94.js",revision:"0829671ba58f8abefa3d4793ad05ddf4"},{url:"/js/13.2754fb61.js",revision:"03e4f43d16e648003fd680cc71ab7c69"},{url:"/js/2.107f6933.js",revision:"edd386997a2233f1cdabfe1a345d2ffb"},{url:"/js/3.ee03054a.js",revision:"552f49d55c9b446a971755ccbae14532"},{url:"/js/4.376e4784.js",revision:"5b68bbd5a2b2a2be3d53a585ea463a6d"},{url:"/js/5.ce11899a.js",revision:"74c3e7123cc599febbee7bd53f7edfaa"},{url:"/js/6.9e718aec.js",revision:"fd7c343cff3093b97104b431d26c3309"},{url:"/js/7.1f78a8d8.js",revision:"0c57d0b6bfa2d71a52d6289fe75fc348"},{url:"/js/8.e2e62a35.js",revision:"5ba044fb7d281ffc2c39c123b65480da"},{url:"/js/9.3967675f.js",revision:"6209e60c2067425a37327000d38f551a"},{url:"/js/app.5918cfb4.js",revision:"269ea9e7b5375ee626029c21f3e24969"},{url:"/js/vendor.0f9dd2ba.js",revision:"bc0dc012af56fc1232efac59ba13b766"},{url:"/manifest.json",revision:"a3638a72c76f29333aca8361ce3a1a49"},{url:"/statics/icons/apple-icon-120x120.png",revision:"9fd7215a1e5b386dc96d0be3945f5f21"},{url:"/statics/icons/apple-icon-152x152.png",revision:"e319b461abad2359135a9887832a5151"},{url:"/statics/icons/apple-icon-167x167.png",revision:"6dca5a37cc1d5a3e693b78667cc85aaa"},{url:"/statics/icons/apple-icon-180x180.png",revision:"566511ff3365f44b4ba1a3b99bb1e2c3"},{url:"/statics/icons/apple-launch-1125x2436.png",revision:"021ee59de65659fad061bada7a2e8ff8"},{url:"/statics/icons/apple-launch-1242x2208.png",revision:"35b4fb6187b90f37fe83e76b4a305897"},{url:"/statics/icons/apple-launch-1242x2688.png",revision:"6049a73c69d28e736f356f5b24252107"},{url:"/statics/icons/apple-launch-1536x2048.png",revision:"f5656f66e5772411d9079e8a4217a547"},{url:"/statics/icons/apple-launch-1668x2224.png",revision:"7e300458dce9c78304965d915f7aad13"},{url:"/statics/icons/apple-launch-1668x2388.png",revision:"fc5f93ca193f5aa27fa041bba5ade9f1"},{url:"/statics/icons/apple-launch-2048x2732.png",revision:"a06d1096c37b99029e80bee8a62f1492"},{url:"/statics/icons/apple-launch-640x1136.png",revision:"f13d3f479b4e0a262075db40ac641c37"},{url:"/statics/icons/apple-launch-750x1334.png",revision:"93be2f277a838bd11214de607cb1224b"},{url:"/statics/icons/apple-launch-828x1792.png",revision:"0a0a09bdef9c4394ea4d4e6d2ea13b94"},{url:"/statics/icons/favicon-128x128.png",revision:"15da80e7017011c22d59ee1df0b2a91e"},{url:"/statics/icons/favicon-16x16.png",revision:"39d03bef12b3563c99e173c052b3f7b6"},{url:"/statics/icons/favicon-32x32.png",revision:"3dd3702b9221c124a0999d858149147a"},{url:"/statics/icons/favicon-96x96.png",revision:"d7f4e51d0d5f1c44c77a014fca01a1ac"},{url:"/statics/icons/icon-128x128.png",revision:"15da80e7017011c22d59ee1df0b2a91e"},{url:"/statics/icons/icon-192x192.png",revision:"8f0b9b85787f176b236db255c1a902b0"},{url:"/statics/icons/icon-256x256.png",revision:"428e9d85d96733cfd714bfda1528adbc"},{url:"/statics/icons/icon-384x384.png",revision:"75c72bce0d9d85c8843771e3870f4706"},{url:"/statics/icons/icon-512x512.png",revision:"c046d96145298c1be5918c0fd9fbd533"},{url:"/statics/icons/ms-icon-144x144.png",revision:"8bc0ebe445dd2d2afe6e3451323da6c2"},{url:"/statics/icons/safari-pinned-tab.svg",revision:"1f204899c8e104cef4a907e531ed4f5c"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
