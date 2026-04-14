import React from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '200+', label: 'Seats', icon: Sparkles },
    { number: '9 AM - 9 PM', label: 'Six Days a Week', icon: Clock },
    { number: '100%', label: 'Value for Money', icon: Sparkles }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2" style={{ color: 'var(--brand-primary)' }}>ABOUT THRYVE</h2>
            <p className="body-medium" style={{ marginTop: '24px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              Located in the heart of Faridabad, just 2 minutes away from Neelam Chowk Metro Station and Mathura Road, Thryve Coworking offers a vibrant shared office space and flexible workspace designed to fuel productivity and collaboration. Our co-working space is the ideal commercial office for rent for businesses of all sizes.
            </p>
            <p className="body-medium" style={{ marginTop: '16px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              Our modern facility combines comfort, functionality, and affordability to create the perfect environment for your business to thrive. Whether you need a hot desk, dedicated workspace, or private office space near Neelam Chowk, we have the right solution for you.
            </p>
          </div>

          <div className="about-image">
            <img 
              src="https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/6dav11o1_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%283%29.jpeg" 
              alt="Private meeting room at Thryve Coworking Faridabad with ergonomic chairs, wooden conference table, and glass walls for professional business meetings"
              className="workspace-image"
            />
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <Icon size={32} style={{ color: 'var(--brand-primary)', marginBottom: '12px' }} />
                <div className="heading-1" style={{ fontSize: '3rem' }}>{stat.number}</div>
                <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
