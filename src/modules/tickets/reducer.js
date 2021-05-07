import {fromJS} from 'immutable';
import * as Actions from './constants';

const initialState = {
    grabbedtickets: [],
    isTicketgrabbed: false,
}

export default function TicketReducer( state = initialState,action ) {
    
    switch(action.type) {
        

        case Actions.GRABTICKET:
           console.log('came to grabticket reducer')
            return {
                ...state,
            }

        case Actions.GRABTICKETSUCCESS:
         console.log('grabbed successfully')
         
         let exist_ticket = state.grabbedtickets.find(item => item.id === action.payload.id);

          if(exist_ticket){
              
              return {
                  ...state,
                  
              }
          }
           
          let item = action.payload;
          item.isTicketPresent = true;
           return {
               ...state,
               grabbedtickets: state.grabbedtickets.concat(item)

           }
        
        case Actions.CHECK_TICKET_SUCCESS:
            console.log('came to reducer')
            return {
                ...state,
                isTicketgrabbed: true,
            }
         
         default:
             return state
    }
}