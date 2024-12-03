import React from "react";
import "../../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span>{product.id}</span>
      <img
        src={product.image}
        alt={`Image of ${product.name}`}
        className="product-image"
      />
      <p>{product.name}</p>
      <div className="actions">
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
