<template>
  <q-item
    class="bg-dark shadow-3 rounded-borders q-my-md q-px-md q-py-xs"
    clickable
    :to="link"
  >
    <div class="col ">
      <div class="row no-wrap items-center text-caption">
        <div class="col">{{ stockData.ISIN }}</div>
      </div>
      <div class="row items-center full-width no-wrap">
        <div class="text-uppercase" style="font-size:18px;">
          {{ stockData.name }}
        </div>
        <q-space />
        <div class="text-bold" style="font-size:22px;">
          {{ actualValueTotal }} €
        </div>
      </div>
      <div class="row full-width">
        <div class="col text-left">
          <div class="text-caption">{{ $t("pieces") }}</div>
          <div>{{ stockData.count }}</div>
        </div>
        <div class="col text-left">
          <div class="text-caption">{{ $t("buyPrice") }}</div>
          <div>{{ avgBuyPrice }} €</div>
        </div>
        <div class="col text-left">
          <div class="text-caption">{{ $t("actualPrice") }}</div>
          <div>{{ actualPrice }} €</div>
        </div>
        <div class="col text-right">
          <div class="text-caption">{{ $t("winOrLost") }}</div>
          <div :class="'text-' + winOrLostValueColor">
            {{ winOrLostValue }} €
          </div>
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
export default {
  name: "DepotEntry",
  props: {
    stockData: {
      type: Object,
      required: true
    }
  },
  computed: {
    link() {
      return "order/Stock/ID=" + this.stockData.ISIN;
    },
    actualPrice() {
      return Number(this.stockData.currentValuePerPosition).toFixed(2);
    },
    actualValueTotal() {
      return Number(this.stockData.currentTotalValue).toFixed(2);
    },
    avgBuyPrice() {
      return Number(this.stockData.avgKaufpreis).toFixed(2);
    },
    winOrLostValue() {
      return Number(this.stockData.currentGain).toFixed(2);
    },
    winOrLostValueColor() {
      return this.winOrLostValue === 0
        ? "grey"
        : this.winOrLostValue > 0
        ? "green"
        : "red";
    }
  },
  data() {
    return {};
  }
};
</script>
