import React from 'react';
import './Students.css';

const studentCards = [
  {
    videoUrl: 'https://www.youtube.com/embed/2wRDa_RJhwo',
    rating: 8.3,
    category: 'Action | 20 Episode',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/qG6TZDcSryo',
    rating: 8.3,
    category: 'Action | 20 Episode',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/dLcZHkS8iJk',
    rating: 8.3,
    category: 'Action | 20 Episode',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/4HYilzc9Zj4',
    rating: 8.3,
    category: 'Action | 20 Episode',
  },
];

const testimonials = [
  {
    quote:
      '“Virendra Singh Rathore sir, is a genuine guide. And being genuine is precious than a diamond in today\'s world. He is not here to upsell his course but he would recommend it for your career growth. He truly believes in "keeping it simple". Those who really want to understand the industry do follow him. He will direct your efforts in the right direction. Thank you, team!”',
    author: 'Subhankar Biswas',
  },
  {
    quote:
      '“Literally, to be honest what a great workshop it was. Thank you so much for a brilliant workshop and a fun atmosphere. It was a fantastic learning experience. This was an incredibly valuable interactive workshop and I personally enjoyed it 10x more than the 1-day. Finally awaited moment has ended with valuable time and ideas. Thank you so much for a wonderful workshop. I hope every actor who wants to join the industry will get this information and capture their valuable time, and grab knowledge. And just remember my name and hardwork one day I will be in the same stage with unexpected results for sure. So at the end I would say thank you so, so much for letting this workshop happen🥰🙏”',
    author: 'Bijaya Bikram Thapa',
  },
];

const Students = () => {
  return (
    <section id="student" className="students-section">
      <div className="students-container">
        <h2 className="students-heading">Hear From Our Students</h2>

        {/* Cards */}
        <div className="student-cards">
          {studentCards.map((card, idx) => (
            <div className="student-card" key={idx}>
              <iframe
                width="100%"
                height="100%"
                src={card.videoUrl}
                title={`student-video-${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-overlay">
                {/* Removed <h3 className="card-title">{card.title}</h3> */}
                <div className="card-meta">
                  <span className="star">★</span>
                  <span className="rating">{card.rating}</span>
                  <span className="category">{card.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          {testimonials.map((t, idx) => (
            <div className="testimonial-box" key={idx}>
              <p className="testimonial-text">{t.quote}</p>
              <p className="testimonial-author">- {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
