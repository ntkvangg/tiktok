import {createStore, applyMiddleware, combineReducers} from 'https://cdn.skypack.dev/redux';
import { useState } from 'react';

function bankReducer ( state = 100, action){
    switch (action.type){
        case "DEPOSIT":
            return state + action.payload
        case "WITH_DRAW":
            return state - action.payload
        default:
            return state;
    }
}

function userReducer (state = {data: []}, action){
    switch(action.type){
        case "GET_USERS":
            return {...state, data: action.payload};
        default:
            return state;
    }
}

const reducer = combineReducers({bank: bankReducer, user: userReducer});

const transferMoneyMiddleware = store => next => action =>{
    switch(action.type){
        case "GET_USERS":
            try{
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then(res=> res.json())
                    .then(data => {
                        return next({...action, payload: data});
                    })
            }catch(err){
                return next({...action, payload: 'errror'})
            }
            break;
        default: 
            return next(action)
    }
}


const store = createStore(reducer, applyMiddleware(transferMoneyMiddleware) );

function ReduxApp() {
    const handleDeposit = (payload)=>{
        return {
            type: "DEPOSIT",
            payload
        }
    }
    const handleWithdraw = (payload)=>{
        return {
            type: "WITH_DRAW",
            payload
        }
    }

    const handleGetUsers = ()=>{
        return{
            type: "GET_USERS",
            payload: []
        }
    }

    const onDeposit = ()=>{
        store.dispatch(handleDeposit(10))
    }
    const onWithdraw = ()=>{
        store.dispatch(handleWithdraw(10))
    }
    const onGetUers = ()=>{
        store.dispatch(handleGetUsers())
    }

    const [money, setMoney] = useState(100);
    const [users, setUsers] = useState([]);

    store.subscribe(()=>{
        const state = store.getState();
        setMoney(state.bank);
        setUsers(state.user?.data || [])
    });
    return <div className='reduxa-app'>
        <h2>Money: {money}</h2>
        <button className='deposit' onClick={onDeposit}>DEPOSIT</button>
        <button className='withdraw' onClick={onWithdraw}>WITHDRAW</button>
        <button className='users' onClick={onGetUers}>Get USERS</button>
        <div className='users'>
            <ul>
                {users.length && users.map((user, index)=>(
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    </div>;
}

export default ReduxApp;
