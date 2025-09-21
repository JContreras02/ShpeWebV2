import React from 'react';
import './Join.css';

export default function Join() {
  return (
    <div className="join-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Join_Photos/JoinImage.png"})` }}
      >
        <div className="hero-overlay">
          <h1>Join SHPE GSU</h1>
          <p>Empowering Hispanic engineers and scientists at Georgia State University.</p>
        </div>
        <div className="hero-fade"></div>
      </section>

      <div className="join-container">

        {/* Why Join Section */}
        <h2 className="join-title">Why Join SHPE GSU?</h2>

        <div className="join-card">
          <img src={process.env.PUBLIC_URL + "/Join_Photos/SHPExFanduel.png"} alt="Career prep" />
          <div className="join-text">
            <h3>Career Preparation</h3>
            <p>
              Gain access to workshops and events that prepare you for internships and
              full-time opportunities. Learn how to excel in interviews and stand out
              to recruiters.
            </p>
          </div>
        </div>

        <div className="join-card">
          <img src={process.env.PUBLIC_URL + "/Join_Photos/NCR_Voyix_Prep.png"} alt="Networking" />
          <div className="join-text">
            <h3>Networking with Industry Leaders</h3>
            <p>
              Connect with professionals and recruiters from leading companies. Build
              a network that will support you throughout your academic and professional
              journey.
            </p>
          </div>
        </div>

        <div className="join-card">
          <img src={process.env.PUBLIC_URL + "/Join_Photos/SHPE_Photo1.png"} alt="Community" />
          <div className="join-text">
            <h3>A Supportive Community</h3>
            <p>
              Join a diverse group of peers who share your goals. SHPE provides mentorship,
              resources, and friendships that last a lifetime.
            </p>
          </div>
        </div>

        {/* Join via PIN Section */}
        <div className="join-action-pin">
          <h2>Ready to Join?</h2>
          <p>Become part of SHPE GSU today through GSU PIN!</p>
          <a href="https://pin.gsu.edu/organization/shpe" target="_blank" rel="noopener noreferrer" className="action-button pin">
            Join via PIN
          </a>
        </div>

        {/* Social Media Section */}
        <div className="join-action-socials">
          <div className="action-card">
            <img src={process.env.PUBLIC_URL + "/Join_Photos/groupme_logo.jpg"} alt="GroupMe" className="action-logo"/>
            <h3>Want to chat with fellow members?</h3>
            <p>Join our GroupMe for discussions and networking.</p>
            <a href="https://groupme.com/join_group/101447886/MigiCmFj" target="_blank" rel="noopener noreferrer" className="action-button groupme">
              Join GroupMe
            </a>
          </div>

          <div className="action-card">
            <img src={process.env.PUBLIC_URL + "/Join_Photos/instagram_logo.jpg"} alt="Instagram" className="action-logo"/>
            <h3>See what’s happening at SHPE GSU!</h3>
            <p>Follow us on Instagram for updates and events.</p>
            <a href="https://www.instagram.com/shpe.gastate/" target="_blank" rel="noopener noreferrer" className="action-button instagram">
              Follow Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
