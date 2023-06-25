//use get allnfts types
export const GET_ALL_NFTS_LOADING = "GET_ALL_NFTS_LOADING";
export const GET_ALL_NFTS_ERROR = "GET_ALL_NFTS_ERROR";
export const GET_ALL_NFTS_SUCCESS = "GET_ALL_NFTS_SUCCESS";

export const NFT_CREATE_LOADING = "NFT_CREATE_LOADING";
export const NFT_CREATE_SUCCESS = "NFT_CREATE_SUCCESS";
export const NFT_CREATE_ERROR = "NFT_CREATE_ERROR";

export interface createdNft {
  loading: boolean;
  nftDetails: {
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  };
}


export interface Nft {

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

//create nft
export type nftCreateLoading = {
  type: typeof NFT_CREATE_LOADING;
};
export type nftCreateError = {
  type: typeof NFT_CREATE_ERROR;
};
export type nftCreateSuccess = {
  type: typeof NFT_CREATE_SUCCESS;
};


export type NftsDispatchTypes =
  | getAllNftsLoading
  | getAllNftsError
  | getAllNftsSuccess
  | nftCreateLoading
  | nftCreateError
  | nftCreateSuccess
