import { useDispatch, useSelector } from "react-redux";
import {
  getFailureTodo,
  getRequestTodo,
  getSuccessTodo,
} from "../Redux/todos/Action";
import axios from "axios";
import { useEffect } from "react";

const API = import.meta.env.VITE_API;

export const TodoList = () => {
  const dispatch = useDispatch();

  const { todos, isError, isLoading } = useSelector((state) => state.todo);



  const getApiCall = () => {
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch((err) => dispatch(getFailureTodo(err)));
  };

  useEffect(() => {
    getApiCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      <h1>Todo List</h1>
      {isError && <h1>Something went wrong...❌</h1>}    
      {todos.length > 0 && todos.map((el) => (
        <div
          key={el.id}
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p>{el.text}</p>
          <p>{el.id}</p>
          <div>
            <button>Edit</button>
            {/* <button>Edit</button> */}
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};
