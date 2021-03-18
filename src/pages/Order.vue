<template>
  <q-page padding>
    <div class="col q-ma-xs full-width no-wrap items-center">
      <q-input
        filled
        v-model="searchStock"
        :placeholder="$t('searchStock') + ' ...'"
        @input="getRelatedStocks"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>

        <template v-slot:append>
          <q-icon
            v-if="searchStock !== ''"
            name="close"
            @click="text = ''"
            class="cursor-pointer"
          />
        </template>
      </q-input>

      <div class="col q-py-md q-px-xs q-gutter-md" v-if="stockList">
        <StockSearchListEntry
          v-for="stock in stockList"
          :key="stock.ID"
          :stock="stock"
        />
      </div>

      <div class="text-h5 text-weight-bolder">{{ $t("popularStocks") }}</div>

      <div class="col q-py-md q-px-xs q-gutter-md">
        <StockSearchListEntry
          v-for="stock in popularStockList"
          :key="stock.ID"
          :stock="stock"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import StockSearchListEntry from "components/StockSearchListEntry.vue";
export default {
  name: "Order",
  components: { StockSearchListEntry },
  data() {
    return {
      searchStock: "",
      stockList: [
        { ID: 1, name: "Apple", info: "USA, Technologie" },
        { ID: 2, name: "Tesla", info: "USA, Electric Vehicle" }
      ],
      popularStockList: [
        { ID: 1, name: "Xiaomi", info: "China, Technologie" },
        { ID: 2, name: "Plug Power", info: "USA, Hydrogen" },
        { ID: 3, name: "Tesla", info: "USA, Electric Vehicle" },
        { ID: 4, name: "TUI", info: "GER, Tourism" }
      ]
    };
  },
  created() {
    this.getPopularStocks();
  },
  methods: {
    getRelatedStocks() {},
    getPopularStocks() {}
  }
};
</script>
