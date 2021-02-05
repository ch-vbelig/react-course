import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "./sagas/rootSaga";
import counterReducer from './ducks/counter';
import userReducer from './ducks/userSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    counter: counterReducer,
    userReducer: userReducer
});


const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})


sagaMiddleware.run(watchSaga)

export default store;