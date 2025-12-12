import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Reducer/TodoReducer";

export const AddTodo = () => {
  const dispatch = useDispatch(null);
  const inputVal = useRef(null);

  const handleAdd = () => {
    const value = inputVal.current.value;
    dispatch(addTodos(value));
  };

  return (
    <>
      <input
        type="text"
        ref={inputVal}
        placeholder="Enter todos..."
      />
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
};
