import { useRef } from "react";
import { useDispatch } from "react-redux";

import { getApiCall, handleInputVal } from "../Redux/todos/Action";

const API = import.meta.env.VITE_API;

export const AddTodo = () => {
  const dispatch = useDispatch();
  const elementData = useRef(null);

  const handleData = () => {
    console.log("i am  invoking");
    handleInputVal({ dispatch, elementData })
      .then(() => {
        dispatch(getApiCall);
      })
      .catch((err) => console.log(err));
  };

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
        onClick={handleData}
      />
    </>
  );
};
