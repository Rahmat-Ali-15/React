import { NavLink, useParams } from "react-router-dom";

export const Product = () => {
  let productLink = [
    { path: "/product/1", element: "Product 1" },
    { path: "/product/2", element: "Product 2" },
    { path: "/product/3", element: "Product 3" },
    { path: "/product/4", element: "Product 4" },
  ];
  let { id } = useParams();

  const defaultStyle = {
    color: "black",
  };

  const activeStyle = {
    color: "red",
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "45px" }}>Product Page</h1>

      <div className="product-details">
        {productLink.map((el, id) => (
          <NavLink
            key={id}
            to={el.path}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            {el.element}
          </NavLink>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>Product ID: {id}</p>
    </>
  );
};
