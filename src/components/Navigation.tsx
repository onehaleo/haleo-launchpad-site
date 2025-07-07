
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8bf9a199-52de-4152-9751-1a25c3bd7e0d.png" 
              alt="Haleo"
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-haleo-gray hover:text-haleo-core transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-haleo')} className="text-haleo-gray hover:text-haleo-core transition-colors">
              Why Haleo
            </button>
            <button onClick={() => scrollToSection('templates')} className="text-haleo-gray hover:text-haleo-core transition-colors">
              Templates
            </button>
            <button onClick={() => scrollToSection('about')} className="text-haleo-gray hover:text-haleo-core transition-colors">
              About
            </button>
          </div>

          <div className="hidden md:block">
            <button className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Book Consult
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-haleo-gray hover:text-haleo-core">
                Services
              </button>
              <button onClick={() => scrollToSection('why-haleo')} className="text-left text-haleo-gray hover:text-haleo-core">
                Why Haleo
              </button>
              <button onClick={() => scrollToSection('templates')} className="text-left text-haleo-gray hover:text-haleo-core">
                Templates
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-haleo-gray hover:text-haleo-core">
                About
              </button>
              <button className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
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
