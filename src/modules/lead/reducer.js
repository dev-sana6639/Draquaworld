import {fromJS} from 'immutable';
import * as Actions from './constants';

const initialState = fromJS({
    data: [],
    loading: false,
    error: null,
})

export default function LeadReducer (state = initialState,action){
 
  switch(action.type) {
      case Actions.FETCH_LEAD_BEGIN:
          return {
              ...state,
              loading: true,
          }
        
      case Actions.FETCH_LEAD_SUCCESS:
          return {
              ...state,

              data: action.payload,
              loading: false,
          }
        case Actions.FETCH_LEAD_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false,
            }
      default:
        return state
  }
}