import axios from "axios";
import notify from "../utils/notify";
export default function pokedex() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  const getAllPokemons = async () => {
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
  const getPokemonById = async (id: string) => {
    return axios({
      method: "GET",
      url: `${baseUrl}/${id}/`,
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

  return {
    getAllPokemons,
    getPokemonById,
  };
}
