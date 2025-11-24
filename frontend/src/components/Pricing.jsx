import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Hot Desk',
      originalPrice: '7,000',
      price: '6,000',
      description: 'Flexible seating option perfect for freelancers and part-time workers',
      features: [
        'Flexible seating',
        'High-speed WiFi',
        'Access to amenities',
        'Community events',
        'Printing credits'
      ],
      popular: false
    },
    {
      name: 'Dedicated Desk',
      originalPrice: '7,500',
      price: '6,500',
      description: 'Your own permanent desk in our collaborative workspace',
      features: [
        'Fixed dedicated desk',
        'High-speed WiFi and LAN',
        'Meeting room access',
        'Mail handling',
        'All amenities included'
      ],
      popular: true
    },
    {
      name: 'Private Office',
      originalPrice: '48,000',
      price: '42,000',
      description: 'Fully furnished private office space for teams and businesses',
      features: [
        'Private lockable office',
        'High-speed WiFi and LAN',
        'Customizable space',
        'Dedicated phone line',
        'Priority meeting rooms',
        'Premium support'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '16px', color: 'var(--brand-primary)' }}>
          FLEXIBLE PRICING PLANS
        </h2>
        <p className="pricing-tagline" style={{ textAlign: 'center', marginBottom: '8px' }}>
          Premium Coworking. Exceptional Value.
        </p>
        <p className="body-medium" style={{ textAlign: 'center', marginBottom: '48px', color: 'var(--text-secondary)' }}>
          Choose the perfect plan for your needs
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} style={{ marginRight: '6px' }} />
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="heading-4" style={{ marginBottom: '12px' }}>{plan.name}</h3>
              <p className="body-small" style={{ marginBottom: '8px', minHeight: '45px' }}>{plan.description}</p>
              
              <div style={{ marginTop: '-12px', paddingTop: '0px' }}>
                <div className="price" style={{ marginBottom: '8px' }}>
                  <span className="price-currency" style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', opacity: 0.6 }}>₹</span>
                  <span className="price-amount" style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', opacity: 0.6 }}>{plan.originalPrice}</span>
                  <span className="price-period" style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', opacity: 0.6 }}>/-</span>
                </div>
                <p className="price-amount" style={{ textAlign: 'center', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '8px', fontSize: 'inherit' }}>
                  Inaugural Offer Price
                </p>
                <div className="price">
                  <span className="price-currency" style={plan.popular ? { color: 'var(--brand-secondary)' } : {}}>₹</span>
                  <span className="price-amount" style={plan.popular ? { color: 'var(--brand-secondary)' } : {}}>{plan.price}</span>
                  <span className="price-period" style={plan.popular ? { color: 'var(--brand-primary)' } : {}}>/- per month</span>
                </div>
                <p className="price-gst">plus GST</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={18} style={{ color: 'var(--brand-primary)', marginRight: '8px', flexShrink: 0, marginTop: '3px' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={scrollToContact} className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
