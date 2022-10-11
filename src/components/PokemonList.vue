<template>
  <section class="ly2">
    <div class="gr1"></div>
    <div class="gr2">
      <section class="layout">
        <div v-for="(data, index) in pokemons" :key="index">
          <div id="p">
            <a
              @click="carta(data.id)"
              style="text-decoration: none; cursor: pointer"
            >
              <div class="card" id="h">
                <div class="img">
                  <img :src="data.img" alt="" />
                </div>
                <h1>{{ data.name }}</h1>
                <div>
                  <div v-if="data.type2 != ``">
                    <p>Tipo:</p>
                    <p>{{ data.type1 }} - {{ data.type2 }}</p>
                  </div>
                  <div v-else-if="data.type2 === ``">
                    <p>Tipo:</p>
                    <p>
                      {{ data.type1 }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div class="gr1"></div>
  </section>
</template>

<script>
import axios from "axios";

let pokimon;

export default {
  name: "PokemonList",
  el: "#awa",
  data() {
    return {
      pokemons: [],
    };
  },
  created() {
    console.log(
      "que cuando se le de clic a algun tipo de vaina de esas lo mande a la wiki personalizada de cada bicho"
    );
    for (let i = 1; i <= 60; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          if (response.data.types.length === 2) {
            pokimon = {
              name: response.data.name,
              img: response.data.sprites.front_default,
              type1: response.data.types[0].type.name,
              type2: response.data.types[1].type.name,
              id: response.data.id,
            };
            this.pokemons.push(pokimon);
          } else {
            pokimon = {
              name: response.data.name,
              img: response.data.sprites.front_default,
              type1: response.data.types[0].type.name,
              type2: "",
              id: response.data.id,
            };
            this.pokemons.push(pokimon);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  methods: {
    carta(id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
        const datos = {
          id: data.id,
          nombre: data.name,
          stats: data.stats,
          sprites: data.sprites,
          types: data.types,
        };
        this.$store.commit("misaje", datos);
      });
      this.$router.push("/pokemonProfile");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ly2 {
  width: 100%;

  display: flex;
  gap: 16px;
  position: relative;
  padding-bottom: 5em;
  min-height: 100vh;
}

.gr1 {
  flex-grow: 1;
}
.gr2 {
  flex-grow: 2;
}
.layout {
  width: auto;
  height: 768px;

  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.card {
  width: 200px;
  height: 250px;
  background: #07182e;
  border-radius: 10px;
  text-align: center;
  color: #f0f0f0;
  font-family: inherit;
  z-index: 1;
}

.img {
  display: flex;
  margin: 10px auto 10px auto;
  width: 75px;
  height: 75px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  z-index: 99;
  background-color: #152f50;
}

p {
  opacity: 0;
  transition: all 0.5s;
}

h1 {
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
}

/*svg {
  padding: 0 5px;
  cursor: pointer;
}*/

.card:hover .img {
  transform: scale(1.1);
  border: 1px solid #f0f0f0;
}

.card:hover h1,
.card:hover p {
  opacity: 1;
}
</style>
