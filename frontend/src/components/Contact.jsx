import React from 'react';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  // Form functionality removed - using direct WhatsApp and email links instead

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
                  href="https://maps.app.goo.gl/4MRQXxVpTZCJLyfv6" 
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
            <div className="contact-buttons-container">
              <h3 className="heading-5" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Get in touch and schedule a visit</h3>
              <p className="body-medium" style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
                Reach out to us directly via WhatsApp or Email
              </p>
              
              <div className="contact-buttons">
                <a 
                  href="https://wa.me/919810316151?text=Hi, I'm interested in Thryve Coworking space and would like to schedule a visit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', marginBottom: '16px' }}
                >
                  <Phone size={20} />
                  WhatsApp: +91 98 103 16151
                </a>
                
                <a 
                  href="https://wa.me/918076732167?text=Hi, I'm interested in Thryve Coworking space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', marginBottom: '16px' }}
                >
                  <Phone size={20} />
                  WhatsApp: +91 80 767 32167
                </a>
                
                <a 
                  href="mailto:info@thryvecoworking.com?subject=Inquiry about Thryve Coworking&body=Hi, I'm interested in learning more about your coworking space." 
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
