import * as Actions from './constants';

export const isgettingstart = () =>({
    type: Actions.IS_GETTING_START,
})

export const isLoading = () =>({
    type: Actions.IS_LOADING
}) 

export const stopisLoading = () =>({
    type:Actions.IS_LOADING_FALSE
})

export const startLoading =() =>({
    type:Actions.START_LOADING
})