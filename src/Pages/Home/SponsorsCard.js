import React from 'react';
import { Link } from 'react-router-dom';

export default function SponsorsCard() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Sponsors.png'})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* Centered Card */}
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '40px 30px',
          borderRadius: '20px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          
          alignItems: 'center',
          marginLeft:'300px',
          gap: '20px', // spacing between items
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: '1.8rem',
            color: '#042756',
            margin: 0,
          }}
        >
          We are grateful for the support of our sponsors. Your partnership fuels growth, opportunity, and innovation.
        </h2>

        {/* Sponsor Button */}
        <Link
          to="/sponsors"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 24px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#d43f27',
            borderRadius: '10px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#042756';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#d43f27';
          }}
        >
          Sponsor
        </Link>

        {/* Image under the button */}
        <img
          src={process.env.PUBLIC_URL + '/SponsorCard.png'}
          alt="Sponsor"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </div>
  );
}
