<template>
  <div class="col q-my-md q-px-md q-py-xs bg-dark shadow-3 rounded-borders">
    <div class="row no-wrap items-center text-caption">
      <div class="col">{{ stockData.WKN }}</div>
    </div>
    <div class="row items-center full-width no-wrap">
      <div class="text-uppercase" style="font-size:18px;">
        {{ stockData.name }}
      </div>
      <q-space />
      <div class="text-bold" style="font-size:22px;">{{ actualValue }} €</div>
    </div>
    <div class="row full-width">
      <div class="col text-left">
        <div class="text-caption">{{ $t("pieces") }}</div>
        <div>{{ stockData.amount }}</div>
      </div>
      <div class="col text-left">
        <div class="text-caption">{{ $t("buyPrice") }}</div>
        <div>{{ stockData.buyPrice }} €</div>
      </div>
      <div class="col text-left">
        <div class="text-caption">{{ $t("actualPrice") }}</div>
        <div>{{ stockData.actualPrice }} €</div>
      </div>
      <div class="col text-right">
        <div class="text-caption">{{ $t("winOrLost") }}</div>
        <div :class="'text-' + winOrLostValueColor">{{ winOrLostValue }} €</div>
      </div>
    </div>
  </div>
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
    actualValue() {
      return Number(this.stockData.amount * this.stockData.actualPrice).toFixed(
        2
      );
    },
    winOrLostValue() {
      return Number(
        this.actualValue - this.stockData.amount * this.stockData.buyPrice
      ).toFixed(2);
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
