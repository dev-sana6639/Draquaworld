import {fromJS,List,set,Map} from 'immutable';
import moment from 'moment';
import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initialState = {
    loading: true,
    isGettingStarted: false,

}

export default function commonReducer(state = initialState, action) {
  switch(action.type){

    case Actions.START_LOADING_SET:
      return{
        ...state,
        loading: true
      }
    

    case Actions.IS_GETTING_SUCCESS:
  
        return{
          ...state,
          loading: false,
          isGettingStarted: true
        }
      
    case Actions.STOP_IS_LOADING:
    console.log('came to stop loading reducer')
    return{
      ...state,
      loading: false,
      
    }
      
      default:
          return state;
  }
}