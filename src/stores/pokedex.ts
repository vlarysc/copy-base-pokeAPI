import { defineStore } from "pinia";
import { ref } from "vue";
import pokedex from "../services/pokeAPI";
import type { Ref } from "vue";
export interface IPokemon {
  name: string;
  url: string;
}

export const useStore = defineStore("Pokedex", () => {
  const { _getAllPokemons } = pokedex();
  const pokemons: Ref<any> = ref([]);
  const pokemon: Ref<any> = ref([]);

  async function getPokemons(): Promise<any> {
    const Allpokemons = await _getAllPokemons();
    pokemons.value = Allpokemons;
  }
  async function filterPokemon(data: string): Promise<any> {
    const poke = pokemons.value.data.results;
    pokemon.value = poke.filter((pokemon: IPokemon) =>
      pokemon.name.toUpperCase().includes(data.toUpperCase())
    );
    return pokemon.value;
  }

  return { getPokemons, pokemons, pokemon, filterPokemon };
});
