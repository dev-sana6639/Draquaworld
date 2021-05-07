import * as Actions from './constants';

export const  fetchstock = () => ({
    type: Actions.STOCK_FETCH_BEGIN
});

export const fetchStockError = (error ) => ({
    type: Actions.STOCK_FETCH_ERROR,
    payload: error
})

export const fetchStockSuccess = (data) =>({
        type: Actions.STOCK_FETCH_SUCCESS,
         payload: {data}
    
})
