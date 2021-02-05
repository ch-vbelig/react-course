import React from 'react';
import './styles.css';
import {Switch, Route, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';


export default function RouterApp() {
    const history = useHistory();

    return(
        <div className="App">
            <button><Link to="/about">About Us</Link></button>
            <button onClick ={() => history.push('/contact')}>Contect Us</button>
            <button onClick ={() => history.push('/')}>Home Page</button>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                
            </Switch>
        </div>
    );
    

}
