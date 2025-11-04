import React, { useRef } from "react";
import { useState } from "react";

export const AddTodo = () => {
  const data = useRef(null);
  const [value, setValue] = useState([]);
  const handleTodo = () => {
    if(data.current.value.trim() === "" ) return
    let todo = {
      id: Date.now(),
      todo: data.current.value,
      isEdited: false,
      isComplete: false,
    };
    setValue((prev) => [...prev, todo]);
    data.current.value = ("")
  };
  console.log("🚀 ~ value:", value);
  
  return (
    <>
      <h1>todo</h1>
      <input
        type="text"
        placeholder="Enter the todo..."
        ref={data}
      />
      <button onClick={handleTodo}>Add Todo</button>
    </>
  );
};
