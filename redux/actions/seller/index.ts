import { Dispatch } from "redux"
import axios from "axios"
import { AlertDispatchTypes, SHOW_ALERT } from "@/redux/types/AlertActionType"
import {
    SellerDispatchTypes,
    SELLER_REGISTER_LOADING,
    SELLER_REGISTER_ERROR,
    SELLER_REGISTER_SUCCESS,
    GET_SELLER_LOADING,
    GET_SELLER_ERROR,
    GET_SELLER_SUCCESS
} from "../../types/SellerActionType"


export const RegisterSeller = (formData: {}, token: string) => async(dispatch: Dispatch<SellerDispatchTypes|AlertDispatchTypes>)=>{
    console.log("Seller Create action called")
    try {
        dispatch({
            type:SELLER_REGISTER_LOADING,
            loading: true
        })
        const response = await axios.post(`${process.env.BACKEND_BASE_URL}/api/seller/create/seller`,
            formData,
        {
            headers: {
                Authorization: token
            }
        }
        )
        dispatch({
            type: SELLER_REGISTER_SUCCESS,
            payload: response.data
        })
        dispatch({
            type: SHOW_ALERT,
            payload: { message: "Seller Registration Success", status: "success"}
        })
        console.log(response.data,"response in register seller")
     } catch (error:any) {
        console.log(error,"error in register seller")
        dispatch({
            type:SELLER_REGISTER_ERROR,
            loading: false
        })
        dispatch({
            type: SHOW_ALERT,
            payload: { message: "Error in Seller Registration", status: "error"}
        })
     }
}

export const GetSeller = (id: string) => async(dispatch: Dispatch<SellerDispatchTypes|AlertDispatchTypes>)=>{
    console.log("Get Seller action called")
    try {
        dispatch({
            type:GET_SELLER_LOADING,
            loading: true
        })
        const response = await axios.get(`${process.env.BACKEND_BASE_URL}/api/seller/get-seller/${id}`
        )
        dispatch({
            type: GET_SELLER_SUCCESS,
            payload: response.data
        })
        console.log(response.data,"response in get seller")
     } catch (error:any) {
        console.log(error,"error in get seller")
        dispatch({
            type:GET_SELLER_ERROR,
            loading: false
        })
     }
}