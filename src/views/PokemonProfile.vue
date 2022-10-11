<template>
  <div class="pokemonProfile">
    <section class="layout">
      <br />
      <div class="card">
        <div class="foto">
          <img :src="pokemon.sprites.front_default" alt="" />
        </div>
        <div class="nombre">
          <h1 class="card__title">
            {{ pokemon.nombre }}
          </h1>
        </div>
        <div class="card__date" id="tipos">
          <h2 v-for="(data, index) in pokemon.types" :key="index">
            {{ data.type.name }}
          </h2>
        </div>
        <div
          class="card__content"
          id="stats"
          v-for="(data, index) in pokemon.stats"
          :key="index"
        >
          {{ data.stat.name }}: {{ data.base_stat }}
        </div>
      </div>
      <div class="footer"></div>
    </section>
    <!-- <b-progress
      :value="data.base_stat"
      :max="255"
      show-progress
      animated
      variant="success"
    ></b-progress> -->
  </div>
  <perso-pie />
</template>

<script>
import PersoPie from "@/components/PersoPie.vue";

export default {
  name: "AboutView",
  components: {
    PersoPie,
  },
  data() {
    return {
      pokemon: [],
      stats: 0,
    };
  },
  created() {
    this.pokemon = this.$store.state;
  },
};
</script>

<style scoped lang="scss">
.layout {
  padding-left: 43%;
  padding-top: 5%;
  display: flex;
}

.card {
  --border-radius: 0.75rem;
  --primary-color: #7257fa;
  --secondary-color: #3c3852;
  width: 25%;
  font-family: "Arial";
  border-radius: var(--border-radius);
  background: #f1f1f3;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
  position: relative;
  display: flex;
}

.card .card__title {
  font-weight: bold;
}

.card .card__date {
  color: #6e6b80;
}
</style>
