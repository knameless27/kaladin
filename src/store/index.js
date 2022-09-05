import { createStore, createLogger } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      msg: "xd",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    misaje(state, mensa) {
      console.log(mensa);
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
