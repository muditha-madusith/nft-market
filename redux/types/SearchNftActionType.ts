export const GET_SEARCHED_NFTS_LOADING = "GET_SEARCHED_NFTS_LOADING";
export const GET_SEARCHED_NFTS_ERROR = "GET_SEARCHED_NFTS_ERROR";
export const GET_SEARCHED_NFTS_SUCCESS = "GET_SEARCHED_NFTS_SUCCESS";

export interface searchedNft {
  loading: boolean;
  nfts: Nft[];
}

export interface Nft {}


export type getSearchNftsLoading = {
  type: typeof GET_SEARCHED_NFTS_LOADING;
};
export type getSearchNftsError = {
  type: typeof GET_SEARCHED_NFTS_ERROR;
};
export type getSearchNftsSuccess = {
  type: typeof GET_SEARCHED_NFTS_SUCCESS;
  payload: Nft[];
};


export type SearchNftsDispatchTypes =
  | getSearchNftsLoading
  | getSearchNftsError
  | getSearchNftsSuccess;
