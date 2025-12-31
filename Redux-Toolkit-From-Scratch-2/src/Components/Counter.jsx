import { isEven, selectedComponents } from "../Reducer/Selector";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Reducer/Action";

export const Counter = () => {
  const dispatch = useDispatch();
  const { count, random, updatedByPayload } = useSelector(selectedComponents);
  const isEvenValue = useSelector(isEven);

  return (
    <>
      <h1>Counter {count}</h1>
      <h1>Sum Of NumberPayload {updatedByPayload}</h1>
      <h1>UnHandle Action {random}</h1>

      <h1>{isEvenValue ? "EVEN" : "ODD"}</h1>
      <button onClick={() => dispatch(types.increment())}>Increment</button>
      <button onClick={() => dispatch(types.decrement())}>Decrement</button>
      <button onClick={() => dispatch(types.randomNumber(10))}>
        Random Value of 10
      </button>

      <button onClick={() => dispatch(types.unknown())}>Unknown</button>
      <button onClick={() => dispatch(types.randomNumber())}>Random</button>
    </>
  );
};
