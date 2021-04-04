(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"71fc":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.stockName||!t.isShareBuyOrSell?a("div",{staticClass:"col q-my-md q-pa-sm shadow-3 rounded-borders",class:t.transaction.Betrag<=0?"bg-red":"bg-green"},[a("div",{staticClass:"row no-wrap items-center",staticStyle:{"font-size":"20px"}},[a("div",{staticClass:"col"},[t._v(t._s(t.description))]),a("q-space"),a("div",[t._v(t._s(t.costs)+" €")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"text-caption text-bold"},[t._v("\n      "+t._s(t.formattedDate)+"\n    ")]),a("q-space"),t.isShareBuyOrSell?t._e():a("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.destination)+" "+t._s(t.formattedIBAN)+"\n    ")]),t.isShareBuyOrSell?a("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.$t("amount"))+": "+t._s(this.transaction.Anzahl)+"\n    ")]):t._e()],1)]):t._e()},r=[],i=(a("5319"),{name:"TransactionEntry",props:{transaction:{type:Object,required:!0}},data(){return{stockName:null}},created(){""!==this.stockID&&this.stockID&&this.loadShareData()},computed:{formattedDate(){switch(this.$store.state.settings.language){case"de-de":return new Date(this.transaction.Datum).toLocaleDateString("de-de");case"en-gb":return new Date(this.transaction.Datum).toLocaleDateString("en-gb");default:return new Date(this.transaction.Datum).toLocaleDateString("de-de")}},costs(){return Number(this.transaction.Betrag).toFixed(2)},description(){var t=this.transaction.Beschreibung;switch(t){case"Einzahlung":return this.$t("deposit");case"Auszahlung":return this.$t("withdrawal")}t.split(":");return t.includes("Aktienkauf")?this.$t("shareBuy")+": "+(this.stockName?this.stockName:""):t.includes("Aktienverkauf")?this.$t("shareSell")+": "+(this.stockName?this.stockName:""):""},isShareBuyOrSell(){return!!this.transaction.Beschreibung.includes("Aktien")},destination(){return this.transaction.Beschreibung.includes("Einzahlung")?this.$t("fromDestination")+": ":this.transaction.Beschreibung.includes("Auszahlung")?this.$t("toDestination")+": ":""},shareAmount(){if(this.transaction.Beschreibung.includes("Aktien")){let t=this.transaction.Beschreibung.split(":");return t[2]}return""},stockID(){if(this.transaction.Beschreibung.includes("Aktien")){let t=this.transaction.Beschreibung.split(": "),e=t[1].replace(" Anzahl","");return e}return""},descriptionNew(){return this.$t(this.transaction.Beschreibung)},formattedIBAN(){return this.formatToIBAN(this.transaction.Zielkonto,"#### #### #### #### #### ##")}},methods:{loadShareData(){this.$axios.get(`getShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`).then((t=>{var e=t.data;e.success?this.stockName=e.data.name:console.log(e)}))},formatToIBAN(t,e){var a=0,s=t.toString();return e.replace(/#/g,(t=>s[a++]))}}}),o=i,n=a("2877"),l=a("2c91"),c=a("eebe"),d=a.n(c),u=Object(n["a"])(o,s,r,!1,null,null,null);e["a"]=u.exports;d()(u,"components",{QSpace:l["a"]})},bc13:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"col q-ma-xs full-width no-wrap items-center"},[a("div",{staticClass:"col q-py-md"},[a("div",{staticClass:"row text-weight-bolder items-center",staticStyle:{"font-size":"22px"}},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"insights"}}),a("div",[a("div",[t._v(t._s(t.$t("depot")))]),a("div",{staticClass:"row text-caption",staticStyle:{"font-size":"14px"}},[t._v("\n              "+t._s(t.$t("depotID"))+":\n              "),a("div",{staticClass:"q-pl-xs"},[t._v(t._s(t.$store.state.user.depotID))])])]),a("q-space"),"NaN"!==t.depotBalance?a("div",[t._v(t._s(t.depotBalance))]):t._e()],1),a("div",{staticClass:"col q-pt-sm"},[0!==t.depotData.positions.length?a("PieChart",{attrs:{depotData:t.depotData.positions}}):a("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("noShares"))+".")]),t._l(t.depotData.positions,(function(t){return a("DepotEntry",{key:t.ID,attrs:{stockData:t}})}))],2)]),a("div",{staticClass:"col q-py-md"},[a("div",{staticClass:"row text-weight-bolder items-center no-wrap text-no-wrap",staticStyle:{"font-size":"22px"}},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"account_balance_wallet"}}),a("div",[a("div",[t._v(t._s(t.$t("wallet")))]),a("div",{staticClass:"row text-caption",staticStyle:{"font-size":"14px"}},[t._v("\n              "+t._s(t.formattedIBAN)+"\n            ")])]),a("q-space"),"NaN"!==t.walletBalance?a("div",[t._v(t._s(t.walletBalance))]):t._e()],1),a("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("newestTransactions"))+" ...")]),t.walletData.transactions?a("div",t._l(t.walletData.transactions.slice(0,4),(function(t){return a("TransactionEntry",{key:t.TransaktionsID,attrs:{transaction:t}})})),1):t._e(),a("div",{staticClass:"row"},[a("q-space"),a("q-btn",{staticClass:"bg-dark",attrs:{"icon-right":"payments","rounded-borders":"","no-caps":"",label:t.$t("withdrawal")},on:{click:t.togglePopUpForTransfer}})],1)]),a("q-dialog",{model:{value:t.popUpForTransfer,callback:function(e){t.popUpForTransfer=e},expression:"popUpForTransfer"}},[a("q-card",{staticClass:"bg-dark",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("transfer")))])]),a("form",{staticClass:"q-px-sm",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmitTransfer(e)}}},[a("q-card-section",[a("q-input",{ref:"IBAN",attrs:{mask:"AA## #### #### #### #### ##",filled:"",label:t.$t("IBAN"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("pleaseEnter")}]},model:{value:t.toSendIBAN,callback:function(e){t.toSendIBAN=e},expression:"toSendIBAN"}}),a("q-input",{ref:"Value",attrs:{type:"number",filled:"",suffix:"€",label:t.$t("value"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("pleaseEnter")},function(e){return e<=t.walletData.balance||t.$t("notEnoughMoney")}]},model:{value:t.transactionValue,callback:function(e){t.transactionValue=e},expression:"transactionValue"}}),a("q-input",{ref:"Password",attrs:{type:"password",filled:"",label:t.$t("password"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("pleaseEnter")}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("q-separator",{staticClass:"q-mx-sm"}),a("q-card-actions",{staticClass:"bg-dark",attrs:{align:"right"}},[a("q-btn",{attrs:{type:"submit",color:"primary","no-caps":"",label:t.$t("send")}})],1)],1)],1)],1),a("div",{staticClass:"col q-py-md"},[a("div",{staticClass:"row text-weight-bolder items-center",staticStyle:{"font-size":"24px"}},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"menu_open"}}),a("div",[t._v(t._s(t.$t("openOrders")))])],1),0!==t.orderData.length?a("div",t._l(t.orderData,(function(e){return a("OpenOrderEntry",{key:e.OrderID,attrs:{orderData:e},on:{deleteOrderSend:function(e){return t.reloadOrderData(e)}}})})),1):a("div",{staticClass:"row q-pt-sm"},[t._v("\n          "+t._s(t.$t("noOpenOrders"))+"\n        ")])])],1)])])},r=[],i=(a("5319"),a("71fc")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"bg-dark shadow-3 rounded-borders q-my-md q-px-md q-py-xs",attrs:{clickable:"",to:t.link}},[a("div",{staticClass:"col "},[a("div",{staticClass:"row full-width items-center"},[a("div",{staticClass:"col text-caption"},[t._v(t._s(t.stockData.ISIN))]),a("q-space"),t.stockData.Blockiert?a("div",{},[a("q-item",{staticClass:"bg-red rounded-borders items-center text-bold",attrs:{dense:""}},[t._v(t._s(t.$t("blocked")))])],1):t._e()],1),a("div",{staticClass:"row items-center full-width no-wrap"},[a("div",{staticClass:"row text-uppercase",staticStyle:{"font-size":"18px"}},[t._v("\n        "+t._s(t.stockData.name)+"\n      ")]),a("q-space"),a("div",{staticClass:"text-bold",staticStyle:{"font-size":"22px"}},[t._v("\n        "+t._s(t.actualValueTotal)+" €\n      ")])],1),a("div",{staticClass:"row full-width"},[a("div",{staticClass:"col text-left"},[a("div",{staticClass:"text-caption"},[t._v(t._s(t.$t("pieces")))]),a("div",[t._v(t._s(t.stockData.count))])]),a("div",{staticClass:"col text-left"},[a("div",{staticClass:"text-caption"},[t._v(t._s(t.$t("buyPrice")))]),a("div",[t._v(t._s(t.avgBuyPrice)+" €")])]),a("div",{staticClass:"col text-left"},[a("div",{staticClass:"text-caption"},[t._v(t._s(t.$t("actualPrice")))]),a("div",[t._v(t._s(t.actualPrice)+" €")])]),a("div",{staticClass:"col text-right"},[a("div",{staticClass:"text-caption"},[t._v(t._s(t.$t("winOrLost")))]),a("div",{class:"text-"+t.winOrLostValueColor},[t._v("\n          "+t._s(t.winOrLostValue)+" €\n        ")])])])])])},n=[],l={name:"DepotEntry",props:{stockData:{type:Object,required:!0}},computed:{link(){return"order/Stock/ID="+this.stockData.ISIN},actualPrice(){return Number(this.stockData.currentValuePerPosition).toFixed(2)},actualValueTotal(){return Number(this.stockData.currentTotalValue).toFixed(2)},avgBuyPrice(){return Number(this.stockData.avgKaufpreis).toFixed(2)},winOrLostValue(){return Number(this.stockData.currentGain).toFixed(2)},winOrLostValueColor(){return 0===this.winOrLostValue?"grey":this.winOrLostValue>0?"green":"red"}},data(){return{}}},c=l,d=a("2877"),u=a("66e5"),p=a("2c91"),h=a("eebe"),m=a.n(h),v=Object(d["a"])(c,o,n,!1,null,null,null),g=v.exports;m()(v,"components",{QItem:u["a"],QSpace:p["a"]});var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.stockName?a("div",{staticClass:"row no-wrap q-my-md q-pa-sm bg-dark shadow-3 rounded-borders items-center"},[a("q-icon",{attrs:{name:"schedule",size:"225%"}}),a("div",{staticClass:"row col q-px-sm items-center full-width"},[a("div",{staticClass:"col-5 q-pr-lg"},[a("div",{staticClass:"text-uppercase text-no-wrap"},[t._v("\n        "+t._s(t.orderData.name)+"\n      ")]),a("div",{staticClass:"text-caption text-no-wrap",staticStyle:{"font-size":"18px"}},[t._v("\n        "+t._s(t.stockName)+"\n      ")])]),a("div",{staticClass:"column col-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row full-width no-wrap text-no-wrap"},[a("div",{staticClass:"q-pr-sm text-uppercase text-bold"},[t._v("\n            "+t._s(t.orderMethod)+"\n          ")]),a("div",{staticClass:"text-caption"},[t._v("\n            "+t._s(t.orderData.Anzahl)+"\n            "+t._s(t.$t("pieces"))+"\n          ")])]),a("div",{staticClass:"row no-wrap text-no-wrap"},[a("div",{staticClass:"q-pr-sm text-caption"},[t._v("\n            "+t._s(t.orderData.OrderAuftragTypBeschreibung)+"\n          ")])])]),a("div",{staticClass:"col"},[t.orderData.Stop?a("div",{staticClass:"row no-wrap text-no-wrap"},[a("div",{staticClass:"q-pr-sm text-caption"},[t._v(t._s(t.$t("stop"))+":")]),a("div",{staticClass:"text-bold text-uppercase"},[t._v("\n            "+t._s(t.orderData.Stop.toFixed(2))+" €\n          ")])]):t._e(),t.orderData.Limit?a("div",{staticClass:"row no-wrap text-no-wrap"},[a("div",{staticClass:"q-pr-sm text-caption"},[t._v(t._s(t.$t("limit"))+":")]),a("div",{staticClass:"text-bold text-uppercase"},[t._v("\n            "+t._s(t.orderData.Limit.toFixed(2))+" €\n          ")])]):t._e()])]),a("q-space"),a("div",{staticClass:"col-2 text-right"},[t._v("\n      "+t._s(t.formattedDate)+"\n    ")]),a("q-space"),a("div",{staticClass:"col row q-pl-xs"},[a("q-space"),a("q-btn",{attrs:{round:"",flat:"",icon:"cancel"},on:{click:t.toggleDeleteOrder}})],1)],1),a("div",[a("q-dialog",{model:{value:t.popupForDelete,callback:function(e){t.popupForDelete=e},expression:"popupForDelete"}},[a("q-card",{staticClass:"bg-dark",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("removalOfOrder")))])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.$t("sureForDeleteOrder"))+"\n        ")]),a("q-separator",{staticClass:"q-mx-sm"}),a("q-card-actions",{staticClass:"bg-dark",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"red","no-caps":"",label:t.$t("deleteOrder")},on:{click:t.deleteOrder}})],1)],1)],1)],1)],1):t._e()},w=[],D={name:"OpenOrderEntry",props:{orderData:{type:Object,required:!0}},computed:{orderMethod(){return"Buy"===this.orderData.OrdertypBeschreibung?"buy":"sell"},formattedDate(){switch(this.$store.state.settings.language){case"de-de":return new Date(this.orderData.Datum).toLocaleDateString("de-de");case"en-gb":return new Date(this.orderData.Datum).toLocaleDateString("en-gb");default:return new Date(this.orderData.Datum).toLocaleDateString("de-de")}}},data(){return{popupForDelete:!1,stockName:""}},created(){this.loadShareData()},methods:{toggleDeleteOrder(){this.popupForDelete=!this.popupForDelete},deleteOrder(){this.$axios.delete(`order?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&orderID=${this.orderData.OrderID}&depotID=${this.$store.state.user.depotID}`).then((t=>{var e=t.data;e.success?this.$emit("deleteOrderSend"):console.log(t)}))},loadShareData(){this.$axios.get(`getShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.orderData.ShareRefID}`).then((t=>{var e=t.data;e.success?this.stockName=e.data.name:console.log(e)}))}}},_=D,$=a("0016"),b=a("9c40"),x=a("24e8"),C=a("f09f"),q=a("a370"),k=a("eb85"),y=a("4b7e"),S=a("7f67"),O=Object(d["a"])(_,f,w,!1,null,null,null),B=O.exports;m()(O,"components",{QIcon:$["a"],QSpace:p["a"],QBtn:b["a"],QDialog:x["a"],QCard:C["a"],QCardSection:q["a"],QSeparator:k["a"],QCardActions:y["a"]}),m()(O,"directives",{ClosePopup:S["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-width bg-dark shadow-3 rounded-borders",staticStyle:{height:"350px"}},[a("IEcharts",{attrs:{option:t.barChartOption,resizable:!0}})],1)},N=[],A=a("ce44"),T={name:"StockChart",props:{depotData:{type:Array,required:!0}},data(){return{}},computed:{barChartOption(){return{tooltip:{trigger:"item"},legend:{top:"5%",left:"center",textStyle:{color:this.$q.dark.isActive?"#fff":"#000",fontFamily:"Arial",fontSize:15,fontWeight:"bolder"}},series:[{name:this.$t("value"),type:"pie",top:30,height:"350",data:this.formattedData,itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},label:{show:!1,position:"left"}}],textStyle:{textBorderColor:"#5470c6",fontFamily:"Arial",fontSize:15,fontWeight:"bolder"}}},formattedData(){var t=[];return this.depotData.forEach((e=>{let a={value:e.currentTotalValue,name:e.name};t.push(a)})),t}},components:{IEcharts:A["a"]}},E=T,F=Object(d["a"])(E,I,N,!1,null,null,null),P=F.exports,V={components:{TransactionEntry:i["a"],DepotEntry:g,OpenOrderEntry:B,PieChart:P},computed:{walletBalance(){return Number(this.walletData.balance).toFixed(2)},depotBalance(){return Number(this.depotData.balance).toFixed(2)},formattedIBAN(){return this.formatToIBAN(this.$store.state.user.IBAN,"#### #### #### #### #### ##")}},watch:{},data(){return{walletData:[],depotData:[],orderData:[],popUpForTransfer:!1,toSendIBAN:"",transactionValue:null,password:"",formHasError:!0}},created(){this.getBalanceAndLastTransactionsOfVerrechnungskonto(),this.getDepotValues(),this.getOrders()},methods:{getBalanceAndLastTransactionsOfVerrechnungskonto(){this.$axios.get(`getBalanceAndLastTransactionsOfVerrechnungskonto?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`).then((t=>{var e=t.data;e.success?this.walletData=e.data:console.log(e)}))},getDepotValues(){this.$axios.get(`getDepotValues?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}`).then((t=>{var e=t.data;e.success?this.depotData=e.data:console.log(e)}))},getOrders(){this.$axios.get(`getOrders?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}`).then((t=>{var e=t.data;e.success?e.data.forEach((t=>{3!==t.OrderstatusID&&this.orderData.push(t)})):console.log(t)}))},togglePopUpForTransfer(){this.popUpForTransfer=!this.popUpForTransfer},checkUserCredentials(){this.$axios.get(`loginWithPassword?email=${this.$store.state.user.email}&password=${this.password}`).then((t=>{var e=t.data;e.success?this.doTransaction():this.$q.notify({color:"negative",message:this.$t("wrongPassword")})}))},doTransaction(){this.$axios.post(`initiateAuszahlung?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&amount=${this.transactionValue}&IBAN=${this.toSendIBAN.replace(/\s/g,"")}`).then((t=>{var e=t.data;e.success?(this.popUpForTransfer=!1,this.getBalanceAndLastTransactionsOfVerrechnungskonto()):console.log(e)}))},onSubmitTransfer(){this.$refs.IBAN.validate(),this.$refs.Value.validate(),this.$refs.Password.validate(),this.$refs.IBAN.hasError||this.$refs.Value.hasError||this.$refs.Password.hasError?this.formHasError=!0:this.checkUserCredentials()},formatToIBAN(t,e){var a=0,s=t.toString();return e.replace(/#/g,(t=>s[a++]))},reloadOrderData(t){this.getOrders()}}},z=V,Q=a("9989"),L=a("27f9"),U=Object(d["a"])(z,s,r,!1,null,null,null);e["default"]=U.exports;m()(U,"components",{QPage:Q["a"],QIcon:$["a"],QSpace:p["a"],QBtn:b["a"],QDialog:x["a"],QCard:C["a"],QCardSection:q["a"],QInput:L["a"],QSeparator:k["a"],QCardActions:y["a"]})}}]);