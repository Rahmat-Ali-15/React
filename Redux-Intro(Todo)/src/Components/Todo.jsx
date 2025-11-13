/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Action";
import { TodoList } from "./TodoList";

export const Todo = () => {
    const refData = useRef(null);
    const dispatch = useDispatch();
    const data = useSelector((state)=> console.log(state));

    const handleClick = () => {
        let val = refData.current.value;
        if(val==="")return
        dispatch({type: ADD_TODO, payload: val});

        refData.current.value= ""
    }


    return(
        <>
        <h1>Add Todo</h1>
            <input type="text" ref={refData} />
            <button onClick={handleClick}>Add Todo</button>
            <TodoList />
        </>
    )
}