import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="heading-5" style={{ marginBottom: '16px' }}>THRYVE COWORKING</h3>
            <p className="body-small" style={{ maxWidth: '30ch', lineHeight: '1.5' }}>
              Premium coworking space in Faridabad designed for entrepreneurs, startups, and professionals who want to thrive.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#amenities" className="footer-link">Amenities</a></li>
              <li><a href="#pricing" className="footer-link">Pricing</a></li>
              <li><a href="#team" className="footer-link">Our Team</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Contact Info</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>Neelam Chowk Metro, Faridabad</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>contact@thryvecoworking.in</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>+91 98 106 99793</span>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="heading-6" style={{ marginBottom: '16px' }}>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/thryve.coworking" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">© {currentYear} Thryve Coworking. All rights reserved.</p>
          <p className="caption" style={{ marginTop: '8px' }}>Made with <span style={{ color: 'var(--brand-primary)' }}>♥</span> by a young ambitious team</p>
          <p className="caption" style={{ marginTop: '12px', fontSize: '0.7rem', opacity: 0.7 }}>* All images used on this website are for reference purposes only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
