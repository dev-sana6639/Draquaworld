import {createSelector} from 'reselect';

export const rootcommon = state => state.common;

export const loadingSelector = createSelector(
    rootcommon,
    data =>data.loading
)

export const isGettingStartSelector = createSelector(
     rootcommon,
     data => data.isGettingStarted
)