import { func } from 'prop-types';
import {call,put,takeEvery} from 'redux-saga/effects'
import * as Actions from './constants';

function* grabticketsuccess(ticket) {
    yield put({
        type: Actions.GRABTICKETSUCCESS,
        payload: ticket.payload
    })
}

function* grabticketSaga(ticket){

   
   yield call(grabticketsuccess, ticket)
}
function* checkticketSaga(id){
    console.log('id is')
    console.log(id.payload)

    yield put({
        type: Actions.CHECK_TICKET_SUCCESS,
        payload: id.payload
    })
    
}

export default function* TicketSaga() {
  
    yield takeEvery( Actions.GRABTICKET, grabticketSaga )
    yield takeEvery(Actions.CHECK_TICKET,checkticketSaga)
}