import React from 'react';
import { Wifi, Users, Coffee, Gamepad2, Droplets, Clock, Printer, Wind, Zap, Car, Armchair, Video, MapPin, Mail, Sparkles } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Ultra-fast fiber internet' },
    { icon: Users, title: 'Meeting Rooms', description: 'Fully equipped spaces to focus and collaborate' },
    { icon: Video, title: 'Video Conferencing', description: 'Professional video call setup' },
    { icon: Coffee, title: 'Café & Refreshments', description: 'Complimentary tea & coffee' },
    { icon: Gamepad2, title: 'Table Tennis & Foosball', description: 'Fun recreation area' },
    { icon: Droplets, title: 'Spacious Washrooms', description: 'Clean & modern facilities' },
    { icon: Clock, title: '9 AM to 9 PM Access', description: '6 days a week' },
    { icon: Printer, title: 'Printing Services', description: 'Print, scan & copy' },
    { icon: Wind, title: 'Air Conditioned', description: 'Climate controlled' },
    { icon: Zap, title: 'Power Backup', description: 'Uninterrupted power' },
    { icon: Car, title: 'Parking Space', description: 'Ample parking available next door' },
    { icon: Armchair, title: 'Ergonomic Seating', description: 'Comfortable workstations' },
    { icon: MapPin, title: 'Prime Location', description: 'Proximity to Mathura Road and Metro Station' }
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
            src="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?w=1200&q=80" 
            alt="Amenities at Thryve"
            className="amenities-showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
