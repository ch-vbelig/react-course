import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import ReduxToolkitApp from './ReduxToolkitApp';



const ReduxToolkitIndex = () => {
    return(
        <Provider store={store}>
            <ReduxToolkitApp />
        </Provider>
    )
}


export default ReduxToolkitIndex;