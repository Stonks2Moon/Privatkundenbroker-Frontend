(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"71fc":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col q-my-md q-px-md q-py-xs shadow-3 rounded-borders",class:t.transaction.Betrag<=0?"bg-red":"bg-green"},[a("div",{staticClass:"row",staticStyle:{"font-size":"20px"}},[a("div",[t._v(t._s(t.description))]),a("q-space"),a("div",[t._v(t._s(t.costs)+" €")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"text-caption text-bold"},[t._v("\n      "+t._s(t.formattedDate)+"\n    ")]),a("q-space"),t.isShareBuyOrSell?t._e():a("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.destination)+" "+t._s(t.transaction.Zielkonto)+"\n    ")]),t.isShareBuyOrSell?a("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.$t("amount"))+": "+t._s(t.shareAmount)+"\n    ")]):t._e()],1)])},n=[],i={name:"TransactionEntry",props:{transaction:{type:Object,required:!0}},data(){return{}},computed:{formattedDate(){return new Date(this.transaction.Datum).toLocaleDateString(this.$store.state.settings.language)},costs(){return Number(this.transaction.Betrag).toFixed(2)},description(){var t=this.transaction.Beschreibung;switch(t){case"Einzahlung":return this.$t("deposit");case"Auszahlung":return this.$t("withdrawal")}let s=t.split(":");return t.includes("Aktienkauf")?this.$t("shareBuy")+": "+s[1]:t.includes("Aktienverkauf")?this.$t("shareSell")+": "+s[1]:""},isShareBuyOrSell(){return!!this.transaction.Beschreibung.includes("Aktien")},destination(){return this.transaction.Beschreibung.includes("Einzahlung")?this.$t("fromDestination")+": ":this.transaction.Beschreibung.includes("Auszahlung")?this.$t("toDestination")+": ":""},shareAmount(){if(this.transaction.Beschreibung.includes("Aktien")){let t=this.transaction.Beschreibung.split(":");return t[1]}return""}}},r=i,c=a("2877"),o=a("2c91"),l=a("eebe"),u=a.n(l),d=Object(c["a"])(r,e,n,!1,null,null,null);s["a"]=d.exports;u()(d,"components",{QSpace:o["a"]})},bc13:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"col q-ma-xs full-width no-wrap items-center"},[a("div",{staticClass:"row text-weight-bolder items-center",staticStyle:{"font-size":"24px"}},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"insights"}}),a("div",[t._v(t._s(t.$t("depot")))]),a("q-space"),t._v("\n        10000 €\n      ")],1),a("div",{staticClass:"row text-weight-bolder items-center",staticStyle:{"font-size":"24px"}},[a("q-icon",{staticClass:"q-pr-md",attrs:{name:"account_balance_wallet"}}),a("div",[t._v(t._s(t.$t("wallet")))]),a("q-space"),t._v("\n        "+t._s(t.balance)+" €\n      ")],1),a("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("newestTransactions"))+" ...")]),t.walletData.transactions?a("div",t._l(t.walletData.transactions.slice(0,4),(function(t){return a("TransactionEntry",{key:t.TransaktionsID,attrs:{transaction:t}})})),1):t._e()])])])},n=[],i=a("71fc"),r={components:{TransactionEntry:i["a"]},computed:{balance(){return Number(this.walletData.balance).toFixed(2)}},watch:{},data(){return{walletData:[]}},created(){this.getBalanceAndLastTransactionsOfVerrechnungskonto()},methods:{getBalanceAndLastTransactionsOfVerrechnungskonto(){this.$axios.get(`getBalanceAndLastTransactionsOfVerrechnungskonto?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`).then((t=>{var s=t.data;s.success?this.walletData=s.data:console.log(s)}))}}},c=r,o=a("2877"),l=a("9989"),u=a("0016"),d=a("2c91"),h=a("eebe"),p=a.n(h),m=Object(o["a"])(c,e,n,!1,null,null,null);s["default"]=m.exports;p()(m,"components",{QPage:l["a"],QIcon:u["a"],QSpace:d["a"]})}}]);