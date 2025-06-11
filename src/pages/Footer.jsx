import React from 'react';
import './Footer.css';
import logo from '../assets/logo (3).png';

const Footer = () => (

   <div className='footer'>
  <div className='footer-container'>
  <footer className="site-footer">
    {/* Top Call-To-Action Banner */}
    <div className="cta-box">
      <h2 className="cta-title">Ready to Start Your Journey?</h2>
      <p className="cta-subtitle">Take the first step toward your dream career – the entertainment world is waiting.</p>
      <h3 className="cta-highlight">Enroll Now for Just ₹199 – Limited Spots Left!</h3>
    </div>

    {/* Bottom Grey Section */}
    <div className="footer-bottom">
      <div className="footer-cols">
        {/* Column 1 – Logo */}
        <div className='footer-test'>
        <div className="footer-col">
          <img src={logo} alt="JoinFilms Academy" className="footer-logo" />
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <a className="read-more" href="#">Read more..</a>
        </div>
        </div>

        {/* Column 2 – Company */}
        <div className='footer-test2'>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>Series</li>
            <li>Event</li>
          </ul>
        </div>
        </div>

        {/* Column 3 – Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>FAQ</li>
            <li>Call Center</li>
          </ul>
        </div>

        {/* Column 4 – More Information */}
        <div className="footer-col">
          <h4>More Information</h4>
          <ul>
            <li>Category</li>
            <li>Price</li>
            <li>Legal</li>
          </ul>
        </div>

        {/* Column 5 – Social */}
        <div className="footer-col">
          <h4>Follow our social media</h4>
          <div className="social-icons">
            <span className="social-icon">F</span>
            <span className="social-icon">T</span>
            <span className="social-icon">I</span>
            <span className="social-icon">Y</span>
          </div>
        </div>
        
      </div>
      <div className="copyright"> {new Date().getFullYear()} JoinFilms. All rights reserved. Maintained by JoinFilms</div>
    </div>
  </footer>
  </div>
  </div>
);

export default Footer;
