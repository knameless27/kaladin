<template>
  <div class="listPokemonView">
    <br />
    <h1>Lista de pokemon</h1>
    <hr />
    <pokemon-list />
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "ListPokemonView",
  components: {
    PokemonList,
  },
};
</script>
