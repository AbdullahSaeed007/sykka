import React from "react";
import BankCard from "./bankcard";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductList.css";

const products = [
  {
    id: 1,
    name: "Bank Alfalah",
  },
  {
    id: 2,
    name: "Bank Alhabib",
  },
  {
    id: 3,
    name: "Meezan Bank",
  },
  {
    id: 4,
    name: "Bank alIslami",
  },
  {
    id: 5,
    name: "Dubai International Bank",
  },
  {
    id: 6,
    name: "Standard Charter",
  },
];

const BankList = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/add-bank");
  };
  return (
    <div className="product-list">
      <div className="header">
        <h2>Bank List</h2>
        <button onClick={handleAddProduct}>Add Bank</button>
      </div>
      {products.map((product) => (
        <BankCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BankList;
