import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import IntroScreen from './components/IntroScreen';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Only show intro on homepage
  if (showIntro && location.pathname === '/') {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
