import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message Sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', companyName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '48px' }}>
          GET IN TOUCH
        </h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="heading-4" style={{ marginBottom: '24px' }}>Visit Us</h3>
            
            <div className="contact-item">
              <MapPin size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <div>
                <p className="body-medium">First Floor, Plot No. 3, Next to Neelam Chowk Metro Station,</p>
                <p className="body-medium">18/3, Mathura Road, Faridabad, Haryana - 121 007</p>
                <a 
                  href="https://www.google.com/maps/place/98R7%2BGF+Faridabad,+Haryana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', padding: '2px 8px', fontSize: '0.65rem', lineHeight: '1.2' }}
                >
                  <MapPin size={10} style={{ marginRight: '2px' }} />
                  Google Maps
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <div>
                <a href="mailto:contact@thryvecoworking.in" className="link-text">contact@thryvecoworking.in</a>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <div>
                <p className="body-medium">+91 98 106 99793</p>
                <p className="body-medium">+91 80 767 32167</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <div>
                <p className="body-medium">Mon - Sat: 9:00 AM - 9:00 PM</p>
              </div>
            </div>

            {/* Contact image removed */}
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="body-small" style={{ color: 'var(--brand-primary)', paddingLeft: '4px' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="body-small" style={{ color: 'var(--brand-primary)', paddingLeft: '4px' }}>Company's Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="body-small" style={{ color: 'var(--brand-primary)', paddingLeft: '4px' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="body-small" style={{ color: 'var(--brand-primary)', paddingLeft: '4px' }}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="body-small" style={{ color: 'var(--brand-primary)', paddingLeft: '4px' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us about your requirements..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                SEND MESSAGE <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
