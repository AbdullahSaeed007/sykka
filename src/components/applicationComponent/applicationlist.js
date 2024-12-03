import React from "react";
import ApplicationCard from "./applicationcard";
import "../../styles/Application.css";

const UserApplication = () => {
  const applications = [
    {
      applicationName: "Loan Application",
      userId: "12345",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
    {
      applicationName: "Credit Card Request",
      userId: "67890",
    },
  ];

  return (
    <div className="user-application-container">
      <h2>User Applications</h2>

      <div className="application-list">
        {applications.map((application, index) => (
          <ApplicationCard
            key={index}
            applicationName={application.applicationName}
            userId={application.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default UserApplication;
