<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div class="xs-hide">{{ $t("moonStonks") }}</div>
        </q-toolbar-title>

        <q-btn-dropdown rounded flat size="120%" icon="account_circle">
          <div class="row no-wrap q-pa-md items-center">
            <div class="column">
              <div class="text-h6 q-mb-md">{{ $t("settings") }}</div>
              <q-select
                class="q-px-xs"
                v-model="lang"
                :options="langOptions"
                hide-dropdown-icon
                dense
                borderless
                emit-value
                map-options
                options-dense
              >
                <template v-slot:selected>
                  <div class="row items-center text-center">
                    <gb-flag class="q-pl-sm" :code="langFlag" size="default" />
                    <div class="q-pl-md">{{ $t("language") }}</div>
                  </div>
                </template>
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <q-item-section avatar>
                      <gb-flag :code="scope.opt.icon" size="default" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label v-html="scope.opt.label"></q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-toggle
                v-model="colorMode"
                :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
                :label="$t('darkmode')"
              />
            </div>

            <q-separator vertical inset class="q-mx-lg" />
            <div class="column items-center">
              <q-btn round to="/profile">
                <q-avatar size="72px">
                  <img :src="getImageURL" />
                </q-avatar>
              </q-btn>
              <div class="text-subtitle1 q-mt-md q-mb-xs">{{ profilInfo }}</div>

              <q-btn
                color="primary"
                :label="$t('logout')"
                push
                size="sm"
                v-close-popup
                to="/login"
                @click="logout"
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class=""
      style="font-size:22px"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <q-item-label header class=""> </q-item-label>
        <EssentialLink
          v-for="link in linksData"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
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
import EssentialLink from "components/EssentialLink.vue";
import CookieLaw from "vue-cookie-law";

export default {
  name: "MainLayout",
  components: { EssentialLink, CookieLaw },
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      lang: this.$i18n.locale,
      langOptions: [
        { value: "en-gb", label: "English", icon: "gb" },
        { value: "de-de", label: "Deutsch", icon: "de" }
      ],
      colorMode: this.$q.dark.isActive
    };
  },
  created() {
    var user = this.$q.cookies.get("cookie_moonStonks_user");
    var settings = this.$q.cookies.get("cookie_moonStonks_settings");

    this.$store.commit("user/save", user);
    this.$store.commit("user/authenticateUser", true);

    if (this.$store.state.settings.acceptedCookie) {
      this.$q.cookies.set("cookie_moonStonks_settings", settings, {
        expires: 10
      });
    }

    if (this.$store.state.settings.language) {
      this.lang = this.$store.state.settings.language;
    }
    if (settings.darkMode || this.$store.state.settings.darkMode) {
      this.colorMode = true;
    } else {
      this.colorMode = false;
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.$store.commit("settings/changeLanguage", lang);
      var settings = this.$store.state.settings;
      if (this.$store.state.settings.acceptedCookie) {
        this.$q.cookies.set("cookie_moonStonks_settings", settings, {
          expires: 365
        });
      }
      console.log(this.$q.cookies.get("cookie_moonStonks_settings"));
    },
    colorMode(colorMode) {
      if (colorMode) {
        this.$store.commit("settings/changeToDarkMode", true);
        if (this.$store.state.settings.acceptedCookie) {
          var settings = this.$store.state.settings;
          this.$q.cookies.set("cookie_moonStonks_settings", settings, {
            expires: 365
          });
        }
        this.$q.dark.set(true);
      } else {
        this.$store.commit("settings/changeToDarkMode", false);
        if (this.$store.state.settings.acceptedCookie) {
          var settings = this.$store.state.settings;
          this.$q.cookies.set("cookie_moonStonks_settings", settings, {
            expires: 365
          });
        }
        this.$q.dark.set(false);
      }
    }
  },
  computed: {
    linksData() {
      return [
        {
          title: this.$t("overview"),
          icon: "pie_chart",
          link: "/home"
        },
        {
          title: this.$t("order"),
          icon: "shop",
          link: "/order"
        },
        {
          title: this.$t("transactions"),
          icon: "clear_all",
          link: "/transactions"
        },
        {
          title: this.$t("invoices"),
          icon: "receipt",
          link: "/invoices"
        }
      ];
    },
    langFlag() {
      switch (this.lang) {
        case "de-de":
          return "de";
        case "en-gb":
          return "gb";
        default:
          return "";
      }
    },
    profilInfo() {
      return (
        this.$store.state.user.firstName +
        " " +
        this.$store.state.user.lastName.charAt(0) +
        "."
      );
    },
    getImageURL() {
      switch (this.$store.state.user.gender) {
        case "m":
          return "https://cdn.quasar.dev/img/boy-avatar.png";
        case "f":
          return "https://cdn.quasar.dev/img/avatar.png";
        case "x":
          return "https://www.humanium.org/es/wp-content/uploads/2016/03/shutterstock_304512785-300x300.jpg";
        default:
          return "https://cdn.quasar.dev/img/boy-avatar.png";
      }
    }
  },
  methods: {
    acceptedCookie() {
      this.$store.commit("settings/acceptCookie", true);
      var user = this.$store.state.user;
      var settings = this.$store.state.settings;
      this.$q.cookies.set("cookie_moonStonks_user", user, { expires: 10 });
      this.$q.cookies.set("cookie_moonStonks_settings", settings, {
        expires: 365
      });
    },
    logout() {
      this.$q.cookies.remove("cookie_moonStonks_user", { expires: 10 });
      this.$q.cookies.remove("cookie_moonStonks_auth", { expires: 10 });
      this.$store.commit("user/resetState");
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
