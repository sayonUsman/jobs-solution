import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-purple-50">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-ghost">
                  <Link to="/statistics">Statistics</Link>
                </button>
              </li>

              <li>
                <button className="btn btn-ghost">
                  <Link to="/appliedJobs">Applied Jobs</Link>
                </button>
              </li>

              <li>
                <button className="btn btn-ghost">
                  <Link to="/blog">Blog</Link>
                </button>
              </li>
            </ul>
          </div>

          <div className="btn btn-ghost rounded normal-case text-2xl font-bold">
            Jobs Solution
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mr-12 xl:mr-16">
            <li>
              <button className="btn btn-ghost">
                <Link to="/statistics">Statistics</Link>
              </button>
            </li>

            <li>
              <button className="btn btn-ghost">
                <Link to="/appliedJobs">Applied Jobs</Link>
              </button>
            </li>

            <li>
              <button className="btn btn-ghost">
                <Link to="/blog">Blog</Link>
              </button>
            </li>
          </ul>
        </div>

        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline rounded">
          Star Applying
        </button>
      </div>
    </div>
  );
};

export default Navbar;
