<template>
  <q-page padding>
    <div class="row items-center">
      <q-btn round flat size="16px" icon="navigate_before" to="/order" />
      <div class="text-h5 text-weight-bold">{{ stockData.name }}</div>
    </div>
    <div class="col q-ma-xs full-width no-wrap items-center">
      <StockChart :chartData="chartData" />
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
  },
  data() {
    return {
      stockData: {
        ID: 1,
        name: "Apple"
      },
      chartData: [
        {
          date: "2016-01-01",
          value: 5
        }
      ]
    };
  },
  methods: {
    loadShareData() {}
  }
};
</script>
