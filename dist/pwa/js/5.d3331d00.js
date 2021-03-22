(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"71fc":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col q-my-md q-px-md q-py-xs shadow-3 rounded-borders",class:t.transaction.Betrag<=0?"bg-red":"bg-green"},[s("div",{staticClass:"row no-wrap items-center",staticStyle:{"font-size":"20px"}},[s("div",{staticClass:"col"},[t._v(t._s(t.description))]),s("q-space"),s("div",[t._v(t._s(t.costs)+" €")])],1),s("div",{staticClass:"row"},[s("div",{staticClass:"text-caption text-bold"},[t._v("\n      "+t._s(t.formattedDate)+"\n    ")]),s("q-space"),t.isShareBuyOrSell?t._e():s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.destination)+" "+t._s(t.transaction.Zielkonto)+"\n    ")]),t.isShareBuyOrSell?s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.$t("amount"))+": "+t._s(t.shareAmount)+"\n    ")]):t._e()],1)])},n=[],i={name:"TransactionEntry",props:{transaction:{type:Object,required:!0}},data(){return{}},computed:{formattedDate(){return new Date(this.transaction.Datum).toLocaleDateString(this.$store.state.settings.language)},costs(){return Number(this.transaction.Betrag).toFixed(2)},description(){var t=this.transaction.Beschreibung;switch(t){case"Einzahlung":return this.$t("deposit");case"Auszahlung":return this.$t("withdrawal")}let a=t.split(":");return t.includes("Aktienkauf")?this.$t("shareBuy")+": "+a[1]:t.includes("Aktienverkauf")?this.$t("shareSell")+": "+a[1]:""},isShareBuyOrSell(){return!!this.transaction.Beschreibung.includes("Aktien")},destination(){return this.transaction.Beschreibung.includes("Einzahlung")?this.$t("fromDestination")+": ":this.transaction.Beschreibung.includes("Auszahlung")?this.$t("toDestination")+": ":""},shareAmount(){if(this.transaction.Beschreibung.includes("Aktien")){let t=this.transaction.Beschreibung.split(":");return t[1]}return""}}},r=i,c=s("2877"),o=s("2c91"),l=s("eebe"),u=s.n(l),d=Object(c["a"])(r,e,n,!1,null,null,null);a["a"]=d.exports;u()(d,"components",{QSpace:o["a"]})},febe:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",[s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"col q-ma-xs full-width no-wrap items-center"},[s("div",{staticClass:"row text-weight-bolder items-center",staticStyle:{"font-size":"24px"}},[s("q-icon",{staticClass:"q-pr-md",attrs:{name:"clear_all"}}),s("div",[t._v(t._s(t.$t("transactions")))]),s("q-space"),t._v("\n        "+t._s(t.balance)+" €\n      ")],1),t.walletData.transactions?s("div",t._l(t.walletData.transactions,(function(t){return s("TransactionEntry",{key:t.TransaktionsID,attrs:{transaction:t}})})),1):t._e()])])])},n=[],i=s("71fc"),r={components:{TransactionEntry:i["a"]},computed:{balance(){return Number(this.walletData.balance).toFixed(2)}},watch:{},data(){return{walletData:[]}},created(){this.getBalanceAndLastTransactionsOfVerrechnungskonto()},methods:{getBalanceAndLastTransactionsOfVerrechnungskonto(){this.$axios.get(`getBalanceAndLastTransactionsOfVerrechnungskonto?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`).then((t=>{var a=t.data;a.success?this.walletData=a.data:console.log(a)}))}}},c=r,o=s("2877"),l=s("9989"),u=s("0016"),d=s("2c91"),h=s("eebe"),p=s.n(h),g=Object(o["a"])(c,e,n,!1,null,null,null);a["default"]=g.exports;p()(g,"components",{QPage:l["a"],QIcon:u["a"],QSpace:d["a"]})}}]);