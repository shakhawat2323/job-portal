import { useNavigate, useParams } from "react-router-dom";
import "../pages/Buttens.css";
import ConAuth from "../Hooks/ConAuth";
import Swal from "sweetalert2";

const Jobapply = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = ConAuth();
  console.log(id, user);
  const submitdata = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;
    const github = form.Github.value;
    const sosalink = { linkedin, resume, github };

    const appliction = {
      job_id: id,
      applicant: user.email,
      sosalink,
    };
    fetch("http://localhost:5000/jobs-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(appliction),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Your application was successful.",
            icon: "success",
            draggable: true,
          });
          navigate("/myapplication");
        }
      });
  };
  return (
    <div className="hero bg-[url('/img/apply.jpg')]  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-3">Apply To Jobe</h1>
          <form onSubmit={submitdata} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">linkedIn</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="linkedin URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Github</span>
              </label>
              <input
                type="url"
                name="Github"
                placeholder="Github URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Resume </span>
              </label>
              <input
                name="resume"
                type="url"
                placeholder="Resume URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary apply">Apply </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobapply;
