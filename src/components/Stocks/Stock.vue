<template>
  <div class="col-sm-6 col-md-6">
    <div class="card mt-5">
      <div class="card-header bg-success text-white">
        {{ stock.name }}
        <small>(Price : {{ stock.price }})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 col-md-7">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{ danger : insufficientFunds}"
            />
          </div>
          <div class="float-md-right buyBtn">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0"
            >
              {{ insufficientFunds ? "insufficient Funds" : "Buy" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}

.buyBtn {
  margin-left: auto;
  margin-right: 20px;
}
</style>
