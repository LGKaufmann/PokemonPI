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
const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  pokemonFound: {},
  createdPokemon: false,
  error_msg: "",
  pokemonDetail: {},
  searchPokemon: false,

  // -------------------Pagination---------------------
  currentPage: 1,
  totalPokemons: 0,
  itemsByPage: 12,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETPOKEMONS:
      return {
        ...state,
        pokemons: action.payload, // recibe un arreglo con todos los pokemons
        filteredPokemons: action.payload,
        totalPokemons: action.payload.length,
      };

    case GETYPES:
      return {
        ...state,
        types: action.payload, // recibe un arreglo con types
      };

    case CREATE_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        filteredPokemons: [...state.filteredPokemons, action.payload],
        totalPokemons: state.pokemons.length + 1,
      };
    case GETPOKEMONDETAILS:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case FINDPOKEMONS:
      return {
        ...state,
        pokemonFound: action.payload,
        searchPokemon: true,
      };

    case RESET_SEARCH_POKEMON:
      return {
        ...state,
        pokemonFound: {},
        notFound: true,
        searchPokemon: false,
        loadingPokemons: false,
      };

    case MODIFYPAGE:
      let value = action.payload;
      if (state.currentPage + value < 1) {
        value = 0;
      }
      if (
        state.currentPage + value >
        Math.ceil(state.totalPokemons / state.itemsByPage)
      ) {
        value = 0;
      }

      return {
        ...state,
        currentPage: state.currentPage + value,
      };

    case BOTTOMPAGE:
      return {
        ...state,
        currentPage: 1,
      };

    case TOPAGE:
      return {
        ...state,
        currentPage:
          state.totalPokemons === 0
            ? 1
            : Math.ceil(state.totalPokemons / state.itemsByPage),
      };
    default:
      return state;
  }
}

export default rootReducer;
