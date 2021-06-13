import React from 'react';
import { Provider } from 'react-redux';
import {Router} from "react-router-dom";
import history from "./configs/history";
import RouterApp from './GymApp';
import store from './redux/configureStoreRdxTlkt'

const GymIndex = () => {
    return(
        <Provider store = {store}>
            <Router history={history}>
                <RouterApp />
            </Router>  
        </Provider>
    
    );
    

}

export default GymIndex;