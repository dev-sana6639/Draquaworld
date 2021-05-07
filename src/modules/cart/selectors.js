import {createSelector} from 'reselect';

export const rootCart = state => state.cart;

export const getCartProductSelector = createSelector(
    rootCart,
    data => data.cart
)

export const getcarsize = createSelector(
    rootCart,
    data =>Object.keys(data.cart).length
    //  data.cart.length
)

export const getTotalPrice = createSelector(
    rootCart,
    data => data.total
)
