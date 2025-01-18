import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetels = () => {
  const {
    _id,
    company_logo,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    currency,
    min,
    max,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
  } = useLoaderData();

  return (
    // <div className="card bg-base-100 w-8/12 block mx-auto p-5 shadow-xl">
    //   <figure>
    //     <img src={company_logo} alt="Shoes" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Shoes!</h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card bg-base-100  p-3 shadow-xl">
      <div className="flex items-center gap-4 ">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h1 className="text-2xl font-bold">{company}</h1>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt />
            {location}{" "}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title ">
          <div className="text-2xl font-bold"> {title}</div>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description} </p>
        <div className=" flex gap-2  flex-wrap">
          {requirements?.map((skils, index) => (
            <p
              key={index}
              className="border  rounded-md text-center px-2 hover:text-purple-300 hover:bg-gray-600"
            >
              {skils}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center  ">
            {" "}
            Salary : <BsCurrencyDollar />
            {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/Jobapply/${_id}`}>
            <button className="btn btn-primary">Apply </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetels;
