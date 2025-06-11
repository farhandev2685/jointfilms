import React from 'react';
import './Career.css';
import sirImg from '../assets/sir.png';

const Career = () => {
  return (
    <div className="content">
    <section className="career-wrapper">
      <div className="career-container">
        {/* Left column */}
        <div className="career-left">
          <div className="career-info-box">
            <p>
              Join our Bollywood Career Guidance Workshop, your first step into acting,
              writing, directing, editing, singing, or lyric writing. Get real industry
              insights, tools, and a clear action plan from experts who've helped many
              others build successful careers.
            </p>
          </div>

          <p className="career-seats">
            Only <span className="highlight">10 Seats</span> Left. Secure your spot now!
          </p>

          <p className="career-offer">Limited-Time Offer</p>

          <button className="btn enroll2-lg" onClick={() => window.open('https://pages.razorpay.com/pl_P9Bo7zTClXpYXw/view', '_blank')}>
            Enroll Today for Just <span className="strike">₹1199/-</span> <span className="price">₹199/-</span>
          </button>
        </div>

        {/* Right column */}
        <div className="career-right">
          
           
            <p className="tagline">1st step to get success in Bollywood</p>
            <img src={sirImg} alt="Instructor" className="sir-image" />
          
        </div>
      </div>
    </section>
    </div>
  );
};

export default Career;
