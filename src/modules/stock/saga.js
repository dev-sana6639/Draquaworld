import {call,put,takeEvery} from 'redux-saga/effects'; 

import * as Actions from './constants';
import {fetchstockService} from './service';

function* fetchStockErrorSaga(error) {
    yield put({
        type: Actions.STOCK_FETCH_ERROR,
        payload: error
    })
}

function* fetchStockSuccessSaga(stocks){
    yield put({
        type: Actions.STOCK_FETCH_SUCCESS,
        payload: stocks
    })
}

function* fetchstockSaga() {
    
    try {
        const stocks = yield call(fetchstockService)
        
        
    
       yield call(fetchStockSuccessSaga,stocks)
    } catch (e) {
       yield call(fetchStockErrorSaga, e)
    
    }
}

export default function* StockSaga(){
 
  yield takeEvery(Actions.STOCK_FETCH_BEGIN, fetchstockSaga)
}