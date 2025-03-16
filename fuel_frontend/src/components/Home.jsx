import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

// Fuel needs images
import homeImage1 from '../assets/homePage.png';
import homeImage2 from '../assets/Agro-industry.jpg';
import homeImage3 from '../assets/Commer.jpg';
import homeImage4 from '../assets/Indus.jpg';
import homeImage5 from '../assets/telec.jpg';

// Five-Axis images
import CashlessTransactions from '../assets/Cashless Transactions  .png';
import Convenience from '../assets/Convenience.png';
import quality from '../assets/Quality & Quantity.png';
import Safety from '../assets/Safety .png';
import Technology from '../assets/Technology.png';

// Fuel at your doorstep anytime, anywhere
import AssuredQuality from '../assets/Assured quality & quantity.png'
import higherCost from '../assets/Higher cost efficiency.jpeg'
import callSenter from '../assets/call center support .jpeg'
import yellowBoxImage from '../assets/yellow-box-image .png'

// social media application 
import youtubeimg from "../assets/youtube.png";
import instaimg from "../assets/insta.png";
import whatsappimg from "../assets/whatsapp.png";
import facebookimg from "../assets/facebook.png";
import twitterimg from "../assets/twitter.png";

const SocialMediaLink = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <img src={props.src} className="social-media-img" alt={props.alt} />
  </a>
);


const Home = () => {
  const [fuelNeeds, setFuelNeeds] = useState([
    {
      image: homeImage2,
      title: 'Agro-industry',
      items: ['Tractors', 'Pump Sets', 'Rice Mills'],
    },
    {
      image: homeImage3,
      title: 'Commercial',
      items: ['Hospitals and Hotels', 'Fisheries and Dairy', 'Malls and Apartments'],
    },
    {
      image: homeImage4,
      title: 'Industrial',
      items: ['Construction', 'Manufacturing', 'Mining'],
    },
    {
      image: homeImage5,
      title: 'Telecom',
      items: ['Reliable fuel delivery to tower', 'Assets pan India'],
    },
  ]);

  const addFuelNeed = () => {
    setFuelNeeds([
      ...fuelNeeds,
      {
        image: homeImage1,
        title: 'New Category',
        items: ['Item 1', 'Item 2', 'Item 3'],
      },
    ]);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="container">
        <img src={homeImage1} alt="Home" className='homeImage' />
        <p className="heading1">Revolutionising Fuel Delivery with Every Click</p>
        <h1 className="heading2">Redefining the Power Behind Smart & Simple Energy Distribution</h1>
      </div>
      <div className="fuel-needs">
        <h1>Fulfilling all your fuelling needs</h1>
        <div className="fuel-need-cards">
          {fuelNeeds.map((need, index) => (
            <div key={index} className="fuel-need-card">
              <img src={need.image} alt={need.title} />
              <h2>{need.title}</h2>
              {need.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
<div class="container2">
  <div class="header">
    <h1>Five-Axis Technology-Centered Approach</h1>
    <p>Our approach centers on technology, combining ease, cashless payments, quality, quantity, and safety.</p>
  </div>
  <div class="content-wrapper">
    <div class="axis-section">
      <div class="axis-item">
        <div class="icon-container">
          <img src={CashlessTransactions} alt="Cashless Transactions" />
        </div>
        <div class="text-container">
          <h2>Cashless Transactions</h2>
          <p>
            Modernising fuel transactions with secure and efficient cashless options. Seamlessly complete payments for a hassle-free and convenient experience.
          </p>
        </div>
      </div>
      <div class="axis-item">
        <div class="icon-container">
          <img src={Convenience} alt="Convenience" />
        </div>
        <div class="text-container">
          <h2>Convenience</h2>
          <p>
            Streamlined fuel delivery, user-friendly interfaces, and efficient logistics for a seamless experience. Convenience delivered to your doorstep.
          </p>
        </div>
      </div>
      <div class="axis-item">
        <div class="icon-container">
          <img src={quality} alt="Quality & Quantity" />
        </div>
        <div class="text-container">
          <h2>Quality & Quantity</h2>
          <p>
            Precision fuel delivery, ensuring purity and accurate measurements. Elevate your fuel experience with our commitment to excellence.
          </p>
        </div>
      </div>
      <div class="axis-item">
        <div class="icon-container">
          <img src={Safety} alt="Safety" />
        </div>
        <div class="text-container">
          <h2>Safety</h2>
          <p>
            Uncompromising safety in fuel delivery, from advanced monitoring to stringent protocols. Trust us for secure and reliable fuel services.
          </p>
        </div>
      </div>
      <div class="axis-item">
        <div class="icon-container">
          <img src={Technology} alt="Technology" />
        </div>
        <div class="text-container">
          <h2>Technology</h2>
          <p>
            Technology plays a vital role in ensuring efficient fuel delivery and management, enabling real-time monitoring, 
            automation, and data that drives faster and more efficient decision-making.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="app-container">
      <h1 className="header">Fuel at your doorstep anytime, anywhere</h1>

      <div className="yellow-box">
        <h2>Enhanced operational control</h2>
        <ul>
          <li>Assured 24 hours delivery</li>
          <li>Planned ordering</li>
          <li>App-based and WhatsApp ordering</li>
          <li>Express emergency delivery</li>
        </ul>
      </div>

      <section className="feature-section">
        <div className="feature-card">
          <img src={AssuredQuality} alt="Assured quality & quantity" />
          <h3>Assured quality & quantity</h3>
        </div>
        <div className="feature-card">
          <img src={higherCost} alt="Higher cost efficiency" />
          <h3>Higher cost efficiency</h3>
        </div>
        <div className="feature-card">
          <img src={callSenter} alt="Call center support" />
          <h3>Call center support</h3>
        </div>
        <div className='yellow-box-image'>
          <img src={yellowBoxImage} alt=''/>
        </div>
      </section>
    </div>
    <footer className="fuel-footer">
      <div className="fuel-container">
        <div className="fuel-footer-section">
          <h3>Fuel 24X7</h3>
          <p>Fuel 24X7 delivers petrol and diesel anytime, anywhere, ensuring convenience, safety, and reliability.</p>
          <p >Your trusted fuel delivery partner, serving you anytime, anywhere.</p>
        </div>
        <div className="fuel-footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="fuel-footer-section">
          <h3>Follow Us</h3>
          <div className="fuel-social-links">
            <SocialMediaLink href="https://www.instagram.com/" src={instaimg} alt="Instagram" />
            <SocialMediaLink href="https://www.youtube.com/" src={youtubeimg} alt="YouTube" />
            <SocialMediaLink href="https://www.whatsapp.com/" src={whatsappimg} alt="WhatsApp" />
            <SocialMediaLink href="https://www.facebook.com/" src={facebookimg} alt="Facebook" />
            <SocialMediaLink href="https://www.twitter.com/" src={twitterimg} alt="Twitter" />
          </div>
        </div>
      </div>
      <div className="fuel-footer-bottom">
        <p>&copy; 2024 Fuel 24X7. All rights reserved.</p>
      </div>
    </footer>
   </div> 
  );
};

export default Home;

