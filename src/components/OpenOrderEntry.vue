<template>
  <div
    class="row no-wrap q-my-md q-pa-sm bg-dark shadow-3 rounded-borders items-center"
  >
    <q-icon name="schedule" size="225%" />
    <div class="row q-pl-xs items-center">
      <div class="col q-pr-lg" style="width:250px;">
        <div class="text-uppercase text-no-wrap">
          {{ orderData.name }}
        </div>
        <div class="text-caption text-no-wrap">WKN {{ orderData.WKN }}</div>
      </div>

      <div class="col q-pr-lg" style="width:150px;">
        <div class="row no-wrap text-no-wrap">
          <div class="q-pr-sm text-uppercase text-bold">{{ orderMethod }}</div>
          <div class="text-caption">
            {{ orderData.amount }}
            {{ $t("pieces") }}
          </div>
        </div>
        <div class="row no-wrap text-no-wrap">
          <div class="q-pr-sm text-caption">{{ orderData.orderType }}:</div>
          <div class="text-bold text-uppercase">{{ orderData.price }} €</div>
        </div>
      </div>
      <div class="col text-center">
        {{ formattedDate }}
      </div>
    </div>
    <q-space />
    <q-btn round flat icon="cancel" @click="toggleDeleteOrder" />

    <div>
      <q-dialog v-model="popupForDelete">
        <q-card class="bg-dark" style="width:300px;">
          <q-card-section>
            <div class="text-h6">{{ $t("removalOfOrder") }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ $t("sureForDeleteOrder") }}
          </q-card-section>
          <q-separator class="q-mx-sm" />
          <q-card-actions align="right" class="bg-dark">
            <q-btn
              color="red"
              no-caps
              :label="$t('deleteOrder')"
              v-close-popup
              @click="deleteOrder"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenOrderEntry",
  props: {
    orderData: {
      type: Object,
      required: true
    }
  },
  computed: {
    orderMethod() {
      if (this.orderData.type === "Buy") {
        return "buy";
      } else {
        return "sell";
      }
    },
    formattedDate() {
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.orderData.date).toLocaleDateString("de-de");
        case "en-gb":
          return new Date(this.orderData.date).toLocaleDateString("en-gb");
        default:
          return new Date(this.orderData.date).toLocaleDateString("de-de");
      }
    }
  },
  data() {
    return {
      popupForDelete: false
    };
  },
  methods: {
    toggleDeleteOrder() {
      this.popupForDelete = !this.popupForDelete;
    },
    deleteOrder() {}
  }
};
</script>
