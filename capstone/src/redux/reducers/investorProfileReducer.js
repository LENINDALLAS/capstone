import {
    INVESTORPROFILE_FAIL,
    INVESTORPROFILE_REQUEST,
    INVESTORPROFILE_SUCCESS
} from "../constants/investorProfile";

const initialState = {
    loading: false,
};

export const investorProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INVESTORPROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case INVESTORPROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                investorProfile: action.payload
            }
        case INVESTORPROFILE_FAIL:
            return {
                ...state,
                loading: false,
                investorProfileError: action.payload
            }
        default:
            return state;
    }
}