import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (path, sectionId = null) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/' && sectionId) {
      // On homepage, scroll to section
      scrollToSection(sectionId);
    }
    // Otherwise, Link component handles navigation
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <span className="logo-text">THRYVE</span>
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {location.pathname === '/' ? (
            <>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('amenities')} className="nav-link">Amenities</button>
              <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('team')} className="nav-link">Team</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link" onClick={() => handleNavigation('/')}>Home</Link>
              <Link to="/amenities" className="nav-link" onClick={() => handleNavigation('/amenities')}>Amenities</Link>
              <Link to="/pricing" className="nav-link" onClick={() => handleNavigation('/pricing')}>Pricing</Link>
              <Link to="/contact" className="nav-link" onClick={() => handleNavigation('/contact')}>Contact</Link>
            </>
          )}
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
