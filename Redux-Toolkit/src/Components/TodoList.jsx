import { useDispatch, useSelector } from "react-redux";
import {
  cancelTodo,
  confirmTodo,
  editTodo,
  removeTodo,
  toggleCheckbox,
} from "../Reducer/TodoReducer";
import { useRef } from "react";

export const TodoList = () => {
  const { item } = useSelector((state) => state.todo);
  // console.log("🚀 ~ item:", item);
  const dispatch = useDispatch();

  let updatedData = useRef("");

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelTodo(id));
  };

  const handleConfirm = (id, updatedDataValue) => {
    dispatch(confirmTodo({ id, updatedData: updatedDataValue }));
  };

  const handleCheckbox = (id) => {
    dispatch(toggleCheckbox(id));
  };

  return (
    <>
      <div className="todoList-container">
        {item.map((el) => {
          return (
            <div
              key={el.id}
              className="todoList-content"
            >
              <input
                type="checkbox"
                checked={el.isCompleted}
                onChange={() => handleCheckbox(el.id)}
              />

              {el.isEdited ? (
                <>
                  <input
                    type="text"
                    defaultValue={el.text}
                    onChange={(e) => (updatedData.current = e.target.value)}
                  />
                  <div className="cancel-confirm-btns">
                    <button onClick={() => handleCancel(el.id)} className="cancel-btn">Cancel</button>
                    <button onClick={() => handleConfirm(el.id, updatedData.current)} className="confirm-btn">Confirm</button>
                  </div>
                </>
              ) : (
                <>
                  <p className={`todo-text ${el.isCompleted ? "completed" : ""}`}>{el.text}</p>
                  <div className="edit-delete-btns">
                    <button onClick={() => handleEdit(el.id)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(el.id)} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
