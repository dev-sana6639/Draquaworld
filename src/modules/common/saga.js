
import {put,call,takeEvery,delay} from 'redux-saga/effects';
import * as Actions from './constants';

function* isLoadingSaga(){
 

    yield delay(2000)
    
    yield put({
        type: Actions.IS_LOADING_FALSE

    })
}

export default function* CommonSaga() {
    yield takeEvery(Actions.IS_LOADING, isLoadingSaga)
}
