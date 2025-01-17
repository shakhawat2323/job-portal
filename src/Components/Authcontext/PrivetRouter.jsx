import { useContext } from "react";
import AuthContxt from "./Authcontext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user, loding } = useContext(AuthContxt);
  const location = useLocation();
  console.log(location);
  if (loding) {
    return (
      <span className="loading loading-infinity text-primary loading-lg"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={location?.pathname}></Navigate>;
};

export default PrivetRouter;
