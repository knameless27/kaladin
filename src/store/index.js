import { createStore, createLogger } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
  },
  pluggins: [createLogger()],
});

// Install the store instance as a plugin
export default store;
