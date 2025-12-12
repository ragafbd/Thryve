import React from 'react';

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
          alt="Modern coworking space in Faridabad near Neelam Chowk Metro Station with hot desks, dedicated desks, and collaborative workspaces at Thryve Coworking"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Premium Coworking Space in Faridabad</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.3rem', marginTop: '16px', fontWeight: 500 }}>
            Where Ideas Meet Innovation
          </p>
          <p className="hero-subtitle">
            Modern workspace near Neelam Chowk Metro Station designed for entrepreneurs, startups, and professionals.
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
