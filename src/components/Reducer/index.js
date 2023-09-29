/*
    Để viết reducer cần 4 thứ
    1. Init state
    2. Action
    3. Reducer
    4. Dispatch

*/
import React, { useReducer } from 'react';

const initialState = {
    count: 0
}

const DOW = 'DOW'
const UP = 'UP';
const setCountDown = () => {
    return {
        type: DOW
    }
}

const setCountUp = () => {
    return {
        type: UP
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case DOW:
            return { ...state, count: state.count - 1 }
        case UP:
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}




const ReducerApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleUp = () => {
        dispatch(setCountUp());
    }
    const handleDown = () => {
        dispatch(setCountDown());
    }


    return (
        <div>
            <h1>Reducer</h1>
            <h3>count: {state.count}</h3>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    );
};

export default ReducerApp;