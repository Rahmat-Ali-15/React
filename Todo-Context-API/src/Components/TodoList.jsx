import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);

  const handleEdit = (id) => {
    // console.log("🚀 ~ id:", id);
    const editItem = todo?.map((ed) => ed.id === id ? {...ed, isEdited: !ed.isEdite}: ed);
    console.log("🚀 ~ editItem:", editItem);
    setTodo(editItem)
  };

  const handleDelete = (id) => {
    const delItem = todo?.filter((dl) => dl.id !== id);
    setTodo(delItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      {todo?.map((el) => (
        <div
          className="div"
          key={el.id}
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <input type="checkbox" />
            <h1>{el.todoText}</h1>
          </div>
          <div style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
            <MdEdit onClick={() => handleEdit(el.id)} />
            <MdDelete onClick={() => handleDelete(el.id)} />
          </div>
        </div>
      ))}
    </>
  );
};
