import { AuthDispatchTypes } from "../types/AuthActionTypes";
import { PokemonDispatchTypes } from "../types/PokemonActionTypes";
import { UsersDispatchTypes } from "../types/UsersActionTypes";

export type AppActions =
  | PokemonDispatchTypes
  | AuthDispatchTypes
  | UsersDispatchTypes