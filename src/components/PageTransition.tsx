import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  animate?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, animate = false }) => {
  return (
    <div className={animate ? "animate-fade-in" : ""}>
      {children}
    </div>
  );
};

export default PageTransition;