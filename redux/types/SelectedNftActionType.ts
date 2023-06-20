export const GET_SELECTED_NFT_LOADING = "GET_SELECTED_NFT_LOADING"
export const GET_SELECTED_NFT_SUCCESS = "GET_SELECTED_NFT_SUCCESS"
export const GET_SELECTED_NFT_ERROR = "GET_SELECTED_NFT_ERROR"

export interface SNft {
    loading: boolean;
    nftDetails: SNftD;
}

export interface SNftD {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    creator: string;
    quantity: number;
}

//Get Selected User
export type getSelectedNftLoading = {
    type: typeof GET_SELECTED_NFT_LOADING;
}
export type getSelectedNftError = {
    type: typeof GET_SELECTED_NFT_ERROR;
}
export type getSelectedNftSuccess = {
    type: typeof GET_SELECTED_NFT_SUCCESS;
    payload: {
        _id: string;
        name: string;
        price: number;
        description: string;
        image: string;
        creator: string;
        quantity: number;
    }
}

export type SelectedNftDispatchTypes = 
  | getSelectedNftLoading
  | getSelectedNftError
  | getSelectedNftSuccess