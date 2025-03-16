
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const DeliveryRegister = () => {
  const [username, setUserName] = useState("");
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
      const response = await fetch(`${API_Path}/delivery/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log("API Response Data:", data);

      setLoading(false);
      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setUserName("");
      setEmail("");
      setPassword("");
      alert("Delivery person registered successfully!");

      navigate("/DeliveryLogin");

    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="Register-main-container">
      <div className="Register-container">
        <h1 className="Register-title">Sign Up - Delivery</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="Register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" className="form-input"
              value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" className="form-input"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password (min 6 characters)" className="form-input"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="social-login">
          <div className="divider"></div>
          <p>Sign up with social accounts</p>
          <div className="divider"></div>
        </div>

        <div className="socialmedias">
          <SocialMedias href="https://www.google.com/" src={googleIcon} alt="Google" />
          <SocialMedias href="https://www.twitter.com/" src={twitterIcon} alt="Twitter" />
          <SocialMedias href="https://www.github.com/" src={gitHubIcon} alt="GitHub" />
        </div>

        <p className="signup-text">
          Already have an account? <Link to="/DeliveryLogin" className="signup-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default DeliveryRegister;
