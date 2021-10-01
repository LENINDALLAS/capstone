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
            var fill = [];
            if (action.payload.length === 0) {
                return {
                    ...state,
                    allIdea: state.allIdeaBackup,
                };
            } else {


                for (let i = 0; i < action.payload.length; i++) {
                    const ideas = state.allIdeaBackup
                    for (let j = 0; j < ideas.length; j++) {
                        let idea = ideas[j];
                        for (let k = 0; k < idea.category.length; k++) {
                            if (action.payload[i] === idea.category[k]) {
                                fill.push(ideas[j])
                                // console.log(ideas[j], 'category array')
                            }
                        }
                    }
                }
                if (fill.length === 0) {
                    return state;
                }
            }
            // console.log(fill, 'filee')
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