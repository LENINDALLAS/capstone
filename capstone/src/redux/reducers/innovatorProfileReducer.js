import {
    INNOVATORPROFILE_FAIL,
    INNOVATORPROFILE_REQUEST,
    INNOVATORPROFILE_SUCCESS
} from "../constants/innovatorProfile";

const initialState = {
    loading: false,
};

export const innovatorProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INNOVATORPROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case INNOVATORPROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                innovatorProfile: action.payload
            }
        case INNOVATORPROFILE_FAIL:
            return {
                ...state,
                loading: false,
                innovatorProfileError: action.payload
            }
        default:
            return state;
    }
}