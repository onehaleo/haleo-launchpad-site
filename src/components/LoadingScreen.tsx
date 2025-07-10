import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-haleo-ink/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 text-haleo-violet animate-spin mx-auto mb-4" />
        <p className="text-white text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;