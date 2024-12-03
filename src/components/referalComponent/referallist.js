import React from "react";
import ReferralCard from "./referalcard";
import "../../styles/ReferalList.css";

const ReferralList = () => {
  const referrals = [
    {
      referralName: "John Doe",
      reference: "12345",
      referralDate: "2024-12-02",
      status: "active",
    },
    {
      referralName: "Jane Smith",
      reference: "67890",
      referralDate: "2024-12-01",
      status: "inactive",
    },
    {
      referralName: "Subhan",
      reference: "67891",
      referralDate: "2024-12-01",
      status: "inactive",
    },
    {
      referralName: "Subhan",
      reference: "67891",
      referralDate: "2024-12-01",
      status: "inactive",
    },
    {
      referralName: "Subhan",
      reference: "67891",
      referralDate: "2024-12-01",
      status: "inactive",
    },
    {
      referralName: "Subhan",
      reference: "67891",
      referralDate: "2024-12-01",
      status: "inactive",
    },
  ];

  return (
    <div className="referral-list-container">
      {referrals.map((referral, index) => (
        <ReferralCard
          key={index}
          referralName={referral.referralName}
          reference={referral.reference}
          referralDate={referral.referralDate}
          status={referral.status}
        />
      ))}
    </div>
  );
};

export default ReferralList;
