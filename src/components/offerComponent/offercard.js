import React from "react";
import "../../styles/OfferCard.css";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ bankName, applicantName, status }) => {
  const navigate = useNavigate();

  return (
    <div className="offer-card">
      <div className="offer-field">
        <strong className="field-heading">Bank Name</strong>
        <span className="field-value">{bankName}</span>
      </div>
      <div className="offer-field">
        <strong className="field-heading">Applicant Name</strong>
        <span className="field-value">{applicantName}</span>
      </div>
      <div className="offer-field">
        <strong className="field-heading">Status</strong>
        <span
          className={`status-icon ${
            status === "accepted" ? "active" : "inactive"
          }`}
        >
          {status === "" ? "Pending" : "Pending"}
        </span>
      </div>
      <div className="offer-field">
        <strong className="field-heading">Action</strong>
        <button
          onClick={() => navigate("/detailed-offer")}
          className="view-button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
