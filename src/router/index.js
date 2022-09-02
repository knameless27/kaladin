import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import PokemonProfile from "@/views/PokemonProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pokemonProfile",
    name: "pokemonProfile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonProfile.vue"),
  },
  {
    path: "/listPokemonView",
    name: "listPokemonView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListPokemonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
