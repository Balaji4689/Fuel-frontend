import React from 'react'

import { Link } from 'react-router-dom';
import '../App.css';


import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const SocialMediaLink = (props) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <img src={props.src} className="social-media-img" alt={props.alt} />
    </a>
  );


const Contact = () => {
  return (
    <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="title">Get in touch</h1>
            <p className="subtitle">Fill in the form to start a conversation</p>
            <div className="info-list">
              <p className="info-item">
                <span className="icon">📍</span> City Visakhapatnam, Rushikonda -530045 </p>
              <p className="info-item">
                <span className="icon">📞</span> 1234567890
              </p>
              <p className="info-item">
                <span className="icon">📧</span> contact@business.com
              </p>
              <div className="social-media">
            <h2 className="social-media-title">Follow Us</h2>
            <p className="social-media-description">
              Connect with us on social media!
            </p>
            <div className="social-media-links">
              <SocialMediaLink href="https://www.instagram.com/" src={insta} alt="Instagram" />
              <SocialMediaLink href="https://www.youtube.com/" src={youtube} alt="YouTube" />
              <SocialMediaLink href="https://www.whatsapp.com/" src={whatsapp} alt="WhatsApp" />
              <SocialMediaLink href="https://www.facebook.com/" src={facebook} alt="Facebook" />
              <SocialMediaLink href="https://www.twitter.com/" src={twitter} alt="Twitter" />
            </div>
          </div>
            </div>
          </div>
          <form className="contact-form" >
            <div>
              <h2 className="contact-heading">Get In Touch With Us!</h2>
              <p className="contact-heading1">
                Thank you for choosing Fuel24x7! Please share some details about
                your business needs to help us assist you better. We’ll get back
                to you within 48 hours.
              </p>
            </div>
            <label>
              <span>Full name</span>
              <input  type="text" name="Name" placeholder="Name" />
            </label>
            <label>
              <span>Email address</span>
              <input  type="email" name="email" placeholder="sample@gmail.com"  />
            </label>
            <label>
              <span>Message</span>
              <textarea rows="3" name="message" placeholder="Your message"  ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
  )
}

export default Contact
