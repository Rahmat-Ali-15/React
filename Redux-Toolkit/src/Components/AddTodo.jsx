import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Reducer/TodoReducer";

export const AddTodo = () => {
  const dispatch = useDispatch(null);
  const inputVal = useRef(null);

  const handleAdd = () => {

    if(inputVal.current.value.trim() === "") return
    if(inputVal.current.value.length > 20){
      alert("Please Enter character between 1-20");
      return
    }

    const value = inputVal.current.value;
    dispatch(addTodos(value));

    inputVal.current.value = ""
  };

  return (
    <>
      <div className="addTodo-container">
        <input
          type="text"
          ref={inputVal}
          placeholder="Enter todos..."
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </>
  );
};
