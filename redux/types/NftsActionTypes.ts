//use get allnfts types
export const GET_ALL_NFTS_LOADING = "GET_ALL_NFTS_LOADING";
export const GET_ALL_NFTS_ERROR = "GET_ALL_NFTS_ERROR";
export const GET_ALL_NFTS_SUCCESS = "GET_ALL_NFTS_SUCCESS";


export interface Nft {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
  quantity: number;
}

export interface Nfts {
  loading: boolean;
  nfts: Nft[];
  error: null | string;
}


//get all nfts
export type getAllNftsLoading = {
  type: typeof GET_ALL_NFTS_LOADING;
};
export type getAllNftsError = {
  type: typeof GET_ALL_NFTS_ERROR;
};
export type getAllNftsSuccess = {
  type: typeof GET_ALL_NFTS_SUCCESS;
  payload: Nft[];
};


export type NftsDispatchTypes =
  | getAllNftsLoading
  | getAllNftsError
  | getAllNftsSuccess
