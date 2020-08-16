<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"/>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      // Get data from stockPorfolio state (portfolio modules)
      stocks: "stockPortfolio",
    }),
  },
  components: {
    Stock,
  },
};
</script>

<style></style>
