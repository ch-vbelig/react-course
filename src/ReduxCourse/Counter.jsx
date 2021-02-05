import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';
import store from './redux/configureStore';

const Counter = (props) => {

    const {name} = props;
    
    const [localCount, setLocalCount] = useState(0);

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        //dispatch(increment(1));
        store.dispatch(increment(500));
        setLocalCount(localCount + 1);   
    };

    const handleDecrement = () => {
        dispatch(decrement());
        setLocalCount(localCount - 1);  
    };

    return(
        <div style ={{backgroundColor : "grey", margin: "10px"}}>
            <h2> {name} </h2>
            <h3> {`Local Count: ${localCount}`} </h3>
            <div style ={{display: "flex", justifyContent: "center"}}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
            </div>
        </div>
    );



}


export default Counter;