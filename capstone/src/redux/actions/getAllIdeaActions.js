import axios from "axios";
import {
    GETALLCATEGORY_REQUEST,
    GETALLIDEA_FAIL,
    GETALLIDEA_REQUEST,
    GETALLIDEA_SUCCESS,
    GETONEIDEABYID_FAIL,
    GETONEIDEABYID_REQUEST,
    GETONEIDEABYID_SUCCESS
} from "../constants/getAllIdea";
import { deployLink } from '../constants/config.js';



export const getAllIdea = (filter) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    // console.log(token, 'get all idea actions');

    // console.log('filter query', filter);

    dispatch({ type: GETALLIDEA_REQUEST });

    try {
        const { data } = await axios.get(`${deployLink}/idea`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        dispatch({ type: GETALLIDEA_SUCCESS, payload: data });
        // console.log(data, 'get all idea actions success')
    } catch (error) {
        // console.log(error)
        dispatch({ type: GETALLIDEA_FAIL, payload: error });
    }
}

export const getOneIdeaById = (id) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;

    dispatch({ type: GETONEIDEABYID_REQUEST });
    // console.log(id, token, 'getOneIdeaById');
    try {
        const { data } = await axios.get(`${deployLink}/idea/${id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        dispatch({ type: GETONEIDEABYID_SUCCESS, payload: data });
        console.log(data, 'getOneIdeaById success');
    } catch (error) {

        // console.log(error, 'getOneIdeaById')
        dispatch({ type: GETONEIDEABYID_FAIL, payload: error });
    }
}

export const getAllCategory = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    console.log(token, 'get category actions');
    dispatch({ type: GETALLCATEGORY_REQUEST });

    try {
        const allCategory = await axios.get('route', {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        console.log(allCategory, 'get all category actions success')
    } catch (error) {
        console.log(error)
    }
};