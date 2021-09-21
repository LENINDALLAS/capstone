import axios from 'axios';
import { deployLink } from '../constants/config.js';
import {
    INNOVATORPROFILE_FAIL,
    INNOVATORPROFILE_REQUEST,
    INNOVATORPROFILE_SUCCESS
} from '../constants/innovatorProfile.js';

export const getInnovatorProfile = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;

    dispatch({ type: INNOVATORPROFILE_REQUEST });
    // console.log(id, token, 'getOneIdeaById');
    try {
        const { data } = await axios.get(`${deployLink}/innovator/profile`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        dispatch({ type: INNOVATORPROFILE_SUCCESS, payload: data });
        // console.log(data, 'INNOVATOR profile successfully');
    } catch (error) {

        // console.log(error, 'INNOVATOR profile error')
        dispatch({ type: INNOVATORPROFILE_FAIL, payload: error });
    }
};