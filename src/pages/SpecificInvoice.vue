<template>
  <q-page padding v-if="invoiceData.Titel">
    <div class="row items-center">
      <div class="row col-md-2 col-xs-10 items-center no-wrap">
        <q-btn
          round
          padding="none"
          flat
          size="22px"
          icon="navigate_before"
          to="/invoices"
        />
        <div class="text-h5 text-weight-bold text-no-wrap">
          {{ titel }}
        </div>
      </div>
    </div>
    <q-separator />
    <div class="col q-pa-md">
      <div class="q-pb-md text-right">{{ formattedDate }}</div>
      <div style="height:50px" />
      <div class="row">
        <div class="col">
          <div>
            {{ $store.state.user.firstName }} {{ $store.state.user.lastName }}
          </div>
          <div>
            {{ $store.state.user.street }} {{ $store.state.user.houseNumber }}
          </div>
          <div>
            {{ $store.state.user.postalCode }} {{ $store.state.user.city }}
          </div>
        </div>
        <div class="col text-right">
          <div class="text-bold">
            {{ $t("depotID") }}: {{ $store.state.user.depotID }}
          </div>
          <div>{{ $t("customerID") }}: {{ invoiceData.NutzerID }}</div>
          <div>{{ $t("invoiceID") }}: {{ invoiceData.RechnungsID }}</div>
        </div>
      </div>
      <div style="height:100px" />
      <div class="col">
        <div class="text-bold" style="font-size:22px">
          {{ titel }}
        </div>
        <div class="q-pb-md text-caption" style="font-size:16px">
          {{ $t("order") }} {{ $t("from") }} {{ formattedTimeDate }}
        </div>

        <div class="col">
          <div class="row">
            <div class="col-1">
              <div>{{ $t("position") }}</div>
            </div>
            <div class="col-md-1 col-xs-2 text-center">
              <div>{{ $t("amount") }}</div>
            </div>
            <div class="col-md-8 col-xs-7">
              <div>{{ $t("description") }}</div>
            </div>
            <div class="col-2 text-right">
              <div>{{ $t("value") }}</div>
            </div>
          </div>
        </div>

        <q-separator />

        <div
          v-for="position in invoiceData.positionen"
          :key="position.RechnungspositionsID"
          class="row"
        >
          <div class="col-1">
            <div>{{ position.Position }}</div>
          </div>
          <div class="col-md-1 col-xs-2 text-center">
            <div>{{ position.Stueckzahl }}</div>
          </div>
          <div class="col-md-8 col-xs-7">
            <div>
              {{
                position.Bezeichnung.includes("gebühr")
                  ? $t("transactionFee")
                  : getDescription(position.Bezeichnung)
              }}
            </div>
          </div>
          <div class="col-2 text-right">
            <div>{{ position.Wert.toFixed(2) }} EUR</div>
          </div>
        </div>

        <q-separator />
        <div class="row full-width">
          <q-space />{{ invoiceData.gesamtWert.toFixed(2) }} EUR
        </div>
      </div>
      <div style="height:50px" />
      <div class="row">
        {{ $t("auftraggeber") }}: {{ $store.state.user.firstName }}
        {{ $store.state.user.lastName }}
      </div>
      <div style="height:50px" />
      <q-separator />
      <div class="q-pt-md">
        {{ $t("invoiceMessage") }}: IBAN {{ formattedIBAN }}.
      </div>
      <div>{{ $t("invoiceMessageDepot") }}.</div>
      <div style="height:25px" />
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    titel() {
      if (this.invoiceData.Titel.includes("verkauf")) {
        return this.$t("paperSellInvoice");
      } else {
        return this.$t("paperBuyInvoice");
      }
    },
    formattedDate() {
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.invoiceData.Datum).toLocaleDateString("de-de");
        case "en-gb":
          return new Date(this.invoiceData.Datum).toLocaleDateString("en-gb");
        default:
          return new Date(this.invoiceData.Datum).toLocaleDateString("de-de");
      }
    },
    formattedTimeDate() {
      switch (this.$store.state.settings.language) {
        case "de-de":
          return new Date(this.invoiceData.Datum).toLocaleString("de-de");
        case "en-gb":
          return new Date(this.invoiceData.Datum).toLocaleString("en-gb");
        default:
          return new Date(this.invoiceData.Datum).toLocaleString("de-de");
      }
    },
    formattedIBAN() {
      return this.formatToIBAN(
        this.$store.state.user.IBAN,
        "#### #### #### #### #### ##"
      );
    }
  },
  watch: {},
  data() {
    return {
      invoiceData: {}
    };
  },
  created() {
    this.invoiceID = this.$route.params.invoiceID;
    this.getInvoice();
  },
  methods: {
    getInvoice() {
      this.$axios
        .get(
          `getInvoices?email=${this.$store.state.user.email}&hashedPassword=${this.$store.state.user.passwordHash}&invoiceID=${this.invoiceID}`
        )
        .then(response => {
          var responseData = response.data;
          if (responseData.success) {
            this.invoiceData = responseData.data[0];
          } else {
            console.log(responseData);
          }
        });
    },
    getDescription(string) {
      var str = string.split(": ");
      return this.$t("share") + " " + str[1];
    },
    formatToIBAN(value, pattern) {
      var i = 0,
        v = value.toString();
      return pattern.replace(/#/g, _ => v[i++]);
    }
  }
};
</script>
