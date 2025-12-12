import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Amenities from '../components/Amenities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AmenitiesPage = () => {
  return (
    <>
      <Helmet>
        <title>World-Class Coworking Amenities in Faridabad | High-Speed WiFi, Meeting Rooms & More</title>
        <meta 
          name="description" 
          content="Discover premium coworking amenities at Thryve Faridabad: high-speed WiFi, professional meeting rooms, podcast studio, ergonomic furniture, 24/7 power backup, ample parking, and more. Located 2 minutes from Neelam Chowk Metro. Experience comfort and productivity!" 
        />
        <meta 
          name="keywords" 
          content="coworking amenities Faridabad, high-speed WiFi workspace, meeting rooms Faridabad, podcast recording studio, ergonomic office furniture, coworking facilities near Neelam Chowk, professional workspace amenities" 
        />
        <link rel="canonical" href="https://thryvecoworking.in/amenities" />
      </Helmet>
      
      <div className="amenities-page">
        <Header />
        <section style={{ paddingTop: '80px', minHeight: '40vh', background: 'linear-gradient(135deg, #1a1c1b 0%, #2d2f2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="heading-1" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>Premium Coworking Amenities</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              Experience world-class facilities at our flexible workspace and shared office space in Faridabad. From high-speed internet to professional meeting rooms and a podcast studio, our co-working space offers everything you need for success. Discover why businesses choose our commercial office for rent near Neelam Chowk.
            </p>
          </div>
        </section>
        <Amenities />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default AmenitiesPage;
