import axios from "axios";
import {
  BOTTOMPAGE,
  CREATE_POKEMON,
  FINDPOKEMONS,
  GETPOKEMONDETAILS,
  GETPOKEMONS,
  GETYPES,
  MODIFYPAGE,
  RESET_SEARCH_POKEMON,
  TOPAGE,
} from "./action-types";

export function getPokemons() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/pokemons");

      return dispatch({
        type: GETPOKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTypes() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/types")
      .then((response) => {
        // ordenamiento alfabetico de los types
        response.data.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }); //
        dispatch({
          type: GETYPES,
          payload: response.data, // recibe un arreglo de pokemons
        });
      }) // cacth generar un dispatch un error
      .catch((error) => {
        console.log("Error coneccion BACK");
      });
  };
}

export function createPokemon(newPokemon) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/pokemons",
        newPokemon
      );

      return dispatch({
        type: CREATE_POKEMON,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const pokemonDetails = await axios.get(
        `http://localhost:3001/pokemons/${id}`
      );
      return dispatch({
        type: GETPOKEMONDETAILS,
        payload: pokemonDetails.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchPokemon(name) {
  return async function (dispatch) {
    try {
      const pokemonSearch = axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({
        type: FINDPOKEMONS,
        payload: (await pokemonSearch).data,
      });
    } catch ({ response }) {
      alert(response.data.message);
    }
  };
}

export function resetSearchPokemon() {
  return {
    type: RESET_SEARCH_POKEMON,
    payload: false,
  };
}

// Pagination

export function modifyPage(value) {
  return {
    type: MODIFYPAGE,
    payload: value,
  };
}

export function topPage() {
  return {
    type: TOPAGE,
  };
}
export function bottomPage() {
  return {
    type: BOTTOMPAGE,
  };
}
