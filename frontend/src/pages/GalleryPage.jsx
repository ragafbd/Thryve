import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const GalleryPage = () => {
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
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/1wgfcbuf_WhatsApp%20Image%202026-01-02%20at%202.21.53%20PM.jpeg',
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
    },
    {
      id: 9,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/ah3ga2xb_WhatsApp%20Image%202026-01-02%20at%202.21.52%20PM.jpeg',
      title: 'Cafetaria & Open Terrace',
      alt: 'Beautiful outdoor cafetaria and open terrace at Thryve Coworking Faridabad with greenery, Thryve branding, and relaxing workspace for fresh air and informal meetings'
    },
    {
      id: 10,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/6te0mkiz_WhatsApp%20Image%202026-01-02%20at%202.30.56%20PM.jpeg',
      title: 'Power Backup',
      alt: 'Reliable power backup system at Thryve Coworking Faridabad ensuring uninterrupted work with backup generators and continuous electricity supply'
    },
    {
      id: 11,
      src: 'https://customer-assets.emergentagent.com/job_cowork-upgrade/artifacts/aox23sk7_WhatsApp%20Image%202026-01-02%20at%202.38.11%20PM.jpeg',
      title: 'Ultra Fast & Stable Internet',
      alt: 'High-speed fiber internet infrastructure at Thryve Coworking Faridabad with organized network setup ensuring ultra-fast and stable connectivity for seamless work'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Thryve Coworking Faridabad - Virtual Tour of Our Workspace</title>
        <meta 
          name="description" 
          content="Explore Thryve Coworking space through our photo gallery. View our conference rooms, ergonomic seating, private cabins, break-out zones, modern amenities, and beautiful workspace near Neelam Chowk Metro Station in Faridabad." 
        />
        <meta 
          name="keywords" 
          content="Thryve coworking photos, coworking space gallery Faridabad, workspace images, office space photos, virtual tour coworking Faridabad" 
        />
        <link rel="canonical" href="https://thryvecoworking.in/gallery" />
      </Helmet>
      
      <div className="gallery-page">
        <Header />
        <section style={{ paddingTop: '80px', minHeight: '40vh', background: 'linear-gradient(135deg, #1a1c1b 0%, #2d2f2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="heading-1" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>Photo Gallery</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              Take a visual tour of Thryve Coworking space in Faridabad. Explore our modern workspaces, premium amenities, and vibrant community near Neelam Chowk Metro Station.
            </p>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-item" data-testid={`gallery-item-${image.id}`}>
                  <div className="gallery-image-wrapper">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="gallery-image"
                      style={
                        image.title === 'Gender Specific Washrooms' || image.title === 'Ultra Fast & Stable Internet'
                          ? { objectFit: 'contain', backgroundColor: '#1a1c1b' } 
                          : image.title === 'Cafetaria & Open Terrace'
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
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
