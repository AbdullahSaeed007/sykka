import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import Navbar from "../../components/navBarComponent/navbar";
import BankForm from "../../components/bankComponent/addbank";
import "../../styles/Dashboard.css";

const AddBankPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <BankForm />
        </div>
      </div>
    </div>
  );
};

export default AddBankPage;
