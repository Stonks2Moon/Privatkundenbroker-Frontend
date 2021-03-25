<template>
  <div class="q-pa-none full-width shadow-10" style="height:400px">
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
    return {};
  },
  computed: {
    barChartOption() {
      return {
        darkMode: true,
        tooltip: {
          trigger: "axis",
          position: function(pt) {
            return [pt[0], "10%"];
          },
          formatter: function(params) {
            params = params[0];
            var chartdate =
              new Date(params.value[0]).toLocaleDateString("de-DE") +
              " " +
              params.value[0].getHours() +
              ":" +
              ("0" + params.value[0].getMinutes()).slice(-2);
            var val =
              '<li style="list-style:none">' +
              params.marker +
              params.seriesName +
              "&nbsp;&nbsp;" +
              params.value[1] +
              "</li>";
            return chartdate + val;
          }
        },
        xAxis: {
          type: "time",
          boundaryGap: false,
          axisLabel: {
            color: this.$q.dark.isActive ? "#fff" : "#000"
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          axisLabel: {
            color: this.$q.dark.isActive ? "#fff" : "#000"
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            name: this.historyData.name,
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {},
            data: this.historyData.chartData
          }
        ]
      };
    }
  },
  components: {
    IEcharts
  }
};
</script>
