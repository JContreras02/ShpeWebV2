
import React, { useState } from 'react';

export default function GsunshpeSection() {
  const [cards, setCards] = useState([
    {
      imgSrc: process.env.PUBLIC_URL + '/hackathon.png',
      title: 'Vibra Atl',
      content:
        'This is some content for the first card. This is some content for the first card.',
    },
    {
      imgSrc: process.env.PUBLIC_URL + '/hackathon.png',
      title: 'Test Two',
      content: 'Here is some content for the second card.',
    },
    {
      imgSrc: process.env.PUBLIC_URL + '/test2.png',
      title: 'Test Three',
      content: 'And this is content for the third card.',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#042756',
        //opacity: 0.9,
        overflow: 'hidden',
      }}
    >
      {/* Background image with opacity */}
      <img
        src= {process.env.PUBLIC_URL + '/sky.png'}
        alt="Sky background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '60px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          color: 'white',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            //fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Upcoming Events
        </h1>

        {/* Card container */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {cards.map(({ imgSrc, title, content }, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                maxWidth: '300px',
                width: '100%',
                flex: '1 1 250px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                overflow: 'hidden',
              }}
            >
              <img
                src={imgSrc}
                alt={`Card ${index + 1}`}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  backgroundColor: '#042756',
                  padding: '15px',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                  style={{
                    fontSize: '1.25rem',
                    //fontWeight: 'bold',
                    fontFamily: 'rubik one',
               
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: '#d43f27',
                  }}
                />
                <textarea
                  value={content}
                  onChange={(e) => handleChange(index, 'content', e.target.value)}
                  rows={3}
                  style={{
                    resize: 'none',
                    border: 'none',
                    borderRadius: '4px',
                    height: '100px',
                    //padding: '40px 20px 10px 20px', // top right bottom left
                    fontSize: '1rem',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: '#000',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
