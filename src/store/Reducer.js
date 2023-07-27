import { ADD_JOB, INPUT_CHANGE_JOB } from "./Constant";

const initialState = {
    todos: [],
    todoInput: ""
}


function reducer(state, action){
    switch(action.type){
        case INPUT_CHANGE_JOB:
            return {...state, todoInput: action.payload}
        case ADD_JOB:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state;
    }
}

export {initialState};
export default reducer;