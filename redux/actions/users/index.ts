import { Dispatch } from "redux"
import { UsersDispatchTypes,GET_ALL_USERS_LOADING,GET_ALL_USERS_ERROR,GET_ALL_USERS_SUCCESS } from "@/redux/types/UsersActionTypes"
import axios from "axios"

export const GetAllUsers = () => async(dispatch: Dispatch<UsersDispatchTypes>) => {
    console.log("GetAllUsers action called")
    try {
        dispatch({
            type:GET_ALL_USERS_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/user/users`).then((res)=>{
            dispatch({
                type:GET_ALL_USERS_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_ALL_USERS_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_ALL_USERS_ERROR
        })
    }
}