import { AuthDispatchTypes } from "../types/AuthActionTypes";
import { NftsDispatchTypes } from "../types/NftsActionTypes";
import { PokemonDispatchTypes } from "../types/PokemonActionTypes";
import { UsersDispatchTypes } from "../types/UsersActionTypes";

export type AppActions =
  | PokemonDispatchTypes
  | AuthDispatchTypes
  | UsersDispatchTypes
  | NftsDispatchTypes