<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card square class="shadow-20" style="width:300px;height:500px;">
              <q-card-section class="bg-primary">
                <h4 class="text-h5 text-white q-my-md">
                  {{ $t("resetPassword") }}
                </h4>
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
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-lg">
                <q-btn
                  unelevated
                  size="lg"
                  color="primary"
                  class="full-width text-white"
                  :label="$t('sendEmail')"
                  to="login"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-sm">
                <q-btn no-caps flat :label="$t('backToLogin')" to="login" />
              </q-card-section>
            </q-card>
          </div>
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
      email: ""
    };
  }
};
</script>

<style></style>
