import React, { useState } from "react";
import "../../styles/AddBank.css";
import { useNavigate } from "react-router-dom";

const BankForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    branch: "",
    country: "",
    swift_code: "",
    routing_number: "",
    phone: "",
    address: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Bank details submitted successfully!");
  };

  return (
    <div className="bank-form-container">
      <h2>Add Bank</h2>
      <form onSubmit={handleSubmit} className="bank-form">
        {Object.keys(formData).map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>
              {field
                .replace("_", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
              :
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required
            />
          </div>
        ))}
        <button
          onClick={() => navigate("/bank-list")}
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BankForm;
