<template>
  <div class="home">
    <br />
    <h1>Bienvenido a la pokedex</h1>
    <h1>{{ store.getters.mensaje }}</h1>
    <p>{{ count }}</p>
    <button @click="increment">incrementar</button>
    <button @click="decrement">decrementar</button>
    <br />
    <p>
      Aqui podras encontrar todo tipo de pokemon que ha salido en toda la saga
      hasta la fecha
    </p>
    <buscador-pokes />
    <perso-pie />
  </div>
</template>

<script>
// @ is an alias to /src
import PersoPie from "@/components/PersoPie.vue";
import BuscadorPokes from "@/components/BuscadorPokes.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: {
    PersoPie,
    BuscadorPokes,
  },
  methods: {},
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const increment = () => {
      store.commit("increment");
    };
    const decrement = () => {
      store.commit("decrement");
    };
    return { count, increment, decrement };
  },
};
</script>
