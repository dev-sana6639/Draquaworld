import {fromJS,List,set,Map} from 'immutable';
import moment from 'moment';
import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initialState = fromJS({
    loading: true,
    isGettingStarted: false,

})

export default function commonReducer(state = initialState, action) {
  switch(action.type){

    case Actions.IS_LOADING:
  
      return{
        ...state,
      }
    case Actions.IS_LOADING_FALSE:
    
      return {
        ...state,
        loading: false,
      }

    case Actions.IS_GETTING_SUCCESS:
  
        return{
          ...state,
          loading: false,
          isGettingStarted: true
        }
      
      default:
          return state;
  }
}