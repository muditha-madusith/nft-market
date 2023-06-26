import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from "./users";
import nftReducer from "./nfts";
import selectedUserReducer from "./selecteduser";
import selectedNftReducer from "./selectednft";
import searchNftReducer from "./searchnfts";
import alertReducer from "./alert";
import sellerReducer from "./seller";

export const RootReducer = combineReducers({
  auth:authReducer,
  user: userReducer,
  nft: nftReducer,
  selectedUser: selectedUserReducer,
  selectedNft: selectedNftReducer,
  searchNft: searchNftReducer,
  alert: alertReducer,
  seller: sellerReducer
});
