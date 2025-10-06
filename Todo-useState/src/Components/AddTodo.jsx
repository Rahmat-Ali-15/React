import { useState } from "react";

import "../App.css";
import { TodoList } from "./TodoList";

export const AddTodo = () => {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    const todo = {
      id: Date.now(),
      text: input,
      isEdited: false,
      isCompleted: false,
    };

    setData((prev) => [todo, ...prev]);

    // clearing input field
    setInput("");
  };

  // delete functionality
  const handleDel = (id) => {
    const delItem = data.filter((dl) => dl.id !== id);
    setData(delItem);
  };

  // Edit functionality

  const handleEdit = (id) => {
    const editItem = data.map((el)=>{
        if(el.id === id){
         return {...el, isEdited: !el.isEdited}
        }
        return el;
      })
      // console.log(editItem)
      setData(editItem);
  }
  // handleEdit()

  return (
    <>
      <div className="main-container">
        <h1 style={{ textAlign: "center", color: "white" }}>Todo App</h1>
        <div className="add-todo-container">
          <input
            type="text"
            placeholder="Add your Todo"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <TodoList
          data={data}
          handleDel={handleDel}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};
