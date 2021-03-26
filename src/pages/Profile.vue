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
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("depotID") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="profile.depotID"
          readonly
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("customerID") }}
        </div>
        <q-input class="col-sm-10 col-xs-7" v-model="profile.ID" readonly />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("firstname") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="profile.firstName"
          readonly
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("lastname") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="profile.lastName"
          readonly
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("street") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="street"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("housenumber") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="houseNumber"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">
          {{ $t("postalCode") }}
        </div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="postalCode"
          @input="updateProfileData"
        />
        <div class="col-sm-2 col-xs-5 text-left q-px-md">{{ $t("city") }}</div>
        <q-input
          class="col-sm-10 col-xs-7"
          v-model="city"
          @input="updateProfileData"
        />
      </div>

      <form @submit.prevent.stop="onSubmit" class="q-pt-lg">
        <div class="col-sm-2 col-xs-5 text-left text-h6 ">
          {{ $t("changePassword") }}
        </div>
        <div class="row items-center">
          <div class="col-sm-2 col-xs-5 text-left q-px-md">
            {{ $t("oldPassword") }}
          </div>
          <q-input
            class="col-sm-10 col-xs-7"
            type="password"
            ref="oldPassword"
            v-model="oldPassword"
            lazy-rules=""
            :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
          />
          <div class="col-sm-2 col-xs-5 text-left q-px-md">
            {{ $t("newPassword") }}
          </div>
          <q-input
            class="col-sm-10 col-xs-7"
            type="password"
            ref="newPassword"
            v-model="newPassword"
            lazy-rules=""
            :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
          />
          <div class="col-sm-2 col-xs-5 text-left q-px-md">
            {{ $t("repeatNewPassword") }}
          </div>
          <q-input
            class="col-sm-10 col-xs-7"
            type="password"
            ref="repeateNewPassword"
            v-model="repeateNewPassword"
            lazy-rules=""
            :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
          />
          <div class="full-width text-center">
            <q-btn
              type="submit"
              unelevated
              no-caps
              size="lg"
              color="primary"
              :label="$t('changePassword')"
            />
          </div>
        </div>
      </form>
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
          return "https://www.humanium.org/es/wp-content/uploads/2016/05/shutterstock_504512785-500x500.jpg";
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
      oldPassword: null,
      newPassword: null,
      repeateNewPassword: null,
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
    },
    onSubmit() {
      this.$refs.oldPassword.validate();
      this.$refs.newPassword.validate();
      this.$refs.repeateNewPassword.validate();

      if (
        this.$refs.oldPassword.hasError ||
        this.$refs.newPassword.hasError ||
        this.$refs.repeateNewPassword.hasError
      ) {
        this.formHasError = true;
      } else if (this.newPassword !== this.repeateNewPassword) {
        this.formHasError = true;
        this.$q.notify({
          color: "negative",
          message: this.$t("passwordNotEqual") + "!"
        });
      } else {
        this.changePassword();
      }
    },
    changePassword() {
      this.$axios
        .put(
          `updatePasswordOfUser?email=${this.profile.email}&oldPassword=${this.oldPassword}&newPassword=${this.newPassword}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            var passwordHash = responseData.additionalInfo.newPasswordHash;
            this.$store.commit("user/updatePasswordHash", passwordHash);
            var user = this.$store.state.user;
            if (this.$store.state.settings.acceptedCookie) {
              this.$q.cookies.set("cookie_moonStonks_user", user, {
                expires: 10
              });
            }
            this.$q.notify({
              color: "positive",
              message: this.$t("successfulPasswordChange")
            });
          } else if (!responseData.success) {
            this.$q.notify({
              color: "negative",
              message: this.$t("failedPasswordChange")
            });
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
