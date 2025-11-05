import React, { useEffect, useState } from 'react';

const IntroScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowText(true), 300);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const line1 = "Hello";
  const line2 = "Faridabad!";
  const letters1 = line1.split('');
  const letters2 = line2.split('');

  return (
    <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="intro-content">
        <h1 className={`intro-text ${showText ? 'show' : ''}`}>
          <div className="intro-line">
            {letters1.map((letter, index) => (
              <span 
                key={index} 
                className="intro-letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="intro-line">
            {letters2.map((letter, index) => (
              <span 
                key={`line2-${index}`} 
                className="intro-letter"
                style={{ animationDelay: `${(index + letters1.length) * 0.05}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </h1>
        <div className="intro-tagline">Welcome to Thryve Coworking</div>
      </div>
    </div>
  );
};

export default IntroScreen;
