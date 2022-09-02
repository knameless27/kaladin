<template>
  <div class="pokemonProfile">
    <section class="layout">
      <div class="header">
        <br />
        <h1>Nombre pokimon</h1>
        <br />
        <h2>tipo de pokimon</h2>
      </div>
      <div class="leftSide">
        <text>
          descripcion del pokimon: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui ratione deserunt nemo maiores, debitis doloribus
          itaque totam nihil obcaecati perferendis temporibus laborum neque,
          possimus tenetur nisi quam esse ad laudantium!</text
        >
      </div>
      <div class="body"></div>
      <div class="rightSide"><img src="@/assets/logo.png" alt="" /></div>
      <div class="footer"></div>
    </section>
    <!-- imagen del pokimon -->
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
};
</script>

<style lang="scss">
.layout {
  width: auto;
  height: auto;

  display: grid;
  grid:
    "header header header" auto
    "leftSide body rightSide" 1fr
    "footer footer footer" 1fr
    / auto 1fr 25%;
  gap: 8px;
}

.header {
  grid-area: header;
}
.leftSide {
  grid-area: leftSide;
}
.body {
  grid-area: body;
}
.rightSide {
  grid-area: rightSide;
}
.footer {
  grid-area: footer;
}
</style>
