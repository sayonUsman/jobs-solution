import React from "react";
import { Link } from "react-router-dom";

const AppliedJobsCard = (props) => {
  const { id, logo, jobTitle, employer, location, workTime, salary } =
    props.appliedJobDetails;
  return (
    <div className="mt-9 mb-3">
      <div className="card card-side rounded-xl bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="There is a image available"
            className="sm:h-72 sm:w-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{jobTitle}</h2>
          <p className="font-semibold">{employer}</p>
          <p className="font-semibold">Location: {location}</p>
          <p className="font-semibold">Work Time: {workTime}</p>
          <p className="font-semibold">Salary: {salary}</p>

          <div className="card-actions justify-end">
            <button className="btn rounded w-36 md:w-48 mt-3">
              <Link to={`/job-details/${id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
