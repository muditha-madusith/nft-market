import {
  GET_ALL_USERS_LOADING,
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_SUCCESS,
  UsersDispatchTypes,
  Users,
} from "../../types/UsersActionTypes";

const initialState: Users = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (
  state: Users = initialState,
  action: UsersDispatchTypes
) => {
  switch (action.type) {
    case GET_ALL_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'An error occurred while fetching users.'
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
