<template>
  <form>
    <input
      type="text"
      placeholder="Find your pokemon"
      @change="filtrator()"
      v-model="pokemon"
    />
    <button @click.prevent="filtrator">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
</template>

<script lang="ts">
import { useStore } from "../stores/pokedex";
import { ref, watchEffect } from "vue";
export default {
  name: "SearchApp",
  setup() {
    const store = useStore();
    const pokemon = ref("");
    watchEffect(() => filtrator());
    function filtrator() {
      store.filterPokemon(pokemon.value);
    }
    return { filtrator, pokemon };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

form {
  background-color: white;
  display: inline-block;
  padding: 6px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

form > input {
  border: none;
  outline: none;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  font-weight: 300;
  color: #0a283a;
  min-height: 46px;
  min-width: 250px;
}

form > button {
  background-color: $quaternaria;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 0px;
  border: none;
  color: #fff;
  padding: 4px 10px;
  height: 40px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.3s;
}

form > button:hover {
  transition: 0.3s;
  background-color: $quaternaria-light;
}
</style>
