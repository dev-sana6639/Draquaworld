import {all} from 'redux-saga/effects';
import authSaga from './modules/auth/saga';
import StockSaga from './modules/stock/saga';
import LeadSaga from './modules/lead/saga';
import CartSaga from './modules/cart/saga';
import TicketSaga from './modules/tickets/saga';
import CommonSaga from './modules/common/saga'

export default function* rootSagas() {
   
    yield all([
        authSaga(), 
        StockSaga(),
        LeadSaga(),
        CartSaga(),
        TicketSaga(),
        CommonSaga(),
    ])
}