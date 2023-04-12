import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mt-9 mb-4 lg:mt-12 lg:mb-7">
        Jobs Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-2 md:p-0">
          <p className="text-lg">
            <span className="font-bold">Job Description: </span>
            {details.jobDescription}
          </p>
          <p className="text-lg mt-4">
            <span className="font-bold">Job Responsibility: </span>
            {details.jobResponsibility}
          </p>
          <p className="text-lg font-bold mt-4">Education:</p>
          <p className="text-lg mt-1">{details.education}</p>
          <p className="text-lg font-bold mt-4">Experience:</p>
          <p className="text-lg mt-1">{details.experience}</p>
        </div>

        <div className="mt-9 md:mt-12 lg:ms-24 lg:mt-0 ms-2 mb-3 md:ms-0">
          <div className="card w-96 bg-purple-200 rounded-md">
            <div className="card-body">
              <h2 className="card-title">Job Title: {details.jobTitle}</h2>
              <p className="font-semibold">
                Salary: {details.salary} (Per Month)
              </p>
              <h2 className="card-title">Contact Information</h2>
              <p className="font-semibold">Phone: 0111 - 00 00 00</p>
              <p className="font-semibold">Email: info@gmail.com</p>
              <p className="font-semibold">Address: {details.address}</p>

              <div className="card-actions justify-end mt-7">
                <button className="btn rounded">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
