<template>
  <div>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <!--{{ pokemon.name }}-->
      <PokeCard :name="pokemon.name" :url="pokemon.url" :id="index + 1" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "../stores/pokedex";
import { computed, defineComponent, onBeforeMount } from "vue";
import PokeCard from "../components/PokeCard.vue";

export default defineComponent({
  name: "HomeViewer",
  components: {
    PokeCard,
  },
  setup() {
    const store = useStore();
    onBeforeMount(async () => {
      await store.getPokemons();
      console.log(pokemons.value);
    });
    const pokemons = computed(() => store.pokemons.data.results);
    return {
      pokemons,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.container {
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
