import { INPUT_CHANGE_JOB } from "./Constant"

export const setTodoInput = (payload)=>{
    return {
        type: INPUT_CHANGE_JOB,
        payload
    }
}

export const addJob = (payload)=>{
    return {
        type: 'ADD_JOB',
        payload
    }
}