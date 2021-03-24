<template>
  <div class="q-pa-none full-width" style="height:400px">
    <IEcharts class="q-mx-sm" :option="barChartOption" :resizable="true" />
  </div>
</template>

<script>
import IEcharts from "vue-echarts-v3/src/full.js";
export default {
  name: "StockChart",
  props: {
    historyData: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      barChartOption: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      }
    };
  },
  components: {
    IEcharts
  }
};
</script>
