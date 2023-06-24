import {
    Alert,
    AlertDispatchTypes,
    SHOW_ALERT,
} from "../../types/AlertActionType"


const initialState : Alert = {
    alertMessage: {
        message:"",
        status: ""
    }
}

const alertReducer = (
    state: Alert = initialState,
    action: AlertDispatchTypes
) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return {
                ...state,
                alertMessage: action.payload,
            }

        default:
            return state;
    }
}

export default alertReducer;