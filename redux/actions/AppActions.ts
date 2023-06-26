import { AlertDispatchTypes } from "../types/AlertActionType";
import { AuthDispatchTypes } from "../types/AuthActionTypes";
import { NftsDispatchTypes } from "../types/NftsActionTypes";
import { SearchNftsDispatchTypes } from "../types/SearchNftActionType";
import { SelectedNftDispatchTypes } from "../types/SelectedNftActionType";
import { SelectedUserDispatchTypes } from "../types/SelectedUserActionTypes";
import { SellerDispatchTypes } from "../types/SellerActionType";
import { UsersDispatchTypes } from "../types/UsersActionTypes";

export type AppActions =
  | AuthDispatchTypes
  | UsersDispatchTypes
  | NftsDispatchTypes
  | SelectedUserDispatchTypes
  | SelectedNftDispatchTypes
  | SearchNftsDispatchTypes
  | AlertDispatchTypes
  | SellerDispatchTypes