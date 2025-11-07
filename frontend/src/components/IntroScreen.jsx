import React, { useEffect, useState } from 'react';

const IntroScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowText(true), 200);
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500);
    const completeTimer = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const fullText = "Hello Faridabad!";
  const letters = fullText.split('');

  return (
    <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="intro-content">
        <h1 className={`intro-text ${showText ? 'show' : ''}`}>
          <div className="intro-line intro-line-single">
            {letters.map((letter, index) => (
              <span 
                key={index} 
                className="intro-letter"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
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
