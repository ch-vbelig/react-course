import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import LabApp from './LabApp';
import "./styles.css"


const ReduxToolkitIndex = () => {
    return(
        <Provider store={store}>
            <div className="App">
                <LabApp />
            </div>
            
        </Provider>
    )
}


export default ReduxToolkitIndex;