import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInSecondSection, setIsInSecondSection] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Detect if user is in the second section (approximately after hero section)
      // Hero section is roughly 100vh, so second section starts around 100vh
      const heroHeight = window.innerHeight;
      setIsInSecondSection(scrollY > heroHeight * 0.8); // Trigger when 80% through hero
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? theme === 'dark' 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 flex-shrink-0">
            <img
              src="/uploads/dark logo.png"
              alt="Winmitra Agri Tech"
              className="w-20 h-20 object-contain"
            />
            <div className="leading-tight">
              <span className={`font-bold text-xl tracking-wide block transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : (isInSecondSection ? 'text-gray-900' : 'text-white')
              }`}>
                Winmitra Agri Tech
              </span>
              <span className="text-green-400 text-sm italic font-medium">
                Way To Farmer's Growth
              </span>
            </div>
          </Link>

          {/* Centered Navigation Links */}
          <div className="flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-white hover:text-white/80' 
                    : (isInSecondSection 
                        ? 'text-gray-900 hover:text-gray-700' 
                        : 'text-white hover:text-white/80')
                }`}>
                  {link.label}
                </span>
                {/* Active underline */}
                {location.pathname === link.to && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 rounded-full"
                    layoutId="navActiveIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                  theme === 'dark' 
                    ? 'bg-white/40' 
                    : (isInSecondSection ? 'bg-gray-500' : 'bg-white/40')
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Side: Theme Toggle + CTA */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <Link
              to="/contact"
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap shadow-lg ${
                theme === 'dark' 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/uploads/dark logo.png"
              alt="Winmitra Agri Tech"
              className="w-12 h-12 object-contain"
            />
            <div>
              <span className={`font-bold text-lg block transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : (isInSecondSection ? 'text-gray-900' : 'text-white')
              }`}>WAT</span>
              <span className="text-green-400 text-xs italic leading-none font-medium">Way To Growth</span>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 transition-colors rounded-lg duration-300 ${
                theme === 'dark' 
                  ? 'text-white hover:bg-white/10' 
                  : (isInSecondSection 
                      ? 'text-gray-900 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10')
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden backdrop-blur-md border-t overflow-hidden shadow-xl ${
              theme === 'dark' 
                ? 'bg-black/98 border-white/20' 
                : 'bg-white/98 border-gray-300'
            }`}
          >
            <div className="px-6 py-6 space-y-2">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
                      location.pathname === link.to
                        ? theme === 'dark'
                          ? 'text-white bg-white/15 border border-white/20'
                          : 'text-gray-900 bg-gray-100 border border-gray-300'
                        : theme === 'dark'
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigationLinks.length * 0.08 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg ${
                    theme === 'dark' 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}