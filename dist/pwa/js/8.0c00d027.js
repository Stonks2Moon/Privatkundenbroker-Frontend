(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"013f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-layout",[e("q-page-container",[e("q-page",{staticClass:"window-height window-width row justify-center items-center"},[e("div",{staticClass:"row"},[e("q-card",{staticClass:"shadow-20",staticStyle:{width:"325px",height:"500px"}},[e("q-card-section",{staticClass:"bg-primary"},[e("h4",{staticClass:"text-h5 q-my-md"},[t._v(t._s(t.$t("moonStonks")))]),e("div",{staticClass:"absolute-bottom-right q-pr-md",staticStyle:{transform:"translateY(50%)"}},[e("q-btn",{staticClass:"shadow-20",attrs:{fab:"",icon:"add",color:"primary",to:"register"}})],1)]),e("q-card-section",[e("q-form",{staticClass:"q-px-sm q-pt-xl"},[e("q-input",{attrs:{square:"",clearable:"",type:"email",label:t.$t("email")},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),e("q-input",{attrs:{square:"",clearable:"",type:"password",label:t.$t("password")},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1)],1),e("q-card-actions",{staticClass:"q-px-lg"},[e("q-btn",{staticClass:"full-width",attrs:{unelevated:"",size:"lg",color:"primary",label:t.$t("login")},on:{click:t.login}})],1),e("q-card-section",{staticClass:"text-center q-pa-sm"},[e("q-btn",{attrs:{"no-caps":"",flat:"",label:t.$t("forgotPassword")+"?",to:"passwordReset"}})],1)],1)],1)])],1)],1)},o=[],i={name:"Login",data(){return{email:"",username:"",password:""}},created(){},methods:{login(){this.email||this.password?this.$axios.get(`loginWithPassword?email=${this.email}&password=${this.password}`).then((t=>{var s=t.data;if(s.success){var e={ID:s.data.NutzerID,email:this.email,passwordHash:s.data.Passwort,firstName:s.data.Vorname,lastName:s.data.Nachname,street:s.data.Strasse,houseNumber:s.data.Hausnummer,postalCode:s.data.Postleitzahl,city:s.data.Ort,depotID:s.data.depotIDs[0],IBAN:s.data.VerrechnungskontoIBAN};if(this.$store.commit("user/save",e),this.$store.commit("user/authenticateUser",!0),this.$store.state.settings.acceptedCookie){var a={acceptedCookie:!0,darkMode:this.$q.dark.isActive,language:this.$i18n.locale};this.$q.cookies.set("cookie_moonStonks_settings",a,{expires:10}),this.$q.cookies.set("cookie_moonStonks_user",e,{expires:10})}this.$router.push({path:"/home"})}else this.$q.notify({color:"negative",message:s.message})})):this.$q.notify({color:"negative",message:this.$t("enterLoginData")})},loginTest(){var t={email:"meine@email.de",passwordHash:"hashedPassword",firstName:"Max",lastName:"Mustermann",gender:"m",birthday:"1999-03-30"};if(this.$store.commit("user/save",t),this.$store.commit("user/authenticateUser",!0),this.$store.state.settings.acceptedCookie){var s={acceptedCookie:!0,darkMode:this.$q.dark.isActive,language:this.$i18n.locale};this.$q.cookies.set("cookie_moonStonks_settings",s,{expires:10}),this.$q.cookies.set("cookie_moonStonks_user",t,{expires:10})}this.$router.push({path:"/home"})},loginWithHash(t,s){this.$axios.get(`loginWithPasswordHash?email=${t}&hashedPassword=${s}`).then((e=>{var a=e.data;if(a.success){var o={ID:a.data.NutzerID,email:t,passwordHash:s,firstName:a.data.Vorname,lastName:a.data.Nachname,street:a.data.Strasse,houseNumber:a.data.Hausnummer,postalCode:a.data.Postleitzahl,city:a.data.Ort,depotID:a.data.depotIDs[0],IBAN:a.data.VerrechnungskontoIBAN};if(this.$store.commit("user/save",o),this.$store.commit("user/authenticateUser",!0),this.$store.state.settings.acceptedCookie){var i=this.$store.state.settings;this.$q.cookies.set("cookie_moonStonks_settings",i,{expires:10}),this.$q.cookies.set("cookie_moonStonks_user",o,{expires:10})}this.$router.push({path:"/home"})}else console.log(a)}))}}},r=i,n=e("2877"),c=e("4d5a"),l=e("09e3"),d=e("9989"),h=e("f09f"),m=e("a370"),p=e("9c40"),u=e("0378"),g=e("27f9"),k=e("0016"),$=e("4b7e"),w=e("eebe"),q=e.n(w),f=Object(n["a"])(r,a,o,!1,null,null,null);s["default"]=f.exports;q()(f,"components",{QLayout:c["a"],QPageContainer:l["a"],QPage:d["a"],QCard:h["a"],QCardSection:m["a"],QBtn:p["a"],QForm:u["a"],QInput:g["a"],QIcon:k["a"],QCardActions:$["a"]})}}]);