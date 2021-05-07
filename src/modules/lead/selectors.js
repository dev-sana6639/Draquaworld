import {createSelector} from 'reselect'

export const rootLead = state => state.lead;

export const LeadSelector = createSelector(
    rootLead,
    data => data.data
)