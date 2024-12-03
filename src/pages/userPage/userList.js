import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import UserList from "../../components/userComponent/userlist";
import Navbar from "../../components/navBarComponent/navbar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
