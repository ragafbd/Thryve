import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
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
              <li><button onClick={handleHomeClick} className="footer-link" data-testid="footer-link-home">Home</button></li>
              <li><button onClick={() => handleSectionClick('about')} className="footer-link" data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => handleSectionClick('amenities')} className="footer-link" data-testid="footer-link-amenities">Amenities</button></li>
              <li><button onClick={() => handleSectionClick('pricing')} className="footer-link" data-testid="footer-link-pricing">Pricing Plans</button></li>
              <li><button onClick={() => handleSectionClick('gallery')} className="footer-link" data-testid="footer-link-gallery">Gallery</button></li>
              <li><button onClick={() => handleSectionClick('team')} className="footer-link" data-testid="footer-link-team">Our Team</button></li>
              <li><button onClick={() => handleSectionClick('contact')} className="footer-link" data-testid="footer-link-contact">Contact Us</button></li>
              <li><a href="https://thryvecoworking.medium.com" className="footer-link" target="_blank" rel="noopener noreferrer" data-testid="footer-link-blog">Blog</a></li>
              <li><a href="/sitemap.xml" className="footer-link" target="_blank" rel="noopener noreferrer" data-testid="footer-link-sitemap">Sitemap</a></li>
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
          <p className="caption" style={{ marginTop: '4px' }}>UDYAM Reg. No.: UDYAM-HR-03-0133712</p>
          <p className="caption" style={{ marginTop: '8px' }}>Made with <span className="throbbing-heart" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>&#9829;</span> by a young ambitious team</p>
          <p className="caption" style={{ marginTop: '12px', fontSize: '0.7rem', opacity: 0.7 }}>* Images used on this website are actual images</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
