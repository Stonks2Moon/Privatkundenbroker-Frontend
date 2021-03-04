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
                  type="username"
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
                  type="username"
                  :label="$t('lastname')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input
                  ref="birthday"
                  :label="$t('birthday')"
                  v-model="formattedDate"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          color="primary"
                          v-model="birthday"
                          :subtitle="$t('birthday')"
                          mask="YYYY-MM-DD"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              :label="$t('close')"
                              color="saporange"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select
                  ref="gender"
                  v-model="gender"
                  :options="genderOptions"
                  option-value="ID"
                  option-label="desc"
                  emit-value
                  map-options
                  :label="$t('gender')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="transgender" />
                  </template>
                </q-select>
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
      gender: null,
      genderOptions: [
        { desc: this.$t("male"), ID: "m" },
        { desc: this.$t("female"), ID: "f" },
        { desc: this.$t("divers"), ID: "x" }
      ],
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
      this.$refs.birthday.validate();
      this.$refs.gender.validate();

      if (
        this.$refs.firstName.hasError ||
        this.$refs.lastName.hasError ||
        this.$refs.email.hasError ||
        this.$refs.birthday.hasError ||
        this.$refs.passwordFirst.hasError ||
        this.$refs.passwordSecond.hasError ||
        this.$refs.gender.hasError
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
          `registerUser?email=${this.email}&password=${this.passwordFirst}&firstName=${this.firstName}&lastName=${this.lastName}&gender=${this.gender}&birthday=${this.birthday}`
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
