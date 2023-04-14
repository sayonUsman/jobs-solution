import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import JobsFeatures from "./components/JobsFeatures/JobsFeatures";
import JobDetails from "./components/JobDetails/JobDetails";
import jobDetailsLoader from "./loader/jobDetailsLoader";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../fakeData/job-category-list.json"),
        children: [
          {
            path: "/",
            element: <JobsFeatures></JobsFeatures>,
            loader: () => fetch("../fakeData/jobs-features.json"),
          },
        ],
      },
      { path: "/statistics", element: <Statistics></Statistics> },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../fakeData/jobs-features.json"),
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/job-details/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => jobDetailsLoader(params.jobId),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
