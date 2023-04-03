import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marks = [
    {
      name: "John Smith",
      math: 85,
      physics: 75,
      chemistry: 90,
    },
    {
      name: "Jane Doe",
      math: 80,
      physics: 90,
      chemistry: 75,
    },
    {
      name: "Bob Johnson",
      math: 75,
      physics: 80,
      chemistry: 85,
    },
    {
      name: "Samantha Lee",
      math: 85,
      physics: 75,
      chemistry: 80,
    },
    {
      name: "Alice Chen",
      math: 90,
      physics: 85,
      chemistry: 75,
    },
    {
      name: "Jack Wilson",
      math: 75,
      physics: 80,
      chemistry: 85,
    },
    {
      name: "Emily Kim",
      math: 80,
      physics: 90,
      chemistry: 75,
    },
    {
      name: "Daniel Park",
      math: 85,
      physics: 75,
      chemistry: 80,
    },
    {
      name: "Olivia Lee",
      math: 90,
      physics: 85,
      chemistry: 75,
    },
    {
      name: "Liam Chen",
      math: 75,
      physics: 80,
      chemistry: 85,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marks}>
        <Line dataKey="physics"></Line>
        <Line dataKey="math" stroke="#8884d8"></Line>
        <Line dataKey="chemistry"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;
