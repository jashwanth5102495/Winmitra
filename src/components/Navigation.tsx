import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
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
    { to: '/solutions', label: 'Solutions' },
    { to: '/crops', label: 'Crops' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}
      style={{ willChange: 'background-color' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 flex-shrink-0">
            <img
              src="/uploads/dark logo.png"
              alt="WinGrow"
              className="w-20 h-20 object-contain"
            />
            <div className="leading-tight">
              <span className="font-bold text-2xl tracking-wide block text-gray-900">
                winGrow
              </span>
              <span className="text-green-500 text-base italic font-medium">
                Way To Farmer's Growth
              </span>
            </div>
          </Link>

          {/* Centered Navigation Links */}
          <div className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <span className="text-base font-medium text-gray-900 hover:text-green-600 transition-colors duration-200">
                  {link.label}
                </span>
                {location.pathname === link.to && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 rounded-full" />
                )}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center bg-green-500" />
              </Link>
            ))}
          </div>

          {/* Right Side CTA */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 shadow-md"
            >
              Enquiry Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/uploads/dark logo.png"
              alt="WinGrow"
              className="w-14 h-14 object-contain"
            />
            <div className="leading-tight">
              <span className="font-bold text-lg text-gray-900">winGrow</span>
              <span className="text-green-500 text-xs italic font-medium">Way To Growth</span>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 bg-white/90 shadow-sm"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-white bg-green-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg text-base font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
              >
                Enquiry Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}