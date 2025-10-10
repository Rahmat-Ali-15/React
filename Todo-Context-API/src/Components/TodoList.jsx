import { useContext, useRef } from "react";
import { TodoContext } from "../Context/TodoContextProvider";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

export const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);

  const updatedInput = useRef(null);

  const handleEdit = (id) => {
    // console.log("🚀 ~ id:", id);
    const editItem = todo?.map((ed) =>
      ed.id === id ? { ...ed, isEdited: !ed.isEdite } : ed
    );
    console.log("🚀 ~ editItem:", editItem);
    setTodo(editItem);
  };

  const handleDelete = (id) => {
    const delItem = todo?.filter((dl) => dl.id !== id);
    setTodo(delItem);
  };

  const handleCancel = (id) => {
    const cancelItem = todo?.map((cl)=>cl.id === id ? {...cl, isEdited:!cl.isEdited}: cl);
    setTodo(cancelItem)
  }

  const handleConfirm = (id) => {
    const confirmItem = todo?.map((cf)=> cf.id === id ? {...cf, todoText: updatedInput.current.value,isEdited: !cf.isEdited}: cf);
    setTodo(confirmItem);
  }

  return (
    <>
      <h1>Todo List</h1>
      {todo?.map((el) => (
        <div
          className="div"
          key={el.id}
          style={{
            width: "400px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          {el.isEdited ? (
            <>
              <input type="checkbox" />
              <input
                type="text"
                ref={updatedInput}
                defaultValue={el.todoText}
              />
              <div style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
                <MdCancel onClick={()=> handleCancel(el.id)} />
                <GiConfirmed onClick={()=> handleConfirm(el.id)} />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", gap: "15px" }}>
                <input type="checkbox" />
                <h1>{el.todoText}</h1>
              </div>
              <div style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
                <MdEdit onClick={() => handleEdit(el.id)} />
                <MdDelete onClick={() => handleDelete(el.id)} />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
