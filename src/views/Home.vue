<template>
  <div>{{ pokemons }}</div>
</template>

<script lang="ts">
import { useStore } from "../stores/pokedex";
import { computed, defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  name: "HomeViewer",
  setup() {
    const store = useStore();
    onBeforeMount(async () => {
      await store.getPokemons();
    });
    const pokemons = computed(() => store.pokemons);
    return {
      pokemons,
    };
  },
});
</script>

<style scoped></style>
