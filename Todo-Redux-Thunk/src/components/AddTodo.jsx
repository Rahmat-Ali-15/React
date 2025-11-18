import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/todos/Action";
import axios from "axios";
import { TodoList } from "./TodoList";

const API = import.meta.env.VITE_API;

export const AddTodo = () => {
  const value = useSelector((state) => state.todo);
  console.log("🚀 ~ value:", value);

  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleInputVal = () => {
    const values = elementData.current.value;

    const obj = {
      id: Date.now(),
      text: values,
      isEdit: false,
      isComplete: false,
    };

    dispatch(addTodoRequest());
    axios
      .post(API, obj)
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));
  };

  if (value.isLoading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      <input
        type="text"
        ref={elementData}
        placeholder="Enter the todos"
        autoComplete="off"
      />
      <input
        type="button"
        value="Add"
        onClick={handleInputVal}
      />
      <TodoList />
    </>
  );
};
