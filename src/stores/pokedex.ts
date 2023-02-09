import { defineStore } from "pinia";
import { ref } from "vue";
import pokedex from "../services/pokeAPI";
import type { Ref } from "vue";

export const useStore = defineStore("Pokedex", () => {
  const { getAllPokemons } = pokedex();
  const pokemons: Ref<any> = ref([]);
  async function getPokemons(): Promise<void> {
    const Allpokemons = await getAllPokemons();
    pokemons.value = Allpokemons;
  }

  return { getPokemons, pokemons };
});
