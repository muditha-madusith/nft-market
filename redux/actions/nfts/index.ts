import { Dispatch } from "redux"
import { 
    NftsDispatchTypes,
    GET_ALL_NFTS_LOADING,
    GET_ALL_NFTS_ERROR,
    GET_ALL_NFTS_SUCCESS,
    NFT_CREATE_LOADING,
    NFT_CREATE_ERROR,
    NFT_CREATE_SUCCESS
} from "@/redux/types/NftsActionTypes"
import axios from "axios"
import { AlertDispatchTypes, SHOW_ALERT } from "@/redux/types/AlertActionType"


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


export const CreateNft = (formData: {}, token:string) => async(dispatch: Dispatch<NftsDispatchTypes|AlertDispatchTypes>)=>{
    console.log("CreateNft action called")
 try {
    dispatch({
        type:NFT_CREATE_LOADING
    })
    const response = await axios.post(
        'https://nft-market-api-production.up.railway.app/api/nft/create',
        formData,
        {
          headers: {
            Authorization: token
          }
        }
    );
    dispatch({
        type:NFT_CREATE_SUCCESS,
    })
    dispatch({
        type: SHOW_ALERT,
        payload: { message: "NFT Created", status: "success"}
    })

    console.log(response.data,"response in CreateNft")
 } catch (error) {
    console.log(error,"error in CreateNft")
    dispatch({
        type:NFT_CREATE_ERROR
    })
    dispatch({
        type: SHOW_ALERT,
        payload: { message: "NFT create unsuccessful", status: "error"}
    })
 }
}