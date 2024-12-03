import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import Navbar from "../../components/navBarComponent/navbar";
import AddUser from "../../components/userComponent/adduser";
import "../../styles/Dashboard.css";

const AddUserPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <AddUser />
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;
