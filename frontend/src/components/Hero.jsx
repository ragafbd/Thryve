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
          src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1920&q=80" 
          alt="Thryve Coworking Space"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">WHERE IDEAS MEET INNOVATION</h1>
          <p className="body-large" style={{ maxWidth: '25ch', marginTop: '24px', color: 'var(--text-primary)' }}>
            Premium coworking space in Faridabad designed for entrepreneurs, startups, and professionals.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              GET STARTED <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button onClick={() => scrollToSection('pricing')} className="btn-secondary">
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>

      <div className="creative-ribbon">
        <span>FARIDABAD'S PREMIER COWORKING SPACE</span>
        <span style={{ margin: '0 40px' }}>•</span>
        <span>NEAR NEELAM CHOWK METRO</span>
        <span style={{ margin: '0 40px' }}>•</span>
        <span>200+ SEATS</span>
      </div>
    </section>
  );
};

export default Hero;
