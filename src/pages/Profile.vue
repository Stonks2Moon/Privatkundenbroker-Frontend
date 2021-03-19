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
          {{ $t("customerID") }}
        </div>
        <q-input class="col-sm-10 col-xs-9" v-model="profile.ID" readonly />
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
          {{ $t("street") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="street"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">
          {{ $t("housenumber") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="houseNumber"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">
          {{ $t("postalCode") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="postalCode"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-3 text-left q-px-md">{{ $t("city") }}</div>
        <q-input
          class="col-sm-10 col-xs-9"
          v-model="city"
          @input="updateProfileData"
        />
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
          return "https://cdn.quasar.dev/img/boy-avatar.png";
      }
    },
    street: {
      get() {
        return this.$store.state.user.street;
      },
      set(val) {
        this.$store.commit("user/updateStreet", val);
      }
    },
    houseNumber: {
      get() {
        return this.$store.state.user.houseNumber;
      },
      set(val) {
        this.$store.commit("user/updateHouseNumber", val);
      }
    },
    postalCode: {
      get() {
        return this.$store.state.user.postalCode;
      },
      set(val) {
        this.$store.commit("user/updatePostalCode", val);
      }
    },
    city: {
      get() {
        return this.$store.state.user.city;
      },
      set(val) {
        this.$store.commit("user/updateCity", val);
      }
    }
  },
  data() {
    return {
      formattedDate: null,
      profile: this.$store.state.user
    };
  },
  methods: {
    updateProfileData() {
      this.$axios
        .put(
          `updateAdressDataOfUser?email=${this.profile.email}&hashedPassword=${this.profile.passwordHash}&strasse=${this.profile.street}&hausnummer=${this.profile.houseNumber}&postleitzahl=${this.profile.postalCode}&ort=${this.profile.city}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            var user = this.$store.state.user;
            if (this.$store.state.settings.acceptedCookie) {
              this.$q.cookies.set("cookie_moonStonks_user", user, {
                expires: 10
              });
            }
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
