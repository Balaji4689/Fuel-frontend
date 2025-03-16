
import React, { useState, useEffect } from "react";
import { FaBars, FaCaretDown, FaClipboardList, FaTruck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import "../../dashboard/dashboard.css";
import OrderHistory from "./OrderHistory";
import Order from "./Order";

const UserDashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [customerName, setCustomerName] = useState("User");
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const storedName = localStorage.getItem("customerName");
    if (storedName) setCustomerName(storedName);
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("customerName");
    alert("Logged out successfully!");
    window.location.href = "/Signin";
  };

  return (
    <IconContext.Provider value={{ color: "#FFF" }}>
      <div className="navbar">
        <div className="menu-bars">
          <FaBars onClick={showSidebar} />
        </div>
        <div className="profile-section" onClick={toggleProfileDropdown}>
          <span className="profile-name">{customerName}</span>
          <FaCaretDown className="dropdown-icon" />
          {profileDropdown && (
            <ul className="profile-dropdown">
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiOutlineClose />
            </div>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("order-history")}>
            <FaClipboardList />
            <span>Order History</span>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("order")}>
            <FaTruck />
            <span>Orders</span>
          </li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeSection === "dashboard" && (
          <div>
            <h1>Welcome, {customerName}!</h1>
            <p>This is your dashboard where you can manage everything.</p>
          </div>
        )}
        {activeSection === "order-history" && <OrderHistory />}
        {activeSection === "order" && <Order />}
      </div>
    </IconContext.Provider>
  );
};

export default UserDashboard;
