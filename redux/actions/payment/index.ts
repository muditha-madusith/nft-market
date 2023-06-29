import { Dispatch } from "redux"
import axios from "axios"
import { AlertDispatchTypes, SHOW_ALERT } from "@/redux/types/AlertActionType"
import {
    PaymentDispatchTypes,
    CREATE_PAYMENT_LOADING,
    CREATE_PAYMENT_ERROR,
    CREATE_PAYMENT_SUCCESS,
    GET_BOUGHT_ITEMS_LOADING,
    GET_BOUGHT_ITEMS_ERROR,
    GET_BOUGHT_ITEMS_SUCCESS
} from "../../types/PaymentActionTypes"


export const CreatePayment = (userData: {}, id: string) => async(dispatch: Dispatch<PaymentDispatchTypes|AlertDispatchTypes>)=>{
    console.log("Createpayment action called.")

    try {
        dispatch({
            type:CREATE_PAYMENT_LOADING,
            loading: true
        })
        const response = await axios.post(`${process.env.BACKEND_BASE_URL}/api/nft/buy/${id}`,
        userData,
        )
        dispatch({
            type: CREATE_PAYMENT_SUCCESS,
            payload: response.data
        })
        dispatch({
            type: SHOW_ALERT,
            payload: { message: "Payment Success", status: "success"}
        })
        console.log(response.data,"response in register seller")
     } catch (error:any) {
        console.log(error,"error in register seller")
        dispatch({
            type:CREATE_PAYMENT_ERROR,
            loading: false
        })
        dispatch({
            type: SHOW_ALERT,
            payload: { message: "Error in Create Payment", status: "error"}
        })
     }
}


export const GetBoughtItems = ( id: string) => async(dispatch: Dispatch<PaymentDispatchTypes|AlertDispatchTypes>)=>{
    console.log("GetBoughtItems action called.")

    try {
        dispatch({
            type:GET_BOUGHT_ITEMS_LOADING,
            loading: true
        })
        const response = await axios.get(`${process.env.BACKEND_BASE_URL}/api/nft/my-bought-nfts/${id}`)
        dispatch({
            type: GET_BOUGHT_ITEMS_SUCCESS,
            payload: response.data
        })
        console.log(response.data,"response in GetBoughtItems seller")
     } catch (error:any) {
        console.log(error,"error in GetBoughtItems seller")
        dispatch({
            type:GET_BOUGHT_ITEMS_ERROR,
            loading: false
        })
     }
}