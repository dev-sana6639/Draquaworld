import {combineReducers} from 'redux';
import authReducer from './modules/auth/reducer';
import commonReducer from './modules/common/reducer';
import StockReducer from './modules/stock/reducer';
import LeadReducer from './modules/lead/reducer';
import CartReducer from './modules/cart/reducer';
import TicketReducer  from './modules/tickets/reducer';
// import stockreducer from './modules/stock/reducer';

const rootReducers = combineReducers({
    auth: authReducer,
    common: commonReducer,
    stock: StockReducer,
    lead: LeadReducer,
    cart: CartReducer,
    ticket: TicketReducer,
})

export default rootReducers;