<template>
  <div class="row">
    <Stock v-for="stock in stocks" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style></style>

