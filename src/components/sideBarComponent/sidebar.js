import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      label: "Products",
      icon: "/images/sideBarImages/products.svg",
      path: "/product-list",
    },
    {
      label: "Banks",
      icon: "/images/sideBarImages/banks.svg",
      path: "/bank-list",
    },
    {
      label: "Referrals",
      icon: "/images/sideBarImages/referals.svg",
      path: "/referal-list",
    },
    {
      label: "Users",
      icon: "/images/sideBarImages/users.svg",
      path: "/user-list",
    },
    {
      label: "Offers",
      icon: "/images/sideBarImages/offers.svg",
      path: "/offer-list",
    },
    {
      label: "Application",
      icon: "/images/sideBarImages/application.svg",
      path: "/application-list",
    },
  ];

  return (
    <div className="sidebar-parent">
      {/* Hamburger Icon */}
      {!isSidebarOpen && (
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src="/images/Logo.svg" alt="Logo" className="logo" />
        </div>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="menu-item">
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="menu-icon"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar when clicked */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
