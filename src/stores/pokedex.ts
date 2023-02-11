import { defineStore } from "pinia";
import { ref } from "vue";
import pokedex from "../services/pokeAPI";
import type { Ref } from "vue";

export const useStore = defineStore("Pokedex", () => {
  const { _getAllPokemons, _getPokemonById } = pokedex();
  const pokemons: Ref<any> = ref([]);
  const pokemon: Ref<any> = ref([]);

  async function getPokemons(): Promise<any> {
    const Allpokemons = await _getAllPokemons();
    pokemons.value = Allpokemons;
  }
  async function getPokemonById(id: string): Promise<void> {
    const Allpokemons = await _getPokemonById(id);
    pokemons.value = Allpokemons;
  }

  return { getPokemons, getPokemonById, pokemons, pokemon };
});
