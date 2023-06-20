export const GET_SELECTED_USER_LOADING = "GET_SELECTED_USER_LOADING"
export const GET_SELECTED_USER_SUCCESS = "GET_SELECTED_USER_SUCCESS"
export const GET_SELECTED_USER_ERROR = "GET_SELECTED_USER_ERROR"

export const GET_SELECTED_USER_NFTS_LOADING = "GET_SELECTED_USER_NFTS_LOADING"
export const GET_SELECTED_USER_NFTS_SUCCESS = "GET_SELECTED_USER_NFTS_SUCCESS"
export const GET_SELECTED_USER_NFTS_ERROR = "GET_SELECTED_USER_NFTS_ERROR"


export interface SUser {
    loading: boolean;
    userDetails: SUserD;
    userNfts: SNft[];
}

export interface SUserD {
    id: string;
    name: string;
    email: string;
    profile_pic: string;
}

export interface SNft {

}


//Get Selected User
export type getSelectedUserLoading = {
    type: typeof GET_SELECTED_USER_LOADING;
}
export type getSelectedUserError = {
    type: typeof GET_SELECTED_USER_ERROR;
}
export type getSelectedUserSuccess = {
    type: typeof GET_SELECTED_USER_SUCCESS;
    payload: {
        _id: string;
        username: string;
        email: string;
        profileUrl: string;
    }
}


//Get Selected User's Nfts
export type getSelectedUserNftsLoading = {
    type: typeof GET_SELECTED_USER_NFTS_LOADING;
}
export type getSelectedUserNftsError = {
    type: typeof GET_SELECTED_USER_NFTS_ERROR;
}
export type getSelectedUserNftsSuccess = {
    type: typeof GET_SELECTED_USER_NFTS_SUCCESS;
    payload: SNft[];
}


export type SelectedUserDispatchTypes = 
  | getSelectedUserLoading
  | getSelectedUserError
  | getSelectedUserSuccess
  | getSelectedUserNftsLoading
  | getSelectedUserNftsError
  | getSelectedUserNftsSuccess