<template>
  <q-item
    class="row justify-center items-center text-center shadow-3 rounded-borders bg-dark"
    clickable
    :to="link"
  >
    <div class="row full-width items-center">
      <div class="col">
        <div class="text-h6">{{ stock.name }}</div>
        <div class="text-weight-light">{{ stock.id }}</div>
      </div>
      <q-space />
      <div class="column">
        {{ Number(stock.price).toFixed(2) }} €
        <div class="row items-center q-ma-sm">
          <q-item
            dense
            class="q-pa-xs text-bold items-center rounded-borders"
            :class="'bg-' + statusColor"
            style="min-width:70px;"
          >
            <q-icon
              :name="
                relativePrice > 0
                  ? 'arrow_drop_up'
                  : Number(relativePrice) === 0.0
                  ? 'horizontal_rule'
                  : 'arrow_drop_down'
              "
              size="150%"
            />
            <div>{{ trendPercentage }} %</div>
          </q-item>
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
export default {
  name: "StockSearchListEntry",
  data() {
    return {
      showPercentageTrendData: true
    };
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  computed: {
    link() {
      return "order/Stock/ID=" + this.stock.id;
    },
    trendPercentage() {
      return Number(
        (this.stock.price / this.stock.priceOfLastNight) * 100 - 100
      ).toFixed(2);
    },
    relativePrice() {
      return Number(this.stock.price - this.stock.priceOfLastNight).toFixed(2);
    },
    statusColor() {
      if (this.relativePrice < 0) {
        return "red-7";
      } else if (Number(this.relativePrice) === 0.0) {
        return "grey-7";
      } else {
        return "green-7";
      }
    }
  },
  methods: {}
};
</script>
