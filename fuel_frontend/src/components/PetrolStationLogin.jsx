import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { API_Path } from '../Helper/ApiPath';
import '../App.css';

// Image icons for login
import googleIcon from '../assets/google-icon.png';
import twitterIcon from '../assets/twitter.png';
import gitHubIcon from '../assets/github-icon.png';

const SocialMedias = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} className="social-media-img" alt={alt} />
  </a>
);

const PetrolStationLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_Path}/vendor/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem('loginToken', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'vendor');
        localStorage.setItem("vendorName", data.vendor.username);

        setEmail("");
        setPassword("");
        alert("Vendor login successful!");

        navigate('/vendorDashboard');  
      } else {
        setError(data.message || "Login failed, please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-title">Sign In - Fuel Station</h1>
        {error && <p className="error-message">{error}</p>}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              name="email"
              id="email"
              placeholder="Email" 
              className="form-input"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              id="password" 
              placeholder="Password" 
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="social-login">
          <div className="divider"></div>
          <p>Login with social accounts</p>
          <div className="divider"></div>
        </div>

        <div className="socialmedias">
          <SocialMedias href="https://www.google.com/" src={googleIcon} alt="Google" />
          <SocialMedias href="https://www.twitter.com/" src={twitterIcon} alt="Twitter" />
          <SocialMedias href="https://www.github.com/" src={gitHubIcon} alt="GitHub" />
        </div>

        <p className="signup-text">
          Don't have an account? <Link to="/PetrolStationRegister" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default PetrolStationLogin;
