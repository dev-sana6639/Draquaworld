import * as Actions from './constants';

export const GrabTicket = ( ticket ) => {

    return{
        type: Actions.GRABTICKET,
        payload: ticket
    }
}

export const CheckItem = (id) => {
    console.log('came to check item action')
    return{
        type: Actions.CHECK_TICKET,
        payload: id

    }
}