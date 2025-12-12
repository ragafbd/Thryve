import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ContactPage from './pages/ContactPage';
import IntroScreen from './components/IntroScreen';
import { Toaster } from './components/ui/sonner';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
