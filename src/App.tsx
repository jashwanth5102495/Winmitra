
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { IntroAnimation } from './components/IntroAnimation';
import { Homepage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const location = useLocation();

  // Set default zoom to 100%
  useEffect(() => {
    document.body.style.zoom = '1.0';
    document.documentElement.style.zoom = '1.0';
  }, []);

  // Check if user has already seen the intro in this session
  useEffect(() => {
    const visited = sessionStorage.getItem('introSeen');
    if (visited && location.pathname === '/') {
      setHasVisited(true);
      setShowIntro(false);
    }
  }, [location.pathname]);

  // Only show intro on homepage first visit
  const shouldShowIntro = showIntro && !hasVisited && location.pathname === '/';

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasVisited(true);
    sessionStorage.setItem('introSeen', 'true');
  };

  // Debug function to reset intro (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const resetIntro = () => {
        sessionStorage.removeItem('introSeen');
        setHasVisited(false);
        setShowIntro(true);
        console.log('🔄 Intro reset! Refresh the page to see intro again.');
      };
      
      // Add to window for debugging
      (window as any).resetIntro = resetIntro;
      
      if (location.pathname === '/' && window.location.search.includes('reset-intro')) {
        resetIntro();
      }
    }
  }, [location.pathname]);

  if (shouldShowIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;