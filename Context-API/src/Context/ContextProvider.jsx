/* eslint-disable react-refresh/only-export-components */
// import { createContext, useState } from "react"

import { createContext, useState } from "react";

// export const MyContext = createContext(null);

// export const ContextProvider = ({ children }) => {

//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <MyContext.Provider value={{ count, setCount }}>{children}</MyContext.Provider>
//         </>
//     )
// }

export const CounterContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
