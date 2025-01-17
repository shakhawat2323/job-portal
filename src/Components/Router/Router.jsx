import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../pages/Error";
import Register from "../Authcontext/Register";
import Signin from "../Authcontext/Signin";
import JobDetels from "../pages/JobDetels";
import PrivetRouter from "../Authcontext/PrivetRouter";
import Jobapply from "../pages/Jobapply";
import Myapplication from "../pages/Myapplication";

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
        path: "/jobs/:id",
        element: (
          <PrivetRouter>
            <JobDetels></JobDetels>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/Jobapply/:id",
        element: (
          <PrivetRouter>
            <Jobapply></Jobapply>
          </PrivetRouter>
        ),
      },
      {
        path: "/myapplication",
        element: (
          <PrivetRouter>
            <Myapplication></Myapplication>
          </PrivetRouter>
        ),
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
