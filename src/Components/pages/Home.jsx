// import React, { Component } from "react";
import Bannar from "../pages/Bannar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";
import temp1 from "../../../public/icon/10001.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import temp2 from "../../../public/icon/10002.svg";
import temp3 from "../../../public/icon/10003.svg";
import temp4 from "../../../public/icon/10004.svg";
import temp5 from "../../../public/icon/10005.svg";
import temp6 from "../../../public/icon/10006.svg";
import temp7 from "../../../public/icon/10007.svg";
import temp8 from "../../../public/icon/10008.svg";
import temp9 from "../../../public/icon/10009.svg";
import temp10 from "../../../public/icon/10010.svg";
import Hotjobs from "./Hotjobs";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Bannar></Bannar>
      <div>
        <h1 className="text-3xl font-bold text-center mt-2">
          Browse by category
        </h1>
        <h1 className="text-xl mt-2 mb-5 font-bold text-center">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </h1>
        <div className="slider-container mb-5">
          <Slider {...settings}>
            <Fade>
              <div className="flex flex-col  ">
                <Link className="flex border-4 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp1} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Content Writer </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
                <Link className="flex border-4 mt-2 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp2} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold"> Market Research </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col ">
                <Link className="flex border-4 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp3} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Marketing & Sale </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
                <Link className="flex border-4 mt-2 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp4} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Customer Help </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col ">
                <Link className="flex border-4 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp5} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Finance </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
                <Link className="flex border-4 mt-2 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp6} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Software </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col ">
                <Link className="flex border-4 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp7} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Security Analyst </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
                <Link className="flex border-4 mt-2 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp8} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Human Resource </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col ">
                <Link className="flex border-4 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp9} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Management </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
                <Link className="flex border-4 mt-2 hover:border-purple-400  items-center gap-5 w-72 h-20 shadow-2xl bg-slate-200 rounded-xl ">
                  <div>
                    <img src={temp10} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Retil & Products </h1>
                    <p className="text-xl  font-semibold">Jobs Available</p>
                  </div>
                </Link>
              </div>
            </Fade>
          </Slider>
        </div>
      </div>
      <div className="mt-16">
        <Hotjobs></Hotjobs>
      </div>
    </div>
  );
};

export default Home;
