import React from "react";
import { useLoaderData } from "react-router-dom";
import JobsFeatureCard from "../JobsFeatureCard/JobsFeatureCard";

const JobsFeatures = () => {
  const jobsFeatures = useLoaderData();

  return (
    <div className="container mx-auto mt-5 lg:mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobsFeatures.slice(0, 4).map((features) => (
          <JobsFeatureCard
            key={features.id}
            features={features}
          ></JobsFeatureCard>
        ))}
      </div>

      <div className="flex justify-center mt-9 md:mt-12 mb-3 md:mb-5">
        <button className="btn rounded">See All Jobs</button>
      </div>
    </div>
  );
};

export default JobsFeatures;
