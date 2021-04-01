<template>
  <q-page>
    <div class="q-pa-md">
      <div
        class="col q-ma-xs full-width no-wrap items-center"
        v-if="depotData.balance"
      >
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
              {{ formattedIBAN }}
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
        <div class="row">
          <q-space /><q-btn
            icon-right="payments"
            rounded-borders
            class="bg-dark"
            no-caps
            :label="$t('withdrawal')"
            @click="togglePopUpForTransfer"
          />
        </div>
        <q-dialog v-model="popUpForTransfer">
          <q-card class="bg-dark" style="width:300px;">
            <q-card-section>
              <div class="text-h6">{{ $t("transfer") }}</div>
            </q-card-section>
            <form @submit.prevent.stop="onSubmitTransfer" class="q-px-sm">
              <q-card-section>
                <q-input
                  mask="AA## #### #### #### #### ##"
                  ref="IBAN"
                  filled
                  v-model="toSendIBAN"
                  :label="$t('IBAN')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                />
                <q-input
                  ref="Value"
                  type="number"
                  filled
                  v-model="transactionValue"
                  suffix="€"
                  :label="$t('value')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                />
                <q-input
                  ref="Password"
                  type="password"
                  filled
                  v-model="password"
                  :label="$t('password')"
                  lazy-rules=""
                  :rules="[val => (val && val.length > 0) || $t('pleaseEnter')]"
                />
              </q-card-section>

              <q-separator class="q-mx-sm" />
              <q-card-actions align="right" class="bg-dark">
                <q-btn
                  type="submit"
                  color="primary"
                  no-caps
                  :label="$t('send')"
                />
              </q-card-actions>
            </form>
          </q-card>
        </q-dialog>
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
      ],
      popUpForTransfer: false,
      toSendIBAN: "",
      transactionValue: null,
      password: "",
      formHasError: true
    };
  },
  created() {
    this.getBalanceAndLastTransactionsOfVerrechnungskonto();
    this.getDepotValues();
  },
  computed: {
    formattedIBAN() {
      return this.formatToIBAN(
        this.$store.state.user.IBAN,
        "#### #### #### #### #### ##"
      );
    }
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
    },
    togglePopUpForTransfer() {
      this.popUpForTransfer = !this.popUpForTransfer;
    },
    doTransaction() {
      console.log(this.formHasError);
    },
    onSubmitTransfer() {
      this.$refs.IBAN.validate();
      this.$refs.Value.validate();
      this.$refs.Password.validate();

      if (
        this.$refs.IBAN.hasError ||
        this.$refs.Value.hasError ||
        this.$refs.Password.hasError
      ) {
        this.formHasError = true;
      } else {
        this.doTransaction();
      }
    },
    formatToIBAN(value, pattern) {
      var i = 0,
        v = value.toString();
      return pattern.replace(/#/g, _ => v[i++]);
    }
  }
};
</script>
