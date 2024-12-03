import React from "react";
import UserCard from "./usercard";
import "../../styles/ProductList.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Subhan Waseem",
    image: "/images/userImages/profile/profile.jpg",
  },
  {
    id: 2,
    name: "Ali Hamza",
    image: "/images/userImages/profile/profile2.jpg",
  },
  {
    id: 3,
    name: "Huraira",
    image: "/images/userImages/profile/profile3.jpg",
  },
  {
    id: 4,
    name: "Abu Bakr",
    image: "/images/userImages/profile/profile4.jpg",
  },
  {
    id: 5,
    name: "Ans Shafeeq",
    image: "/images/userImages/profile/profile5.jpg",
  },
  {
    id: 6,
    name: "Shahid",
    image: "/images/userImages/profile/profile6.jpg",
  },
];

const UserList = () => {
  const navigate = useNavigate();
  return (
    <div className="product-list">
      <div className="header">
        <h2>User List</h2>
        <button onClick={() => navigate("/add-user")}>Add User</button>
      </div>
      {products.map((product) => (
        <UserCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default UserList;
