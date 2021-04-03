<template>
  <q-page>
    <div class="q-pa-md" v-if="walletData.transactions">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="clear_all" class="q-pr-md" />
          <div>{{ $t("transactions") }}</div>
          <q-space />
          {{ balance }} €
        </div>
        <div
          class="col q-py-md q-px-xs q-gutter-md"
          v-if="walletData.transactions"
        >
          <TransactionEntry
            v-for="transaction in walletData.transactions"
            :key="transaction.TransaktionsID"
            :transaction="transaction"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import TransactionEntry from "components/TransactionEntry.vue";
export default {
  components: { TransactionEntry },
  computed: {
    balance() {
      return Number(this.walletData.balance).toFixed(2);
    }
  },
  watch: {},
  data() {
    return {
      walletData: []
    };
  },
  created() {
    this.getBalanceAndLastTransactionsOfVerrechnungskonto();
  },
  methods: {
    getBalanceAndLastTransactionsOfVerrechnungskonto() {
      this.$axios
        .get(
          `getBalanceAndLastTransactionsOfVerrechnungskonto?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.walletData = responseData.data;
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
