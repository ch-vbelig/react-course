import React from "react";
import { Provider } from "react-redux";
import ReduxApp from "./ReduxApp";
import store from './redux/configureStoreRdxTlkt';

const ReduxIndex = () => {
    return(
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    );
}


export default ReduxIndex;