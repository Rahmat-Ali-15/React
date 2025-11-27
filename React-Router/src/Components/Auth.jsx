// import { useContext } from "react"

import { useContext, useState } from "react";
import { MyContext } from "../Context/ContextComponent";

import { Navigate } from "react-router-dom";

export const Auth = () => {
  const { isLogin, setIsLogin } = useContext(MyContext);
  const [text, setText] = useState("");
  const [textPass, setTextPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 && textPass.length === 0) return;
    setIsLogin(!isLogin);
  };

  if (isLogin) {
    console.log("Hello");
    return <Navigate to="/single_page" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setTextPass(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
