import React from "react";
import { ListTodo } from "./ListTodo";
import "../Components/AddTodo.css";

export const AddTodo = () => {
  const [data, setData] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleFunck = () => {
    if (text.trim() === "") return;

    let todo = {
      id: Date.now(),
      text,
      isEdited: false,
      isCheck: false,
    };

    setData([...data, todo]);
    localStorage.setItem("todoData", JSON.stringify([...data, todo]));
  };

   const handleDel = (id) => {
      const deleteItem = data.filter((el) => el.id !== id)
      setData(deleteItem);
      localStorage.setItem("todoData", JSON.stringify(deleteItem))
  }

  return (
    <>
      <div className="addTodo-container">
        <h1>Todo</h1>
        <div>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter the todo"
          />
          <button
            className="todo-btn"
            onClick={handleFunck}
          >
            <span className="text">Add Todo</span>
          </button>
        </div>
      </div>
      <ListTodo props={data} handleDel={handleDel} />
    </>
  );
};
