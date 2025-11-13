import React from 'react';
import { Users, Rocket, Heart, Target } from 'lucide-react';

const Team = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We believe in creating spaces that inspire creativity and drive innovation.'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where entrepreneurs and professionals thrive together.'
    },
    {
      icon: Target,
      title: 'Excellence Always',
      description: 'Committed to delivering premium quality workspace solutions with attention to every detail.'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-header">
          <Users size={48} style={{ color: 'var(--brand-primary)', marginBottom: '16px' }} />
          <h2 className="heading-2" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>THE TEAM BEHIND THRYVE</h2>
          <p className="body-large" style={{ maxWidth: '50ch', margin: '0 auto', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Thryve is powered by a young, ambitious, and passionate team dedicated to revolutionizing the coworking experience in Faridabad.
          </p>
        </div>

        <div className="values-section">
          <h3 className="heading-3" style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2rem' }}>OUR VALUES</h3>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <Icon size={40} />
                  </div>
                  <h4 className="heading-5" style={{ marginTop: '16px', marginBottom: '12px' }}>{value.title}</h4>
                  <p className="body-small" style={{ lineHeight: '1.5' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
