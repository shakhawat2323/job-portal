import Lottie from "lottie-react";
import React, { useContext, useEffect } from "react";
import Registeranimeted from "../../assets/loti/register.json";
import AuthContxt from "./Authcontext";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Register = () => {
  const { Registeruser, UserLogOUt, Googlepupop } = useContext(AuthContxt);
  const RegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const chakbox = form.chekbox.value;
    const user = { name, photourl, email, password, cpassword, chakbox };
    Registeruser(email, password)
      .then((result) => {
        console.log(result.user);
        UserLogOUt();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const googlepupop = () => {
    Googlepupop()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-[url('/img/bg.jpg')] bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="text-center lg:text-left h-80 lg:hidden ms:w-80">
            <Lottie animationData={Registeranimeted}></Lottie>
          </div>
          <div className="card bg-base-100  lg:w-[400px] w-[330px]   shrink-0 shadow-2xl">
            <h1 className="text-3xl mt-5 text-[#25549bd5] font-bold text-center ">
              Register Now
            </h1>
            <form onSubmit={RegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="Email"
                  name="email"
                  placeholder="exampale@gmail.com"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Confirom Password
                  </span>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  placeholder=" Confirom Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <div className="form-control  ">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        name="chekbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text ml-5">
                        Agree our terms and policy
                      </span>
                    </label>
                  </div>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <button className="text-3xl flex gap-2 blcok mx-auto  font-bold">
              <button onClick={googlepupop}>
                {" "}
                <FcGoogle />
              </button>
              <button>
                {" "}
                <ImGithub />
              </button>
              <button>
                {" "}
                <FaFacebook />
              </button>
              <button>
                {" "}
                <FaXTwitter />
              </button>
            </button>
            <div className="mb-3 text-center">
              <span className="text-center  text-xl font-bold  ">
                Don't have an Account?
                <Link to="/signin" className="text-blue-600">
                  Sign In
                </Link>
              </span>
            </div>
          </div>

          <div className="text-center lg:block hidden lg:text-left w-96">
            <Lottie animationData={Registeranimeted}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
