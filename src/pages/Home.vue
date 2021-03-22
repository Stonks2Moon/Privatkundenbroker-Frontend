<template>
  <q-page>
    <div class="q-pa-md">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="row text-weight-bolder items-center" style="font-size:22px">
          <q-icon name="insights" class="q-pr-md" />
          <div>{{ $t("depot") }}</div>
          <q-space />
          10000 €
        </div>
        <div class="row text-weight-bolder items-center" style="font-size:22px">
          <q-icon name="account_balance_wallet" class="q-pr-md" />
          <div>{{ $t("wallet") }}</div>
          <q-space />
          <div v-if="walletData.balance">{{ balance }} €</div>
        </div>
        <div class="q-pt-sm">{{ $t("newestTransactions") }} ...</div>
        <div v-if="walletData.transactions">
          <TransactionEntry
            v-for="transaction in walletData.transactions.slice(0, 4)"
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
