import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCmsContent } from '../hooks/useCmsContent';

export const resolveAssetUrl = (assetPath: string) => {
  if (!assetPath) return assetPath;
  if (/^(https?:)?\/\//.test(assetPath)) return assetPath;
  const normalized = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${import.meta.env.BASE_URL}${normalized}`;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content } = useCmsContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(location.hash.slice(1));
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [location]);

  if (!content) return null;
  const { settings } = content;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[15px] font-medium transition-colors ${
      isActive ? 'text-haleo-pine' : 'text-haleo-ink hover:text-haleo-pine'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-haleo-surface/95 backdrop-blur-sm transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_#D3DDD9]' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
        <Link to="/" className="flex items-center" aria-label="Haleo home">
          <img src={resolveAssetUrl(settings.logo_path)} alt="Haleo" className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {settings.nav_links.map((item) => (
            <NavLink key={item.url} to={item.url} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link to={settings.nav_cta.url} className="btn-primary px-5 py-2.5">
            {settings.nav_cta.text}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-haleo-ink md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-haleo-hairline bg-haleo-surface px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-4">
            {settings.nav_links.map((item) => (
              <NavLink key={item.url} to={item.url} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to={settings.nav_cta.url} className="btn-primary w-full">
              {settings.nav_cta.text}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
