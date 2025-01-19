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
import Addjobs from "../pages/Addjobs";
import Myaddjobs from "../pages/Myaddjobs";
import Alljobes from "../pages/Alljobes";
import Viewjobdetels from "../pages/Viewjobdetels";

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
        path: "/myaddjobs",
        element: (
          <PrivetRouter>
            <Myaddjobs></Myaddjobs>
          </PrivetRouter>
        ),
      },
      {
        path: "/viewapplication/:job_id",
        element: (
          <PrivetRouter>
            <Viewjobdetels></Viewjobdetels>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs-application/jobs/${params.job_id}`),
      },
      {
        path: "/alljobes",
        element: <Alljobes></Alljobes>,
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
        path: "/addjobs",
        element: (
          <PrivetRouter>
            <Addjobs></Addjobs>
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
