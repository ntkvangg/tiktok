import React from 'react';
import { useStore } from '../../store';
import {setTodoInput, addJob} from '../../store';

function Todo(){
    const [state, dispatch] = useStore();

    const handleChangeJob = (e)=>{
        dispatch(setTodoInput(e.target.value));
    }

    const handleAddJob = ()=>{
        dispatch(addJob(state.todoInput));
    }

    return (
        <div>
            <h2>Todo</h2>
            <div className='form'>
                <div className='group'>
                    <label className='label'>Name</label>
                    <input type='text' className='form-control' onChange={handleChangeJob}/>
                </div>
                <button onClick={handleAddJob}>Add</button>
            </div>
            <ul className='list'>
                {state.todos.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default Todo;