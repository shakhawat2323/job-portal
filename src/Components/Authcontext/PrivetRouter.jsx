import { useContext } from "react";
import AuthContxt from "./Authcontext";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const PrivetRouter = ({ children }) => {
  const { user, loding } = useContext(AuthContxt);
  const location = useLocation();
  console.log(location);
  if (loding) {
    return (
      <div className="flex justify-center items-center max-h-screen">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={location?.pathname}></Navigate>;
};

export default PrivetRouter;
