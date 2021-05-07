import * as Actions from './constants';

export const fetchLeadBegin = () => ({
    type: Actions.FETCH_LEAD_BEGIN,
})

export const fetchLeadSuccess = (data) =>({
    type: Actions.FETCH_LEAD_SUCCESS,
    payload: data
})

export const fetchLeadError = (error) => ({
    type: Actions.FETCH_LEAD_ERROR,
    payload: {error}
})