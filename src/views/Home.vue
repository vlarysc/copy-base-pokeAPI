<template>
  <div id="Home">
    <div class="search">
      <Search />
    </div>
    <div class="container">
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <PokeCard
          :pokemonName="pokemon.name"
          :url="pokemon.url"
          :id="index + 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "../stores/pokedex";
import { computed, defineComponent, onBeforeMount } from "vue";
import PokeCard from "../components/PokeCard.vue";
import Search from "../components/Search.vue";

export default defineComponent({
  name: "HomeViewer",
  components: {
    PokeCard,
    Search,
  },
  setup() {
    const store = useStore();
    onBeforeMount(async () => {
      await store.getPokemons();
    });

    const pokemons = computed(() =>
      store.pokemon.length === 0 ? store.pokemons.data.results : store.pokemon
    );

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
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
@media (max-width: 520px) {
  .search {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
