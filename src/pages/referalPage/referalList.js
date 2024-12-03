import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import ReferalList from "../../components/referalComponent/referallist";
import Navbar from "../../components/navBarComponent/navbar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <ReferalList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
