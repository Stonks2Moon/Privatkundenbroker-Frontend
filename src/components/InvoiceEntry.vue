<template>
  <q-item
    class="row justify-center items-center text-center shadow-3 rounded-borders bg-dark"
    clickable
    :to="link"
  >
    <div class="row full-width items-center">
      <div class="text-weight-light">{{ formattedDate }}</div>
      <div class="col">
        <div class="text-h6">
          {{ titel }}
        </div>
      </div>
      <q-space />
      <div class="column">{{ Number(invoice.gesamtWert).toFixed(2) }} €</div>
      <q-icon round padding="none" flat size="45px" name="navigate_next" />
    </div>
  </q-item>
</template>

<script>
export default {
  name: "InvoiceEntry",
  props: {
    invoice: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    link() {
      return "invoices/ID=" + this.invoice.RechnungsID;
    },
    formattedDate() {
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.invoice.Datum).toLocaleDateString("de-de");
        case "en-gb":
          return new Date(this.invoice.Datum).toLocaleDateString("en-gb");
        default:
          return new Date(this.invoice.Datum).toLocaleDateString("de-de");
      }
    },
    titel() {
      if (this.invoice.Titel.includes("verkauf")) {
        return this.$t("paperBuyInvoice");
      } else {
        return this.$t("paperSellInvoice");
      }
    }
  },
  methods: {
    loadShareData() {
      this.$axios
        .get(
          `getShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`
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
