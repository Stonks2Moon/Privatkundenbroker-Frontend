<template>
  <div
    class="q-pa-none full-width shadow-10 bg-dark rounded-borders"
    style="height:400px"
  >
    <IEcharts class="q-mx-sm" :option="chartOption" :resizable="true" />
  </div>
</template>

<script>
import IEcharts from "vue-echarts-v3/src/full.js";
export default {
  name: "StockChart",
  props: {
    historyData: {
      type: Array,
      required: true
    },
    name: { type: String, required: false }
  },
  data() {
    return {};
  },
  computed: {
    chartOption() {
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
            name: this.name,
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {},
            data: this.formattedData
          }
        ]
      };
    },
    formattedData() {
      var dataSet = [];
      this.historyData.forEach(element => {
        let dataEntry = [new Date(element.timestamp), element.price];
        dataSet.push(dataEntry);
      });
      return dataSet;
    }
  },
  components: {
    IEcharts
  }
};
</script>
