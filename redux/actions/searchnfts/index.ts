import { Dispatch } from "redux"
import axios from "axios"
import {
    SearchNftsDispatchTypes,
    GET_SEARCHED_NFTS_LOADING,
    GET_SEARCHED_NFTS_ERROR,
    GET_SEARCHED_NFTS_SUCCESS
} from "@/redux/types/SearchNftActionType"


export const GetSearchNft = (item_name:string) => async(dispatch: Dispatch<SearchNftsDispatchTypes>) => {
    console.log("GetSearchNft action called..")
    try {
        dispatch({
            type:GET_SEARCHED_NFTS_LOADING
        })
         await axios.get(`${process.env.BACKEND_BASE_URL}/api/nft/nfts/by-name/${item_name}`).then((res)=>{
            console.log(res.data, "searched NFTs")
            dispatch({
                type:GET_SEARCHED_NFTS_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_SEARCHED_NFTS_ERROR
            })  
        })
    } catch (error) {
        dispatch({
            type:GET_SEARCHED_NFTS_ERROR
        })
    }
}