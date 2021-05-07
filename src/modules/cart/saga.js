import { call, put, takeEvery } from 'redux-saga/effects'
import * as Actions from './constants';

function* addToCartSuccessSaga(product){
    
   
    let item = product.payload;
    console.log('dispatch ADD_TO_CART_SUCCESS')
    
   
    yield put({
        type: Actions.ADD_TO_CART_SUCCESS,
        payload: product.payload
    })
    console.log('dispatched success')
}

function* addToCartSaga(payload) {
        
     
        yield call(addToCartSuccessSaga,payload)
    
}

 function* addquantitysuccessSaga(payload) {
    console.log('came to ADD_QUANTITY_SUCCESS saga ')
   
    
    yield put({
        type: Actions.ADD_QUANTITY_SUCCESS,
        payload: payload.payload
    })

 }

function* addquantitySaga(payload) {
    console.log('came to add quantity Saga')
   
  
     yield call(addquantitysuccessSaga,payload) 
}

function* subquantitySuccesSaga(id) {
    yield put({
        type:Actions.SUB_QUANTITY_SUCCESS,
        payload: id.payload
    })
}
function* subquantitySaga(id) {
   yield call(subquantitySuccesSaga,id)

}
function* removeITemfromCart(id){
    console.log(id)
    yield put({
        type:Actions.REMOVE_ITEM_FROM_CART_SUCCESS,
        payload: id.payload
    })
}

export default function* CartSaga() {
    yield takeEvery(Actions.ADD_TO_CART, addToCartSaga)
    yield takeEvery(Actions.ADD_QUANTITY, addquantitySaga)
    yield takeEvery(Actions.SUB_QUANTITY, subquantitySaga)
    yield takeEvery(Actions.REMOVE_ITEM_FROM_CART,removeITemfromCart)
}