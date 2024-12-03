import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import OfferList from "../../components/offerComponent/offerlist";
import Navbar from "../../components/navBarComponent/navbar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <OfferList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
