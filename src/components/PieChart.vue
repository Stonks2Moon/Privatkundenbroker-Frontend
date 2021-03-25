<template>
  <div
    class="full-width bg-dark shadow-3 rounded-borders"
    style="height:350px;"
  >
    <IEcharts :option="barChartOption" :resizable="true" />
  </div>
</template>

<script>
import IEcharts from "vue-echarts-v3/src/full.js";
export default {
  name: "StockChart",
  props: {
    depotData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    barChartOption() {
      return {
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: this.$q.dark.isActive ? "#fff" : "#000",
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bolder"
          }
        },
        series: [
          {
            name: this.$t("value"),
            type: "pie",
            top: 30,
            height: "350",
            data: this.formattedData,
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
            label: {
              show: false,
              position: "left"
            }
          }
        ],
        textStyle: {
          textBorderColor: "#5470c6",
          fontFamily: "Arial",
          fontSize: 15,
          fontWeight: "bolder"
        }
      };
    },
    formattedData() {
      var dataSet = [];
      this.depotData.forEach(element => {
        let dataEntry = {
          value: element.amount * element.actualPrice,
          name: element.name
        };
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
