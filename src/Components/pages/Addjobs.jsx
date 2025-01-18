import React from "react";
import ConAuth from "../Hooks/ConAuth";
import { stringify } from "postcss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Addjobs = () => {
  const { user } = ConAuth();
  const navigate = useNavigate();

  const handaledata = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const initializedata = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newjobs } = initializedata;

    newjobs.salaryRange = { max, min, currency };

    newjobs.requirements = newjobs.requirements.split("\n");
    newjobs.responsibilities = newjobs.responsibilities.split("\n");

    fetch(`http://localhost:5000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newjobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Jobe has been Added",
            text: "You clicked the button!",
            icon: "success",
          });
          navigate("/myaddjobs");
        }
      });
  };
  return (
    <div className="bg-[url('/img/addjobsdos.jpg')] bg-cover  bg-no-repeat text-white">
      <h1 className="text-2xl font-bold text-center py-5">Post a New Data</h1>
      <div className="card w-11/12 lg:w-5/12 mx-auto shrink-0 ">
        <form onSubmit={handaledata} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Job Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="job Title"
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Job Location
              </span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="job Location"
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                job Type
              </span>
            </label>
            <select
              name="jobType"
              className="input select   text-black input-bordered "
            >
              <option className="text-xl font-bold" disabled selected>
                Pick a jobe type
              </option>
              <option className="text-xl font-bold">Full-Time</option>
              <option className="text-xl font-bold">Intern</option>
              <option className="text-xl font-bold">Part-time</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Category{" "}
              </span>
            </label>
            <select
              name="category"
              className=" select input text-black input-bordered"
            >
              <option disabled selected>
                Jobe Category
              </option>
              <option className="text-xl font-bold">Software Engineer</option>
              <option className="text-xl font-bold">Web Developer</option>
              <option className="text-xl font-bold">Data Scientist</option>
              <option className="text-xl font-bold">
                Cybersecurity Analyst
              </option>
              <option className="text-xl font-bold">DevOps Engineer</option>
              <option className="text-xl font-bold">
                Mobile App Developer
              </option>
              <option className="text-xl font-bold">Doctor</option>
              <option className="text-xl font-bold">Nurse</option>
              <option className="text-xl font-bold">Pharmacist</option>
              <option className="text-xl font-bold">
                Medical Lab Technician
              </option>
              <option className="text-xl font-bold">Physical Therapist</option>
              <option className="text-xl font-bold">Dentist</option>
              <option className="text-xl font-bold">Nutritionis</option>
              <option className="text-xl font-bold">Teacher</option>
              <option className="text-xl font-bold">Professor</option>
              <option className="text-xl font-bold">
                Educational Consultant
              </option>
              <option className="text-xl font-bold">
                Special Education Teacher
              </option>
              <option className="text-xl font-bold">Online Tutor</option>
              <option className="text-xl font-bold">Accountant</option>
              <option className="text-xl font-bold">Financial Analyst</option>
              <option className="text-xl font-bold">Auditor</option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-white font-bold">
                  Min
                </span>
              </label>
              <input
                type="number"
                name="min"
                placeholder="min"
                className="input text-black input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-white font-bold">
                  Max
                </span>
              </label>
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input text-black input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-white font-bold">
                  Salary
                </span>
              </label>
              <select
                name="currency"
                className="input select  text-black input-bordered "
              >
                <option className="text-xl font-bold" disabled selected>
                  Currency
                </option>
                <option className="text-xl font-bold">BDT</option>
                <option className="text-xl font-bold">USD</option>
                <option className="text-xl font-bold">Euro</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Application Date
              </span>
            </label>
            <input
              type="text"
              name="applicationDeadline"
              defaultValue={new Date().toLocaleDateString()}
              readOnly
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Company{" "}
              </span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="company"
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Requirements
              </span>
            </label>
            <textarea
              type="text"
              name="requirements"
              placeholder="Requirements"
              className="input textarea  text-black input-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Responsibilities
              </span>
            </label>
            <textarea
              type="text"
              name="responsibilities"
              placeholder="responsibilities"
              className="input textarea text-black input-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Email
              </span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="email"
              defaultValue={user?.email}
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="full name"
              defaultValue={user?.displayName}
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                company Logo
              </span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="company Logo"
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-white font-bold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="description"
              className="input textarea text-black input-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-xl font-bold">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjobs;
