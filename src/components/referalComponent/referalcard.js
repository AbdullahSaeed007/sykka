import React from "react";
import "../../styles/ReferalCard.css";

const ReferralCard = ({ referralName, reference, referralDate, status }) => {
  return (
    <div className="referral-card">
      <div className="referral-field">
        <strong className="field-heading">Referral Name</strong>
        <span className="field-value">{referralName}</span>
      </div>
      <div className="referral-field">
        <strong className="field-heading">Reference</strong>
        <span className="field-value">{reference}</span>
      </div>
      <div className="referral-field">
        <strong className="field-heading">Referral Date</strong>
        <span className="field-value">{referralDate}</span>
      </div>
      <div className="referral-field">
        <strong className="field-heading">Status</strong>
        <span className={`field-value Rstatus-icon ${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="referral-field action-button1">
        <strong className="field-heading">Action</strong>
        <button className="view-button">View</button>
      </div>
    </div>
  );
};

export default ReferralCard;
