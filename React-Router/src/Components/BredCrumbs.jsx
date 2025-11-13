import { Link, useLocation } from "react-router-dom";

export const BredCrumbs = () => {
  const location = useLocation();
  let crumb = "";
  console.log("🚀 ~ crumb:", crumb);
  const bredCrumb = location.pathname
    .split("/")
    .filter((el) => el != "")
    .map((curr) => {
      crumb += `${curr}`;
      return (
        <div className="crumb">
          <Link to={crumb}>{curr}</Link>
        </div>
      );
    });
  console.log(bredCrumb);

  return (
    <>
      <div className="crumbs">{bredCrumb}</div>
    </>
  );
};
