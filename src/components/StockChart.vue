<template>
  <div
    class="row bg-red-3 justify-center items-center"
    style="min-width: 300px; max-width:400px; min-height:300px; max-height:400px;"
  >
    Chart
  </div>
</template>

<script>
export default {
  name: "StockChart",
  data() {
    return {};
  },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>
