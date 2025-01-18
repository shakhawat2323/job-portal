import React, { useEffect, useState } from "react";
import ConAuth from "../Hooks/ConAuth";
import { MdDelete } from "react-icons/md";

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
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.applicationCount}</td>
                  <td className="text-red-600">
                    <MdDelete />
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
