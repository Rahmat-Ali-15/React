import { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, pass };
    handleLogin(payload);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the pass"
          onChange={(e) => setPass(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};
