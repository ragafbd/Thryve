import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Coworking Space Pricing in Faridabad | Hot Desk, Dedicated Desk & Private Office Rates</title>
        <meta 
          name="description" 
          content="Affordable coworking space pricing in Faridabad. Hot desks from ₹6,000/month, dedicated desks at ₹6,500/month, and private offices from ₹42,000/month. Inaugural offers available near Neelam Chowk Metro Station. Book your workspace today!" 
        />
        <meta 
          name="keywords" 
          content="coworking space pricing Faridabad, hot desk rates Faridabad, dedicated desk cost, private office rental Faridabad, flexible workspace pricing, coworking plans near Neelam Chowk" 
        />
        <link rel="canonical" href="https://thryvecoworking.in/pricing" />
      </Helmet>
      
      <div className="pricing-page">
        <Header />
        <section style={{ paddingTop: '80px', minHeight: '40vh', background: 'linear-gradient(135deg, #1a1c1b 0%, #2d2f2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="heading-1" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>Flexible Coworking Space Pricing in Faridabad</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              Affordable commercial office for rent with flexible workspace options. Choose from hot desks, dedicated desks, or private office space near Neelam Chowk. Special inaugural offers on our shared office space for limited time.
            </p>
          </div>
        </section>
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
