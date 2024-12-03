import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productcard";
import "../../styles/ProductList.css";

const products = [
  {
    id: 1,
    name: "Personal Loan",
    image: "/images/piggy-bank 1.svg",
  },
  {
    id: 2,
    name: "Credit Card",
    image: "/images/credit-card.svg",
  },
  {
    id: 3,
    name: "Car Loan",
    image: "/images/car.svg",
  },
  {
    id: 4,
    name: "Home Loan",
    image: "/images/home.svg",
  },
  {
    id: 5,
    name: "Home Loan",
    image: "/images/home.svg",
  },
  {
    id: 6,
    name: "Home Loan",
    image: "/images/home.svg",
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/add-product");
  };
  return (
    <div className="product-list">
      <div className="header">
        <h2>Product List</h2>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
