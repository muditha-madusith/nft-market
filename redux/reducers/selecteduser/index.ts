import {
    SelectedUserDispatchTypes,
    SUser,
    GET_SELECTED_USER_LOADING,
    GET_SELECTED_USER_ERROR,
    GET_SELECTED_USER_SUCCESS,
    GET_SELECTED_USER_NFTS_LOADING,
    GET_SELECTED_USER_NFTS_ERROR,
    GET_SELECTED_USER_NFTS_SUCCESS
} from "../../types/SelectedUserActionTypes"


const initialState : SUser = {
    loading: false,
    userDetails: {
        id: "",
        name: "",
        email: "",
        profile_pic: "",
    },
    userNfts: []
}

const selectedUserReducer = (
    state: SUser = initialState,
    action: SelectedUserDispatchTypes
) => {
    switch (action.type) {

        case GET_SELECTED_USER_LOADING:
            return{
                ...state,
                loading: true
            };
        case GET_SELECTED_USER_ERROR:
            return{
                ...state,
                loading: false
            };
        case GET_SELECTED_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                userDetails: {
                    id: action.payload._id,
                    name: action.payload.username,
                    email: action.payload.email,
                    profile_pic: action.payload.profileUrl
                }
            }

        
            case GET_SELECTED_USER_NFTS_LOADING:
                return {
                  ...state,
                  loading: true,
                };
              case GET_SELECTED_USER_NFTS_ERROR:
                return {
                  ...state,
                  loading: false,
                };
              case GET_SELECTED_USER_NFTS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  userNfts: action.payload
                };

            default:
              return state;
              
    }
}


export default selectedUserReducer;