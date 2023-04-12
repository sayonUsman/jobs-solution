import React from "react";
import { Link } from "react-router-dom";

const JonbsFeatureCard = (props) => {
  const { id, logo, jobTitle, employer, location, workTime, address, salary } =
    props.features;

  return (
    <div className="card card-compact rounded w-100 m-2 md:p-0 bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="There is a image available"
          className="w-48 h-12"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl font-semibold">
          {jobTitle}
        </h2>
        <p className="text-xl md:text-2xl font-semibold">{employer}</p>
        <p className="text-lg md:text-lg font-semibold">Location: {location}</p>
        <p className="text-lg md:text-lg font-semibold">
          Work Time: {workTime}
        </p>
        <p className="text-lg md:text-lg font-semibold">Address: {address}</p>
        <p className="text-lg md:text-lg font-semibold">Salary: {salary}</p>
        <button className="btn rounded w-36 md:w-48 mt-3">
          <Link to={`/job-details/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default JonbsFeatureCard;
