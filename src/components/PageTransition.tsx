import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  animate?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, animate = false }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when page changes, unless it's the home page with animations
    if (!animate) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, animate]);

  return (
    <div className={animate ? "animate-fade-in" : ""}>
      {children}
    </div>
  );
};

export default PageTransition;