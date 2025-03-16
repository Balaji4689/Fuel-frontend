
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_Path } from '../Helper/ApiPath';
import '../App.css';

import googleIcon from '../assets/google-icon.png';
import twitterIcon from '../assets/twitter.png';
import gitHubIcon from '../assets/github-icon.png';

const SocialMedias = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} className="social-media-img" alt={alt} />
  </a>
);

const DeliveryLogin = () => {
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
      const response = await fetch(`${API_Path}/delivery/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Token Received:", data.token);
      
      setLoading(false);
      if (response.ok) {
        localStorage.setItem('loginToken', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'delivery');
        localStorage.setItem('deliveryName', data.deliveryPerson.username); 
        setEmail("");
        setPassword("");
        alert("Delivery person logged in successfully!");
        navigate('/deliveryDashboard');
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-title">Sign In - Delivery</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" className="form-input"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" className="form-input"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
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
          Don't have an account? <Link to="/DeliveryRegister" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default DeliveryLogin;
