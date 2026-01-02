import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Pricing from '../components/Pricing';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Thryve Coworking Faridabad | 2 mins from Neelam Chowk Metro Station</title>
        <meta 
          name="description" 
          content="Thryve Coworking in Faridabad is just 2 minutes from Neelam Chowk Metro Station and Mathura Road. Experience modern, affordable workspaces designed for professionals, startups, and entrepreneurs to connect, collaborate, and thrive." 
        />
        <link rel="canonical" href="https://thryvecoworking.in/" />
      </Helmet>
      
      <div className="home-page">
        <Header />
        <Hero />
        <About />
        <Amenities />
        <Pricing />
        <Gallery />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
