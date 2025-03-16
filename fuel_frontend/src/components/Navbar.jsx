import React from 'react';
import { Link} from 'react-router-dom';
import '../App.css';

import logo from '../assets/logo-r.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='menubar'>
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/About" className="link">About</Link></li>
          <li><Link to="/Contact" className="link">Contact</Link></li>
        </ul>
      </div>
        <div className='signin-button-1'> <Link to="/Signin"> <button>Sign in</button> </Link>
        </div>
    </div>
  );
};
export default Navbar;