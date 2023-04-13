import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Job 1",
      Rating: "60",
    },
    {
      name: "Job 2",
      Rating: "95",
    },
    {
      name: "Job 3",
      Rating: "55",
    },
    {
      name: "Job 4",
      Rating: "75",
    },
    {
      name: "Job 5",
      Rating: "100",
    },
    {
      name: "Job 6",
      Rating: "65",
    },
    {
      name: "Job 7",
      Rating: "95",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex  flex-col justify-center items-center">
        <div className="mt-48">
          <AreaChart width={625} height={325} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Rating"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>

        <p className="text-2xl font-semibold mt-5">Statistics of Job</p>
      </div>
    </div>
  );
};

export default Statistics;
