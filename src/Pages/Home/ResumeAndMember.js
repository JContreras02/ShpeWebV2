import React, { useState } from 'react';

export default function ResumeAndMember() {
  const [resumeText] = useState('Upload Your Resume For Companies To View');
  const [member, setMember] = useState({
    name: 'Member dude',
    description:
      '3rd year CS student who does...3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does... 3rd year CS student who does...  ',
  });
//src={process.env.PUBLIC_URL + '/Familia.png'}
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/cars.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '97.2vw',
        minHeight: '75vh',
        padding: '50px 20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        //opacity: 0.9,
      }}
    >
      {/* Resume Section */}
      <div
        style={{
          backgroundColor: '#d43f27',
          borderRadius: '20px',
          padding: '30px',
          width: '100%',
          maxWidth: '500px',
          height: '300px',
          minHeight: '150px',
          marginLeft: '-30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: '1.6rem',
              marginBottom: '10px',
              color: 'white',
              width: '200px',
            }}
          >
            {resumeText}
          </h2>

          {/* Upload Link as Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSekvr6TzcVK3tM-7i2HHbqAv4YDQbygL1BUe5s-xvTk37ugcg/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="upload-button"
          >
            Upload
          </a>
        </div>

        <img
          src={process.env.PUBLIC_URL + '/resume.png'}
          alt="Resume"
          style={{
            height: '300px',
            marginLeft: '10px',
            marginTop: '100px',
            objectFit: 'contain',
            borderRadius: '15px',
          }}
        />
      </div>

      {/* Member of the Month Section */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255)',
          borderRadius: '20px',
          padding: '30px',
          width: '100%',
          height: '500px',
          maxWidth: '500px',
          minHeight: '250px',
          marginLeft: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        <h3
          style={{
            fontSize: '2.6rem',
            fontWeight: 'bold',
            color: '#d43f27',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Member of the Month
        </h3>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: '2.1rem',
              fontWeight: 'bold',
              color: '#042756',
              margin: 0,
            }}
          >
            {member.name}
          </h2>

          <img
            src={process.env.PUBLIC_URL + '/cars.png'}
            alt="Member"
            style={{
              height: 'auto',
              width: '300px',
              marginLeft: '20px',
              objectFit: 'contain',
              borderRadius: '10px',
            }}
          />
        </div>

        <p
          style={{
            fontSize: '1rem',
            color: '#333',
            marginTop: '15px',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {member.description}
        </p>
      </div>

      {/* Inline CSS for Upload Button */}
      <style>{`
        .upload-button {
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          background-color: white;
          color: #042756;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .upload-button:hover {
          background-color: #042756;
          color: white;
        }
      `}</style>
    </div>
  );
}
