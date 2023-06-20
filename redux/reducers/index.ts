import { combineReducers } from "redux";

import pokemonReducer from "./PokemonReducer";
import authReducer from "./auth";
import userReducer from "./users";
import nftReducer from "./nfts";
import selectedUserReducer from "./selecteduser";
import selectedNftReducer from "./selectednft";

export const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth:authReducer,
  user: userReducer,
  nft: nftReducer,
  selectedUser: selectedUserReducer,
  selectedNft: selectedNftReducer
});
