import React, { useEffect, useState } from "react";
import Hotjobscard from "./Hotjobscard";

const Hotjobs = () => {
  const [jobsdata, setJobsdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobsdata(data);
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-5xl  font-bold text-center">Jobs of the day</h1>
      <h1 className="text-xl font-bold text-center">
        Search and connect with the right candidates faster.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-2 mb-5">
        {jobsdata.map((job, id) => (
          <Hotjobscard key={id} job={job}></Hotjobscard>
        ))}
      </div>
    </div>
  );
};

export default Hotjobs;
