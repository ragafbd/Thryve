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
    },
    {
      id: 3,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/fh4km1rt_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%283%29.jpeg',
      title: '6 Seater Cabin',
      alt: '6 seater private cabin workspace at Thryve Coworking Faridabad featuring ergonomic chairs, wooden desks, and glass partitions for team collaboration'
    },
    {
      id: 4,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/7g3lwvja_WhatsApp%20Image%202026-01-02%20at%2011.07.30%20AM%20%284%29.jpeg',
      title: 'Break Out Zone',
      alt: 'Relaxing break out zone at Thryve Coworking Faridabad with vibrant lounge seating, modern decor, and collaborative space for informal meetings'
    },
    {
      id: 5,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/wrn99w24_WhatsApp%20Image%202026-01-02%20at%2011.07.31%20AM%20%281%29.jpeg',
      title: 'Gender Specific Washrooms',
      alt: 'Clean and modern gender specific washrooms at Thryve Coworking Faridabad with premium fixtures and contemporary design'
    },
    {
      id: 6,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/ivfwfiou_WhatsApp%20Image%202026-01-02%20at%2011.07.31%20AM%20%282%29.jpeg',
      title: 'Clean & Hygienic Restrooms',
      alt: 'Spotlessly clean and hygienic restrooms at Thryve Coworking Faridabad with modern fixtures, quality amenities, and professional maintenance'
    },
    {
      id: 7,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/0rjmdnbe_WhatsApp%20Image%202026-01-02%20at%2011.07.31%20AM%20%283%29.jpeg',
      title: 'Automatic Soap Dispensers & Hand Dryers',
      alt: 'Modern automatic soap dispensers and hand dryers at Thryve Coworking Faridabad ensuring touch-free hygiene and convenience'
    },
    {
      id: 8,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/4srpnttr_WhatsApp%20Image%202026-01-02%20at%202.17.29%20PM.jpeg',
      title: 'Complimentary Tea & Coffee',
      alt: 'Complimentary tea and coffee station at Thryve Coworking Faridabad with Nescafe machine, microwave, and water dispenser for members'
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
                  style={image.title === 'Gender Specific Washrooms' ? { objectFit: 'contain', backgroundColor: '#1a1c1b' } : {}}
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
