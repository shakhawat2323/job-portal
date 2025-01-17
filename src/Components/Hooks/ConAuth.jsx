import { useContext } from "react";
import AuthContxt from "../Authcontext/Authcontext";

const ConAuth = () => {
  const context = useContext(AuthContxt);
  return context;
};
export default ConAuth;
