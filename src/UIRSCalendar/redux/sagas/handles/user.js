import { call, put } from "redux-saga/effects";
import { setStatus, setUser } from "../../ducks/userSlice";
import { requestGetUser } from "../requests/user";
import { CONSTANTS } from "../../../configs/constants";
import history from "../../../configs/history";


export function* handleGetUser(action){
    try{
        
        console.log("In handleGetUser")
        const { payload } = action;
        const {credentials} = payload;
        const response = yield call (requestGetUser, credentials);

        // Extract serverResponse
        const serverResponse = response.data;
        console.log(serverResponse)

        //yield put(setUser(data))
        console.log(serverResponse.statusCode)
        yield put(setStatus({ ...serverResponse}))
        if(serverResponse.statusCode === CONSTANTS.OK){
            yield put(setUser({ ...serverResponse}))
            history.push("/main")
        }
        
        
    } catch (error){
        console.log(error)
    }
}