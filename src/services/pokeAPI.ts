import axios from "axios";
import notify from "../utils/notify";

export default function pokedex() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const _getAllPokemons = async () => {
    return axios({
      method: "GET",
      url: `${baseUrl}?limit=151&offset=0`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        notify({
          status: "error",
          title: "Error",
          text: "Algo inesperado aconteceu, tente novamente mais tarde!",
        });
        console.log(err);
      });
  };
  const _getPokemonByUrl = async (url: string) => {
    return axios({
      method: "GET",
      url: `${url}`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        const pokemon = {
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          specialAttack: res.data.stats[3].base_stat,
          specialDefense: res.data.stats[4].base_stat,
          type: res.data.types[0].type.name,
          image: res.data.sprites.other["official-artwork"].front_default,
        };
        return pokemon;
      })
      .catch((err) => {
        notify({
          status: "error",
          title: "Error",
          text: "Algo inesperado aconteceu, tente novamente mais tarde!",
        });
        console.log(err);
      });
  };

  return {
    _getAllPokemons,
    _getPokemonByUrl,
  };
}
