import React from 'react';
import { Wifi, Users, Coffee, Gamepad2, Droplets, Clock, Printer, Wind, Zap, Car, Armchair, Video, MapPin, Mail, Sparkles, Mic } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Ultra-fast fiber internet' },
    { icon: Users, title: 'Meeting Rooms', description: 'Fully equipped spaces to focus and collaborate' },
    { icon: Video, title: 'Video Conferencing', description: 'Professional video call setup' },
    { icon: Mic, title: 'Podcast & Recording Studio', description: 'Space to make engaging content' },
    { icon: Coffee, title: 'Café & Refreshments', description: 'Complimentary tea & coffee' },
    { icon: Gamepad2, title: 'Table Tennis & Foosball', description: 'Fun recreation area' },
    { icon: Droplets, title: 'Spacious Washrooms', description: 'Clean & modern facilities' },
    { icon: Clock, title: '9 AM to 9 PM Access', description: '6 days a week' },
    { icon: Printer, title: 'Printing Services', description: 'Print, scan & copy' },
    { icon: Wind, title: 'Air Conditioned', description: 'Climate controlled' },
    { icon: Zap, title: 'Power Backup', description: 'Uninterrupted power' },
    { icon: Car, title: 'Parking Space', description: 'Ample parking available next door' },
    { icon: Armchair, title: 'Ergonomic Seating', description: 'Comfortable workstations' },
    { icon: MapPin, title: 'Prime Location', description: 'Proximity to Mathura Road and Metro Station' },
    { icon: Mail, title: 'Virtual Office Services with Mail Handling', description: 'Professional business address & mail management' },
    { icon: Sparkles, title: 'Efficient Housekeeping', description: 'Clean and maintained workspace daily' }
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
            src="https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/80zjt8s0_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM.jpeg" 
            alt="Thryve Coworking branded signage and entrance at our premium flexible workspace in Faridabad, located near Neelam Chowk Metro Station on Mathura Road"
            style={{ width: '100%', height: '400px', objectFit: 'contain', borderRadius: '12px', backgroundColor: '#f5f5f5' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
