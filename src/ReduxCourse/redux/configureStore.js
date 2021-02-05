import {combineReducers, createStore, applyMiddleware} from 'redux';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';

import createSagaMiddleware from "redux-saga";

import { watchSaga } from "./sagas/rootSaga";



const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// Usual store object
//const store = createStore(reducer);

// For Redux Saga with applyMiddleware
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watchSaga)

export default store;