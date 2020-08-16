import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  // passing stocks as a payload
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  // Random Stocks
  RND_STOCKS(state) {
    // For Random Number that increase and decrease
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    // This BUY_STOCK will refers to portfolio modules
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    // Passing stocks from data/stocks (dummy data)
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
