(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0856":function(t,e,s){"use strict";s("6e43")},"6e43":function(t,e,s){},"713b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"hHh Lpr lFf"}},[s("q-header",{attrs:{elevated:""}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),s("q-toolbar-title",[s("div",{staticClass:"xs-hide"},[t._v(t._s(t.$t("moonStonks")))])]),s("q-btn-dropdown",{attrs:{rounded:"",flat:"",size:"120%",icon:"account_circle"}},[s("div",{staticClass:"row no-wrap q-pa-md items-center"},[s("div",{staticClass:"column"},[s("div",{staticClass:"text-h6 q-mb-md"},[t._v(t._s(t.$t("settings")))]),s("q-select",{staticClass:"q-px-xs",attrs:{options:t.langOptions,"hide-dropdown-icon":"",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},scopedSlots:t._u([{key:"selected",fn:function(){return[s("div",{staticClass:"row items-center text-center"},[s("gb-flag",{staticClass:"q-pl-sm",attrs:{code:t.langFlag,size:"default"}}),s("div",{staticClass:"q-pl-md"},[t._v(t._s(t.$t("language")))])],1)]},proxy:!0},{key:"option",fn:function(e){return[s("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[s("q-item-section",{attrs:{avatar:""}},[s("gb-flag",{attrs:{code:e.opt.icon,size:"default"}})],1),s("q-item-section",[s("q-item-label",{domProps:{innerHTML:t._s(e.opt.label)}})],1)],1)]}}]),model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}}),s("q-toggle",{attrs:{icon:t.$q.dark.isActive?"nights_stay":"wb_sunny",label:t.$t("darkmode")},model:{value:t.colorMode,callback:function(e){t.colorMode=e},expression:"colorMode"}})],1),s("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),s("div",{staticClass:"column items-center"},[s("q-btn",{attrs:{round:"",to:"profile"}},[s("q-avatar",{attrs:{size:"72px"}},[s("img",{attrs:{src:t.getImageURL}})])],1),s("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[t._v(t._s(t.profilInfo))]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:t.$t("logout"),push:"",size:"sm",to:"/login"},on:{click:t.logout}})],1)],1)])],1)],1),s("q-drawer",{staticStyle:{"font-size":"22px"},attrs:{"show-if-above":"",bordered:"","content-class":"",mini:t.miniState},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[s("q-list",[s("q-item-label",{attrs:{header:""}}),t._l(t.linksData,(function(e){return s("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),s("q-page-container",[s("router-view"),t.$store.state.settings.acceptedCookie?t._e():s("cookie-law",{attrs:{theme:"mytheme",buttonText:t.$t("gotIt")+"!"},on:{accept:function(e){return t.acceptedCookie()},decline:function(e){return t.acceptedCookie()}}},[s("div",{attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.$t("cookieAlert"))+".")])])],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-item",{attrs:{"active-class":"tab-active",clickable:"",tag:"a",to:t.link}},[t.icon?s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:t.icon}})],1):t._e(),s("q-item-section",[s("q-item-label",[t._v(t._s(t.title))])],1)],1)},n=[],r={name:"EssentialLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}},c=r,l=(s("0856"),s("2877")),d=s("66e5"),u=s("4074"),m=s("0016"),p=s("0170"),g=s("eebe"),h=s.n(g),k=Object(l["a"])(c,a,n,!1,null,null,null),v=k.exports;h()(k,"components",{QItem:d["a"],QItemSection:u["a"],QIcon:m["a"],QItemLabel:p["a"]});var f=s("d2d0"),q=s.n(f),$={name:"MainLayout",components:{EssentialLink:v,CookieLaw:q.a},data(){return{leftDrawerOpen:!1,miniState:!0,lang:this.$i18n.locale,langOptions:[{value:"en-gb",label:"English",icon:"gb"},{value:"de-de",label:"Deutsch",icon:"de"}],colorMode:this.$q.dark.isActive}},created(){var t=this.$q.cookies.get("cookie_moonStonks_user"),e=this.$q.cookies.get("cookie_moonStonks_settings");this.$store.commit("user/save",t),this.$store.commit("user/authenticateUser",!0),this.$store.state.settings.acceptedCookie&&this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:10}),this.$store.state.settings.language&&(this.lang=this.$store.state.settings.language),e.darkMode||this.$store.state.settings.darkMode?this.colorMode=!0:this.colorMode=!1},watch:{lang(t){this.$i18n.locale=t,this.$store.commit("settings/changeLanguage",t);var e=this.$store.state.settings;this.$store.state.settings.acceptedCookie&&this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:365}),console.log(this.$q.cookies.get("cookie_moonStonks_settings"))},colorMode(t){if(t){if(this.$store.commit("settings/changeToDarkMode",!0),this.$store.state.settings.acceptedCookie){var e=this.$store.state.settings;this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:365})}this.$q.dark.set(!0)}else{if(this.$store.commit("settings/changeToDarkMode",!1),this.$store.state.settings.acceptedCookie){e=this.$store.state.settings;this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:365})}this.$q.dark.set(!1)}}},computed:{linksData(){return[{title:this.$t("overview"),icon:"pie_chart",link:"/home"},{title:this.$t("order"),icon:"shop",link:"/order"},{title:this.$t("transactions"),icon:"clear_all",link:"/transactions"},{title:this.$t("invoices"),icon:"receipt",link:"/invoices"}]},langFlag(){switch(this.lang){case"de-de":return"de";case"en-gb":return"gb";default:return""}},profilInfo(){return this.$store.state.user.firstName+" "+this.$store.state.user.lastName.charAt(0)+"."},getImageURL(){switch(this.$store.state.user.gender){case"m":return"https://cdn.quasar.dev/img/boy-avatar.png";case"f":return"https://cdn.quasar.dev/img/avatar.png";case"x":return"https://www.humanium.org/es/wp-content/uploads/2016/03/shutterstock_304512785-300x300.jpg";default:return"https://cdn.quasar.dev/img/boy-avatar.png"}}},methods:{acceptedCookie(){this.$store.commit("settings/acceptCookie",!0);var t=this.$store.state.user,e=this.$store.state.settings;this.$q.cookies.set("cookie_moonStonks_user",t,{expires:10}),this.$q.cookies.set("cookie_moonStonks_settings",e,{expires:365})},logout(){this.$q.cookies.remove("cookie_moonStonks_user",{expires:10}),this.$q.cookies.remove("cookie_moonStonks_auth",{expires:10}),this.$store.commit("user/resetState")}}},_=$,b=(s("89d3"),s("4d5a")),w=s("e359"),x=s("65c6"),S=s("9c40"),C=s("6ac5"),Q=s("f20b"),y=s("ddd8"),L=s("9564"),M=s("eb85"),D=s("cb32"),I=s("9404"),O=s("1c1c"),E=s("09e3"),T=s("7f67"),z=Object(l["a"])(_,o,i,!1,null,null,null);e["default"]=z.exports;h()(z,"components",{QLayout:b["a"],QHeader:w["a"],QToolbar:x["a"],QBtn:S["a"],QToolbarTitle:C["a"],QBtnDropdown:Q["a"],QSelect:y["a"],QItem:d["a"],QItemSection:u["a"],QItemLabel:p["a"],QToggle:L["a"],QSeparator:M["a"],QAvatar:D["a"],QDrawer:I["a"],QList:O["a"],QPageContainer:E["a"]}),h()(z,"directives",{ClosePopup:T["a"]})},"89d3":function(t,e,s){"use strict";s("e87e")},e87e:function(t,e,s){}}]);