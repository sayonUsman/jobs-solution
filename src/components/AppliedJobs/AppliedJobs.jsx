import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
  const details = useLoaderData();
  let storedAppliedJobId = localStorage.getItem("job-id");
  storedAppliedJobId = new Set(JSON.parse(storedAppliedJobId));
  storedAppliedJobId = [...storedAppliedJobId];

  let appliedJobs = [];

  storedAppliedJobId.map((id) =>
    details.map((detail) => {
      if (detail.id == id) {
        appliedJobs.push(detail);
      }
    })
  );

  return (
    <div className="container mx-auto">
      {appliedJobs.map((appliedJobDetails) => (
        <AppliedJobsCard
          key={appliedJobDetails.id}
          appliedJobDetails={appliedJobDetails}
        ></AppliedJobsCard>
      ))}
    </div>
  );
};

export default AppliedJobs;
