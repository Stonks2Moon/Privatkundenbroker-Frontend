<template>
  <q-layout>
    <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
      <cookie-law
        v-if="!$store.state.settings.acceptedCookie"
        theme="mytheme"
        v-on:accept="acceptedCookie()"
        :buttonText="$t('gotIt') + '!'"
        v-on:decline="acceptedCookie()"
      >
        <div slot="message">{{ $t("cookieAlert") }}.</div>
      </cookie-law>
    </q-page-container>
  </q-layout>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  // name: 'LayoutName',
  components: { CookieLaw },
  data() {
    return {};
  },
  created() {
    var settings = this.$q.cookies.get("cookie_moonStonks_settings");
    if (settings) {
      this.$store.commit("settings/save", settings);
    }
    var user = this.$q.cookies.get("cookie_moonStonks_user");
    if (user) {
      this.loginWithHash(user.email, user.passwordHash);
    }
  },
  methods: {
    acceptedCookie() {
      this.$store.commit("settings/acceptCookie", true);
      var settings = this.$store.state.settings;
      this.$q.cookies.set("cookie_moonStonks_settings", settings, {
        expires: 365
      });
    },
    loginWithHash(email, hashedPassword) {
      this.$axios
        .get(
          `loginWithPasswordHash?email=${email}&hashedPassword=${hashedPassword}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            var user = {
              ID: responseData.data.NutzerID,
              email: email,
              passwordHash: hashedPassword,
              firstName: responseData.data.Vorname,
              lastName: responseData.data.Nachname,
              street: responseData.data.Strasse,
              houseNumber: responseData.data.Hausnummer,
              postalCode: responseData.data.Postleitzahl,
              city: responseData.data.Ort,
              depotID: responseData.data.depotIDs[0],
              IBAN: responseData.data.VerrechnungskontoIBAN
            };
            this.$store.commit("user/save", user);
            this.$store.commit("user/authenticateUser", true);
            if (this.$store.state.settings.acceptedCookie) {
              var settings = this.$store.state.settings;
              this.$q.cookies.set("cookie_moonStonks_settings", settings, {
                expires: 10
              });
              this.$q.cookies.set("cookie_moonStonks_user", user, {
                expires: 10
              });
            }
            this.$router.push({
              path: "/home"
            });
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>

<style lang="scss">
.Cookie--mytheme {
  background: $dark;
  color: #ffffff;
  padding: 1.25em;
}
.Cookie__button {
  background: $primary;
  padding: 0.625em 3.125em;
  color: #ffffff;
  border-radius: 1;
  border: 0;
  font-size: 1em;
  &:hover {
    background: darken($primary, 10%);
  }
}
</style>
