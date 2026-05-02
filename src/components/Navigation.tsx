
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../hooks/useContent';
import { useCmsContent } from '../hooks/useCmsContent';
import { useNavigationLoading } from '../hooks/useNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, loading, error } = useCmsContent();
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
  const { settings } = content;

  const resolveAssetUrl = (assetPath: string) => {
    if (!assetPath) return assetPath;
    if (/^(https?:)?\/\//.test(assetPath)) return assetPath;
    const normalized = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

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
        <div className="flex justify-between items-center py-2.5 sm:py-3">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => handleNavigationClick('/')}
            >
              <div className="rounded-lg p-1 transition-all duration-300 hover:scale-105">
                <img
                  src={resolveAssetUrl(settings.logo_path)}
                  alt={settings.site_name}
                  className="h-11 w-11 sm:h-14 sm:w-14 rounded-md object-cover"
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {settings.nav_links.map((item, index) => {
              const isExternal = /^(mailto:|https?:)/i.test(item.url);
              if (isExternal) {
                return (
                  <a
                    key={index}
                    href={item.url}
                    className="text-white/90 hover:text-haleo-violet transition-all duration-300 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={index}
                  to={item.url}
                  className="text-white/90 hover:text-haleo-violet transition-all duration-300 text-sm font-medium"
                  onClick={() => handleNavigationClick(item.url)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              to={settings.nav_cta.url}
              className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-all duration-300 text-sm font-semibold inline-block whitespace-nowrap"
              onClick={() => handleNavigationClick(settings.nav_cta.url)}
            >
              {settings.nav_cta.text}
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1.5">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 mb-2">
            <div className="flex flex-col space-y-4">
              {settings.nav_links.map((item, index) => {
                const isExternal = /^(mailto:|https?:)/i.test(item.url);
                if (isExternal) {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-left text-haleo-gray hover:text-haleo-core transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigationClick(item.url);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to={settings.nav_cta.url}
                className="gradient-bg text-white px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 text-sm text-center font-semibold"
                onClick={() => {
                  setIsOpen(false);
                  handleNavigationClick(settings.nav_cta.url);
                }}
              >
                {settings.nav_cta.text}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
