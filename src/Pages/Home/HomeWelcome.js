import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeWelcome() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src={process.env.PUBLIC_URL + '/Familia.png'}
        alt="Familia"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2,
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '70px 20px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '.5rem',
            //fontWeight: 'bold',
          }}
        >
          Leading Hispanics in STEM
        </h2>
        <Link to="/join" className="join-button">
          Join
        </Link>
      </div>

      {/* CSS for hover animation */}
      <style>{`
        .join-button {
          position: relative;
         
          padding: 10px 20px;
       
          font-size: 1.4rem;
          color: white;
          background-color: #d43f27;;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          border-radius: 15px;
          opacity: 0.9;
        }

    

        .join-button:hover {
          color: white;
          border-bottom: none;
          
          background-color: #c4d6ee;
        }

        @media (max-width: 600px) {
          .join-button {
            font-size: 1.25rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}
