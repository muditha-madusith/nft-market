export const CREATE_PAYMENT_LOADING = "CREATE_PAYMENT_LOADING";
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS";
export const CREATE_PAYMENT_ERROR = "CREATE_PAYMENT_ERROR";

export const GET_BOUGHT_ITEMS_LOADING = "GET_BOUGHT_ITEMS_LOADING";
export const GET_BOUGHT_ITEMS_SUCCESS = "GET_BOUGHT_ITEMS_SUCCESS";
export const GET_BOUGHT_ITEMS_ERROR = "GET_BOUGHT_ITEMS_ERROR";

export interface Payment {
    loading: boolean;
    payment: {};
    nftS: []
}

export type createPaymentLoading = {
    type: typeof CREATE_PAYMENT_LOADING;
}
export type createPaymentError = {
    type: typeof CREATE_PAYMENT_ERROR;
}
export type createPaymentSuccess = {
    type: typeof CREATE_PAYMENT_SUCCESS;
    payload: {
        payment: {}
    }
}

export type getBoughtItemsLoading = {
    type: typeof GET_BOUGHT_ITEMS_LOADING;
}
export type getBoughtItemsError = {
    type: typeof GET_BOUGHT_ITEMS_ERROR;
}
export type getBoughtItemsSuccess = {
    type: typeof GET_BOUGHT_ITEMS_SUCCESS;
    payload: {
        nftS: []
    }
}

export type PaymentDispatchTypes = 
    | createPaymentLoading
    | createPaymentError
    | createPaymentSuccess
    | getBoughtItemsLoading
    | getBoughtItemsError
    | getBoughtItemsSuccess