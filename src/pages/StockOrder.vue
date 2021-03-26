<template>
  <q-page padding>
    <div class="row items-center">
      <div class="row col-md-2 col-xs-10 items-center">
        {{ $store.state.user.depotID }}
        <q-btn
          round
          padding="none"
          flat
          size="22px"
          icon="navigate_before"
          to="/order"
        />
        <div class="text-h5 text-weight-bold">
          {{ stockData.name }}
        </div>
      </div>
      <q-space />
      <div class="row col-md-10 col-xs-12">
        <q-space />
        <!--<div class="row text-caption items-center no-wrap">
          ISIN:
          <div class="text-body2 q-pl-xs">{{ stockID }}</div>
        </div>-->
      </div>
    </div>

    <div class="col column q-ma-xs items-center">
      <div class="row full-width items-center q-ma-sm">
        <q-icon name="stop_circle" :color="statusColor"></q-icon>
        <div class="q-px-xs text-bold" style="font-size: 25px;">
          {{ stockPrice }}
        </div>
        EUR
        <q-space />
        <q-item
          clickable
          dense
          class="q-pa-xs rounded-borders text-bold items-center"
          :class="'bg-' + statusColor"
          style="min-width:85px;"
          @click="toggleTrendData"
        >
          <q-icon
            :name="
              trendAbsolute < 0
                ? 'arrow_drop_down'
                : Number(trendAbsolute) === 0
                ? 'horizontal_rule'
                : 'arrow_drop_up'
            "
            size="150%"
          />
          <div v-if="showPercentageTrendData">{{ trendPercentage }} %</div>
          <div v-else>{{ trendAbsolute }} €</div>
        </q-item>
      </div>
      <StockChart :historyData="historyData" :name="stockData.name" />

      <q-card class="column shadow-10 full-width bg-dark q-ma-md">
        <q-card-section>
          <div class="row no-wrap items-center">
            <q-btn
              :outline="!isBuyButtonPressed"
              no-caps
              :label="$t('buy')"
              color="green"
              class="col-6 q-mr-xs"
              @click="toggleIsBuyButtonPressed('Buy')"
            />
            <q-btn
              :outline="isBuyButtonPressed"
              no-caps
              :label="$t('sell')"
              color="red"
              class="col-6"
              @click="toggleIsBuyButtonPressed('Sell')"
            />
          </div>
        </q-card-section>
        <q-card-section>
          <q-select
            square
            filled
            v-model="selectedOrderType"
            :options="orderTypeOptions"
            :label="$t('orderType')"
          />
        </q-card-section>
        <div v-if="selectedOrderType === 'Limit'">
          <q-card-section>
            <q-input
              filled
              v-model.number="limitOrderPriceDecimal"
              :label="$t('price')"
              suffix="€"
            >
              <template v-slot:append>
                <q-btn flat round icon="add" @click="growPriceForLimitOrder" />
              </template>
              <template v-slot:prepend>
                <q-btn
                  flat
                  round
                  icon="remove"
                  @click="reducePriceForLimitOrder"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              v-model.number="amountOfShares"
              :rules="[val => val >= 0 || $t('onlyPositiveNumber')]"
              lazy-rules
              hide-bottom-space
              :label="$t('amount')"
            >
              <template v-slot:append>
                <q-btn flat round icon="add" @click="growAmountOfShares" />
              </template>
              <template v-slot:prepend>
                <q-btn flat round icon="remove" @click="reduceAmountOfShares" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              disable
              filled
              v-model.number="calculatedPriceForLimitOrder"
              :label="$t('overallCalculatedPrice')"
              suffix="€"
            >
            </q-input>
          </q-card-section>
        </div>
        <div v-if="selectedOrderType === 'Market'">
          <q-card-section>
            <q-input
              filled
              v-model.number="amountOfShares"
              :rules="[val => val >= 0 || $t('onlyPositiveNumber')]"
              lazy-rules
              hide-bottom-space
              :label="$t('amount')"
            >
              <template v-slot:append>
                <q-btn flat round icon="add" @click="growAmountOfShares" />
              </template>
              <template v-slot:prepend>
                <q-btn flat round icon="remove" @click="reduceAmountOfShares" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              disable
              filled
              v-model.number="calculatedPriceForMarketOrder"
              :label="$t('overallCalculatedPrice')"
              suffix="€"
            >
            </q-input>
          </q-card-section>
        </div>
        <div v-if="selectedOrderType === 'Stop-Limit'">
          <q-card-section>
            <q-input
              filled
              v-model.number="stopForStopLimitOrderPrice"
              :label="$t('stop')"
              suffix="€"
            >
              <template v-slot:append>
                <q-btn
                  flat
                  round
                  icon="add"
                  @click="growStopForStopLimitOrder"
                />
              </template>
              <template v-slot:prepend>
                <q-btn
                  flat
                  round
                  icon="remove"
                  @click="reduceStopForStopLimitOrder"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              v-model.number="limitForStopLimitOrderPrice"
              :rules="[val => val >= 0 || $t('onlyPositiveNumber')]"
              lazy-rules
              hide-bottom-space
              :label="$t('limit')"
            >
              <template v-slot:append>
                <q-btn
                  flat
                  round
                  icon="add"
                  @click="growLimitForStopLimitOrder"
                />
              </template>
              <template v-slot:prepend>
                <q-btn
                  flat
                  round
                  icon="remove"
                  @click="reduceLimitForStopLimitOrder"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              v-model.number="amountOfShares"
              :rules="[val => val >= 0 || $t('onlyPositiveNumber')]"
              lazy-rules
              hide-bottom-space
              :label="$t('amount')"
            >
              <template v-slot:append>
                <q-btn flat round icon="add" @click="growAmountOfShares" />
              </template>
              <template v-slot:prepend>
                <q-btn flat round icon="remove" @click="reduceAmountOfShares" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-input
              disable
              filled
              v-model.number="calculatedPriceForStopLimitOrder"
              :label="$t('overallCalculatedPrice')"
              suffix="€"
            >
            </q-input>
          </q-card-section>
        </div>
        <q-space />
        <q-separator class="q-mx-sm" />
        <q-card-section v-if="selectedOrderType === 'Limit'">
          <q-btn
            :label="$t('placeOrder')"
            size="lg"
            no-caps
            class="full-width"
            color="primary"
          />
        </q-card-section>
        <q-card-section v-if="selectedOrderType === 'Market'">
          <q-btn
            :label="$t('placeOrder')"
            size="lg"
            no-caps
            class="full-width"
            color="primary"
            @click="createMarketOrder"
          />
        </q-card-section>
        <q-card-section v-if="selectedOrderType === 'Stop-Limit'">
          <q-btn
            :label="$t('placeOrder')"
            size="lg"
            no-caps
            class="full-width"
            color="primary"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import StockChart from "components/StockChart.vue";
