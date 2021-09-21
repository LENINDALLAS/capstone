import { GETALLIDEA_FAIL, GETALLIDEA_REQUEST, GETALLIDEA_SUCCESS, GETFILTERCATEGORY } from "../constants/getAllIdea";

const initialState = {
    loading: false,
};

export const getAllIdeaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLIDEA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GETALLIDEA_SUCCESS:
            return {
                ...state,
                loading: false,
                allIdea: action.payload,
                allIdeaBackup: action.payload
            }
        case GETALLIDEA_FAIL:
            return {
                ...state,
                loading: false,
                allIdeaError: action.payload
            }
        case GETFILTERCATEGORY:

            if (action.payload.length === 0) {
                return {
                    ...state,
                    allIdea: state.allIdeaBackup,
                };
            } else {
                var fill = []
                action.payload.map((cat) => {
                    state.allIdea.filter((each) => {
                        if (each.category.indexOf(cat) >= 0) {
                            fill.push(each)
                        }
                    })
                })
                if (fill.length === 0) {
                    return state;
                }

            }
            console.log(fill)
            return {
                ...state,
                allIdea: fill
            };
        default:
            return state;
    }
}

export const getAllCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}