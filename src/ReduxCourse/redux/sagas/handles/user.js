import { call, put } from "redux-saga/effects";
//import { setUser } from "../../ducks/user";
import { setUser } from "../../ducks/userSlice";
import { requestGetUser } from "../requests/user";


export function* handleGetUser(action){
    try{
        const { payload } = action;
        console.log(payload);
        const {id, test} = payload;
        const response = yield call(requestGetUser);
        const { data } = response;
        //yield put(setUser(data))
        yield put(setUser({ ...data}))
    } catch (error){
        console.log(error)
    }
}