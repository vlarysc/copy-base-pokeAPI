<template>
  <div id="card" :class="pokemon.type" @click="invertCard">
    <div class="container" v-show="isFront">
      <div class="pokemon-img">
        <img :src="pokemon.image" :alt="`Pokemon ${pokemon.type}`" />
      </div>
      <div class="pokemon-name">
        {{ name }}
      </div>
    </div>
    <div class="container" v-show="!isFront">
      <div class="status pokemon-hp">
        <div class="status-item">HP</div>
        <div class="life-bar">
          <div :style="{ width: pokemon.hp + '%' }"></div>
        </div>
        <div class="hp">{{ pokemon.hp }}/100</div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item">Attack</div>
          <div class="stats">
            <strong>{{ pokemon.attack }}</strong>
          </div>
          <img width="100" src="@/assets/image/sword.svg" alt="" />
        </div>
        <div class="status">
          <div class="status-item">Defense</div>
          <div class="stats">
            <strong>{{ pokemon.defense }}</strong>
          </div>
          <img width="100" src="@/assets/image/shield.svg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item">S. Attack</div>
          <div class="stats">
            <strong>{{ pokemon.specialAttack }}</strong>
          </div>
          <img width="100" src="@/assets/image/sword.svg" alt="" />
        </div>
        <div class="status">
          <div class="status-item">S. Defense</div>
          <div class="stats">
            <strong>{{ pokemon.specialDefense }}</strong>
          </div>
          <img width="100" src="@/assets/image/shield.svg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item type">Pokemon type</div>
          <div class="stats">
            <strong>{{ pokemon.type }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from "vue";
import pokedex from "../services/pokeAPI";
import type { Ref } from "vue";

export default {
  name: "HomeViewer",
  props: {
    id: Number,
    pokemonName: String,
    url: String,
  },
  setup(props: any) {
    const { _getPokemonByUrl } = pokedex();
    const pokemon: Ref<any> = ref({});
    const isFront = ref(true);
    const name = computed(
      () => props.pokemonName[0].toUpperCase() + props.pokemonName.substr(1)
    );

    onMounted(async (): Promise<any> => {
      pokemon.value = await _getPokemonByUrl(props.url as string);
    });

    function invertCard() {
      isFront.value = !isFront.value;
    }

    return {
      invertCard,
      isFront,
      pokemon,
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

#card {
  @include cards;

  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    .row {
      display: flex;
    }

    .status {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 25px auto;
      font-size: 19px;

      .life-bar {
        margin-left: 10px;
        margin-right: 10px;
        width: 50%;
        height: 20px;
        border-radius: 10px;
        background-color: #ccc;
      }

      .life-bar div {
        height: 100%;
        border-radius: 10px;
        background-color: rgb(16, 123, 0) !important;
      }

      img {
        max-width: 10%;
      }

      .stats {
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .pokemon-img {
      height: 100%;
      width: 100%;

      img {
        width: 90%;
      }
    }

    .pokemon-name {
      font-size: 26px !important;
      text-align: center;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
}

/* Tipos de pokemons */

.ground {
  background-color: #a4acaf;
  color: #212121 !important;
}

.normal {
  background-color: #f6ffa4;
  color: #554d33 !important;
}

.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
  color: #fff !important;
}

.grass {
  background-color: #9bcc50;
  color: #212121 !important;
}

.poison {
  background-color: #b97fc9;
  color: #fff !important;
}

.fire {
  background-color: #fd7d24;
  color: #fff !important;
}

.water {
  background-color: #4592c4;
  color: #fff !important;
}

.electric {
  background-color: #eed535;
  color: #212121 !important;
}

.bug {
  background-color: #729f3f;
  color: #fff !important;
}

.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
  color: #212121 !important;
}

.fairy {
  background-color: #fdb9e9;
  color: #212121 !important;
}

.psychic {
  background-color: #f366b9;
  color: #fff !important;
}

.rock {
  background-color: #a38c21;
  color: #fff !important;
}

.ice {
  background-color: #51c4e7;
  color: #212121 !important;
}

.ghost {
  background-color: #7b62a3;
  color: #fff !important;
}

.steel {
  background-color: #9eb7b8;
  color: #212121 !important;
}

.fighting {
  background-color: #d56723;
  color: #fff !important;
}
</style>
