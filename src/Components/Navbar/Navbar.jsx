import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import AuthContxt from "../Authcontext/Authcontext";
import logo from "../../../public/img/logoeso.png";
import "../../Components/Button/Button.css";

const Navbar = () => {
  const { user, UserLogOUt } = useContext(AuthContxt);
  const signoutuser = () => {
    UserLogOUt();
  };
  const navlink = (
    <>
      <ul className="flex flex-col lg:flex-row  gap-2 lg:gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/myapplication">My Application</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-[#7373FF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[40] mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Link to="/" className="flex items-center ">
          <img className="w-32 h-20" src={logo} alt="" />
          <p className="text-3xl font-bold">Work Nest </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[40]">{navlink}</ul>
      </div>
      {/* navbar img and other button section start  */}
      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[40] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/signin" className="">
                  Sign In
                </Link>
              </li>
              <li>
                <button onClick={signoutuser}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end gap-5">
          <Link to="/register" className="btn  hidden pt-4 lg:block ">
            Register
          </Link>
          <Link to="/signin" className="btn">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
