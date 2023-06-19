//use get allusers types
export const GET_ALL_USERS_LOADING = "GET_ALL_USERS_LOADING";
export const GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";


export interface User {
  id: number;
  name: string;
  email: string;
  profileUrl: string;
}

export interface Users {
  loading: boolean;
  users: User[];
  error: null | string;
}


//get all users
export type getAllUsersLoading = {
  type: typeof GET_ALL_USERS_LOADING;
};
export type getAllUsersError = {
  type: typeof GET_ALL_USERS_ERROR;
};
export type getAllUsersSuccess = {
  type: typeof GET_ALL_USERS_SUCCESS;
  payload: User[];
};


export type UsersDispatchTypes =
  | getAllUsersLoading
  | getAllUsersError
  | getAllUsersSuccess;
