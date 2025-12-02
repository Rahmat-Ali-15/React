import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleLogin}
      >
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
