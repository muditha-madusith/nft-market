import { Dispatch } from "redux"
import {
    SelectedNftDispatchTypes,
    GET_SELECTED_NFT_LOADING,
    GET_SELECTED_NFT_ERROR,
    GET_SELECTED_NFT_SUCCESS
} from "../../types/SelectedNftActionType"
import axios from "axios"


export const GetSelectedNftDetails = (id:string) => async (dispatch: Dispatch<SelectedNftDispatchTypes>) => {
    console.log("GetSelectedNftDetails Action called")
    try {
        dispatch({
            type:GET_SELECTED_NFT_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/nft/nfts/${id}`).then((res)=>{
            dispatch({
                type:GET_SELECTED_NFT_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_SELECTED_NFT_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_SELECTED_NFT_ERROR
        })
    }
}