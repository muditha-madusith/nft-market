import { Dispatch } from "redux"
import {AuthDispatchTypes,USER_REGISTER_LOADING,USER_REGISTER_ERROR,USER_LOGIN_LOADING,USER_LOGIN_ERROR,USER_LOGIN_SUCCESS ,
    USER_GET_LOADING,
    USER_GET_ERROR,
    USER_GET_SUCCESS,
    USER_LOGOUT_LOADING,
    USER_LOGOUT_ERROR,
    USER_LOGOUT_SUCCESS
} from "../../types/AuthActionTypes"
import axios from "axios"


export const RegisterUser = (name:string, email:string, password: string, password2:string, profileUrl:string) => async(dispatch: Dispatch<AuthDispatchTypes>)=>{
    console.log("RegisterUser action called")
 try {
    dispatch({
        type:USER_REGISTER_LOADING
    })
    const response = await axios.post(`${process.env.BACKEND_BASE_URL!}/api/user/register`,{
        username:name,
        email:email,
        password:password,
        password2:password2,
        profileUrl:profileUrl
    })
    console.log(response.data,"response in register user")
 } catch (error) {
    console.log(error,"error in register user")
    dispatch({
        type:USER_REGISTER_ERROR
    })
 }
}

export const LoginUser = ( email:string, password: string ) => async(dispatch: Dispatch<AuthDispatchTypes>)=>{
    console.log("LoginUser action called")
 try {
    dispatch({
        type:USER_LOGIN_LOADING
    })
    const response = await axios.post(`${process.env.BACKEND_BASE_URL!}/api/user/login`,{
        email:email,
        password:password,
    })
    if(!response.data.token){
        dispatch({
            type:USER_LOGIN_ERROR
        }) 
    }
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:response.data
    })
    if(response.data.token !== ""){
      return response.data.token
    }
    // return await response.data.token 
 } catch (error) {
    console.log(error,"error in login user")
    dispatch({
        type:USER_LOGIN_ERROR
    })
 }
}

export const GetUserDetails = (id:string) => async(dispatch: Dispatch<AuthDispatchTypes>)=>{
    console.log("GetUserDetails Action called")
    try {
        dispatch({
            type:USER_GET_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/user/users/${id}`).then((res)=>{
            dispatch({
                type:USER_GET_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:USER_GET_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:USER_GET_ERROR
        })
    }
}


export const LogoutUser = () => async(dispatch: Dispatch<AuthDispatchTypes>) => {
    console.log("LogoutUser action called")
    try {
        dispatch({
            type:USER_LOGOUT_LOADING
        })
         await axios.post(`${process.env.BACKEND_BASE_URL}/api/user/logout`).then((res)=>{
            dispatch({
                type:USER_LOGOUT_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:USER_LOGOUT_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:USER_LOGOUT_ERROR
        })
    }
}