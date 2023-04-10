import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-50">
      <div className="container mx-auto">
        <div className="card lg:card-side rounded-none bg-purple-50">
          <figure>
            <img
              src={
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              }
              alt="Header Image"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-4xl md:text-5xl">One Step</h2>
            <h2 className="card-title text-4xl md:text-5xl">Closer To</h2>
            <h2 className="card-title text-4xl md:text-5xl text-purple-500">
              Dream Job
            </h2>

            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>

            <div className="card-actions justify-end">
              <button className="btn btn-outline rounded">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
