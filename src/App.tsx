
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  if (shouldShowIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
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
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;