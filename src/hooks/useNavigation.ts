import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Reduced to 300ms for quicker transitions

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const startLoading = () => setIsLoading(true);

  return { isLoading, startLoading };
};