import { GETONEIDEABYID_FAIL, GETONEIDEABYID_REQUEST, GETONEIDEABYID_SUCCESS } from "../constants/getAllIdea";

const initialState = {
    loading: false,
};

export const getOneIdeaByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETONEIDEABYID_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GETONEIDEABYID_SUCCESS:
            return {
                ...state,
                loading: false,
                ideaById: action.payload
            }
        case GETONEIDEABYID_FAIL:
            return {
                ...state,
                loading: false,
                ideaByIdError: action.payload
            }
        default:
            return state;
    }
}