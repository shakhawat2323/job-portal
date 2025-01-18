import Lottie from "lottie-react";
import React, { useContext } from "react";
import Loginanimeted from "../../assets/loti/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContxt from "./Authcontext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Signin = () => {
  const { Signinusers, Googlepupop } = useContext(AuthContxt);
  const location = useLocation();
  const navigate = useNavigate();
  const navigates = useNavigate();
  console.log(location);
  const form = location.state || "/";
  const Signinuser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    Signinusers(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login SuccessFully",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(form);
      })
      .catch((error) => console.log(error.message));
  };

  const googlepupop = () => {
    Googlepupop()
      .then((result) => {
        Swal.fire({
          title: "Login SuccessFully",
          text: "You clicked the button!",
          icon: "success",
        });
        console.log(result);
        navigate(form);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero relative z-10 flex items-center justify-center h-full   bg-cover bg-center bg-[url('/img/signin.jpg')]  min-h-screen">
      <div className="hero-content    flex-col lg:flex-row-reverse ">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="text-center lg:text-left  lg:hidden block w-52">
          <Lottie animationData={Loginanimeted}></Lottie>
        </div>
        <div className="card bg-base-100 w-72 lg:w-96 shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center text-[#3383a9] mt-3 font-bold">
            Login now
          </h1>
          <form onSubmit={Signinuser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <span className="text-center text-xl ">
                Don't have an Account?{" "}
                <Link to="/register" className="text-blue-600">
                  Register
                </Link>
              </span>
            </div>
          </form>
          <div>
            <button
              onClick={googlepupop}
              className="text-3xl mb-5 flex gap-2 blcok mx-auto  font-bold"
            >
              <FcGoogle />
            </button>
          </div>
        </div>
        <div className="text-center hidden lg:block lg:text-left w-96">
          <Lottie animationData={Loginanimeted}></Lottie>
          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
