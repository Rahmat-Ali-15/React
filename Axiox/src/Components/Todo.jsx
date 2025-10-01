import axios from "axios";
import { useState,useRef } from "react";
import {nanoid} from "nanoid"
import { TodoList } from "./TodoList";

export const Todo = () => {

    const [count, setCount] = useState(0)

    // let api = `https://api-server-zecj.onrender.com/todo`;
    let api = `https://api-database-1.onrender.com/Todo`;

    const dataRef = useRef(null);

    const handleClick = async () => {
        const values = dataRef.current.value;

        let obj = {
            id : nanoid(),
            todo : values,
            isEdited : false,
            isCompleted : false
        }

        try {
            let res = await axios.post(api,obj);
            setCount((prev) => prev + 1)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
            <h1>Todo</h1>
            <input type="text" name="addTodo" id="" placeholder="add todo..." ref={dataRef} />
            <input type="button" value="Add Todo" onClick = {handleClick} />
            <TodoList props={count} />
        </>
    )
}