import { useRef } from "react";
import { useDispatch } from "react-redux";

import * as abc from "../Redux/todos/ActionsTypes";
import { AddTodos } from "../Redux/todos/Action";

export const AddTodo = () => {
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleInputVal = () => {
    dispatch({ type: abc.ADD_TODO_REQUEST });
    const values = elementData.current.value;
    console.log("🚀 ~ values:", values);
    dispatch(AddTodos({ values }));

    // const todos = {
    //   id: Date.now(),
    //   text: values,
    //   isEdit: false,
    //   isComplete: false,
    // };
    // console.log("🚀 ~ todos:", todos);

    // elementData.current.value= "";

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
        onClick={handleInputVal}
      />
    </>
  );
};
