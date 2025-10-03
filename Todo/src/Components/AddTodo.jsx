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

  // delete item
  const handleDel = (id) => {
    const deleteItem = data.filter((el) => el.id !== id);
    setData(deleteItem);
    localStorage.setItem("todoData", JSON.stringify(deleteItem));
  };

  // Edit item

  const handleEdit = (id) => {
    console.log(id, "eidt id");
    const editItem = data.map((item) => {
      if(item.id === id){
        return {...item, isEdited: !item.isEdited}
      }
      return item;
    });
    setData(editItem);
    localStorage.setItem("todoData", JSON.stringify(editItem));

    console.log(editItem, "updated todos");
  };

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
      <ListTodo
        props={data}
        handleDel={handleDel}
        handleEdit={handleEdit}
      />
    </>
  );
};
