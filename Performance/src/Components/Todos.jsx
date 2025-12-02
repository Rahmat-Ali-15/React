import { useState } from "react";
import { TodosItem } from "./TodosItem";

const initialTodo = [
  {
    id: 1,
    currentTodo: "hello",
    status: false,
  },
  {
    id: 2,
    currentTodo: "hello",
    status: false,
  },
];
export const Todos = () => {
  const [text, setText] = useState("");
  const [data, setDeta] = useState(initialTodo);

  const handleInput = () => {
    const value = {
      id: data.length + 1,
      currentTodo: text,
      status: false,
    };
    setDeta([...data, value]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>Click</button>

      {data &&
        data.map((el) => {
          return (
            <TodosItem
              key={el.id}
              {...el}
            />
          );
        })}
    </>
  );
};
