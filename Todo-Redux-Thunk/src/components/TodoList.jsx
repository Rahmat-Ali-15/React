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

  const { todos } = useSelector((state) => state.todo);

  // const handleEdit = (id) => {
  //   const updateTodo = todos.map((el)=> {
  //     if(el.id === id){
  //       return {...el, isEdit: true}
  //     }
  //     return el
  //   })
  //   dispatch(addTodoSuccess(updateTodo))
  // }

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {todos.map((el) => (
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
            {/* <button onClick={()=> handleEdit(el.id)}>Edit</button> */}
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};
