import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Dashboard = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p>Testing1</p>
        <p>Testing2</p>
      </div>
    </div>
  );
};

export default Dashboard;
