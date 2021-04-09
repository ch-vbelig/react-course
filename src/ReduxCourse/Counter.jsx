import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';
import store from './redux/configureStore';
import axios from 'axios'



const Counter = (props) => {

    const [bank, setBank] = useState({})
    

    function requestGetUser() {
        return axios.request({
            method: "get",
            //url: "https://my-json-server.typicode.com/ch-vbelig/demo/user",
            url: "http://localhost:9000/api/banks/1234",
        }).then(response => response.data)
        .then(data => {
            setBank(data);
            console.log("Requestin banks");
            console.log(data);
        });
    }
    
    
    useEffect(() => {
        const promise = requestGetUser()
        
        


    }, [])

    
    

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
            <h1>{bank && bank.accountNumber}</h1>
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