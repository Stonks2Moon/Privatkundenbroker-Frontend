(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2ab2":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"col q-ma-xs full-width no-wrap items-center"},[s("q-input",{attrs:{filled:"",placeholder:t.$t("searchStock")+" ..."},on:{input:t.getRelatedStocks},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[""!==t.searchStock?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.text=""}}}):t._e()]},proxy:!0}]),model:{value:t.searchStock,callback:function(e){t.searchStock=e},expression:"searchStock"}}),t.stockList?s("div",{staticClass:"col q-py-md q-px-xs q-gutter-md"},t._l(t.stockList,(function(t){return s("StockSearchListEntry",{key:t.ID,attrs:{stock:t}})})),1):t._e(),s("div",{staticClass:"text-h5 text-weight-bolder"},[t._v(t._s(t.$t("popularStocks")))]),s("div",{staticClass:"col q-py-md q-px-xs q-gutter-md"},t._l(t.popularStockList,(function(t){return s("StockSearchListEntry",{key:t.ID,attrs:{stock:t}})})),1)],1)])},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-item",{staticClass:"row justify-center items-center text-center shadow-3 rounded-borders bg-dark",attrs:{clickable:"",to:t.link}},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.stock.name))]),s("div",{staticClass:"text-weight-light"},[t._v(t._s(t.stock.info))])])])},a=[],r={name:"StockSearchListEntry",data(){return{}},props:{stock:{type:Object,required:!0}},computed:{link(){return"order/Stock/ID="+this.stock.ID}},methods:{}},i=r,l=s("2877"),u=s("66e5"),p=s("eebe"),d=s.n(p),k=Object(l["a"])(i,n,a,!1,null,null,null),h=k.exports;d()(k,"components",{QItem:u["a"]});var m={name:"Order",components:{StockSearchListEntry:h},data(){return{searchStock:"",stockList:[{ID:1,name:"Apple",info:"USA, Technologie"},{ID:2,name:"Tesla",info:"USA, Electric Vehicle"}],popularStockList:[{ID:1,name:"Xiaomi",info:"China, Technologie"},{ID:2,name:"Plug Power",info:"USA, Hydrogen"},{ID:3,name:"Tesla",info:"USA, Electric Vehicle"},{ID:4,name:"TUI",info:"GER, Tourism"}]}},created(){this.getPopularStocks()},methods:{getRelatedStocks(){},getPopularStocks(){}}},S=m,f=s("9989"),g=s("27f9"),x=s("0016"),v=Object(l["a"])(S,c,o,!1,null,null,null);e["default"]=v.exports;d()(v,"components",{QPage:f["a"],QInput:g["a"],QIcon:x["a"]})}}]);