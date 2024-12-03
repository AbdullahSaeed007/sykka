import React from "react";
import "../../styles/ApplicationCard.css";

const ApplicationCard = ({ applicationName, userId }) => {
  return (
    <div className="application-card">
      <div className="application-field">
        <strong className="application-field-heading">Application Name</strong>
        <span className="application-field-value">{applicationName}</span>
      </div>
      <div className="application-field">
        <strong className="application-field-heading">Submitted By</strong>
        <span className="application-field-value">{userId}</span>
      </div>
      <div className="application-field">
        <strong className="application-field-heading">Actions</strong>
        <button className="application-view-button">View</button>
      </div>
    </div>
  );
};

export default ApplicationCard;
