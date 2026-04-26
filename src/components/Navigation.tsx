
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContent, scrollToTop } from '../hooks/useContent';
import { useNavigationLoading } from '../hooks/useNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, loading, error } = useContent();
  const { startLoading } = useNavigationLoading();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace('#', '');
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      // Offset for fixed navbar so section titles are visible.
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [location]);

  if (loading || error || !content) return null;

  const handleNavigationClick = (url: string) => {
    startLoading();
    if (url.includes('#')) return;
    scrollToTop();
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-haleo-ink/85 backdrop-blur-sm shadow-sm' : 'bg-haleo-ink backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => handleNavigationClick('/')}
            >
              <div className="rounded-lg p-1 transition-all duration-300 hover:scale-105">
                <img 
                  src={content.navigation.logo}
                  alt={content.site.name}
                  className="h-10 w-10 rounded-md object-cover"
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {content.navigation.items.map((item, index) => (
              <Link 
                key={index}
                to={item.url}
                className="text-white/90 hover:text-haleo-violet transition-all duration-300 text-sm font-medium"
                onClick={() => handleNavigationClick(item.url)}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to={content.navigation.cta.url}
              className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm font-semibold inline-block whitespace-nowrap"
              onClick={() => handleNavigationClick(content.navigation.cta.url)}
            >
              {content.navigation.cta.text}
            </Link>
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
                  onClick={() => { 
                    setIsOpen(false); 
                    handleNavigationClick(item.url);
                  }}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                to={content.navigation.cta.url}
                className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm text-center"
                onClick={() => {
                  setIsOpen(false);
                  handleNavigationClick(content.navigation.cta.url);
                }}
              >
                {content.navigation.cta.text}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
