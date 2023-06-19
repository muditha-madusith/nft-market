//user register types
export const USER_REGISTER_LOADING = "USER_REGISTER_LOADING"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR"

//user login types
export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"

//user get types
export const USER_GET_LOADING = "USER_GET_LOADING"
export const USER_GET_SUCCESS = "USER_GET_SUCCESS"
export const USER_GET_ERROR = "USER_GET_ERROR"

//use logout types
export const USER_LOGOUT_LOADING = "USER_LOGOUT_LOADING";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

//user state interface
export interface IUser{
    id: string,
    name:string,
    email:string,
    profile_pic:string
}

//Auth initial state
export interface IAuth{
    loading:boolean,
    token:string,
    userDetails:IUser
}

//user register 
export type userRegisterLoading = {
    type : typeof USER_REGISTER_LOADING
}

export type userRegisterError = {
    type : typeof USER_REGISTER_ERROR
}
export type UserRegisterSuccess ={
    type : typeof USER_REGISTER_SUCCESS;
    payload: {
        token:string
    }
}

//user login 
export type userLoginLoading = {
    type : typeof USER_LOGIN_LOADING
}

export type userLoginError = {
    type : typeof USER_LOGIN_ERROR
}
export type UserLoginSuccess = {
    type : typeof USER_LOGIN_SUCCESS;
    payload: {
        token:string,
        id:string,
        userName:string
    }
}

//user logout 
export type userLogoutLoading = {
    type : typeof USER_LOGOUT_LOADING
}
export type userLogoutError = {
    type : typeof USER_LOGOUT_ERROR
}
export type UserLogoutSuccess = {
    type : typeof USER_LOGOUT_SUCCESS;
    payload: {
        _id:string,
        username:string,
        email:string,
        profileUrl:string
      }
}


//user get
export type userGetLoading = {
    type : typeof USER_GET_LOADING
}
export type userGetError = {
    type : typeof USER_GET_ERROR
}
export type UserGetSuccess = {
    type : typeof USER_GET_SUCCESS;
    payload: {
      _id:string,
      username:string,
      email:string,
      profileUrl:string
    }
}

//export types
export type AuthDispatchTypes =
userRegisterLoading
   | userRegisterError
   | UserRegisterSuccess
   | userLoginLoading 
   | userLoginError 
   | UserLoginSuccess
   | userGetLoading
   | userGetError
   | UserGetSuccess
   | userLogoutLoading
   | userLogoutError
   | UserLogoutSuccess
