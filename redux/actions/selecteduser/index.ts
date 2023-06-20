import { Dispatch } from "redux"
import {
    SelectedUserDispatchTypes,
    GET_SELECTED_USER_LOADING,
    GET_SELECTED_USER_ERROR,
    GET_SELECTED_USER_SUCCESS,
    GET_SELECTED_USER_NFTS_LOADING,
    GET_SELECTED_USER_NFTS_ERROR,
    GET_SELECTED_USER_NFTS_SUCCESS
} from "../../types/SelectedUserActionTypes"
import axios from "axios"


export const GetSelectedUserDetails = (id:string) => async (dispatch: Dispatch<SelectedUserDispatchTypes>) => {
    console.log("GetSelectedUserDetails Action called")
    try {
        dispatch({
            type:GET_SELECTED_USER_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/user/users/${id}`).then((res)=>{
            dispatch({
                type:GET_SELECTED_USER_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_SELECTED_USER_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_SELECTED_USER_ERROR
        })
    }
}


export const GetSelectedUserNfts = (id:string) => async(dispatch: Dispatch<SelectedUserDispatchTypes>)=>{
    console.log("GetSelectedUserNfts Action called")
    try {
        dispatch({
            type:GET_SELECTED_USER_NFTS_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/nft/nfts/creator/${id}`).then((res)=>{
            dispatch({
                type:GET_SELECTED_USER_NFTS_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_SELECTED_USER_NFTS_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_SELECTED_USER_NFTS_ERROR
        })
    }
}