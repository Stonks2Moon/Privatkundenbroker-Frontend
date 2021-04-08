<template>
  <div
    :class="
      transaction.Betrag > 0
        ? 'bg-green'
        : transaction.Betrag === 0
        ? 'bg-dark'
        : 'bg-red'
    "
    class="col q-my-md q-pa-sm shadow-3 rounded-borders"
  >
    <div class="row no-wrap items-center" style="font-size:20px">
      <div class="col">{{ description }}</div>

      <q-space />
      <div v-if="!isCancelled">{{ costs }} €</div>
    </div>
    <div class="row">
      <div class="text-caption text-bold">
        {{ formattedDate }}
      </div>
      <q-space />
      <div class="text-caption" v-if="!isShareBuyOrSell && !isCancelled">
        {{ destination }} {{ formattedIBAN }}
      </div>
      <div class="text-caption" v-if="isShareBuyOrSell || isCancelled">
        {{ $t("amount") }}: {{ this.transaction.Anzahl }}
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
  created() {},
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
      if (
        description.includes("Aktienkauf") &&
        !description.includes("ABBRUCH")
      ) {
        return (
          this.$t("shareBuy") + ": " + this.transaction.WertpapierBezeichnung
        );
      } else if (
        description.includes("Aktienverkauf") &&
        !description.includes("ABBRUCH")
      ) {
        return (
          this.$t("shareSell") + ": " + this.transaction.WertpapierBezeichnung
        );
      } else if (description.includes("ABBRUCH")) {
        return (
          this.$t("abbruch") +
          ": " +
          (description.includes("Aktienkauf")
            ? this.$t("shareBuy")
            : this.$t("shareSell")) +
          " " +
          this.transaction.WertpapierBezeichnung
        );
      } else {
        return "";
      }
    },
    isShareBuyOrSell() {
      if (
        this.transaction.Beschreibung.includes("Aktien") &&
        !this.transaction.Beschreibung.includes("ABBRUCH")
      ) {
        return true;
      } else {
        return false;
      }
    },
    isCancelled() {
      if (this.transaction.Beschreibung.includes("ABBRUCH")) {
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
        return descriptionSplit[2];
      } else {
        return "";
      }
    },
    stockID() {
      if (this.transaction.Beschreibung.includes("Aktien")) {
        let descriptionSplit = this.transaction.Beschreibung.split(": ");
        let str = descriptionSplit[1].replace(" Anzahl", "");
        //return str;
        return this.transaction.ShareRefID;
      } else {
        return "";
      }
    },
    descriptionNew() {
      return this.$t(this.transaction.Beschreibung);
    },
    formattedIBAN() {
      return this.formatToIBAN(
        this.transaction.Zielkonto,
        "#### #### #### #### #### ##"
      );
    }
  },
  methods: {
    formatToIBAN(value, pattern) {
      var i = 0,
        v = value.toString();
      return pattern.replace(/#/g, _ => v[i++]);
    }
  }
};
</script>
