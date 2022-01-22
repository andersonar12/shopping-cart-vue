import { createStore } from "vuex";
import axios from "axios";

// Vuex (libreria para gestionar los estados de una app) tiene algo llamado store, que es un objeto global que contiene los cuatro elementos principales que Vuex necesita para administrar el "state" de una aplicación:

export default createStore({
  //  *State: es el objeto JavaScript que contiene los datos de la aplicación.
  state: {
    products: [],
    shoppingCart: {},
  },
  //  *Mutations: son funciones síncronas que actualizan el "state", y son el único (correcto) mecanismo  existente para hacerlo. se pueden acceder igual que los actions mediante "commit" ejemplo: "store.commit("cleanShoppingCart");"
  mutations: {
    setProduct(state, payload) {
      state.products = payload;
    },
    setShoppingCart(state, payload) {
      state.shoppingCart[payload.id] = payload;
    },
    removeItem(state, payload) {
      delete state.shoppingCart[payload];
    },
    cleanShoppingCart(state) {
      state.shoppingCart = {};
    },
  },
  //  *Actions: son funciones asíncronas que actualizan el "state" a través de una mutación existente. Pueden invocar mutaciones múltiples, otras   acciones y admitir operaciones asincrónicas. Se pueden a los actions mediante "dispatch" ejemplo: "store.dispatch("fetchData"));"
  actions: {
    async fetchData({ commit }) {
      try {
        await axios.get("api.json").then((res) => {
          console.log(res.data);
          commit("setProduct", res.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    addToShoppingCart({ commit, state }, product) {
      state.shoppingCart.hasOwnProperty(product["id"])
        ? (product["cantidad"] =
            state.shoppingCart[product["id"]]["cantidad"] + 1)
        : (product["cantidad"] = 1);

      commit("setShoppingCart", product);
    },
    decreaseOnShoppingCart({ commit, state }, id) {
      const product = state.shoppingCart[id];

      product["cantidad"] == 0 || product["cantidad"] <= 1
        ? (product["cantidad"] = 1)
        : (product["cantidad"] -= 1);
      commit("setShoppingCart", product);
    },
  },
  //  *Getters: son funciones que devuelven los datos contenidos en el "state".
  getters: {
    totalQuantity(state) {
      return Object.values(state.shoppingCart).reduce(
        (prev, { cantidad }) => prev + cantidad,
        0
      );
    },
    totalPrice(state) {
      return Object.values(state.shoppingCart).reduce(
        (prev, { cantidad, precio }) => prev + cantidad * precio,
        0
      );
    },
  },
  modules: {},
});
