import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../Pages/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
      </Routes>
    </>
  );
};
