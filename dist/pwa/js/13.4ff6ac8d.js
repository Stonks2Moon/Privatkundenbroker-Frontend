(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{b302:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.stockData.name?r("q-page",{attrs:{padding:""}},[r("div",{staticClass:"row items-center"},[r("div",{staticClass:"row col-md-2 col-xs-10 items-center"},[r("q-btn",{attrs:{round:"",padding:"none",flat:"",size:"22px",icon:"navigate_before",to:"/order"}}),r("div",{staticClass:"text-h5 text-weight-bold"},[t._v("\n        "+t._s(t.stockData.name)+"\n      ")])],1),r("q-space"),r("div",{staticClass:"row col-md-10 col-xs-12"},[r("q-space")],1)],1),r("div",{staticClass:"col column q-ma-xs items-center"},[r("div",{staticClass:"row full-width items-center q-ma-sm"},[r("q-item",{staticClass:"rounded-borders text-bold items-center",class:"bg-"+(t.marketOpen?"green":"red"),attrs:{dense:""}},[t.marketOpen?r("div",[t._v(t._s(t.$t("live").toUpperCase()))]):r("div",[t._v(t._s(t.$t("closed").toUpperCase()))])]),r("div",{staticClass:"q-px-xs text-bold",staticStyle:{"font-size":"25px"}},[t._v("\n        "+t._s(t.stockPrice)+"\n      ")]),t._v("\n      EUR\n      "),r("q-space"),r("q-item",{staticClass:"q-pa-xs rounded-borders text-bold items-center",class:"bg-"+t.statusColor,staticStyle:{"min-width":"85px"},attrs:{clickable:"",dense:""},on:{click:t.toggleTrendData}},[r("q-icon",{attrs:{name:t.trendAbsolute<0?"arrow_drop_down":0===Number(t.trendAbsolute)?"horizontal_rule":"arrow_drop_up",size:"150%"}}),t.showPercentageTrendData?r("div",[t._v(t._s(t.trendPercentage)+" %")]):r("div",[t._v(t._s(t.trendAbsolute)+" €")])],1)],1),r("StockChart",{attrs:{historyData:t.historyData,name:t.stockData.name}}),r("q-card",{staticClass:"column shadow-10 full-width bg-dark q-ma-md"},[r("q-card-section",[r("div",{staticClass:"row no-wrap items-center"},[r("q-btn",{staticClass:"col-6 q-mr-xs",attrs:{outline:!t.isBuyButtonPressed,"no-caps":"",label:t.$t("buy"),color:"green"},on:{click:function(e){return t.toggleIsBuyButtonPressed("Buy")}}}),r("q-btn",{staticClass:"col-6",attrs:{outline:t.isBuyButtonPressed,"no-caps":"",label:t.$t("sell"),color:"red"},on:{click:function(e){return t.toggleIsBuyButtonPressed("Sell")}}})],1)]),r("q-card-section",[r("q-select",{attrs:{square:"",filled:"",options:t.orderTypeOptions,label:t.$t("orderType")},model:{value:t.selectedOrderType,callback:function(e){t.selectedOrderType=e},expression:"selectedOrderType"}})],1),"Limit"===t.selectedOrderType?r("div",[r("q-card-section",[r("q-input",{attrs:{filled:"",type:"number",label:t.$t("price"),suffix:"€"},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growPriceForLimitOrder}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reducePriceForLimitOrder}})]},proxy:!0}],null,!1,3379900149),model:{value:t.limitOrderPrice,callback:function(e){t.limitOrderPrice=e},expression:"limitOrderPrice"}})],1),r("q-card-section",[r("q-input",{attrs:{filled:"",rules:[function(e){return e>=0||t.$t("onlyPositiveNumber")}],"lazy-rules":"","hide-bottom-space":"",label:t.$t("amount")},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growAmountOfShares}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reduceAmountOfShares}})]},proxy:!0}],null,!1,3137080629),model:{value:t.amountOfShares,callback:function(e){t.amountOfShares=t._n(e)},expression:"amountOfShares"}})],1),r("q-card-section",[r("q-input",{attrs:{disable:"",filled:"",label:t.$t("overallCalculatedPrice"),suffix:"€"},model:{value:t.calculatedPriceForLimitOrder,callback:function(e){t.calculatedPriceForLimitOrder=t._n(e)},expression:"calculatedPriceForLimitOrder"}})],1)],1):t._e(),"Market"===t.selectedOrderType?r("div",[r("q-card-section",[r("q-input",{attrs:{filled:"",rules:[function(e){return e>=0||t.$t("onlyPositiveNumber")}],"lazy-rules":"","hide-bottom-space":"",label:t.$t("amount")},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growAmountOfShares}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reduceAmountOfShares}})]},proxy:!0}],null,!1,3137080629),model:{value:t.amountOfShares,callback:function(e){t.amountOfShares=t._n(e)},expression:"amountOfShares"}})],1),r("q-card-section",[r("q-input",{attrs:{disable:"",filled:"",label:t.$t("overallCalculatedPrice"),suffix:"€"},model:{value:t.calculatedPriceForMarketOrder,callback:function(e){t.calculatedPriceForMarketOrder=t._n(e)},expression:"calculatedPriceForMarketOrder"}})],1)],1):t._e(),"Stop-Limit"===t.selectedOrderType?r("div",[r("q-card-section",[r("q-input",{attrs:{filled:"",label:t.$t("stop"),suffix:"€"},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growStopForStopLimitOrder}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reduceStopForStopLimitOrder}})]},proxy:!0}],null,!1,1784546997),model:{value:t.stopForStopLimitOrderPrice,callback:function(e){t.stopForStopLimitOrderPrice=t._n(e)},expression:"stopForStopLimitOrderPrice"}})],1),r("q-card-section",[r("q-input",{attrs:{filled:"",rules:[function(e){return e>=0||t.$t("onlyPositiveNumber")}],"lazy-rules":"","hide-bottom-space":"",label:t.$t("limit")},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growLimitForStopLimitOrder}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reduceLimitForStopLimitOrder}})]},proxy:!0}],null,!1,3102914997),model:{value:t.limitForStopLimitOrderPrice,callback:function(e){t.limitForStopLimitOrderPrice=t._n(e)},expression:"limitForStopLimitOrderPrice"}})],1),r("q-card-section",[r("q-input",{attrs:{filled:"",rules:[function(e){return e>=0||t.$t("onlyPositiveNumber")}],"lazy-rules":"","hide-bottom-space":"",label:t.$t("amount")},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:t.growAmountOfShares}})]},proxy:!0},{key:"prepend",fn:function(){return[r("q-btn",{attrs:{flat:"",round:"",icon:"remove"},on:{click:t.reduceAmountOfShares}})]},proxy:!0}],null,!1,3137080629),model:{value:t.amountOfShares,callback:function(e){t.amountOfShares=t._n(e)},expression:"amountOfShares"}})],1),r("q-card-section",[r("q-input",{attrs:{disable:"",filled:"",label:t.$t("overallCalculatedPrice"),suffix:"€"},model:{value:t.calculatedPriceForStopLimitOrder,callback:function(e){t.calculatedPriceForStopLimitOrder=t._n(e)},expression:"calculatedPriceForStopLimitOrder"}})],1)],1):t._e(),r("q-space"),r("q-separator",{staticClass:"q-mx-sm"}),"Limit"===t.selectedOrderType?r("q-card-section",[r("q-btn",{staticClass:"full-width",attrs:{disable:t.amountOfShares<=0||t.limitOrderPrice<=0,label:t.$t("placeOrder"),size:"lg","no-caps":"",color:"primary"},on:{click:t.createLimitOrder}})],1):t._e(),"Market"===t.selectedOrderType?r("q-card-section",[r("q-btn",{staticClass:"full-width",attrs:{disable:t.amountOfShares<=0,label:t.$t("placeOrder"),size:"lg","no-caps":"",color:"primary"},on:{click:t.createMarketOrder}})],1):t._e(),"Stop-Limit"===t.selectedOrderType?r("q-card-section",[r("q-btn",{staticClass:"full-width",attrs:{label:t.$t("placeOrder"),size:"lg","no-caps":"",color:"primary"}})],1):t._e()],1),r("q-dialog",{model:{value:t.showOrderStatus,callback:function(e){t.showOrderStatus=e},expression:"showOrderStatus"}},[r("q-card",{staticClass:"bg-dark",staticStyle:{width:"300px"}},[r("q-card-section",[r("div",{staticClass:"column items-center text-center"},[r("q-avatar",{attrs:{size:"125px",icon:"done"}}),r("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("created"))+"!")])],1)]),r("q-separator",{staticClass:"q-mx-sm"}),r("q-card-actions",{staticClass:"bg-dark",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary","no-caps":"",label:t.$t("confirm")}})],1)],1)],1)],1)]):t._e()},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"q-pa-none full-width shadow-10 bg-dark rounded-borders",staticStyle:{height:"400px"}},[r("IEcharts",{staticClass:"q-mx-sm",attrs:{option:t.chartOption,resizable:!0}})],1)},o=[],n=r("ce44"),c={name:"StockChart",props:{historyData:{type:Array,required:!0},name:{type:String,required:!1}},data(){return{}},computed:{chartOption(){return{darkMode:!0,tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]},formatter:function(t){t=t[0];var e=new Date(t.value[0]).toLocaleDateString("de-DE")+" "+t.value[0].getHours()+":"+("0"+t.value[0].getMinutes()).slice(-2),r='<li style="list-style:none">'+t.marker+t.seriesName+"&nbsp;&nbsp;"+t.value[1]+"</li>";return e+r}},xAxis:{type:"time",boundaryGap:!1,axisLabel:{color:this.$q.dark.isActive?"#fff":"#000"}},yAxis:{type:"value",boundaryGap:[0,"100%"],axisLabel:{color:this.$q.dark.isActive?"#fff":"#000"}},dataZoom:[{type:"inside",start:0,end:100},{start:0,end:100}],series:[{name:this.name,type:"line",smooth:!0,symbol:"none",areaStyle:{},data:this.formattedData}]}},formattedData(){var t=[];return this.historyData.forEach((e=>{let r=[new Date(e.timestamp),e.price];t.push(r)})),t}},components:{IEcharts:n["a"]}},l=c,d=r("2877"),u=Object(d["a"])(l,i,o,!1,null,null,null),p=u.exports,m={name:"StockOrder",components:{StockChart:p},created(){this.stockID=this.$route.params.stockID,this.loadShareData(),this.loadShareHistoryData(),this.checkMarketOpen(),this.checker=setInterval(this.getLatestPrice,1e4)},computed:{trendPercentage(){return Number(this.stockData.price/this.stockData.priceOfLastNight*100-100).toFixed(2)},trendAbsolute(){return Number(this.stockData.price-this.stockData.priceOfLastNight).toFixed(2)},stockPrice(){return Number(this.stockData.price).toFixed(2)},limitOrderPriceDecimal(){return Number(this.limitOrderPrice).toFixed(2)},calculatedPriceForLimitOrder(){var t=Number(this.limitOrderPrice*this.amountOfShares).toFixed(2);return 0!==Number(t)?t:""},calculatedPriceForMarketOrder(){var t=Number(this.stockData.price*this.amountOfShares).toFixed(2);return 0!==Number(t)?t:""},calculatedPriceForStopLimitOrder(){var t=Number(this.limitForStopLimitOrderPrice*this.amountOfShares).toFixed(2);return 0!==Number(t)?t:""},statusColor(){return this.trendAbsolute<0?"red-7":0===Number(this.trendAbsolute)?"grey-7":"green-7"}},data(){return{selectedOrderType:"Limit",orderTypeOptions:["Limit","Market","Stop-Limit"],isBuyButtonPressed:!0,showPercentageTrendData:!0,limitOrderPrice:0,stopForStopLimitOrderPrice:0,limitForStopLimitOrderPrice:0,amountOfShares:0,stockData:[],historyData:[],marketOpen:!1,checker:null,showOrderStatus:!1}},methods:{checkMarketOpen(){this.$axios.get(`checkIfMarketIsOpen?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`).then((t=>{var e=t.data;e.success?this.marketOpen=e.data.marketIsOpen:console.log(e)}))},loadShareData(){this.$axios.get(`getShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`).then((t=>{var e=t.data;e.success?(this.stockData=e.data,this.limitOrderPrice=this.stockData.price,this.getLatestPrice()):console.log(e)}))},createMarketOrder(){this.isBuyButtonPressed&&this.$axios.post(`buyOrder?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}&shareID=${this.stockID}&type=${this.selectedOrderType}&amount=${this.amountOfShares}`).then((t=>{var e=t.data;if(e.success){t=e.data;console.log(t),this.amountOfShares=0}else e.message.includes("not enough")&&this.notifyForBadRequest("notEnoughMoney"),console.log(e)}))},createLimitOrder(){this.isBuyButtonPressed&&this.$axios.post(`buyOrder?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}&shareID=${this.stockID}&type=${this.selectedOrderType}&amount=${this.amountOfShares}&limit=${this.limitOrderPrice}`).then((t=>{var e=t.data;if(e.success){t=e.data;console.log(t),this.amountOfShares=0}else e.message.includes("not enough")&&this.notifyForBadRequest("notEnoughMoney"),console.log(e)}))},loadShareHistoryData(){this.$axios.get(`getPriceDevelopmentOfShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`).then((t=>{var e=t.data;e.success?this.historyData=e.data:console.log(e)}))},getLatestPrice(){this.$route.path.includes(`/order/Stock/ID=${this.stockID}`)&&this.$axios.get(`getPriceOfShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`).then((t=>{var e=t.data;e.success?(this.stockData.price=e.data,console.log(e)):console.log(e)}))},toggleTrendData(){this.showPercentageTrendData=!this.showPercentageTrendData},toggleIsBuyButtonPressed(t){this.isBuyButtonPressed="Buy"===t},growPriceForLimitOrder(){this.limitOrderPrice=(parseFloat(this.limitOrderPrice)+1).toFixed(2)},reducePriceForLimitOrder(){this.limitOrderPrice=(parseFloat(this.limitOrderPrice)-1).toFixed(2)},growPriceForMarketOrder(){this.marketOrderPrice=(parseFloat(this.marketOrderPrice)+1).toFixed(2)},reducePriceForMarketOrder(){this.marketOrderPrice=(parseFloat(this.marketOrderPrice)-1).toFixed(2)},growStopForStopLimitOrder(){this.stopForStopLimitOrderPrice=(parseFloat(this.stopForStopLimitOrderPrice)+1).toFixed(2)},reduceStopForStopLimitOrder(){this.stopForStopLimitOrderPrice=(parseFloat(this.stopForStopLimitOrderPrice)-1).toFixed(2)},growLimitForStopLimitOrder(){this.limitForStopLimitOrderPrice=(parseFloat(this.limitForStopLimitOrderPrice)+1).toFixed(2)},reduceLimitForStopLimitOrder(){this.limitForStopLimitOrderPrice=(parseFloat(this.limitForStopLimitOrderPrice)-1).toFixed(2)},growAmountOfShares(){this.amountOfShares=parseInt(this.amountOfShares)+1},reduceAmountOfShares(){this.amountOfShares=parseInt(this.amountOfShares)-1},notifyForBadRequest(t){this.$q.notify({color:"negative",message:this.$t(t)+"!"})}}},h=m,f=r("9989"),O=r("9c40"),b=r("2c91"),k=r("66e5"),y=r("0016"),S=r("f09f"),P=r("a370"),g=r("ddd8"),v=r("27f9"),x=r("eb85"),q=r("24e8"),$=r("cb32"),F=r("4b7e"),w=r("7f67"),L=r("eebe"),D=r.n(L),_=Object(d["a"])(h,s,a,!1,null,null,null);e["default"]=_.exports;D()(_,"components",{QPage:f["a"],QBtn:O["a"],QSpace:b["a"],QItem:k["a"],QIcon:y["a"],QCard:S["a"],QCardSection:P["a"],QSelect:g["a"],QInput:v["a"],QSeparator:x["a"],QDialog:q["a"],QAvatar:$["a"],QCardActions:F["a"]}),D()(_,"directives",{ClosePopup:w["a"]})}}]);