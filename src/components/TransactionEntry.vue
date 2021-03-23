<template>
  <div
    :class="transaction.Betrag <= 0 ? 'bg-red' : 'bg-green'"
    class="col q-my-md q-px-md q-py-xs shadow-3 rounded-borders"
  >
    <div class="row no-wrap items-center" style="font-size:20px">
      <div class="col">{{ description }}</div>

      <q-space />
      <div>{{ costs }} €</div>
    </div>
    <div class="row">
      <div class="text-caption text-bold">
        {{ formattedDate }}
      </div>
      <q-space />
      <div class="text-caption" v-if="!isShareBuyOrSell">
        {{ destination }} {{ transaction.Zielkonto }}
      </div>
      <div class="text-caption" v-if="isShareBuyOrSell">
        {{ $t("amount") }}: {{ shareAmount }}
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
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.transaction.Datum).toLocaleDateString("de-de");
        case "en-gb":
          return new Date(this.transaction.Datum).toLocaleDateString("en-gb");
        default:
          return new Date(this.transaction.Datum).toLocaleDateString("de-de");
      }
    },
    costs() {
      return Number(this.transaction.Betrag).toFixed(2);
    },
    description() {
      var description = this.transaction.Beschreibung;
      switch (description) {
        case "Einzahlung":
          return this.$t("deposit");
        case "Auszahlung":
          return this.$t("withdrawal");
      }
      let descriptionSplit = description.split(":");
      if (description.includes("Aktienkauf")) {
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
    },
    destination() {
      if (this.transaction.Beschreibung.includes("Einzahlung")) {
        return this.$t("fromDestination") + ": ";
      } else if (this.transaction.Beschreibung.includes("Auszahlung")) {
        return this.$t("toDestination") + ": ";
      } else {
        return "";
      }
    },
    shareAmount() {
      if (this.transaction.Beschreibung.includes("Aktien")) {
        let descriptionSplit = this.transaction.Beschreibung.split(":");
        return descriptionSplit[1];
      } else {
        return "";
      }
    }
  }
};
</script>
