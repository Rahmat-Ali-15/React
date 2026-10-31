import { useDispatch } from 'react-redux';
import { useRef } from 'react';


import { addTodo } from '../features/todoSlice';


export const Todo = () => {
    const dispatch = useDispatch();

    const inputRef = useRef();

    const handleAdd = () => {
        const inputData = inputRef.current.value;

        //# If input field is empty then show error msg 
        if(!inputData.trim()){
            return alert("Task is required!");
        };

        dispatch(addTodo(inputData));

        //# clearing input field 
        inputRef.current.value = "";
    }

    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleAdd}>Add Task</button>
            </div>
        </>
    )
}