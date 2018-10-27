import * as actions from '../actions/index';
import { put, all, select } from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';

export function* itemsSaga() {
    try {
        const items = yield AsyncStorage.getItem('items');
        console.log(items);
        yield put(actions.fetchItemsSuccess(items))
    } catch (err) {
	    console.log('ERROR: ', err)
    }
}
