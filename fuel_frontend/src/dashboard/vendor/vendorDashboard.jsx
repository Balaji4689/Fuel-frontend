import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaBars, FaBuilding, FaPlusSquare, FaBoxes, FaCaretDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import AddFirm from "./forms/AddFirm";
import AddProduct from "./forms/AddProduct";
import AllProducts from "./AllProducts";
import "../dashboard.css";

const VendorDashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [vendorName, setVendorName] = useState("Vendor");
  const [activeSection, setActiveSection] = useState("dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("vendorName");
    if (storedName) setVendorName(storedName);
  }, []);

  const showSidebar = () => setSidebar((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdown((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("vendorName");
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
          <span className="profile-name">{vendorName}</span>
          <FaCaretDown className="dropdown-icon" />
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
          <li className="nav-text" onClick={() => setActiveSection("add-firm")}>
            <FaBuilding />
            <span>Add Firm</span>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("add-product")}>
            <FaPlusSquare />
            <span>Add Product</span>
          </li>
          <li className="nav-text" onClick={() => setActiveSection("all-products")}>
            <FaBoxes />
            <span>All Products</span>
          </li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeSection === "dashboard" && (
          <div>
            <h1>Welcome, {vendorName}!</h1>
            <p>Manage your vendor account efficiently.</p>
          </div>
        )}
        {activeSection === "add-firm" && <AddFirm />}
        {activeSection === "add-product" && <AddProduct />}
        {activeSection === "all-products" && <AllProducts />}
      </div>
    </IconContext.Provider>
  );
};

export default VendorDashboard;