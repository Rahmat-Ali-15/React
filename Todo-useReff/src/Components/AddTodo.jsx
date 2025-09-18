import React, { useRef } from 'react'

export const AddTodo = () => {
    const data = useRef(null);

    const handleTodo = () => {
        if (data.current.value.trim() === "") return;

        let todo = {
            id : Date.now(),
            todo : data.current.value,
            isEdited : false,
            isComplete : false
        };
        localStorage.setItem("todos", JSON.stringify(todo));
    }

  return (
    <>
      
        <h1>todo</h1>
        <input type="text" placeholder='Enter the todo...' ref={data} />
        <button onClick={handleTodo}>Add Todo</button>

    </>
  )
}

