import { useState } from 'react'
import Employees from "./component/Employees/";

const App = () => {
  const employees = [
    {
      name: "Justine Labora",
      position: "Manager",
      salary: 3000,
      status: "Active",
    },
    {
      name: "Manny Pacman",
      position: "Developer",
      salary: 9000,
      status: "Active",
    },
    {
      name: "Odette Rojas",
      position: "Designer",
      salary: 6000,
      status: "Active",
    },
    { name: "Lunox Reyes", position: "Developer", status: "Not Active" },
    { name: "Fanny Labora", position: "Manager", status: "Not Active" },
    {
      name: "Shenny Plameran",
      position: "Manager",
      salary: 1000,
      status: "Active",
    },
    {
      name: "Ryle Delicano",
      position: "Developer",
      salary: 7000,
      status: "Active",
    },
    {
      name: "Lami Mami",
      position: "Manager",
      salary: 5000,
      status: "Active",
    },
    {
      name: "Labora Justine",
      position: "Designer",
      salary: 2000,
      status: "Active",
    },
    {
      name: "Jack Jack",
      position: "Developer",
      salary: 1000,
      status: "Active",
    },
  ];

  return (
    <div className="App">
      <Employees employees={employees} />
    </div>
  );
};

export default App
