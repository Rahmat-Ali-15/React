import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Reducer/Reducer";
import { TodoList } from "./TodoList";
import { fetchTodos } from "../Reducer/Action";

export const TodoInput = () => {
    const todoValueData = useRef();

    const dispatch = useDispatch()
    const value = useSelector((state)=> state.todo)
    console.log("🚀 ~ value:", value);

    const handleAdd = () => {
        const valueText = todoValueData.current.value.trim()
        if(valueText == "") return
        dispatch(addTodo(valueText))

        // let todohttp = {
        //     text: valueText,
        //     isComplete: false,
        //     isEdit: false
        // }
        // dispatch(addTodo(todohttp))
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return(
        <>
            <input type="text" ref={todoValueData} />
            <button onClick={handleAdd}>Add Todo</button>
        </>
    )
}