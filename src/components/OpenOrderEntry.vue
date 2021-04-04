<template>
  <div
    class="row no-wrap q-my-md q-pa-sm bg-dark shadow-3 rounded-borders items-center"
    v-if="stockName"
  >
    <q-icon name="schedule" size="225%" />
    <div class="row col q-px-sm items-center full-width">
      <div class="col-5 q-pr-lg">
        <div class="text-uppercase text-no-wrap">
          {{ orderData.name }}
        </div>
        <div class="text-caption text-no-wrap" style="font-size:18px">
          {{ stockName }}
        </div>
      </div>
      <div class="column col-4">
        <div class="col">
          <div class="row full-width no-wrap text-no-wrap">
            <div class="q-pr-sm text-uppercase text-bold">
              {{ orderMethod }}
            </div>
            <div class="text-caption">
              {{ orderData.Anzahl }}
              {{ $t("pieces") }}
            </div>
          </div>
          <div class="row no-wrap text-no-wrap">
            <div class="q-pr-sm text-caption">
              {{ orderData.OrderAuftragTypBeschreibung }}
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row no-wrap text-no-wrap" v-if="orderData.Stop">
            <div class="q-pr-sm text-caption">{{ $t("stop") }}:</div>
            <div class="text-bold text-uppercase">
              {{ orderData.Stop.toFixed(2) }} €
            </div>
          </div>
          <div class="row no-wrap text-no-wrap" v-if="orderData.Limit">
            <div class="q-pr-sm text-caption">{{ $t("limit") }}:</div>
            <div class="text-bold text-uppercase">
              {{ orderData.Limit.toFixed(2) }} €
            </div>
          </div>
        </div>
      </div>
      <q-space />
      <div class="col-2 text-right">
        {{ formattedDate }}
      </div>
      <q-space />
      <div class="col row q-pl-xs">
        <q-space />
        <q-btn round flat icon="cancel" @click="toggleDeleteOrder" />
      </div>
    </div>
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
      if (this.orderData.OrdertypBeschreibung === "Buy") {
        return "buy";
      } else {
        return "sell";
      }
    },
    formattedDate() {
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.orderData.Datum).toLocaleDateString("de-de");
        case "en-gb":
          return new Date(this.orderData.Datum).toLocaleDateString("en-gb");
        default:
          return new Date(this.orderData.Datum).toLocaleDateString("de-de");
      }
    }
  },
  data() {
    return {
      popupForDelete: false,
      stockName: ""
    };
  },
  created() {
    this.loadShareData();
  },
  methods: {
    toggleDeleteOrder() {
      this.popupForDelete = !this.popupForDelete;
    },
    deleteOrder() {
      this.$axios
        .delete(
          `deleteOrder?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&orderID=${this.orderData.OrderID}&depotID=${this.$store.state.user.depotID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.$emit("deleteOrderSend");
          } else {
            console.log(response);
          }
        });
    },
    loadShareData() {
      this.$axios
        .get(
          `getShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.orderData.ShareRefID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.stockName = responseData.data.name;
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
