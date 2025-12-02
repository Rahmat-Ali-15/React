import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { NotFound } from "../Pages/NotFound";
import { Product } from "../Pages/Product";
import { Login } from "../Pages/Login";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/about"
          element={<About />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact />}
        ></Route>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
        <Route
          path="/product"
          element={<Product />}
        ></Route>
        <Route
          path="/product/:id"
          element={<Product />}
        ></Route>
        <Route
          path="*"
          element={<NotFound />}
        ></Route>
      </Routes>
    </>
  );
};
