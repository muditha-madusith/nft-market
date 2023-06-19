import { combineReducers } from "redux";

import pokemonReducer from "./PokemonReducer";
import authReducer from "./auth"
export const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth:authReducer
});
