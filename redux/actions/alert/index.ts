import { Dispatch } from "redux"
import {
    AlertDispatchTypes,
    SHOW_ALERT
} from "@/redux/types/AlertActionType"


export const setAlert = ( mes: string, sta: string ) => async(dispatch: Dispatch<AlertDispatchTypes>)=>{
    try {
        dispatch({
            type: SHOW_ALERT,
            payload: {message: mes, status: sta }
        });
    } catch (error) {
        console.log(error)
    }
}