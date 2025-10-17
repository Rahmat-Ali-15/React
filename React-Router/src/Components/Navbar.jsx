import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/single_page", title: "User" },
  ];

  const defaultStyle = {
    color: "black",
  };

  const activeStyle = {
    color: "tomato",
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          //   flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {links.map((data, id) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : defaultStyle;
            }}
            key={id}
            to={data.path}
            end
          >
            {data.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};
