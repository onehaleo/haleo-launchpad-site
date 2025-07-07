import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-haleo-cloud">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold text-haleo-ink mb-4">404</h1>
          <p className="text-xl text-haleo-gray mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;