import {createSelector} from 'reselect';

export const rootTicket = state => state.ticket;

export const GetticketSelector = createSelector(
    rootTicket,
    data => data.grabbedtickets

)

export const ticketExist = createSelector(
    rootTicket,
    data => data.grabbedtickets
)