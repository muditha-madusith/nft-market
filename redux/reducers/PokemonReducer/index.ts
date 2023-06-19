import {
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    PokemonDispatchTypes,
    PokemonAbility,
    PokemonSprites,
    PokemonStat,
  } from "../../types/PokemonActionTypes";
  
  interface InitalState {
    loading?: boolean;
    abilities?: PokemonAbility[];
    sprites?: PokemonSprites;
    stats?: PokemonStat[];
  }
  
  const initialState: InitalState = {
    loading: false,
  };
  
  const pokemonReducer = (
    state: InitalState = initialState,
    action: PokemonDispatchTypes
  ): InitalState => {
    switch (action.type) {
      case POKEMON_FAIL:
        return {
          loading: false,
        };
      case POKEMON_LOADING:
        return {
          loading: true,
        };
      case POKEMON_SUCCESS:
        return {
          loading: false,
          abilities: action.payload.abilities,
          sprites: action.payload.sprites,
          stats: action.payload.stats,
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  