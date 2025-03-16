import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaBars, FaClipboardList, FaStar, FaTachometerAlt, FaClipboardCheck, FaShippingFast } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import MyOrders from "./myOrders";  
import Ratings from "./rating"; 
import '../../dashboard/dashboard.css';

const DeliveryDashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [deliveryName, setDeliveryName] = useState("Delivery Agent");
  const [activeSection, setActiveSection] = useState("dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("deliveryName");
    if (storedName) setDeliveryName(storedName);
  }, []);

  const showSidebar = () => setSidebar((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdown((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("deliveryName");
    alert("Logged out successfully!");
    navigate("/Signin");
  };

  return (
    <IconContext.Provider value={{ color: "#FFF" }}>
      <div className="navbar">
        <div className="menu-bars">
          <FaBars onClick={showSidebar} />
        </div>
        <div className="profile-section" onClick={toggleProfileDropdown}>
          <span className="profile-name">{deliveryName}</span>
          {profileDropdown && (
            <ul className="profile-dropdown">
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <div className="menu-bars">
              <AiOutlineClose />
            </div>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("dashboard")}> 
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("orders")}> 
            <FaClipboardList />
            <span>My Orders</span>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("ratings")}> 
            <FaStar />
            <span>My Ratings</span>
          </li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeSection === "dashboard" && (
          <div className="dashboard-overview">
            <h1>Welcome, {deliveryName}!</h1>
            <p>Manage your deliveries efficiently.</p>
            <div className="overview-cards">
              <div className="card">
                <FaClipboardCheck className="icon" />
                <h3>Completed Deliveries</h3>
                <p>50</p>
              </div>
              <div className="card">
                <FaShippingFast className="icon" />
                <h3>Pending Deliveries</h3>
                <p>5</p>
              </div>
              <div className="card">
                <FaStar className="icon" />
                <h3>Average Rating</h3>
                <p>4.8</p>
              </div>
            </div>
          </div>
        )}
        {activeSection === "orders" && <MyOrders />}
        {activeSection === "ratings" && <Ratings />}
      </div>
    </IconContext.Provider>
  );
};

export default DeliveryDashboard;