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
      { path: "/appliedJobs", element: <AppliedJobs></AppliedJobs> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
