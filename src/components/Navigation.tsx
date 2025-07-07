
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Utility function to scroll to top when navigating
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-haleo-ink/95 backdrop-blur-sm shadow-lg' : 'bg-haleo-ink/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/8bf9a199-52de-4152-9751-1a25c3bd7e0d.png" 
                alt="Haleo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-haleo-violet transition-all duration-300"
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-haleo-violet transition-all duration-300"
              onClick={scrollToTop}
            >
              Services
            </Link>
            <Link 
              to="/why-haleo" 
              className="text-white hover:text-haleo-violet transition-all duration-300"
              onClick={scrollToTop}
            >
              Why Haleo
            </Link>
            <Link 
              to="/templates" 
              className="text-white hover:text-haleo-violet transition-all duration-300"
              onClick={scrollToTop}
            >
              Templates
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-haleo-violet transition-all duration-300"
              onClick={scrollToTop}
            >
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="gradient-bg text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm">
              Book Consult
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                onClick={() => { setIsOpen(false); scrollToTop(); }}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                onClick={() => { setIsOpen(false); scrollToTop(); }}
              >
                Services
              </Link>
              <Link 
                to="/why-haleo" 
                className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                onClick={() => { setIsOpen(false); scrollToTop(); }}
              >
                Why Haleo
              </Link>
              <Link 
                to="/templates" 
                className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                onClick={() => { setIsOpen(false); scrollToTop(); }}
              >
                Templates
              </Link>
              <Link 
                to="/about" 
                className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                onClick={() => { setIsOpen(false); scrollToTop(); }}
              >
                About
              </Link>
              <button className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm">
                Book Consult
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
