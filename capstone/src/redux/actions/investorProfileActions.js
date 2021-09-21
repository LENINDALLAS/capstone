import axios from 'axios';
import { deployLink } from '../constants/config.js';
import {
    INVESTORPROFILE_FAIL,
    INVESTORPROFILE_REQUEST,
    INVESTORPROFILE_SUCCESS
} from '../constants/investorProfile';

export const getInvestorProfile = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;

    dispatch({ type: INVESTORPROFILE_REQUEST });
    // console.log(id, token, 'getOneIdeaById');
    try {
        const { data } = await axios.get(`${deployLink}/investor/profile`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        dispatch({ type: INVESTORPROFILE_SUCCESS, payload: data });
        // console.log(data, 'investor profile successfully');
    } catch (error) {

        // console.log(error, 'investor profile error')
        dispatch({ type: INVESTORPROFILE_FAIL, payload: error });
    }


}