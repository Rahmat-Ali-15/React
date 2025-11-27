import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {

  const navPath = [
    { path: "/login", element: "Login" },
    { path: "/signup", element: "SignUp" },
  ];

  // const activeNav={}

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {navPath.length &&
          navPath.map((el) => {
            return (
              <NavLink
                style={{
                  color: "#000",
                  width: "100%",
                  font: "52px",
                  fontWeight: "900",
                }}
                to={el.path}
                end
              >
                {el.element}
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default Navbar;
