<template>
  <q-page>
    <div class="column q-pa-md" v-if="profile">
      <div class="row text-weight-bolder" style="font-size:24px">
        <div>{{ $t("profile") }}</div>
      </div>
      <div class="no-wrap q-pa-md column items-center">
        <q-avatar size="120px">
          <img :src="getImageURL" />
        </q-avatar>
      </div>
      <div class="row items-center">
        <div class="col-sm-2 col-xs-3 text-left q-px-md">
          {{ $t("firstname") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="profile.firstName"
          readonly
        />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">
          {{ $t("lastname") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="profile.lastName"
          readonly
        />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">
          {{ $t("birthday") }}
        </div>
        <q-input class="col-sm-10 col-xs-9" v-model="formattedDate" readonly />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">{{ $t("email") }}</div>
        <q-input class="col-sm-10 col-xs-9" v-model="profile.email" readonly />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {},
  computed: {
    getImageURL() {
      switch (this.profile.gender) {
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
  watch: {},
  created() {
    this.profile = this.$store.state;
    this.formattedDate = new Date(this.profile.birthday).toLocaleDateString(
      "de-DE"
    );
  },
  data() {
    return {
      formattedDate: null
    };
  },
  methods: {}
};
</script>
