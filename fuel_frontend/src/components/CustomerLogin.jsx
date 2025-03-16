import { useState } from "react";
import { API_Path } from '../Helper/ApiPath';
import '../App.css';
import { Link  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-icon.png';
import twitterIcon from '../assets/twitter.png';
import gitHubIcon from '../assets/github-icon.png';

const SocialMedias = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} className="social-media-img" alt={alt} />
  </a>
);

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);
  
      try {
        const response = await fetch(`${API_Path}/customer/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        console.log('API Response Data:', data);
  
        setLoading(false);
  
        if (response.ok) {
          localStorage.setItem('token', data.token); // Use "token" consistently
          localStorage.setItem('isLoggedIn', true); // Store as boolean
          localStorage.setItem('customerName', data.customer.username);
  
          console.log('Customer logged in successfully!');
          navigate('/userDashboard'); // Use navigate for redirection
        } else {
          setError(data.error || 'Login failed. Please try again.');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error:', error);
        setError(error.message);
      }
    };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-title">Sign In - Customer</h1>
        {error && <p className="error-message">{error}</p>}
        
        <form className="Register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input  type="email"  name="email"  id="email"  placeholder="Email"  className="form-input"  value={email}  onChange={(e) => setEmail(e.target.value)}  />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input  type="password"  name="password"  id="password"  placeholder="Password"  className="form-input"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="submit-button">Sign in</button>
        </form>

        <div className="social-login">
          <div className="divider"></div>
          <p>Sign in with social accounts</p>
          <div className="divider"></div>
        </div>

        <div className="socialmedias">
          <SocialMedias href="https://www.google.com/" src={googleIcon} alt="Google" />
          <SocialMedias href="https://www.twitter.com/" src={twitterIcon} alt="Twitter" />
          <SocialMedias href="https://www.github.com/" src={gitHubIcon} alt="GitHub" />
        </div>

        <p className="signup-text">
          Don't have an account? <Link to="/CustomerRegister" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default CustomerLogin;


