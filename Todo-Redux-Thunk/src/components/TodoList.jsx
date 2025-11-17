import { useDispatch } from "react-redux";
import {
  getFailureTodo,
  getRequestTodo,
  getSuccessTodo,
} from "../Redux/todos/Action";
import axios from "axios";
import { useEffect } from "react";

const API = import.meta.env.VITE_API;
console.log("🚀 ~ API:", API);

export const TodoList = () => {
  const dispatch = useDispatch();

  const getApiCall = () => {
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch((err) => dispatch(getFailureTodo(err)));
  };

  useEffect(() => {
    console.log("I am invoked");
    getApiCall;
  }, []);

  return (
    <>
      <h1>Todo List</h1>
    </>
  );
};
