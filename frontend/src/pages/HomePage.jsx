import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { 
  Wifi, Users, Coffee, Activity, Gamepad2, Droplet, 
  Clock, Printer, Wind, Zap, Car, Armchair,
  MapPin, Mail, Phone, CheckCircle2, Menu, X 
} from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  wifi: Wifi,
  users: Users,
  coffee: Coffee,
  activity: Activity,
  gamepad2: Gamepad2,
  droplet: Droplet,
  clock: Clock,
  printer: Printer,
  wind: Wind,
  zap: Zap,
  car: Car,
  armchair: Armchair
};

const HomePage = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">THRYVE</div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('amenities')} className="nav-link">Amenities</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">{mockData.hero.title}</h1>
          <p className="hero-subtitle">{mockData.hero.subtitle}</p>
          <p className="hero-description">{mockData.hero.description}</p>
          <div className="hero-cta-group">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              {mockData.hero.cta}
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <h2 className="section-title">{mockData.about.title}</h2>
          <p className="section-description">{mockData.about.description}</p>
          <div className="about-stats">
            {mockData.about.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section" id="amenities">
        <div className="section-container">
          <h2 className="section-title">Best in Class Amenities</h2>
          <div className="amenities-grid">
            {mockData.amenities.map((amenity) => {
              const IconComponent = iconMap[amenity.icon];
              return (
                <div key={amenity.id} className="amenity-card">
                  <div className="amenity-icon">
                    <IconComponent size={32} />
                  </div>
                  <div className="amenity-name">{amenity.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="section-container">
          <h2 className="section-title">Flexible Pricing Plans</h2>
          <p className="section-subtitle">Choose the perfect plan for your needs</p>
          <div className="pricing-grid">
            {mockData.pricing.map((plan) => (
              <Card key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <Badge className="popular-badge">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="plan-name">{plan.name}</CardTitle>
                  <CardDescription className="plan-description">{plan.description}</CardDescription>
                  <div className="plan-price">
                    <span className="price-currency">₹</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  <p className="gst-note">+ GST Extra</p>
                </CardHeader>
                <CardContent>
                  <ul className="plan-features">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <CheckCircle2 size={18} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={plan.popular ? 'btn-primary full-width' : 'btn-secondary full-width'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">Visit Us</h3>
              <div className="contact-item">
                <MapPin size={24} className="contact-icon" />
                <p>{mockData.contact.address}</p>
              </div>
              <div className="contact-item">
                <Mail size={24} className="contact-icon" />
                <p>{mockData.contact.email}</p>
              </div>
              <div className="contact-item">
                <Phone size={24} className="contact-icon" />
                <div>
                  {Array.isArray(mockData.contact.phone) ? (
                    mockData.contact.phone.map((number, index) => (
                      <p key={index}>{number}</p>
                    ))
                  ) : (
                    <p>{mockData.contact.phone}</p>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <Clock size={24} className="contact-icon" />
                <p>{mockData.contact.hours}</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="btn-primary full-width">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>THRYVE COWORKING</h3>
              <p>Where Ideas Meet Innovation</p>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
              <button onClick={() => scrollToSection('amenities')} className="footer-link">Amenities</button>
              <button onClick={() => scrollToSection('pricing')} className="footer-link">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Thryve Coworking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
