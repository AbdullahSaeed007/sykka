import React from "react";
import OfferCard from "./offercard";
import "../../styles/OfferList.css";

const OfferList = () => {
  const offers = [
    { bankName: "Bank Alfalah", applicantName: "Shahid", status: "pending" },
    { bankName: "Bank AlHabib", applicantName: "Subhan", status: "pending" },
    { bankName: "Meezan", applicantName: "Hassan", status: "pending" },
    { bankName: "Standard Charter", applicantName: "Ahsan", status: "pending" },
    { bankName: "Standard Charter", applicantName: "Ahsan", status: "pending" },
    { bankName: "Standard Charter", applicantName: "Ahsan", status: "pending" },
    { bankName: "Standard Charter", applicantName: "Ahsan", status: "pending" },
  ];

  return (
    <div className="offer-list-container">
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          bankName={offer.bankName}
          applicantName={offer.applicantName}
          status={offer.status}
        />
      ))}
    </div>
  );
};

export default OfferList;
