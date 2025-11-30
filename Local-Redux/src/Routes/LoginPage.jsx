import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LoginUser } from "../Redux/Auth/action";
import { Login } from "../Components/Login";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, isError } = useSelector((state) => {
    return state.auth.isAuth;
  }, shallowEqual);
  console.log("🚀 ~ isAuth:", isAuth);

  const handleLogin = ({ email, password }) => {
    // if (email === "admin" && password === "admin") {
    //   dispatch({ type: LOGIN_SUCCESS, payload: "fakeToken" });
    // } else {
    //   dispatch({ type: LOGIN_FAILURE, payload: "wrong credentials" });
    // }
    dispatch(LoginUser({ email, password }));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <Login handleLogin={handleLogin} />
      {isError && <div>...something went wrong</div>}
    </>
  );
};
