import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/vltztax0_WhatsApp%20Image%202026-01-02%20at%201.43.58%20PM.jpeg',
      title: 'Conference Room',
      alt: 'Professional conference room at Thryve Coworking Faridabad with ergonomic chairs, large meeting table, and modern decor'
    },
    {
      id: 2,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/mh2mph7f_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%282%29.jpeg',
      title: 'Ergonomic Seating',
      alt: '6 seater private cabin at Thryve Coworking Faridabad with ergonomic chairs, dedicated workspace, and professional meeting setup'
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

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item" data-testid={`gallery-item-${image.id}`}>
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  style={image.title === 'Ergonomic Seating' ? { objectFit: 'contain', backgroundColor: '#1a1c1b' } : {}}
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
