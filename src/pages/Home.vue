<template>
  <q-page>
    <div class="q-pa-md">
      <div class="col q-ma-xs full-width no-wrap items-center">
        <div class="col q-py-md">
          <div
            class="row text-weight-bolder items-center"
            style="font-size:22px"
          >
            <q-icon name="insights" class="q-pr-md" />
            <div>
              <div>{{ $t("depot") }}</div>
              <div class="row text-caption" style="font-size:14px">
                {{ $t("depotID") }}:
                <div class="q-pl-xs">{{ $store.state.user.depotID }}</div>
              </div>
            </div>
            <q-space />
            <div v-if="depotBalance !== 'NaN'">{{ depotBalance }}</div>
          </div>
          <div class="col q-pt-sm">
            <PieChart
              :depotData="depotData.positions"
              v-if="depotData.positions.length !== 0"
            />
            <div v-else class="q-pt-sm">{{ $t("noShares") }}.</div>
            <DepotEntry
              v-for="stockData in depotData.positions"
              :key="stockData.ID"
              :stockData="stockData"
            />
          </div>
        </div>
        <div class="col q-py-md">
          <div
            class="row text-weight-bolder items-center no-wrap text-no-wrap"
            style="font-size:22px"
          >
            <q-icon name="account_balance_wallet" class="q-pr-md" />
            <div>
              <div>{{ $t("wallet") }}</div>
              <div class="row text-caption" style="font-size:14px">
                {{ formattedIBAN }}
              </div>
            </div>

            <q-space />
            <div v-if="walletBalance !== 'NaN'">{{ walletBalance }}</div>
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
                  :rules="[
                    val => (val && val.length > 0) || $t('pleaseEnter'),
                    val => val <= walletData.balance || $t('notEnoughMoney')
                  ]"
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
        <div class="col q-py-md">
          <div
            class="row text-weight-bolder items-center"
            style="font-size:24px"
          >
            <q-icon name="menu_open" class="q-pr-md" />
            <div>{{ $t("openOrders") }}</div>
          </div>
          <div v-if="orderData.length !== 0">
            <OpenOrderEntry
              v-for="order in orderData"
              :key="order.OrderID"
              :orderData="order"
              @deleteOrderSend="reloadOrderData($event)"
            />
          </div>
          <div v-else class="row q-pt-sm">
            {{ $t("noOpenOrders") }}
          </div>
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
    },
    formattedIBAN() {
      return this.formatToIBAN(
        this.$store.state.user.IBAN,
        "#### #### #### #### #### ##"
      );
    }
  },
  watch: {},
  data() {
    return {
      walletData: [],
      depotData: [],
      orderData: [],
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
    this.getOrders();
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
    getOrders() {
      this.$axios
        .get(
          `getOrders?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.orderData = [];
            responseData.data.forEach(element => {
              if (element.OrderstatusID < 3) {
                this.orderData.push(element);
              }
            });
          } else {
            console.log(response);
          }
        });
    },
    togglePopUpForTransfer() {
      this.popUpForTransfer = !this.popUpForTransfer;
    },
    checkUserCredentials() {
      this.$axios
        .get(
          `loginWithPassword?email=${this.$store.state.user.email}&password=${this.password}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.doTransaction();
          } else {
            this.$q.notify({
              color: "negative",
              message: this.$t("wrongPassword")
            });
          }
        });
    },
    doTransaction() {
      this.$axios
        .post(
          `initiateAuszahlung?email=${
            this.$store.state.user.email
          }&hashedPassword=${this.$store.state.user.passwordHash}&amount=${
            this.transactionValue
          }&IBAN=${this.toSendIBAN.replace(/\s/g, "")}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.popUpForTransfer = false;
            this.getBalanceAndLastTransactionsOfVerrechnungskonto();
          } else {
            console.log(responseData);
          }
        });
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
        this.checkUserCredentials();
      }
    },
    formatToIBAN(value, pattern) {
      var i = 0,
        v = value.toString();
      return pattern.replace(/#/g, _ => v[i++]);
    },
    reloadOrderData(event) {
      this.getOrders();
    }
  }
};
</script>
