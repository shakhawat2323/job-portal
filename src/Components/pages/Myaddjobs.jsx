import React, { useEffect, useState } from "react";
import ConAuth from "../Hooks/ConAuth";
import { MdDelete } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const Myaddjobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = ConAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);
  console.log(jobs);
  return (
    <div>
      <h1>my add jobes {jobs.length} </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Jobe Title</th>
                <th>Deadline</th>
                <th>Application Count</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.applicationCount}</td>
                  <td className="">
                    <button>
                      <MdDelete className="text-red-600 text-2xl font-bold" />
                    </button>
                  </td>
                  <td className="">
                    <Link to={`/viewapplication/${job._id}`}>
                      <FcViewDetails className=" text-2xl font-bold" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myaddjobs;
