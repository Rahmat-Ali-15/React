import { useReducer, useRef } from "react";
import { Reducer } from "../UseReducer/Reducer";
import { InitialValue } from "../UseReducer/Store";
import { TodoList } from "./TodoList";
import { ADD_TODO } from "../UseReducer/Action";

export const AddTodo = () => {
  const inputData = useRef(null);
  
  const [state, dispatch] = useReducer(Reducer, InitialValue);

  
  const handleTodo = () => {
    if (inputData.current.value.trim() === "") return;
    let todoData = {
      id: Date.now(),
      todoText: inputData.current.value,
      isEdited: false,
      isCompleted: false
    }
    console.log("🚀 ~ todoData:", todoData);
    dispatch({type: ADD_TODO, payload: todoData})
    inputData.current.value = "";

  }

  return (
    <>
      <div className="addTodo-container">
        <h1>Add Todo</h1>
        <div className="input-btn">
          <input
            type="text"
            placeholder="Enter the task"
            ref={inputData}
          />
          <button onClick={handleTodo}>Add Task</button>
        </div>
        <TodoList state={state} dispatch={dispatch} />
      </div>
    </>
  );
};
