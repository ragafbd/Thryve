import React from 'react';
import { Wifi, Users, Coffee, Gamepad2, Droplets, Clock, Printer, Wind, Zap, Car, Armchair, Shield } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Ultra-fast fiber internet' },
    { icon: Users, title: 'Meeting Rooms', description: 'Fully equipped spaces' },
    { icon: Coffee, title: 'Café & Refreshments', description: 'Complimentary tea & coffee' },
    { icon: Gamepad2, title: 'Recreation Area', description: 'Table Tennis & Foosball' },
    { icon: Droplets, title: 'Spacious Washrooms', description: 'Clean & modern facilities' },
    { icon: Clock, title: '9 AM to 9 PM Access', description: '12 hours daily, 6 days' },
    { icon: Printer, title: 'Printing Services', description: 'Print, scan & copy' },
    { icon: Wind, title: 'Air Conditioned', description: 'Climate controlled' },
    { icon: Zap, title: 'Power Backup', description: 'Uninterrupted power' },
    { icon: Car, title: 'Parking Space', description: 'Ample parking available' },
    { icon: Armchair, title: 'Ergonomic Seating', description: 'Comfortable workstations' },
    { icon: Shield, title: 'Secure Access', description: '24/7 security system' }
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '48px', color: 'var(--brand-primary)' }}>
          BEST IN CLASS AMENITIES
        </h2>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">
                  <Icon size={32} />
                </div>
                <h3 className="heading-5" style={{ marginTop: '16px' }}>{amenity.title}</h3>
                <p className="body-small" style={{ marginTop: '8px' }}>{amenity.description}</p>
              </div>
            );
          })}
        </div>

        <div className="amenities-image-section">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80" 
            alt="Amenities at Thryve"
            className="amenities-showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
