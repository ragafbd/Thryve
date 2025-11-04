import React from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '200+', label: 'Seats', icon: Sparkles },
    { number: '12 Hours', label: 'Six Days a Week', icon: Clock },
    { number: '100%', label: 'Value for Money', icon: Sparkles }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2" style={{ color: 'var(--brand-primary)' }}>ABOUT THRYVE</h2>
            <p className="body-medium" style={{ marginTop: '24px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              Located in the heart of Faridabad, just 2 minutes away from Mathura Road and Neelam Chowk Metro Station, Thryve Coworking offers a vibrant community workspace designed to fuel productivity and collaboration.
            </p>
            <p className="body-medium" style={{ marginTop: '16px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              Our modern facility combines comfort, functionality, and affordability to create the perfect environment for your business to thrive.
            </p>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556565681-306458ef93cd?w=800&q=80" 
              alt="Modern Workspace"
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
