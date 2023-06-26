import {
  SellerDispatchTypes,
  Seller,
  SELLER_REGISTER_LOADING,
  SELLER_REGISTER_ERROR,
  SELLER_REGISTER_SUCCESS,
  GET_SELLER_LOADING,
  GET_SELLER_ERROR,
  GET_SELLER_SUCCESS,
} from "../../types/SellerActionType";

const initialState: Seller = {
  loading: false,
  seller: "",
  bankName: "",
  accountNumber: 0,
  branch: "",
  fullName: "",
  branchCode: 0,
};

const sellerReducer = (
  state: Seller = initialState,
  action: SellerDispatchTypes
) => {
  switch (action.type) {

    case SELLER_REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SELLER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SELLER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        seller: action.payload.seller,
        bankName: action.payload.bankName,
        accountNumber: action.payload.accountNumber,
        branch: action.payload.branch,
        fullName: action.payload.fullName,
        branchCode: action.payload.branchCode,
      };

    case GET_SELLER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SELLER_ERROR:
      return {
        ...state,
        loading: false,
        seller: "",
        bankName: "",
        accountNumber: 0,
        branch: "",
        fullName: "",
        branchCode: 0
      };
    case GET_SELLER_SUCCESS:
      return {
        ...state,
        loading: false,
        seller: action.payload.seller,
        bankName: action.payload.bankName,
        accountNumber: action.payload.accountNumber,
        branch: action.payload.branch,
        fullName: action.payload.fullName,
        branchCode: action.payload.branchCode,
      };

    default:
      return state;
  }
};

export default sellerReducer;
