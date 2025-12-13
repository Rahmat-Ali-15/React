import { useDispatch, useSelector } from "react-redux";

import * as action from "../Reducer/Reducer";

export const Counter = () => {
  const data = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count {data}</h1>
      <button onClick={() => dispatch(action.increment())}>+</button>
      <button onClick={() => dispatch(action.decrement())}>-</button>
      <button onClick={() => dispatch(action.incrementByAmount(10))}>
        Increment By Value 10
      </button>
      <button onClick={() => dispatch(action.decrementByAmount(10))}>
        Decrement By Value 10
      </button>
    </>
  );
};
