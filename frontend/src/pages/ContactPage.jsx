import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Thryve Coworking Faridabad | Visit Us Near Neelam Chowk Metro Station</title>
        <meta 
          name="description" 
          content="Get in touch with Thryve Coworking in Faridabad. Located just 2 minutes from Neelam Chowk Metro Station on Mathura Road. Call +91 98106 99793 or email contact@thryvecoworking.in. Open Mon-Sat, 9 AM - 9 PM. Schedule a free tour today!" 
        />
        <meta 
          name="keywords" 
          content="contact Thryve Coworking, coworking space Neelam Chowk, Faridabad office address, coworking near Mathura Road, visit coworking space Faridabad, schedule workspace tour" 
        />
        <link rel="canonical" href="https://thryvecoworking.in/contact" />
      </Helmet>
      
      <div className="contact-page">
        <Header />
        <section style={{ paddingTop: '80px', minHeight: '40vh', background: 'linear-gradient(135deg, #1a1c1b 0%, #2d2f2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="heading-1" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>Get in Touch with Thryve Coworking</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              Visit our modern coworking space in Faridabad, conveniently located 2 minutes from Neelam Chowk Metro Station. Schedule a free tour or reach out with any questions.
            </p>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
