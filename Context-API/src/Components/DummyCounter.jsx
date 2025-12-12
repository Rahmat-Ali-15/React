import { useContext } from "react";
import { CounterContext } from "../Context/ContextProvider";


export const DummyCounter = () => {

    const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>-</button>
      <button onClick={() => setCount((prev) => prev - 1)}>+</button>
    </>
  );
};
