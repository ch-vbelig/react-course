import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "./handles/user";

// Redux Toolkit
import { getUser } from "../ducks/userSlice";

export function* watchSaga() {

    yield takeLatest(getUser.type, handleGetUser);

}