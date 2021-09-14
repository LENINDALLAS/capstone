import { SIGNINFORINNOVATOR_FAIL, SIGNINFORINNOVATOR_REQUEST, SIGNINFORINNOVATOR_SUCCESS, SIGNINFORINVESTOR_FAIL, SIGNINFORINVESTOR_REQUEST, SIGNINFORINVESTOR_SUCCESS } from "../constants/signin";


export const signinInnovatorReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case SIGNINFORINNOVATOR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGNINFORINNOVATOR_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,

            }
        case SIGNINFORINNOVATOR_FAIL:
            return {
                ...state,
                loading: false,
                userError: action.payload,
            }
        default:
            return state;
    }
}

export const signinInvestorReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case SIGNINFORINVESTOR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGNINFORINVESTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case SIGNINFORINVESTOR_FAIL:
            return {
                ...state,
                loading: false,
                userError: action.payload,
            }
        default:
            return state;
    }
}