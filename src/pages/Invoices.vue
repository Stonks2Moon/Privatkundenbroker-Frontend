<template>
  <q-page>
    <div class="q-pa-md" v-if="invoicesData">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="receipt" class="q-pr-md" />
          <div>{{ $t("invoices") }}</div>
        </div>
        <q-separator />
        <div
          class="col q-py-md q-px-xs q-gutter-md"
          v-if="invoicesData.length !== 0"
        >
          <InvoiceEntry
            v-for="invoice in invoicesData"
            :key="invoice.RechnungsID"
            :invoice="invoice"
          />
        </div>
        <div v-else class="row q-py-md text-caption" style="font-size:20px">
          {{ $t("noInvoices") }}.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import InvoiceEntry from "components/InvoiceEntry.vue";
export default {
  components: { InvoiceEntry },
  computed: {},
  watch: {},
  data() {
    return {
      invoicesData: []
    };
  },
  created() {
    this.getInvoices();
  },
  methods: {
    getInvoices() {
      this.$axios
        .get(
          `getInvoices?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.invoicesData = responseData.data;
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
