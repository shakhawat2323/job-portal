import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../pages/Error";
import Register from "../Authcontext/Register";
import Signin from "../Authcontext/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default router;
