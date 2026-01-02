import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="heading-5" style={{ marginBottom: '16px' }}>THRYVE COWORKING</h3>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="/amenities" className="footer-link">Amenities</a></li>
              <li><a href="/pricing" className="footer-link">Pricing Plans</a></li>
              <li><a href="/gallery" className="footer-link">Gallery</a></li>
              <li><a href="#team" className="footer-link">Our Team</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
              <li><a href="https://thryvecoworking.medium.com" className="footer-link" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="/sitemap.xml" className="footer-link" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/thryve.coworking" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">© {currentYear} Thryve Coworking. All rights reserved.</p>
          <p className="caption" style={{ marginTop: '8px' }}>GSTIN: 06AAYFT8213A1Z2</p>
          <p className="caption" style={{ marginTop: '4px' }}>UDYAM Reg. No.: UDYAM-HR-03-0133712</p>
          <p className="caption" style={{ marginTop: '8px' }}>Made with <span className="throbbing-heart" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>♥</span> by a young ambitious team</p>
          <p className="caption" style={{ marginTop: '12px', fontSize: '0.7rem', opacity: 0.7 }}>* Images used on this website are actual images</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
