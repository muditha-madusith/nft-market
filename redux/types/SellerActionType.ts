export const SELLER_REGISTER_LOADING = "SELLER_REGISTER_LOADING";
export const SELLER_REGISTER_SUCCESS = "SELLER_REGISTER_SUCCESS";
export const SELLER_REGISTER_ERROR = "SELLER_REGISTER_ERROR";

export const GET_SELLER_LOADING = "GET_SELLER_LOADING";
export const GET_SELLER_SUCCESS = "GET_SELLER_SUCCESS";
export const GET_SELLER_ERROR = "GET_SELLER_ERROR";


export interface Seller {
    loading: false;
    seller: string;
    bankName: string;
    accountNumber: number;
    branch: string;
    fullName: string
    branchCode: number;
}


export type sellerRegisterLoading = {
    type: typeof SELLER_REGISTER_LOADING;
}
export type sellerRegisterError = {
    type: typeof SELLER_REGISTER_ERROR;
}
export type sellerRegisterSuccess = {
    type: typeof SELLER_REGISTER_SUCCESS;
    payload: {
        seller: string;
        bankName: string;
        accountNumber: number;
        branch: string;
        fullName: string;
        branchCode: number;
    }
}

export type getSellerLoading = {
    type: typeof GET_SELLER_LOADING;
}
export type getSellerError = {
    type: typeof GET_SELLER_ERROR;
}
export type getSellerSuccess = {
    type: typeof GET_SELLER_SUCCESS;
    payload: {
        seller: string;
        bankName: string;
        accountNumber: number;
        branch: string;
        fullName: string
        branchCode: number;
    }
}

export type SellerDispatchTypes = 
    | sellerRegisterError
    | sellerRegisterLoading
    | sellerRegisterSuccess
    | getSellerLoading
    | getSellerError
    | getSellerSuccess