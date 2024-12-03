import React from "react";
import "../../styles/ProductCard.css";

const BankCard = ({ product }) => {
  return (
    <div className="product-card">
      <span>{product.id}</span>
      <p>{product.name}</p>
      <div className="actions">
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default BankCard;
