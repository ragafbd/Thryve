import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
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
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
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
                <p className="body-medium">Plot No. 3, Next to Neelam Chowk Metro Station</p>
                <p className="body-medium">18/3, Mathura Road, Faridabad</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <div>
                <a href="mailto:info@thryvecoworking.com" className="link-text">info@thryvecoworking.com</a>
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
                <p className="body-small">(12 Hours/Day)</p>
              </div>
            </div>

            <div className="contact-image">
              <img 
                src="https://images.unsplash.com/photo-1594732832278-abd644401426?w=600&q=80" 
                alt="Workspace at Thryve"
                className="location-image"
              />
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="body-small">Name</label>
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
                <label htmlFor="email" className="body-small">Email</label>
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
                <label htmlFor="phone" className="body-small">Phone</label>
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
                <label htmlFor="message" className="body-small">Message</label>
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
