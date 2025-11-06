<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Toaster } from './components/ui/sonner';

function App() {
=======
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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

>>>>>>> recovered-main
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomePage />} />
=======
          <Route path="/" element={<Home />} />
>>>>>>> recovered-main
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
