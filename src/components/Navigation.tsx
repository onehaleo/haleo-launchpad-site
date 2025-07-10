
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContent, scrollToTop } from '../hooks/useContent';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, loading, error } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading || error || !content) return null;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-haleo-ink/85 backdrop-blur-sm shadow-sm' : 'bg-haleo-ink backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 hover:scale-105">
                <img 
                  src={content.navigation.logo}
                  alt={content.site.name}
                  className="h-6 w-auto"
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {content.navigation.items.map((item, index) => (
              <Link 
                key={index}
                to={item.url}
                className="text-white hover:text-haleo-violet transition-all duration-300"
                onClick={scrollToTop}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="gradient-bg text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm">
              {content.navigation.cta.text}
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
              {content.navigation.items.map((item, index) => (
                <Link 
                  key={index}
                  to={item.url}
                  className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300" 
                  onClick={() => { setIsOpen(false); scrollToTop(); }}
                >
                  {item.text}
                </Link>
              ))}
              <button className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm">
                {content.navigation.cta.text}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
