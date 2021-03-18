<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
      >
        <div class="row">
          <q-card class="shadow-20" style="width:325px;">
            <q-card-section class="bg-primary">
              <h4 class="text-h5 text-white q-my-md">{{ $t("register") }}</h4>
              <div
                class="absolute-bottom-right q-pr-md"
                style="transform: translateY(50%);"
              >
                <q-btn
                  fab
                  class="shadow-20"
                  icon="close"
                  color="primary"
                  to="/login"
                />
              </div>
            </q-card-section>

            <form @submit.prevent.stop="onSubmit" class="q-px-sm q-pt-xl">
              <q-card-section>
                <q-input
                  ref="email"
                  square
                  clearable
                  v-model="email"
                  type="email"
                  :label="$t('email')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  ref="passwordFirst"
                  square
                  clearable
                  v-model="passwordFirst"
                  type="password"
                  :label="$t('password')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
                <q-input
                  ref="passwordSecond"
                  square
                  clearable
                  v-model="passwordSecond"
                  type="password"
                  :label="$t('repeatPassword')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
                <q-input
                  ref="firstName"
                  square
                  clearable
                  v-model="firstName"
                  type="text"
                  :label="$t('firstname')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  ref="lastName"
                  square
                  clearable
                  v-model="lastName"
                  type="text"
                  :label="$t('lastname')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  ref="street"
                  square
                  clearable
                  v-model="street"
                  type="text"
                  :label="$t('street')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="edit_road" />
                  </template>
                </q-input>
                <q-input
                  ref="housenumber"
                  square
                  clearable
                  v-model="housenumber"
                  type="number"
                  :label="$t('housenumber')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="tag" />
                  </template>
                </q-input>
                <q-input
                  ref="postalCode"
                  square
                  clearable
                  v-model="postalCode"
                  type="number"
                  :label="$t('postalCode')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="local_post_office" />
                  </template>
                </q-input>
                <q-input
                  ref="city"
                  square
                  clearable
                  v-model="city"
                  type="text"
                  :label="$t('city')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="location_city" />
                  </template>
                </q-input>
              </q-card-section>

              <q-toggle
                v-model="accept"
                :label="$t('acceptTermsAndConditions') + '.'"
              />

              <q-card-actions class="q-px-lg">
                <q-btn
                  type="submit"
                  unelevated
                  size="lg"
                  color="primary"
                  class="full-width text-white"
                  :label="$t('letsGo') + '!'"
                />
              </q-card-actions>
            </form>
            <q-card-section class="text-center q-pa-sm">
              <q-btn no-caps flat :label="$t('backToLogin')" to="login" />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Login",
  computed: {
    formattedDate() {
      if (this.birthday) {
        return new Date(this.birthday).toLocaleDateString("de-DE");
      } else {
        return null;
      }
    }
  },
  data() {
    return {
      email: null,
      passwordFirst: null,
      passwordSecond: null,
      birthday: null,
      firstName: null,
      lastName: null,
      street: null,
      housenumber: null,
      postalCode: null,
      city: null,
      accept: true
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.firstName.validate();
      this.$refs.lastName.validate();
      this.$refs.passwordFirst.validate();
      this.$refs.passwordSecond.validate();
      this.$refs.street.validate();
      this.$refs.housenumber.validate();
      this.$refs.postalCode.validate();
      this.$refs.city.validate();

      if (
        this.$refs.firstName.hasError ||
        this.$refs.lastName.hasError ||
        this.$refs.email.hasError ||
        this.$refs.passwordFirst.hasError ||
        this.$refs.passwordSecond.hasError ||
        this.$refs.street.hasError ||
        this.$refs.housenumber.hasError ||
        this.$refs.postalCode.hasError ||
        this.$refs.city.hasError
      ) {
        this.formHasError = true;
      } else if (this.passwordFirst !== this.passwordSecond) {
        this.formHasError = true;
        this.$q.notify({
          color: "negative",
          message: this.$t("passwordNotEqual") + "!"
        });
      } else if (this.accept !== true) {
        this.$q.notify({
          color: "negative",
          message: this.$t("notAcceptTermsAndConditions") + "!"
        });
      } else {
        this.register();
      }
    },
    register() {
      this.$axios
        .post(
          `registerUser?email=${this.email}&password=${this.passwordFirst}&firstName=${this.firstName}&lastName=${this.lastName}&strasse=${this.street}&hausnummer=${this.housenumber}&postleitzahl=${this.postalCode}&ort=${this.city}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.$q.notify({
              icon: "done",
              color: "positive",
              message: this.$t("accountCreated") + "!"
            });
            this.$router.push({
              path: "/login"
            });
          } else {
            this.$q.notify({
              color: "negative",
              message: responseData.message
            });
            console.log(responseData);
          }
        });
    }
  }
};
</script>
