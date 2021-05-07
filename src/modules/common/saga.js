
import {put,call,takeEvery,delay} from 'redux-saga/effects';
import * as Actions from './constants';
import NavigationService, { authStack, rootSwitch } from '../../config/navigator';


function* Stoploading(){
    console.log('came to stop loading')
    try{
    yield put({
        type: Actions.STOP_IS_LOADING
    })
    //  yield call(NavigationService.navigate(authStack.login))
 console.log('navigate to login')
} catch(e){
    console.log('error while loading login page')
}
}

function* startloading(){
    try{
    yield put({
        type:Actions.START_LOADING_SET
    })}
    catch(e){
        console.log('loading screen error')
    }
}
export default function* CommonSaga() {
   yield takeEvery(Actions.START_LOADING,startloading)
    yield takeEvery(Actions.IS_LOADING_FALSE,Stoploading)
}
