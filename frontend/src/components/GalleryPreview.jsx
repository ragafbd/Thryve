import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  // Show only 4 preview images from the full gallery
  const previewImages = [
    {
      id: 1,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/vltztax0_WhatsApp%20Image%202026-01-02%20at%201.43.58%20PM.jpeg',
      title: 'Conference Room',
      alt: 'Professional conference room at Thryve Coworking Faridabad with ergonomic chairs, large meeting table, and modern decor'
    },
    {
      id: 4,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/7g3lwvja_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%284%29.jpeg',
      title: 'Break Out Zone',
      alt: 'Relaxing break out zone at Thryve Coworking Faridabad with vibrant lounge seating, modern decor, and collaborative space for informal meetings'
    },
    {
      id: 9,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/ah3ga2xb_WhatsApp%20Image%202026-01-02%20at%202.21.52%20PM.jpeg',
      title: 'Cafetaria & Open Terrace',
      alt: 'Beautiful outdoor cafetaria and open terrace at Thryve Coworking Faridabad with greenery, Thryve branding, and relaxing workspace for fresh air and informal meetings'
    },
    {
      id: 3,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/fh4km1rt_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%283%29.jpeg',
      title: '6 Seater Cabin',
      alt: '6 seater private cabin workspace at Thryve Coworking Faridabad featuring ergonomic chairs, wooden desks, and glass partitions for team collaboration'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="heading-2" style={{ color: 'var(--brand-primary)' }}>GALLERY</h2>
          <p className="body-large" style={{ marginTop: '16px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto 0' }}>
            Take a visual tour of our modern coworking space in Faridabad
          </p>
        </div>

        <div className="gallery-grid gallery-preview-grid">
          {previewImages.map((image) => (
            <div key={image.id} className="gallery-item" data-testid={`gallery-preview-${image.id}`}>
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  style={
                    image.title === 'Cafetaria & Open Terrace'
                    ? { objectPosition: '85% center' }
                    : {}
                  }
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link 
            to="/gallery" 
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}
          >
            <span>View Full Gallery</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
