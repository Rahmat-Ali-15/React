import { useContext, useRef } from "react"
import { TodoContext } from "../Context/TodoContextProvider"
import { TodoList } from "./TodoList";

export const Todo = ()=> {
    
    const {todo, setTodo} = useContext(TodoContext)
    console.log("🚀 ~ setTodo:", setTodo);
    
    const todoInputData = useRef(null);
    
    const handleTodo = () => {
        let todoInputVal = todoInputData.current.value;

        const todo = {
            id: Date.now(),
            todoText: todoInputVal,
            isEdited: false,
            isCompleted: false
        }
        setTodo((prev)=> [...prev,todo]);
        todoInputData.current.value = "";
    }
    console.log("🚀 ~ todo:", todo);



    return (
        <>
            <h1>Hello Todo</h1>
            <input type="text" name="todo-input" ref={todoInputData} />
            <button onClick={()=> handleTodo()}>Add Todo</button>
            <TodoList />
        </>
    )
}