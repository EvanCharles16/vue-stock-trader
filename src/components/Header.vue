<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/portfolio" activeClass="active" tag="li"
              ><a class="nav-link mr-3 ml-3">Portfolio</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/stocks" activeClass="active" tag="li"
              ><a class="nav-link mr-3 ml-3">Stocks</a></router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mr-4">
          <li><a href="#" class="nav-link" @click="endDay">End Day</a></li>
          <li
            class="nav-item dropdown"
            :class="{ show: isDropdownOpen }"
            @click="toggle"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save Data
            </a>
            <div
              class="dropdown-menu"
              :class="{ show: isDropdownOpen }"
              @click="toggle"
            >
              <li>
                <a href="#" class="ml-3 text-dark" @click="saveData"
                  >Save Data</a
                >
              </li>
              <li>
                <a href="#" class="ml-3 text-dark" @click="loadData"
                  >Load Data</a
                >
              </li>
            </div>
          </li>
        </ul>
        <strong class="navbar-text ml-auto mr-3"
          >Funds : {{ funds | currency }}</strong
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    toggle() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style>
.navbar-light .navbar-nav .active > .nav-link {
  color: white;
  background: green !important;
  border-radius: 0.25rem;
}
</style>
