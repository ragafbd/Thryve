import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery | Thryve Coworking Faridabad - Photos of Our Modern Workspace</title>
        <meta 
          name="description" 
          content="Explore photos of Thryve Coworking space in Faridabad. View our conference rooms, private cabins, break out zones, cafeteria, amenities, and modern workspace facilities." 
        />
        <link rel="canonical" href="https://thryvecoworking.in/gallery" />
      </Helmet>
      
      <div className="gallery-page">
        <Header />
        <div style={{ paddingTop: '100px' }}>
          <Gallery />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
