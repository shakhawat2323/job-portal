import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hotjobscard = ({ job }) => {
  const {
    jobType,
    category,
    currency,
    applicationDeadline,
    salaryRange,
    description,
    status,
    hr_email,
    hr_name,
    company_logo,
    company,
    location,
    requirements,
    title,
    _id,
  } = job;
  return (
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
          {requirements.map((skils, index) => (
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
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotjobscard;
