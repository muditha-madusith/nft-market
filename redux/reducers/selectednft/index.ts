import {
  SelectedNftDispatchTypes,
  SNft,
  GET_SELECTED_NFT_LOADING,
  GET_SELECTED_NFT_ERROR,
  GET_SELECTED_NFT_SUCCESS,
} from "../../types/SelectedNftActionType";

const initialState: SNft = {
  loading: false,
  nftDetails: {
    id: "",
    name: "",
    price: 0,
    description: "",
    image: "",
    creator: "",
    quantity: 0,
  },
};

const selectedNftReducer = (
  state: SNft = initialState,
  action: SelectedNftDispatchTypes
) => {
  switch (action.type) {
    case GET_SELECTED_NFT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SELECTED_NFT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case GET_SELECTED_NFT_SUCCESS:
      return {
        ...state,
        loading: false,
        nftDetails: {
          id: action.payload._id,
          name: action.payload.name,
          price: action.payload.price,
          description: action.payload.description,
          image: action.payload.image,
          creator: action.payload.creator,
          quantity: action.payload.quantity,
        },
      };
    default:
      return state;
  }
};

export default selectedNftReducer;