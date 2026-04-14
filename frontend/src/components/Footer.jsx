import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="heading-5" style={{ marginBottom: '16px' }}>THRYVE COWORKING</h3>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')} className="footer-link" data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="footer-link" data-testid="footer-link-amenities">Amenities</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="footer-link" data-testid="footer-link-pricing">Pricing</button></li>
              <li><button onClick={() => scrollToSection('team')} className="footer-link" data-testid="footer-link-team">Our Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link" data-testid="footer-link-contact">Contact</button></li>
              <li><a href="/sitemap.xml" className="footer-link" target="_blank" data-testid="footer-link-sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/thryve.coworking" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" data-testid="footer-instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">&copy; {currentYear} Thryve Coworking. All rights reserved.</p>
          <p className="caption" style={{ marginTop: '8px' }}>GSTIN: 06AAYFT8213A1Z2</p>
          <p className="caption" style={{ marginTop: '8px' }}>UDYAM Reg. No.: UDYAM-HR-03-0133712</p>
          <p className="caption" style={{ marginTop: '8px' }}>Made with <span className="throbbing-heart" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>&#9829;</span> by a young ambitious team</p>
          <p className="caption" style={{ marginTop: '12px', fontSize: '0.7rem', opacity: 0.7 }}>* Images used on this website are for reference purposes only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
