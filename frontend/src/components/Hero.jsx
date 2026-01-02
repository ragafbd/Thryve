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
          src="https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/fxybzhhg_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%284%29.jpeg" 
          alt="Thryve Coworking space in Faridabad featuring modern lounge area with vibrant seating, dedicated workstations, and industrial design near Neelam Chowk Metro Station"
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
            Flexible workspace and shared office space near Neelam Chowk Metro Station. Premium co-working space designed for entrepreneurs, startups, and professionals seeking commercial office for rent in Faridabad.
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
