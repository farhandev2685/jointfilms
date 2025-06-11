import React from 'react'
import './Home.css'
import backgroundImage from '../assets/background.png';
import logo from '../assets/logo (3).png';
import arrowIcon from '../assets/arrow.png';
import searchIcon from '../assets/search.png';
import frame2 from '../assets/Frame2.png';


const Home = () => {
  return (
    <div className='container'>
      
    <div className="home-container">
      
        <div className="header-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          
          {/* Navigation Bar */}
          
          <nav className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="Join Films Academy Logo" className="logo" />
            
            </div>
   

            <ul className="nav-links">
              <li className="active">Home</li>
              <li onClick={() => {
                const studentSection = document.getElementById('student');
                if (studentSection) {
                  studentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>About</li>
              <li onClick={() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>FAQ</li>
            </ul>

            <div className="search-box">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </nav>

          {/* Hero Content */}
          <div className="hero-content">
            <h1 className="hero-title">Launch Your Dream Career in  Acting, <br /> Filmmaking, or Music Today!</h1>
            <p className="hero-subtitle">Break Into the Entertainment Industry with Expert-Led Training &amp; Career Guidance</p>

            <div className="cta-buttons">
              <button
                className="btn enroll"
                onClick={() => window.open('https://pages.razorpay.com/pl_P9Bo7zTClXpYXw/view', '_blank')}
              >
                Enroll Now
              </button>
              <button
                className="btn know-more"
                onClick={() => {
                  const faqSection = document.getElementById('faq');
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <img src={arrowIcon} alt="" className="arrow-icon" /> Know more
              </button>
            </div>

            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Slider indicator image */}
          <img src={frame2} alt="Slider indicators" className="frame-indicator" />
        </div>

    </div>
    </div>  
  )
}

export default Home 