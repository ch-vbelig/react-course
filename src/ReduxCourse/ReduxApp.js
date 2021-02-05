import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from "./Counter";
import { getUser } from './redux/ducks/userSlice';
import './styles.css';




export default function ReduxApp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser({test: "hi", id: 1}));

    }, [dispatch]);


    const user = useSelector((state) => state.userReducer);
    console.log("user", user);


    const count = useSelector((state) => state.counter.count);
    const vouters = ["Alex", "Antony", "Stiven"];
    return(
            <div className="App">
                <h1>Hello, {user ? user.firstname : ""}</h1>
                <h1>Redux made easy</h1>
                <h2> The Total Count: {count} </h2>

                {vouters.map((voter) => (<Counter name={voter} />))}
            </div>

        
    );
}