export default {
  name: "StockOrder",
  components: { StockChart },
  created() {
    this.stockID = this.$route.params.stockID;
    this.loadShareData();
    this.loadShareHistoryData();
    //this.limitOrderPrice = this.stockData.price;
  },
  computed: {
    trendPercentage() {
      return Number(
        (this.stockData.price / this.stockData.priceOfLastNight) * 100 - 100
      ).toFixed(2);
    },
    trendAbsolute() {
      return Number(
        this.stockData.price - this.stockData.priceOfLastNight
      ).toFixed(2);
    },
    stockPrice() {
      return Number(this.stockData.price).toFixed(2);
    },
    limitOrderPriceDecimal() {
      return Number(this.limitOrderPrice).toFixed(2);
    },
    calculatedPriceForLimitOrder() {
      var calcPrice = Number(
        this.limitOrderPrice * this.amountOfShares
      ).toFixed(2);
      if (Number(calcPrice) !== 0.0) {
        return calcPrice;
      } else {
        return "";
      }
    },
    calculatedPriceForMarketOrder() {
      var calcPrice = Number(
        this.stockData.price * this.amountOfShares
      ).toFixed(2);
      if (Number(calcPrice) !== 0.0) {
        return calcPrice;
      } else {
        return "";
      }
    },
    calculatedPriceForStopLimitOrder() {
      var calcPrice = Number(
        this.limitForStopLimitOrderPrice * this.amountOfShares
      ).toFixed(2);
      if (Number(calcPrice) !== 0.0) {
        return calcPrice;
      } else {
        return "";
      }
    },
    statusColor() {
      if (this.trendAbsolute < 0) {
        return "red-7";
      } else if (Number(this.trendAbsolute) === 0.0) {
        return "grey-7";
      } else {
        return "green-7";
      }
    }
  },
  data() {
    return {
      selectedOrderType: "Limit",
      orderTypeOptions: ["Limit", "Market", "Stop-Limit"],
      isBuyButtonPressed: true,
      showPercentageTrendData: true,
      limitOrderPrice: 0,
      stopForStopLimitOrderPrice: 0,
      limitForStopLimitOrderPrice: 0,
      amountOfShares: 0,
      stockData: [],
      historyData: []
    };
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
            this.stockData = responseData.data;
            console.log(this.stockData);
            this.getLatestPrice();
          } else {
            console.log(responseData);
          }
        });
    },
    createMarketOrder() {
      this.$axios
        .post(
          `buyOrder?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&depotID=${this.$store.state.user.depotID}&shareID=${this.stockID}&type=${this.selectedOrderType}&amount=${this.amountOfShares}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            var response = responseData.data;
            console.log(response);
            this.amountOfShares = 0;
          } else {
            console.log(responseData);
          }
        });
    },
    loadShareHistoryData() {
      this.$axios
        .get(
          `getPriceDevelopmentOfShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.historyData = responseData.data;
            console.log(this.historyData);
          } else {
            console.log(responseData);
          }
        });
    },
    getLatestPrice() {
      this.$axios
        .get(
          `getPriceOfShare?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&shareID=${this.stockID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.stockData.price = responseData.data;
            this.limitOrderPrice = this.stockData.price;
            console.log(this.historyData);
          } else {
            console.log(responseData);
          }
        });
    },
    toggleTrendData() {
      this.showPercentageTrendData = !this.showPercentageTrendData;
    },
    toggleIsBuyButtonPressed(input) {
      if (input === "Buy") {
        this.isBuyButtonPressed = true;
      } else {
        this.isBuyButtonPressed = false;
      }
    },
    growPriceForLimitOrder() {
      this.limitOrderPrice = (parseFloat(this.limitOrderPrice) + 1).toFixed(2);
    },
    reducePriceForLimitOrder() {
      this.limitOrderPrice = (parseFloat(this.limitOrderPrice) - 1).toFixed(2);
    },
    growPriceForMarketOrder() {
      this.marketOrderPrice = (parseFloat(this.marketOrderPrice) + 1).toFixed(
        2
      );
    },
    reducePriceForMarketOrder() {
      this.marketOrderPrice = (parseFloat(this.marketOrderPrice) - 1).toFixed(
        2
      );
    },
    growStopForStopLimitOrder() {
      this.stopForStopLimitOrderPrice = (
        parseFloat(this.stopForStopLimitOrderPrice) + 1
      ).toFixed(2);
    },
    reduceStopForStopLimitOrder() {
      this.stopForStopLimitOrderPrice = (
        parseFloat(this.stopForStopLimitOrderPrice) - 1
      ).toFixed(2);
    },
    growLimitForStopLimitOrder() {
      this.limitForStopLimitOrderPrice = (
        parseFloat(this.limitForStopLimitOrderPrice) + 1
      ).toFixed(2);
    },
    reduceLimitForStopLimitOrder() {
      this.limitForStopLimitOrderPrice = (
        parseFloat(this.limitForStopLimitOrderPrice) - 1
      ).toFixed(2);
    },
    growAmountOfShares() {
      this.amountOfShares = parseInt(this.amountOfShares) + 1;
    },
    reduceAmountOfShares() {
      this.amountOfShares = parseInt(this.amountOfShares) - 1;
    }
  }
};
</script>
