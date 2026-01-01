import { useDispatch, useSelector } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  editTodo,
  completeTodoChecked,
} from "../Reducer/Reducer";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo.todoItems);
  const pin = useSelector(completeTodoChecked);
  console.log("🚀 ~ pin:", pin);
  console.log("🚀 ~ todoData:", todoData);

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleEditBtn = (id) => {
    dispatch(editTodo(id));
  };

  const handleDeleteBtn = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="todoList-container">
        {todoData &&
          todoData.map((el, i) => (
            <div
              key={i}
              className="todoList-content"
            >
              <input
                type="checkbox"
                onClick={() => handleComplete(el.id)}
              />
              <p>{el.id}</p>
              <p>{el.text}</p>
              <div>
                <button onClick={() => handleEditBtn(el.id)}>Edit</button>
                <button onClick={() => handleDeleteBtn(el.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
      {
        pin && pin.map((e)=> (
            <div key={e.id}>
                <p>{e.text}</p>
            </div>
        ))
      }
    </>
  );
};
