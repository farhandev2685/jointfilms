import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Register Now:',
    subtitle: 'Complete your payment of ₹199',
  },
  {
    title: 'Start Immediately:',
    subtitle: 'Get access within 1 hour',
  },
  {
    title: 'Attend Live Sessions & Q&A:',
    subtitle: 'After completing the course, join live sessions with our mentors.',
  },
  {
    title: 'Get Bonus Support:',
    subtitle: 'Book your one-on-one guidance session with an expert.',
  },
];

const HowItWorks = () => (
  <section className="how-section">
    <div className="how-container">
      <h2 className="how-heading">How It Works</h2>
      <div className="how-cards">
        {steps.map((step, idx) => (
          <div key={idx} className={`how-card ${idx === 1 ? 'active' : ''}`}>
            <h3 className="how-title">{step.title}</h3>
            <p className="how-subtitle">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
