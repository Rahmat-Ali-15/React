import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext(null);

export const ContextComponent = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MyContext.Provider value={{ data, setData, isLogin, setIsLogin }}>
      {children}
    </MyContext.Provider>
  );
};
