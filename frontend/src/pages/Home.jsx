import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
