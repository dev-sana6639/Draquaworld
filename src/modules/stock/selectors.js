import {createSelector} from 'reselect';

export const rootstock = state => state.stock;

export const GetStockSelector = createSelector(
    rootstock,
    data => data.data
)