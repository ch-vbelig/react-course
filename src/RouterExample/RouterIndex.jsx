import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterApp from './RouterApp';

const RouterIndex = () => {
    return(

        <Router>
            <RouterApp />
        </Router>

    );
    

}

export default RouterIndex;