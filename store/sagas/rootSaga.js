import * as actionTypes from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { itemsSaga } from './items';
import { loginSaga } from './login';
 
export function* watchAuth() {
    yield takeEvery(actionTypes.FETCH_ITEMS, itemsSaga);
    yield takeEvery(actionTypes.LOGIN_FACEBOOK, loginSaga);
}