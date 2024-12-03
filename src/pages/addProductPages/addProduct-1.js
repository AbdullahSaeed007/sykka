import React from "react";
import Sidebar from "../../components/sideBarComponent/sidebar";
import Navbar from "../../components/navBarComponent/navbar";
import { useNavigate } from "react-router-dom";
import "../../styles/AddProduct-1.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/product-detail");
  };
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <div className="add-product-form">
            <div className="header">
              <h2>Add Product</h2>
              <span className="status">Step 1</span>
            </div>
            <form>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Enter product name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Enter product description"></textarea>
              </div>
              <div className="form-group">
                <label>Image</label>
                <div className="image-upload">
                  <input type="file" id="product-image" />
                  <label htmlFor="product-image">Upload</label>
                </div>
              </div>
              <button
                onClick={handleAddProduct}
                type="submit"
                className="add-btn"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
