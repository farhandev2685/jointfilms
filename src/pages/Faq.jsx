import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: 'When will the course start?',
    answer: 'The course will start within 1 hour of your registration. You can begin immediately after enrolling.',
  },
  {
    question: 'How will I attend the workshop?',
    answer: 'You will receive a Zoom link via email. Join the live session at the scheduled time.',
  },
  {
    question: 'How to start the course?',
    answer: 'Once you join the session, follow the instructions provided by the instructor.',
  },
  {
    question: 'When is the workshop?',
    answer: 'Workshops are scheduled every week. Check the calendar on your dashboard.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">FAQ</h2>
        {faqData.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <div
              className={`faq-question ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleIndex(idx)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === idx ? '▲' : '▼'}</span>
            </div>
            {openIndex === idx && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
