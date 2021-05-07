import * as Actions from './constants';

export function signin(props){
 
    return{
        type: Actions.SIGN_IN,
        payload: props
    }
}

export function logout () {
   
    return {
        type: Actions.SIGN_OUT
    }
}

export function changeinvalidError() {
    
    return{
        type: Actions.INVALID_EMAIL_AND_PASSWORD
    }
}