import {
  AuthDispatchTypes,
  IAuth,
  USER_LOGIN_LOADING,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_GET_LOADING,
  USER_GET_ERROR,
  USER_GET_SUCCESS,
  USER_LOGOUT_LOADING,
  USER_LOGOUT_ERROR,
  USER_LOGOUT_SUCCESS,
} from "../../types/AuthActionTypes";

const initialState: IAuth = {
  loading: false,
  token: "",
  userDetails: {
    id: "",
    name: "",
    email: "",
    profile_pic: "",
  },
};

const authReducer = (
  state: IAuth = initialState,
  action: AuthDispatchTypes
) => {
  switch (action.type) {
    
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };
      break;
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };


    case USER_LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: {
          id: "",
          name: "",
          email: "",
          profile_pic: "",
        },
      };


    case USER_GET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_ERROR:
      return {
        ...state,
        loading: false,
      };
    case USER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: {
          id: action.payload._id,
          name: action.payload.username,
          email: action.payload.email,
          profile_pic: action.payload.profileUrl,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
