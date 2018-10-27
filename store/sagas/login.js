import * as actions from '../actions/index';
import { put } from 'redux-saga/effects';

export function* loginSaga(action) {
    try {
        yield put(actions.loginFacebookSuccess(action.user, action.token))
    } catch (err) {
	    console.log('ERROR: ', err)
    }
}
