import axios from "axios";
import { useRef } from "react";
import {nanoid} from "nanoid"

export const Todo = () => {

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
            let res = await axios.post(api,obj)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
            <h1>Todo</h1>
            <input type="text" name="" id="" placeholder="add todo..." ref={dataRef} />
            <input type="button" value="Add Todo" onClick = {handleClick} />
        </>
    )
}