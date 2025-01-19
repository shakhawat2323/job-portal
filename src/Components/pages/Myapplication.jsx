import React, { useEffect, useState } from "react";
import ConAuth from "../Hooks/ConAuth";
import Jobcard from "./Jobcard";
import axios from "axios";

const Myapplication = () => {
  const { user } = ConAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/jobs-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setJobs(data);
    //   });
    axios
      .get(`http://localhost:5000/jobs-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, [user.email]);

  console.log(jobs);
  return (
    <div>
      <h1>my application {jobs.length}</h1>
      <h1>my application</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(
                (job, index) => (
                  <Jobcard
                    key={index}
                    job={job}
                    setJobs={setJobs}
                    jobs={jobs}
                  ></Jobcard>
                )
                // <tr key={job._id}>
                //   <th>
                //     <label>
                //       <input type="checkbox" className="checkbox" />
                //     </label>
                //   </th>
                //   <td>
                //     <div className="flex items-center gap-3">
                //       <div className="avatar">
                //         <div className="mask mask-squircle h-12 w-12">
                //           <img
                //             src={job.company_logo}
                //             alt="Avatar Tailwind CSS Component"
                //           />
                //         </div>
                //       </div>
                //       <div>
                //         <div className="font-bold">{job.title}</div>
                //         <div className="text-sm opacity-50">{job.location}</div>
                //       </div>
                //     </div>
                //   </td>
                //   <td>
                //     Zemlak, Daniel and Leannon
                //     <br />
                //     <span className="badge badge-ghost badge-sm">
                //       Desktop Support Technician
                //     </span>
                //   </td>
                //   <td>Purple</td>
                //   <th>
                //     <button className="btn btn-ghost btn-xs">Delete</button>
                //   </th>
                // </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myapplication;
