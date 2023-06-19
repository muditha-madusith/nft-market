import { combineReducers } from "redux";

import pokemonReducer from "./PokemonReducer";
import authReducer from "./auth";
import userReducer from "./users";

export const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth:authReducer,
  user: userReducer
});
