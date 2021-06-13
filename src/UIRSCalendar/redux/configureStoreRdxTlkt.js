import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "./sagas/rootSaga";
import userReducer from './ducks/userSlice';
import LoginDataReducer from './ducks/loginDataSlice';
import responseReducer from './ducks/responseSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    loginData: LoginDataReducer,
    userReducer: userReducer,
    response: responseReducer
});


const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})


sagaMiddleware.run(watchSaga)

export default store;