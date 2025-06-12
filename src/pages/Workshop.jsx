import React from 'react';
import './Workshop.css';
import sirImage from '../assets/sir.png';

const Workshop = () => {
  const [activeTab, setActiveTab] = React.useState('curriculum');

  // Data for each section
  const modules = [
    {
      title: 'Module 1',
      sub: 'Film Masterclass: Inside the Bollywood Profession – Decoding the Successful Professional Mindset',
    },
    {
      title: 'Module 2',
      sub: 'Winning Hearts: Convincing Family and Crafting Compelling Answers',
    },
    {
      title: 'Module 3',
      sub: 'What is better: Theatre or Camera acting?',
    },
    {
      title: 'Module 4',
      sub: 'Real Calling: Unravelling Your True Passion – A Unique Formula to Discover Your Fit in Film',
    },
    {
      title: 'Module 5',
      sub: 'From Dream to Reality: Taking the First Steps Towards Your Dream Career',
    },
  ];

  const audience = [
    'Aspiring Actors & Stage Performers',
    'Future Directors, Screenwriters & Editors',
    'Budding Singers, Lyricists & Musicians',
    'Students, Working Professionals, Homemakers',
    'Anyone with passion!',
  ];

  const reasons = [
    'Affordable and High-Impact: Get big value for just ₹199 (Limited Time Offer)',
    'Flexible Online Format: Learn from anywhere, anytime',
    'Real Industry Knowledge: Gain practical insights into the film industry and more',
    'Personal Mentorship: Get live access to real experts',
    'Supportive Community: Join a growing tribe of passionate artists',
    'Bonus: Free one-on-one guidance from a Bollywood expert at JoinFilms Academy',
  ];

  const renderTabContent = () => {
    if (activeTab === 'curriculum') {
      return (
        <div className="modules-list">
          {modules.map((m, i) => (
            <div className="module-item" key={i}>
              <div className="module-title">{m.title}</div>
              <p className="module-sub">{m.sub}</p>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'audience') {
      return (
        <div className="modules-list">
          {audience.map((text, idx) => (
            <div className="module-item" key={idx}>
              <p className="module-sub">{text}</p>
              <div className='module-subtext'></div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'why') {
      return (
        <div className="modules-list">
          {reasons.map((text, idx) => (
            <div className="module-item" key={idx}>
              <p className="module-sub">{text}</p>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'mentor') {
      return (
        <div className="mentor-section">
          <img src={sirImage} alt="Virendra Rathore" className="mentor-image" />
          <div className="mentor-details">
            <h3 className="mentor-name">Virendra Rathore</h3>
            <p className="mentor-title">Award-winning Film Guru and Best-Selling Author.</p>
            <p className="mentor-description">
              Trusted by 2.5 Million+ followers, he has mentored hundreds of aspiring Bollywood stars. With years of industry experience and practical wisdom, Virendra’s insights are invaluable for anyone wanting to succeed in Bollywood.
            </p>
            <ul className="mentor-bullets">
              <li>🎓 Years of Industry Experience</li>
              <li>💡 Practical Wisdom for Success</li>
              <li>🌟 Invaluable Insights for Aspiring Bollywood Stars</li>
            </ul>
          </div>
        </div>
      );
    }

    return <div className="coming-soon">Content coming soon...</div>;
  };

  return (
    <section id="workshop" className="workshop-section">
      <div className="workshop-container">
        {/* Heading & intro */}
        <h2 className="workshop-heading">What You'll Learn in This Workshop</h2>
        <p className="workshop-description">
          The Bollywood Career Guidance Workshop is designed for people who truly want to start a career in the
          film industry. Get <br /> practical steps and insider knowledge that most beginners never get access to:
        </p>

        {/* Bullet list */}
        <ul className="workshop-list">
          <li>How to begin your career in acting, music, or filmmaking</li>
          <li>How to choose the right path (acting, directing, singing, etc.)</li>
          <li>Mindset and habits of successful people in Bollywood</li>
          <li>Smart ways to handle family doubts and societal pressure</li>
          <li>Theatre vs Camera Acting – Which is right for you?</li>
          <li>And much more!</li>
        </ul>

        {/* Tab navigation */}
        <div className="workshop-tabs">
          <button
            className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            Workshop Curriculum at a Glance
          </button>
          <button
            className={`tab ${activeTab === 'audience' ? 'active' : ''}`}
            onClick={() => setActiveTab('audience')}
          >
            Who is This Workshop For?
          </button>
          <button
            className={`tab ${activeTab === 'why' ? 'active' : ''}`}
            onClick={() => setActiveTab('why')}
          >
            Why Join This Workshop?
          </button>
          <button
            className={`tab ${activeTab === 'mentor' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentor')}
          >
            Meet Your Mentor
          </button>
        </div>

        {/* Tab content */}
        {renderTabContent()}
      </div>
    </section>
  );
};

export default Workshop;