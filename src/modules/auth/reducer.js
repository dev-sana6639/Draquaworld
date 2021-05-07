
import {fromJS,List,set,Map} from 'immutable';

import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initialState = fromJS({
    isLogin: false,
    pending: false,
    user: null,
    invalidemailandpasswordError: undefined,
    })

export default function authReducer( state = initialState, action) {
    switch(action.type){
        case Actions.SIGN_IN:
           
            return{
                ...state
            }
        
        case Actions.SIGN_IN_SUCCESS:
          
            return {
             
                isLogin: true,
                user : action.payload,
            }
        
        case Actions.SIGN_IN_ERROR:
            return{
                ...state
            }
        case Actions.SIGN_OUT:
            return {
                ...state,
            }
        case Actions.SIGN_OUT_SUCCESS:
          
            return{
            
                isLogin: false,
                user: null
            }
        
        case Actions.INVALID_EMAIL_AND_PASSWORD:
            
            return {
                invalidemailandpasswordError: 'Invalid'
            }
        
        case Actions.INVALID_EMAIL_AND_PASSWORD_SUCCESS:
           
            return {
                invalidemailandpasswordError: undefined
            }

        default:
            return state;
    }
} 