import { useDispatch } from "react-redux";
import { useRef } from "react";
import { ADD_TODOS } from "../Redux/Todos/Action";
import { TodoList } from "./Todo_List";

export const AddTodo = () => {
  const dataValue = useRef(null);
  const dispatch = useDispatch();

  const addTodos = () => {
    let values = dataValue.current.value;

    let todosObj = {
      id: Date.now(),
      text: values,
      isEdit: false,
      isComplete: false,
    };

    dispatch({ type: ADD_TODOS, payload: todosObj });
  };

  return (
    <>
      <h1>Add Todo</h1>

      <input
        type="text"
        placeholder="enter todos..."
        ref={dataValue}
      />
      <button onClick={addTodos}>Add Todo</button>

      <TodoList />
    </>
  );
};
