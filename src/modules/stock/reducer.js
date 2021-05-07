import { fromJS,set } from "immutable";
// import {} from 'redux-persist/lib/constants';
import * as Actions from './constants';
import {
    STOCK_FETCH_BEGIN,
    STOCK_FETCH_SUCCESS,
    STOCK_FETCH_ERROR,
} from './constants'

const initialState = fromJS({
     data: [],
     loading: false,
     error: null,

})

export default function StockReducer(state = initialState,action){

    switch(action.type) {
        case STOCK_FETCH_BEGIN:
           
            return {
                ...state,
                loading: true,

            }

        case STOCK_FETCH_SUCCESS:
           
            return {
                ...state,
                loading: false,
                data: action.payload
              
            }
        default:
            return state
    }
}