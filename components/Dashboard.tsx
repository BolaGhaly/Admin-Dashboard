import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Dashboard = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div>
      <h1
        className={`${
          darkMode ? "text-dark-pr-text" : "text-light-pr-text"
        } text-3xl font-bold`}
      >
        Dashboard
      </h1>
      <div className={`h-20 ${darkMode ? "bg-dark-sc-ct2" : "bg-light-sc-ct2"}`}>
        <p>Testing1</p>
        <p
          className={`${darkMode ? "text-dark-sc-text" : "text-light-sc-text"}`}
        >
          Testing2
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
