import { createStore, createLogger } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      id: 0,
      nombre: "",
      sprites: [],
      stats: [],
      types: [],
    };
  },
  mutations: {
    misaje(state, mensa) {
      state.id = mensa.id;
      state.nombre = mensa.nombre;
      state.sprites = mensa.sprites;
      state.stats = mensa.stats;
      state.types = mensa.types;
    },
  },
  getters: {
    // mensaje(state) {
    //   return state.msg;
    // },
  },
  pluggins: [createLogger()],
});

// Install the store instance as a plugin
export default store;
