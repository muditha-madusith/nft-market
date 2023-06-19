import { AuthDispatchTypes } from "../types/AuthActionTypes";
import { PokemonDispatchTypes } from "../types/PokemonActionTypes";

export type AppActions =
  | PokemonDispatchTypes
  | AuthDispatchTypes
