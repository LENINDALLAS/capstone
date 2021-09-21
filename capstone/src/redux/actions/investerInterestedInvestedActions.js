import { deployLink } from '../constants/config.js';
import { GETONEIDEABYID_REQUEST } from '../constants/getAllIdea';

export const addToInterestedIdea = (id) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;

    dispatch({ type: GETONEIDEABYID_REQUEST });
    console.log(id, token, 'interested id');
    try {
        const data = await fetch(`${deployLink}/idea/${id}/interested`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        console.log(data, 'idea interested data saved successfully');
    } catch (error) {
        // console.log(error, 'idea interested data was not saved')

    }
}

export const addToInvestedIdea = (id) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.owner.user;


    // console.log(id, token, 'getOneIdeaById');
    try {
        const data = await fetch(`${deployLink}/idea/${id}/invest`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        console.log(data, 'idea invested data saved successfully');
    } catch (error) {

        // console.log(error, 'idea invested data was not saved')

    }
}