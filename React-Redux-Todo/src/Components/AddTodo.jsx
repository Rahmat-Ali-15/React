import { useDispatch } from "react-redux";
import { ADD_TODO } from "../Redux/Action";
import { useRef } from "react";
import { TodoList } from "./TodoList";

export const AddTodo = () => {
  const refData = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    let value = refData.current.value.trim();
    if(!value){
      alert("Please write task before adding!");
      return;
    }
    if(value.length>30){
      alert("Task is too long! Max 30 characters.");
      refData.current.value = "";
      return;
    }

    let curVal = refData.current.value;
    dispatch({ type: ADD_TODO, payload: curVal });

    refData.current.value = "";
  };
  return (
    <>
      <div className="addtodo-container">
        <h1>Add Todo</h1>
        <div className="todo-input-div">
          <input
            type="text"
            ref={refData}
            placeholder="Add your todo task"
          />
          <button className="addTodo-btn" onClick={handleClick}>Add Todo</button>
        </div>
      </div>
    <TodoList />
    </>
  );
};
