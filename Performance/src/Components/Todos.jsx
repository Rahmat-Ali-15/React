import {useState } from "react";
import  {TodosItem}  from "./TodosItem";

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
  const [data, setData] = useState(initialTodo);

  const handleInput = () => {
    const value = {
      id: data.length + 1,
      currentTodo: text,
      status: false,
    };
    setData([...data, value]);
    setText("");
  };

  const handleEdit = (id) => {
    const todoEdit = data.map((ed) =>
      ed.id === id ? { ...ed, status: !ed.status } : ed
    );
    setData(todoEdit)
  }
  const handleDelete = (id) => {
    const todoDelete = data.filter((dl)=> dl.id !== id);
    setData(todoDelete)
  }


  // using useCallback -> useCallback is only work on the function
  // const handleEdit = useCallback((id) => {
  //   const todoEdit = data.map((ed) =>
  //     ed.id === id ? { ...ed, status: !ed.status } : ed
  //   );
  //   setData(todoEdit)
  // },[data])
  // const handleDelete = useCallback((id) => {
  //   const todoDelete = data.filter((dl)=> dl.id !== id);
  //   setData(todoDelete)
  // },[data])

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
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
};
