import { Dispatch } from "redux"
import { NftsDispatchTypes,GET_ALL_NFTS_LOADING,GET_ALL_NFTS_ERROR,GET_ALL_NFTS_SUCCESS } from "@/redux/types/NftsActionTypes"
import axios from "axios"

export const GetAllNfts = () => async(dispatch: Dispatch<NftsDispatchTypes>) => {
    console.log("GetAllNfts action called")
    try {
        dispatch({
            type:GET_ALL_NFTS_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/nft/all-nfts`).then((res)=>{
            dispatch({
                type:GET_ALL_NFTS_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_ALL_NFTS_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_ALL_NFTS_ERROR
        })
    }
}