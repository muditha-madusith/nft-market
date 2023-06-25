import {
  GET_ALL_NFTS_LOADING,
  GET_ALL_NFTS_ERROR,
  GET_ALL_NFTS_SUCCESS,
  NftsDispatchTypes,
  Nfts,
  NFT_CREATE_LOADING,
  NFT_CREATE_ERROR,
  NFT_CREATE_SUCCESS,
} from "../../types/NftsActionTypes";

const initialState: Nfts = {
  nfts: [],
  loading: false,
  error: null,
};

const nftReducer = (state: Nfts = initialState, action: NftsDispatchTypes) => {
  switch (action.type) {
    
    case NFT_CREATE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case NFT_CREATE_ERROR:
      return {
        ...state,
        loading: false,
      };
    case NFT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

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
