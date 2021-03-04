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
          <div class="xs-hide">MoonStonks</div>
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
              <q-btn round to="profile">
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
                @click="clearState"
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
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink },
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
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.$q.cookies.set("cookie_moonStonks_language", lang, { expires: 365 });
      console.log(this.$q.cookies.get("cookie_moonStonks_language"));
    },
    colorMode(colorMode) {
      if (colorMode) {
        this.$q.dark.set(true);
      } else {
        this.$q.dark.set(false);
      }
    }
  },
  computed: {
    linksData() {
      return [
        {
          title: this.$t("overview"),
          icon: "home",
          link: "/home"
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
        this.$store.state.firstName + " " + this.$store.state.lastName + "."
      );
    },
    getImageURL() {
      switch (this.$store.state.gender) {
        case "m":
          return "https://cdn.quasar.dev/img/boy-avatar.png";
        case "f":
          return "https://cdn.quasar.dev/img/avatar.png";
        case "x":
          return "https://www.humanium.org/es/wp-content/uploads/2016/03/shutterstock_304512785-300x300.jpg";
        default:
          return "keine Angabe";
      }
    }
  },
  methods: {
    clearState() {
      this.$q.cookies.remove("cookie_moonStonks_user", { expires: 10 });
      this.$store.replaceState({});
    }
  }
};
</script>
