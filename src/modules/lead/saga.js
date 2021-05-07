import {call,put,takeEvery} from 'redux-saga/effects'
import * as Actions from './constants';
import {
    getLeadService,
} from './services';

function* fetchLeadsErrorSaga(error) {
    yield put({
        type: Actions.FETCH_LEAD_ERROR,
        payload: error
    })

}

function* fetchLeadSuccess(data){
    yield put({
        type: Actions.FETCH_LEAD_SUCCESS,
        payload: data
    })
}

function* fetchLeadSaga() {
    try{
        const Leads = yield call(getLeadService)
        console.log('lead data is')
        console.log(Leads)
        // yield call(fetchLeadSuccess,Leads)
    } catch (e) {
        yield call(fetchLeadsErrorSaga,e)
    }

}

export default function* LeadSaga(){
 yield takeEvery(Actions.FETCH_LEAD_BEGIN,fetchLeadSaga)
}