import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="Page Not Found | Haleo"
        description="Sorry, the page you're looking for doesn't exist. Return to Haleo's automation systems and templates for solopreneurs."
        keywords="404, page not found, haleo, automation systems"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        
        <div className="pt-20 sm:pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
              <div className="mb-8">
                <div className="text-8xl sm:text-9xl font-bold gradient-text mb-6">404</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-haleo-ink mb-6">
                  Oops! Page Not Found
                </h1>
                <p className="text-lg sm:text-xl text-haleo-gray max-w-2xl mx-auto mb-8">
                  The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link 
                  to="/" 
                  className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Home className="h-5 w-5" />
                  Return to Home
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-haleo-core border-2 border-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  View Services
                </Link>
              </div>

              <div className="border-t border-haleo-cloud pt-8 mt-8">
                <p className="text-haleo-gray mb-4">Looking for something specific?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/templates" className="text-haleo-violet hover:text-haleo-core transition-colors font-medium">
                    Templates
                  </Link>
                  <Link to="/about" className="text-haleo-violet hover:text-haleo-core transition-colors font-medium">
                    About
                  </Link>
                  <Link to="/why-haleo" className="text-haleo-violet hover:text-haleo-core transition-colors font-medium">
                    Why Haleo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;