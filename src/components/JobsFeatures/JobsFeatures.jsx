import React from "react";
import { useLoaderData } from "react-router-dom";
import JobsFeatureCard from "../JobsFeatureCard/JobsFeatureCard";
import { useState } from "react";

const JobsFeatures = () => {
  const [willSeeAllJob, setWillSeeAllJob] = useState(false);
  const jobsFeatures = useLoaderData();

  return (
    <div className="container mx-auto mt-5 lg:mt-7">
      {willSeeAllJob || (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {jobsFeatures.slice(0, 4).map((features) => (
            <JobsFeatureCard
              key={features.id}
              features={features}
            ></JobsFeatureCard>
          ))}
        </div>
      )}

      {willSeeAllJob && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {jobsFeatures.map((features) => (
            <JobsFeatureCard
              key={features.id}
              features={features}
            ></JobsFeatureCard>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-9 md:mt-12 mb-3 md:mb-5">
        <button
          className="btn rounded"
          onClick={() => setWillSeeAllJob(!willSeeAllJob)}
        >
          {willSeeAllJob ? "Back" : "See All Job"}
        </button>
      </div>
    </div>
  );
};

export default JobsFeatures;
