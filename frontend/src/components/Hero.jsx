import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1626187853752-898f59dc180e?w=1920&q=80" 
          alt="Thryve Coworking Space"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting">HELLO FARIDABAD</div>
          <h1 className="hero-title">WHERE IDEAS MEET INNOVATION</h1>
          <p className="hero-subtitle">
            Premium coworking space in Faridabad designed for entrepreneurs, startups, and professionals.
          </p>
          <div className="hero-cta">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              GET STARTED
            </button>
            <button onClick={() => scrollToSection('pricing')} className="btn-secondary">
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
