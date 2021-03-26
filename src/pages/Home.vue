<template>
  <q-page>
    <div class="q-pa-md">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="insights" class="q-pr-md" />
          <div>
            <div>{{ $t("depot") }}</div>
            <div class="row text-caption" style="font-size:16px">
              {{ $t("depotID") }}:
              <div class="q-pl-xs">{{ $store.state.user.depotID }}</div>
            </div>
          </div>
          <q-space />
          {{ depotBalance }}
        </div>
        <div class="col q-pt-sm" v-if="depotData.positions">
          <PieChart :depotData="depotData.positions" />
          <DepotEntry
            v-for="stockData in depotData.positions"
            :key="stockData.ID"
            :stockData="stockData"
          />
        </div>
        <div
          class="row text-weight-bolder items-center no-wrap text-no-wrap"
          style="font-size:24px"
        >
          <q-icon name="account_balance_wallet" class="q-pr-md" />
          <div>
            <div>{{ $t("wallet") }}</div>
            <div class="row text-caption" style="font-size:16px">
              DE99 7474 7373 3737 73
            </div>
          </div>

          <q-space />
          <div v-if="walletData.balance">{{ walletBalance }}</div>
        </div>
        <div class="q-pt-sm">{{ $t("newestTransactions") }} ...</div>
        <div v-if="walletData.transactions">
          <TransactionEntry
            v-for="transaction in walletData.transactions.slice(0, 4)"
            :key="transaction.TransaktionsID"
            :transaction="transaction"
          />
        </div>
        <div class="row text-weight-bolder items-center" style="font-size:24px">
          <q-icon name="menu_open" class="q-pr-md" />
          <div>{{ $t("openOrders") }}</div>
        </div>
        <div v-if="orderData">
          <OpenOrderEntry
            v-for="order in orderData"
            :key="order.ID"
            :orderData="order"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import TransactionEntry from "components/TransactionEntry.vue";
import DepotEntry from "components/DepotEntry.vue";
import OpenOrderEntry from "components/OpenOrderEntry.vue";
import PieChart from "components/PieChart.vue";
export default {
  components: { TransactionEntry, DepotEntry, OpenOrderEntry, PieChart },
  computed: {
    walletBalance() {
      return Number(this.walletData.balance).toFixed(2);
    },
    depotBalance() {
      return Number(this.depotData.balance).toFixed(2);
    }
  },
  watch: {},
  data() {
    return {
      walletData: [],
      depotData: [],
      orderData: [
        {
          ID: 1,
          name: "Apple",
          WKN: "865985",
          type: "Sell",
          amount: 4,
          orderType: "Limit",
          price: 95.0,
          date: "2021-03-19T23:00:00.000Z"
        },
        {
          ID: 2,
          name: "Plug Power",
          WKN: "A1JA81",
          type: "Buy",
          amount: 4,
          orderType: "Limit",
          price: 26.0,
          date: "2021-03-20T23:00:00.000Z"
        }
      ]
    };
  },
  created() {
    this.getBalanceAndLastTransactionsOfVerrechnungskonto();
    this.getDepotValues();
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
    },
    getDepotValues() {
      this.$axios
        .get(
          `getDepotValues?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.depotData = responseData.data;
          } else {
            console.log(responseData);
          }
        });
    }
  }
};
</script>
