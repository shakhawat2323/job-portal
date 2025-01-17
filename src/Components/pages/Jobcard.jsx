import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Jobcard = ({ job, jobs, setJobs }) => {
  const {
    title,
    location,

    company_logo,

    _id,
  } = job;
  const applicationdatadelte = (id) => {
    fetch(`http://localhost:5000/jobs-application/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        if (data.deletedCount > 0) {
          const deletebtn = jobs.filter((job) => job._id !== id);
          console.log(deletebtn);
          setJobs(deletebtn);
          Swal.fire({
            title: "Delete Successful",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button onClick={() => applicationdatadelte(_id)} className="">
          <MdDeleteForever className="text-red-600 text-4xl font-bold" />
        </button>
      </th>
    </tr>
  );
};

export default Jobcard;
