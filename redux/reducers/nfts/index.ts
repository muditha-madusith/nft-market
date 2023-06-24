import {
  GET_ALL_NFTS_LOADING,
  GET_ALL_NFTS_ERROR,
  GET_ALL_NFTS_SUCCESS,
  NftsDispatchTypes,
  Nfts,
} from "../../types/NftsActionTypes";

const initialState: Nfts = {
  nfts: [],
  loading: false,
  error: null,
};

const nftReducer = (state: Nfts = initialState, action: NftsDispatchTypes) => {
  switch (action.type) {
    case GET_ALL_NFTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_NFTS_ERROR:
      return {
        ...state,
        loading: false,
        error: "An error occurred while fetching nfts.",
      };
    case GET_ALL_NFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        nfts: action.payload,
      };
    default:
      return state;
  }
};

export default nftReducer;
