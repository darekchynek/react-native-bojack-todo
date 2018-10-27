import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";
import { watchAuth } from "./sagas/rootSaga";
import items from "./reducers/items";
import login from './reducers/login';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	items,
	login
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	let store = createStore(
		rootReducer,
		{},
		composeEnhancers(
			applyMiddleware(sagaMiddleware),
		),
	);
	sagaMiddleware.run(watchAuth);
	return { store }
}

