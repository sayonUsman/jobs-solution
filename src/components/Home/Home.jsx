import React from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const Home = () => {
  const jobCategory = useLoaderData();

  return (
    <div>
      <Header></Header>

      <h1 className="text-5xl lg:text-6xl font-semibold text-center mt-12 lg:mt-18">
        Job Category
      </h1>

      <p className="text-center mt-5 lg:mt-7">
        Explore thousands of job opportunities with all the information you
        need.
      </p>

      <div className="container mx-auto mt-5 lg:mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {jobCategory.map((job) => (
            <JobCategoryCard key={job.id} job={job}></JobCategoryCard>
          ))}
        </div>
      </div>

      <h1 className="text-5xl lg:text-6xl font-semibold text-center mt-12 lg:mt-18">
        Jobs Feature
      </h1>

      <p className="text-center mt-5 lg:mt-7">
        Explore thousands of job opportunities with all the information you
        need.
      </p>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
