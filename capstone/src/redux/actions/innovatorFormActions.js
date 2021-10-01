import axios from "axios";
import {
    INNOVATORFORM1_FAIL,
    INNOVATORFORM1_REQUEST,
    INNOVATORFORM1_SUCCESS,
    INNOVATORFORM2_FAIL,
    INNOVATORFORM2_REQUEST,
    INNOVATORFORM2_SUCCESS,
    INNOVATORFORM3_FAIL,
    INNOVATORFORM3_REQUEST,
    INNOVATORFORM3_SUCCESS
} from "../constants/innovatorForm";
import { deployLink } from '../constants/config.js';

export const innovatorForm1 = (data) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    // console.log(data, token);
    dispatch({ type: INNOVATORFORM1_REQUEST });

    try {
        const idea = await axios.post(`${deployLink}/idea/part1`, data, {   //check
            headers: {
                authorization: `Bearer ${token}`,
            }
        },
        )
        // console.log(idea.data, 'form1')
        dispatch({ type: INNOVATORFORM1_SUCCESS, payload: idea.data });
        // alert('First part submitted successfully continue with part 2');
    } catch (error) {
        // console.log(error, 'form1')
        dispatch({ type: INNOVATORFORM1_FAIL, payload: error });
        // alert('Form submission not successful try again');
    }
}

export const innovatorForm2 = (data) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;

    // console.log(data, token);
    dispatch({ type: INNOVATORFORM2_REQUEST });
    try {
        const idea = await axios.patch(`${deployLink}/idea/part2`, data, {     //check
            headers: {
                authorization: `Bearer ${token}`,
            }
        },
        )
        // console.log(idea.data, 'form2')
        dispatch({ type: INNOVATORFORM2_SUCCESS, payload: idea.data });
    } catch (error) {
        // console.log(error, 'form2')
        dispatch({ type: INNOVATORFORM2_FAIL, payload: error });
    }
}

export const innovatorForm3 = (data) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;
    // console.log(data, token);
    dispatch({ type: INNOVATORFORM3_REQUEST });
    try {
        const idea = await axios.patch(`${deployLink}/idea/part3`, data, {   //check
            headers: {
                authorization: `Bearer ${token}`,
            }
        },
        )
        // console.log(idea.data, 'form3')
        dispatch({ type: INNOVATORFORM3_SUCCESS, payload: idea.data })
    } catch (error) {
        // console.log(error, 'form3')
        dispatch({ type: INNOVATORFORM3_FAIL, payload: error });
    }
}