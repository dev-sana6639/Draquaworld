import {call,put,takeEvery,select} from 'redux-saga/effects';
import * as Actions from './constants';
import {LoginService,signInWithPhoneNumber} from './services'
import NavigationService from '../../utils/navigation'
import {rootSwitch,mainstack} from '../../config/navigator'
import RootStack from '../../navigation/root-Switch'


function* SignInSaga(credential) {
    

  const userdet = credential.payload.user

yield put({
    type: Actions.SIGN_IN_SUCCESS,
    payload: userdet
})

// yield call(NavigationService.navigate(rootSwitch.main))
  
}
function* signoutSaga(){
   
    yield put({
        type: Actions.SIGN_OUT_SUCCESS
    })
}

function* changeErrorSaga(){
    yield put({
        type: Actions.INVALID_EMAIL_AND_PASSWORD_SUCCESS
    })
}
export default function* authSaga() {
    
  yield takeEvery(Actions.SIGN_IN,SignInSaga)
  yield takeEvery(Actions.INVALID_EMAIL_AND_PASSWORD,changeErrorSaga)
  yield takeEvery(Actions.SIGN_OUT,signoutSaga)
}