import React, { useState } from "react";
import "../../styles/AddBank.css";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    bank_id: "",
    identificationNumber: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("User details submitted successfully!");
  };

  return (
    <div className="bank-form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="bank-form">
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="
firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        {/* Role */}
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="bank_admin">Bank Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        {/* Bank ID (Shown only if role is bank_admin) */}
        {formData.role === "bank_admin" && (
          <div className="form-group">
            <label htmlFor="bank_id">Bank ID:</label>
            <input
              type="text"
              id="bank_id"
              name="bank_id"
              value={formData.bank_id}
              onChange={handleChange}
              placeholder="Enter bank ID"
              required
            />
          </div>
        )}

        {/* Identification Number */}
        <div className="form-group">
          <label htmlFor="identificationNumber">Identification Number:</label>
          <input
            type="text"
            id="identificationNumber"
            name="identificationNumber"
            value={formData.identificationNumber}
            onChange={handleChange}
            placeholder="Enter identification number"
            required
          />
        </div>

        {/* Occupation */}
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Enter occupation"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate("/user-list")}
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
