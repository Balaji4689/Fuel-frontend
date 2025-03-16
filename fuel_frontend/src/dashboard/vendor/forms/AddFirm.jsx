import React, { useState } from "react";
import { API_Path } from '../../../Helper/ApiPath';

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [Area, setArea] = useState("");
  const [Category, setCategory] = useState([]);
  const [Offer, setOffer] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setFile(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleFirmSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    if (!firmName || !Area || Category.length === 0 || !Offer || !file) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const loginToken = localStorage.getItem("loginToken");

      if (!loginToken) {
        setError("Authorization Token Missing");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("FirmName", firmName);
      formData.append("Area", Area);
      formData.append("Offer", Offer);
      formData.append("image", file);
      Category.forEach((value) => formData.append("Category[]", value));

      const response = await fetch(`${API_Path}/firm/add-firm`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loginToken}`, // ✅ Fixed `token` issue
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFirmName("");
        setArea("");
        setCategory([]);
        setOffer("");
        setFile(null);
        setImagePreview(null);
        setSuccessMessage("Firm Added Successfully!");
      } else {
        setError(data.message || "Error adding firm");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="FirmSection">
      <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h3>Add Firm</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <label>Firm Name</label>
        <input type="text" placeholder="Firm Name" value={firmName} onChange={(e) => setFirmName(e.target.value)} />

        <label>Area</label>
        <input type="text" placeholder="Area" value={Area} onChange={(e) => setArea(e.target.value)} />

        <div className="checkInp">
          <label>Category</label>
          <div className="checkBokContainer">
            <label>Petrol</label>
            <input type="checkbox" value="Petrol" checked={Category.includes("Petrol")} onChange={handleCategoryChange} />
          </div>
          <div className="checkBokContainer">
            <label>Diesel</label>
            <input type="checkbox" value="Diesel" checked={Category.includes("Diesel")} onChange={handleCategoryChange} />
          </div>
        </div>

        <label>Offer</label>
        <input type="text" placeholder="Offer" value={Offer} onChange={(e) => setOffer(e.target.value)} />

        <label>Image</label>
        <input type="file" onChange={handleImageUpload} />

        <div className="SubmitBut">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;
