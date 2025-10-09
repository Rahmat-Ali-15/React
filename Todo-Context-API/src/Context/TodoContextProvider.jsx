import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {

  const [todo, setTodo] = useState([]);
  
  return (
    <>
      <TodoContext.Provider value={{ todo, setTodo }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
