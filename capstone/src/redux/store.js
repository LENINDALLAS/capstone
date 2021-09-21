import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { getAllCategoryReducer, getAllIdeaReducer } from './reducers/getAllIdeaReducer.js';
import { getOneIdeaByIdReducer } from './reducers/getOneIdeaByIdReducer.js';
import {
    innnovatorForm1Reducer,
    innnovatorForm2Reducer,
    innnovatorForm3Reducer
} from './reducers/innovatorFormReducer.js';
import { innovatorProfileReducer } from './reducers/innovatorProfileReducer.js';
import { investorProfileReducer } from './reducers/investorProfileReducer.js';
import { removeReducer } from './reducers/ownerReducer.js';
import { signinInnovatorReducer, signinInvestorReducer } from './reducers/signinReducer.js';
import { signupInnovatorReducer, signupInvestorReducer } from './reducers/signupReducer.js';

const initialState = {
    signupInnovator: {
        loading: false
    },
    signupInvestor: {
        loading: false
    }
};

const reducer = combineReducers({
    signupInnovator: signupInnovatorReducer,
    signupInvestor: signupInvestorReducer,
    signinInnovator: signinInnovatorReducer,
    signinInvestor: signinInvestorReducer,
    owner: removeReducer,
    getAllIdea: getAllIdeaReducer,
    getAllCategory: getAllCategoryReducer,
    innovatorForm1: innnovatorForm1Reducer,
    innovatorForm2: innnovatorForm2Reducer,
    innovatorForm3: innnovatorForm3Reducer,
    getOneIdeaById: getOneIdeaByIdReducer,
    investorProfile: investorProfileReducer,
    innovatorProfile: innovatorProfileReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;