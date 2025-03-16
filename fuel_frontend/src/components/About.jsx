import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import aboutImage1 from '../assets/about-image1.jpeg'
// sliding 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

//  quick serves 
import website from '../assets/website .jpg'
import profile from '../assets/Profile.jpeg'
import service from '../assets/Book Service.jpeg'

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

const About = () => {
  // siding 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      text: "I was amazed by how easy and convenient it was to order fuel from the app. The delivery was prompt, and the driver was professional. No more long waits at the gas station—this service is a game-changer!",
      author: "Sr. V.P. (Engg, BD, PPMC)",
      company: "GIFT Power Company Limited",
    },
    {
      text: "Their service has been impeccable, ensuring timely delivery and top-notch quality. I highly recommend them for their exceptional professionalism and reliability.",
      author: "Managing Director",
      company: "Green Energy Solutions",
    },
    {
      text: "Their service has been impeccable, ensuring timely delivery and top-notch quality. I highly recommend them for their exceptional professionalism and reliability.",
      author: "Managing Director",
      company: "Green Energy Solutions",
    },
  ];
  

  return (
    <div>
      <div className="backgroundimage">
        <img src={aboutImage1} alt="background-image" className="background-image" />
      </div>
      <div className="text">
        <h2>About Us</h2>
        <p>
        Need fuel anytime, anywhere? Fuel24x7 has you covered! We deliver high-quality diesel right to your doorstep,
         offering a fast, secure, and hassle-free experience. With advanced IoT and Cloud-enabled solutions, 
         we make refueling simple and reliable.</p>
         <div className="button-container">
    <div className="about-button"> 
      <Link to="/Signin"> <button> Order Now </button> </Link>
    </div>
    <div className="about-button"> 
      <Link to="/Signin"> <button> Learn More </button> </Link>
    </div>
  </div>
      </div>
  <section className="timeline-container">
<div className="timeline-wrapper">
  <div className="timeline-header">
    <div className="header-content">
      <h3 className="header-title"> Automated Fuel Delivery Workflow </h3>
    </div>
  </div>
  <div className="timeline-content">
    <div className="timeline-item">
      <h3 className="timeline-title">Placing the Order</h3>
      <time className="timeline-count"> 1 </time>
      <p className="timeline-text">
      The customer places an order for fuel through the application, triggering the generation of a One-Time Password (OTP) as a security measure. The order, along with the OTP, is then forwarded to the preferred Mobile Diesel Operator (MDO) and their Bowser (fuel tanker).
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="timeline-title">Driver & Bowser Dispatch</h3>
      <time className="timeline-count"> 2 </time>
      <p className="timeline-text">
      The driver receives the order on their app, accepts it, and confirms the delivery. The Bowser then arrives at the specified location, ready to deliver the fuel to the customer’s designated address.
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="timeline-title">Fuel Delivery Authorization</h3>
      <time className="timeline-count"> 3 </time>
      <p className="timeline-text">
      The Delivery Unit (DU) stops at the ordered fuel quantity, and transaction details, including quantity and amount, are sent to the Third Party (TP). Simultaneously, an online authorization request is sent to the Fuel Control Center (FCC), and once approved, fueling begins.
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="timeline-title">Security & Validation</h3>
      <time className="timeline-count"> 4 </time>
      <p className="timeline-text">
      To ensure secure fuel delivery, an OTP is generated for the customer, which must be provided before fueling begins. Additionally, GPS validation ensures that the Bowser reaches the correct location, preventing unauthorized transactions.
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="timeline-title"> Transaction Completion</h3>
      <time className="timeline-count"> 5</time>
      <p className="timeline-text">
      Once the OTP is verified and fueling is completed, a confirmation receipt is sent to the customer and the Fuel Control Center, marking the successful completion of the transaction.
      </p>
    </div>
  </div>
</div>
</section> 
<div className='quick-support'>
  <h1>A Quick and Simple Guide to Requesting Our Support</h1>
  <div className='sub-quick-support'>
    <div className='Downlode'>
      <img src={website} alt=''/>
      <h2>Visit Our Application</h2>
      <p>Get started by visiting our web application for quick and convenient access to our fuel delivery services.</p>
    </div>
    <div className='Profile'>
      < img src={profile} alt=''/>
      <h2>Complete Your Profile</h2>
      <p>Fill in the essential details such as name, mobile number, and location for quick assistance.</p>
    </div>
    <div className='Book Service'>
      <img src={service } alt=''/>
      <h2>Book Service</h2>
      <p>Go through the services and book your desired service.</p>
    </div>
  </div>
</div>
<section className="faq-section">
<div className="faq-container">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faq-content">
    <details open>
      <summary className="faq-question">How do I order fuel through the app?</summary>
      <div className="faq-answer">
        <p>Simply download the app, create an account, select the type of fuel (petrol or diesel) and your location, and schedule a delivery time. Our certified professionals will deliver the fuel safely to your doorstep.</p>
      </div>
    </details>
    <details>
      <summary className="faq-question1">Is the fuel delivery service available 24/7?</summary>
      <div className="faq-answer">
        <p>Yes, our service operates around the clock! You can order fuel anytime, and we will deliver it as per your convenience.</p>
      </div>
    </details>
    <details>
      <summary className="faq-question2">How do I know if the delivery is safe?</summary>
      <div className="faq-answer">
        <p>All our delivery professionals are certified and trained in safe fuel handling practices. We also ensure that our vehicles meet all safety standards for fuel transport.</p>
        
      </div>
    </details>
    <details>
      <summary className="faq-question2">Can I track my fuel delivery in real-time?</summary>
      <div className="faq-answer">
        <p>Yes! Our app provides real-time tracking, so you can follow the status of your delivery from the moment it’s dispatched until it reaches your location.</p>
      </div>
    </details>
  </div>
</div>
</section>
    <div className='Testimonials-container'>
<div className="slider-container">
<h2 className="slider-title">Customer Testimonials</h2>
<Slider {...settings}>
  {testimonials.map((testimonial, index) => (
    <div key={index} className="testimonial-card">
      <div className="quote-mark quote-start">&ldquo;</div>
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-author">{testimonial.author}</p>
      <p className="testimonial-company">{testimonial.company}</p>
      <div className="quote-mark quote-end">&rdquo;</div>
    </div>
  ))}
     </Slider>
    </div>
  </div>
      <footer className="fuel-footer">
      <div className="fuel-container">
        <div className="fuel-footer-section">
          <h3>Fuel 24X7</h3>
          <p>Fuel 24X7 delivers petrol and diesel anytime, anywhere, ensuring convenience, safety, and reliability.</p>
          <p>Your trusted fuel delivery partner, serving you anytime, anywhere.</p>
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

export default About; 


