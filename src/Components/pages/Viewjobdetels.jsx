import React, { useEffect, useState } from "react";
import ConAuth from "../Hooks/ConAuth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Viewjobdetels = () => {
  const data = useLoaderData();
  const handalestatuseupdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/jobs-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Status Update",

            icon: "success",
          });
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((job, index) => (
              <tr key={job._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handalestatuseupdate(e, job._id)}
                    defaultValue={job.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled selected>
                      Change Status
                    </option>
                    <option>Under Review</option>
                    <option>Set InTerviw</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewjobdetels;
