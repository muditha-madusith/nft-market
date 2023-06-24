import {
    GET_SEARCHED_NFTS_LOADING,
    GET_SEARCHED_NFTS_ERROR,
    GET_SEARCHED_NFTS_SUCCESS,
    SearchNftsDispatchTypes,
    searchedNft
} from "../../types/SearchNftActionType"

const initialState: searchedNft = {
    nfts: [],
    loading: false
}

const searchNftReducer = (
    state: searchedNft = initialState,
    action: SearchNftsDispatchTypes
) => {
    switch(action.type) {
        case GET_SEARCHED_NFTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_SEARCHED_NFTS_ERROR:
            return {
                ...state,
                loading: false
            }
        case GET_SEARCHED_NFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                nfts: action.payload
            };
        default:
            return state;
    }
}

export default searchNftReducer;