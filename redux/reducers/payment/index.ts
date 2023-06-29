import {
  PaymentDispatchTypes,
  Payment,
  CREATE_PAYMENT_LOADING,
  CREATE_PAYMENT_ERROR,
  CREATE_PAYMENT_SUCCESS,
  GET_BOUGHT_ITEMS_LOADING,
  GET_BOUGHT_ITEMS_ERROR,
  GET_BOUGHT_ITEMS_SUCCESS,
} from "../../types/PaymentActionTypes";

const initialState: Payment = {
  loading: false,
  payment: {},
  nftS: [],
};

const paymentReducer = (
  state: Payment = initialState,
  action: PaymentDispatchTypes
) => {
  switch (action.type) {
    case CREATE_PAYMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PAYMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        payment: action.payload,
      };


    case GET_BOUGHT_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOUGHT_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case GET_BOUGHT_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        nftS: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
