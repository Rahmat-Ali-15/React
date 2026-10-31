import { useReducer, useRef } from "react";
import { reducer } from "../Reducer/Reducer";
import { initialValue } from "../Reducer/Store";
import {
  ADD_TODO_ITEMS,
  ERROR_TODO_ITEMS,
  LOADING_TODO_ITEMS,
} from "../Reducer/Action";
import { TodoList } from "./TodoList";

export const AddTodo = () => {
  const todoText = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log("🚀 ~ state:", state);

  const handleAddTodo = () => {
    const value = todoText.current.value;
    if (value === "") {
      dispatch({ type: ERROR_TODO_ITEMS });
      return;
    }
    dispatch({ type: LOADING_TODO_ITEMS });

    setTimeout(() => {
      dispatch({ type: ADD_TODO_ITEMS, payload: value });
    }, 1000);

    todoText.current.value = "";
  };

  if (state.isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Entet your task!!!"
        ref={todoText}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      {state.isError ? (
        <h1>Something went wrong...</h1>
      ) : (
        <TodoList value={{ state, dispatch }} />
      )}
    </>
  );
};
