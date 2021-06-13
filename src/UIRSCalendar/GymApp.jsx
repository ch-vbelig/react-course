import React from 'react';
import './styles.css';
import {Switch, Route, Link, Router} from 'react-router-dom';
import Contact from './testpages/Contact';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function GymApp() {

    return(
        <div className="App">
                <Route exact path="/main" component = {MainPage}/>
                <Route exact path="/" component = {LoginPage}/>
                    
        </div>
    );
    

}
