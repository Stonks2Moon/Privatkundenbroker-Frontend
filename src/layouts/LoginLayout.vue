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
    console.log(settings);
  },
  methods: {
    acceptedCookie() {
      this.$store.commit("settings/acceptCookie", true);
      var settings = this.$store.state.settings;
      this.$q.cookies.set("cookie_moonStonks_settings", settings, {
        expires: 365
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
