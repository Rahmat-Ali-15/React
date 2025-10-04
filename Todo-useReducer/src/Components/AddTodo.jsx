import { useReducer } from "react";
import { Reducer } from "../UseReducer/Reducer";

const initialState = [];

export const AddTodo = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  console.log(dispatch);
  return (
    <>
      <h1>Add Todo</h1>
      <div>
        {/* <input type="text" value={state} onChange={(e)=> dispatch(type: "ADD_TODO", payload : e.target.value)} placeholder="Enter your Todo" /> */}
        <button>Add Todo</button>
      </div>
    </>
  );
};
