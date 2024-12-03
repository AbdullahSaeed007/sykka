import React from "react";
import "../../styles/DetailedOffersView.css";

const DetailedOffersView = () => {
  // Simulated offer data
  const offerData = {
    bankName: "Bank Alfalah",
    email: "contact@bankalfalah.com",
    phone: "+1-123-456-7890",
    address: "123 Main St, Lahore, Pakistan",
    loanDetails: {
      amount: "100,000 PKR",
      interestRate: "12%",
      emi: "12,000 PKR",
      totalPayableAmount: "144,000 PKR",
      totalDuration: "12 months",
      termsConditions:
        "Offer valid for new customers only. Subject to credit approval.",
    },
  };

  return (
    <div className="detailed-offer-view-container">
      <h2>Offer Details</h2>

      {/* Bank Details */}
      <div className="bank-details">
        <h3>Bank Details</h3>
        <div className="detail-item">
          <strong>Bank Name:</strong> {offerData.bankName}
        </div>
        <div className="detail-item">
          <strong>Email:</strong> {offerData.email}
        </div>
        <div className="detail-item">
          <strong>Phone:</strong> {offerData.phone}
        </div>
        <div className="detail-item">
          <strong>Address:</strong> {offerData.address}
        </div>
      </div>

      {/* Loan Details */}
      <div className="loan-details-section">
        <div className="loan-details-header">
          <span className="loan-details-title">Loan Details</span>
        </div>
        <div className="loan-details">
          <div className="loan-detail-item">
            <strong>Amount:</strong> {offerData.loanDetails.amount}
          </div>
          <div className="loan-detail-item">
            <strong>Interest Rate:</strong> {offerData.loanDetails.interestRate}
          </div>
          <div className="loan-detail-item">
            <strong>EMI:</strong> {offerData.loanDetails.emi}
          </div>
          <div className="loan-detail-item">
            <strong>Total Payable Amount:</strong>{" "}
            {offerData.loanDetails.totalPayableAmount}
          </div>
          <div className="loan-detail-item">
            <strong>Total Duration:</strong>{" "}
            {offerData.loanDetails.totalDuration}
          </div>
          <div className="loan-detail-item">
            <strong>Terms & Conditions:</strong>{" "}
            {offerData.loanDetails.termsConditions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedOffersView;
