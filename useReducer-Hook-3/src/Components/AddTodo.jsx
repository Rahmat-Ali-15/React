import { useReducer, useRef } from "react";
import { reducer } from "../Reducer/Reducer";
import { initialValue } from "../Reducer/Store";
import { ADD_TODO_ITEMS } from "../Reducer/Action";
import { TodoList } from "./TodoList";

export const AddTodo = () => {
  const todoText = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log("🚀 ~ state:", state);

  const handleAddTodo = () => {
    const value = todoText.current.value;
    dispatch({ type: ADD_TODO_ITEMS, payload: value });
  };
  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Entet your task!!!"
        ref={todoText}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <TodoList value={{state, dispatch}} />
    </>
  );
};
