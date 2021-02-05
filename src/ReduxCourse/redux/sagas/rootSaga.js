import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "./handles/user";
//import { GET_USER } from "../ducks/user";

//export function* watchSaga() {

    //yield takeLatest(GET_USER, handleGetUser);

//}

// Redux Toolkit
import { getUser } from "../ducks/userSlice";

export function* watchSaga() {

    yield takeLatest(getUser.type, handleGetUser);

}