<template>
  <q-page padding>
    <div class="col q-ma-xs full-width no-wrap items-center">
      <q-input
        filled
        v-model="searchStock"
        :placeholder="$t('searchStock') + ' ...'"
        @input="getReleventStocks"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>

        <template v-slot:append>
          <q-icon
            v-if="searchStock !== ''"
            name="close"
            @click="searchStock = ''"
            class="cursor-pointer"
          />
        </template>
      </q-input>

      <div class="col q-py-md q-px-xs q-gutter-md" v-if="relevantStocks">
        <StockSearchListEntry
          v-for="stock in relevantStocks"
          :key="stock.ID"
          :stock="stock"
        />
      </div>

      <div class="text-h5 text-weight-bolder">{{ $t("popularStocks") }}</div>

      <div class="col q-py-md q-px-xs q-gutter-md" v-if="stockList">
        <StockSearchListEntry
          v-for="stock in stockList"
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
      relevantStocks: [],
      stockList: []
    };
  },
  created() {
    this.getAllStocks();
  },
  methods: {
    getAllStocks() {
      this.$axios
        .get(
          `getAllShares?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.stockList = responseData.data;
          } else {
            console.log(responseData);
          }
        });
    },
    getReleventStocks() {
      this.relevantStocks = [];
      this.stockList.forEach(element => {
        if (
          element.name.toLowerCase().includes(this.searchStock.toLowerCase()) &&
          this.searchStock !== ""
        ) {
          this.relevantStocks.push(element);
        }
      });
    }
  }
};
</script>
