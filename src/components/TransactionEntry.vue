<template>
  <div :class="transaction.Betrag <= 0 ? 'bg-red' : 'bg-green'">
    <div class="col q-my-md q-px-md q-py-xs">
      <div class="row" style="font-size:20px">
        <div>{{ description }}</div>

        <q-space />
        <div>{{ transaction.Betrag }} €</div>
      </div>
      <div class="row">
        <div class="text-caption text-bold">
          {{ formattedDate }}
        </div>
        <q-space />
        <div class="text-caption" v-if="!isShareBuyOrSell">
          {{ transaction.Zielkonto }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionEntry",
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    formattedDate() {
      return new Date(this.transaction.Datum).toLocaleDateString(
        this.$store.state.settings.language
      );
    },
    description() {
      var description = this.transaction.Beschreibung;
      switch (description) {
        case "Einzahlung":
          return this.$t("deposit");
        case "Auszahlung":
          return this.$t("withdrawal");
      }
      if (description.includes("Aktienkauf")) {
        let descriptionSplit = description.split(":");
        return this.$t("shareBuy") + ": " + descriptionSplit[1];
      } else if (description.includes("Aktienverkauf")) {
        return this.$t("shareSell") + ": " + descriptionSplit[1];
      } else {
        return "";
      }
    },
    isShareBuyOrSell() {
      if (this.transaction.Beschreibung.includes("Aktien")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
