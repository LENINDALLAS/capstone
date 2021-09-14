import { deployLink } from '../constants/config.js';
import axios from 'axios';
import { SIGNINFORINNOVATOR_FAIL, SIGNINFORINNOVATOR_REQUEST, SIGNINFORINNOVATOR_SUCCESS } from '../constants/signin.js';

export const innovatorSignin = (data) => async (dispatch) => {
    dispatch({ type: SIGNINFORINNOVATOR_REQUEST });
    try {
        const user = await axios.post(`${deployLink}/innovator/login`, data);
        console.log(user)
        dispatch({ type: SIGNINFORINNOVATOR_SUCCESS, payload: user });
    } catch (error) {
        console.log(error)
        dispatch({ type: SIGNINFORINNOVATOR_FAIL, payload: error })
    }
}

export const investorSignin = (data) => async (dispatch) => {
    console.log(data)
}