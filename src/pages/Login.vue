<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
      >
        <div class="row">
          <q-card class="shadow-20" style="width:325px;height:500px;">
            <q-card-section class="bg-primary">
              <h4 class="text-h5 q-my-md">MoonStonks</h4>
              <div
                class="absolute-bottom-right q-pr-md"
                style="transform: translateY(50%);"
              >
                <q-btn
                  class="shadow-20"
                  fab
                  icon="add"
                  color="primary"
                  to="register"
                />
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-xl">
                <q-input
                  square
                  clearable
                  v-model="email"
                  type="email"
                  :label="$t('email')"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  v-model="password"
                  type="password"
                  :label="$t('password')"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn
                unelevated
                size="lg"
                color="primary"
                class="full-width"
                :label="$t('login')"
                @click="login"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <q-btn
                no-caps
                flat
                class=""
                :label="$t('forgotPassword') + '?'"
                to="passwordReset"
              />
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
  data() {
    return {
      email: "",
      username: "",
      password: ""
    };
  },
  created() {
    var user = this.$q.cookies.get("cookie_moonStonks_user");
    if (user) {
      this.loginWithHash(user.email, user.passwordHash);
    }
  },
  methods: {
    login() {
      if (!this.email && !this.password) {
        this.$q.notify({
          color: "negative",
          message: this.$t("enterLoginData")
        });
      } else {
        this.$axios
          .get(
            `loginWithPassword?email=${this.email}&password=${this.password}`
          )
          .then(response => {
            var responseData = response.data;
            if (responseData.success) {
              var user = {
                email: this.email,
                passwordHash: responseData.additionalInfo.hashedPassword,
                firstName: responseData.additionalInfo.firstName,
                lastName: responseData.additionalInfo.lastName,
                gender: responseData.additionalInfo.gender,
                birthday: responseData.additionalInfo.birthday,
                biography: responseData.additionalInfo.biography,
                pictureURL: responseData.additionalInfo.pictureURL
              };
              this.$store.commit("save", user);
              this.$q.cookies.set("cookie_moonStonks_user", user, {
                expires: 10
              });
              this.$router.push({
                path: "/buddySearch"
              });
            } else {
              this.$q.notify({
                color: "negative",
                message: responseData.message
              });
            }
          });
      }
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
              email: email,
              passwordHash: hashedPassword,
              firstName: responseData.additionalInfo.firstName,
              lastName: responseData.additionalInfo.lastName,
              gender: responseData.additionalInfo.gender,
              birthday: responseData.additionalInfo.birthday,
              biography: responseData.additionalInfo.biography,
              pictureURL: responseData.additionalInfo.pictureURL
            };
            this.$store.commit("save", user);
            this.$q.cookies.set("cookie_moonStonks_user", user, {
              expires: 10
            });
            this.$router.push({
              path: "/buddySearch"
            });
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>

<style></style>
