(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{4632:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",[o("q-page-container",[o("router-view"),e.$store.state.settings.acceptedCookie?e._e():o("cookie-law",{attrs:{theme:"blood-orange",buttonText:e.$t("gotIt")+"!"},on:{accept:function(t){return e.acceptedCookie()},decline:function(t){return e.acceptedCookie()}}},[o("div",{attrs:{slot:"message"},slot:"message"},[e._v(e._s(e.$t("cookieAlert"))+".")])])],1)],1)},n=[],i=o("d2d0"),a=o.n(i),c={components:{CookieLaw:a.a},data(){return{}},created(){var e=this.$q.cookies.get("cookie_moonStonks_settings");e&&this.$store.commit("settings/save",e),console.log(e)},methods:{acceptedCookie(){this.$store.commit("settings/acceptCookie",!0);var e=this.$store.state.settings;this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:365})}}},r=c,l=o("2877"),u=o("4d5a"),d=o("09e3"),k=o("eebe"),p=o.n(k),g=Object(l["a"])(r,s,n,!1,null,null,null);t["default"]=g.exports;p()(g,"components",{QLayout:u["a"],QPageContainer:d["a"]})}}]);