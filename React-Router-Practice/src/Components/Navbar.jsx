import { Link, NavLink } from "react-router-dom";

// this is with Link tag simple

// export const Navbar = () => {
//   return (
//     <>
//       <div className="navbar-container">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </>
//   );
// };

// this with Navlink tag and by mapping and active style

export const Navbar = () => {
  let navbarLinks = [
    { path: "/", element: "Home" },
    { path: "/about", element: "About" },
    { path: "/contact", element: "Contact" },
    { path: "/login", element: "Login" },
    { path: "/product", element: "Product" },
  ];

  const defaultStyle = {
    color: "black",
  };

  const activeStyle = {
    color: "red",
  };

  return (
    <>
      <div className="navbar-container">
        {navbarLinks.map((el, id) => (
          <NavLink
            key={id}
            to={el.path}
            end
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            {el.element}
          </NavLink>
        ))}
      </div>
    </>
  );
};
