<template>
  <div class="home">
    <br />
    <h1>Bienvenido a la pokedex</h1>
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

export default {
  name: "HomeView",
  components: {
    PersoPie,
    BuscadorPokes,
  },
};
</script>
