import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import ProductList from "../../components/productComponent/productList";
import Navbar from "../../components/navBarComponent/navbar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
