<template>
  <q-item
    class="row justify-center items-center text-center shadow-3 rounded-borders bg-dark"
    clickable
    :to="link"
  >
    <div class="col">
      <div class="text-h6">{{ stock.name }}</div>
      <div class="text-weight-light">{{ stock.info }}</div>
    </div>
  </q-item>
</template>

<script>
export default {
  name: "StockSearchListEntry",
  data() {
    return {};
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  computed: {
    link() {
      return "order/Stock/ID=" + this.stock.ID;
    }
  },
  methods: {}
};
</script>
