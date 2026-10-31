import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, editTodo, cancelTodo, confirmTodo, toggleCheckbox } from "../features/todoSlice";
import { useRef } from "react";

export const TodoList = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEdit = (id) => {
        dispatch(editTodo(id))
    }

    const handleCancel = (id) => {
        dispatch(cancelTodo(id))
    }

    const inputRef = useRef();
    
    const handleConfirm = (id) => {
        const inputVal = inputRef.current.value;

        //# here "id" and "todoText" is from todoSlice
        dispatch(confirmTodo({id, todoText: inputVal}))
    }

    const handleCheckbox = (id) => {
        dispatch(toggleCheckbox(id))
    }

    console.log("🚀 ~ todos:", todos);

    return (
        <>
            {
                todos?.map((el) => (
                    <div key={el.id} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <input type="checkbox" checked={el.isCompleted} onChange={()=> handleCheckbox(el.id)} />
                        <span>{el.id}</span>
                        {
                            el.isEdited ? <>
                                <input type="text" ref={inputRef} defaultValue={el.todoText} />
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <button onClick={() => handleCancel(el.id)}>Cancel</button>
                                    <button onClick={() => handleConfirm(el.id)}>Confirm</button>
                                </div>
                            </> : <>
                                <p style={{textDecoration: el.isCompleted ? "line-through" : "none", color: el.isCompleted ? "gray" : "black"}}>{el.todoText}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <button onClick={() => handleEdit(el.id)}>Edit</button>
                                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                                </div>
                            </>
                        }
                    </div>
                ))
            }
        </>
    )
}