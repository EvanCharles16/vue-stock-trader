<template>
  <div class="col-sm-6 col-md-6">
    <div class="card mt-5">
      <div class="card-header bg-info text-white">
        {{ stock.name }}
        <small>(Price : {{ stock.price }} | Quantity : {{ stock.quantity }})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 col-md-7">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{danger : insufficientQuantity}"
            />
          </div>
          <div class="float-md-right sellBtn">
            <button
              class="btn btn-info"
              @click="sellStock"
              :disabled="insufficientQuantity || quantity <= 0 "
            >
              {{ insufficientQuantity ? "Not Enough Stocks" : "Sell"}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    // Passing from state management (portfolio modules)
    ...mapActions({
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      // Use the mapAction func
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
  created() {
    console.log(this.stock);
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}

.sellBtn {
  margin-left: auto;
  margin-right: 20px;
}
</style>
