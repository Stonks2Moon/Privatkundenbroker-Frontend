<template>
  <q-page>
    <div class="q-pa-md">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="insights" class="q-pr-md" />
          <div>{{ $t("depot") }}</div>
          <q-space />
          10.000 €
        </div>
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="account_balance_wallet" class="q-pr-md" />
          <div>{{ $t("wallet") }}</div>
          <q-space />
          {{ walletData.balance }} €
        </div>
        <div class="q-pt-sm">{{ $t("newestTransactions") }} ...</div>
        <TransactionEntry
          v-for="transaction in walletData.transactions"
          :key="transaction.TransaktionsID"
          :transaction="transaction"
        />
        {{ walletData }}
      </div>
    </div>
  </q-page>
</template>

<script>
import TransactionEntry from "components/TransactionEntry.vue";
export default {
  components: { TransactionEntry },
  computed: {},
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
            console.log(responseData);
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
