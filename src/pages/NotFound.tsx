import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="Page Not Found | Haleo"
        description="Sorry, the page you're looking for doesn't exist. Return to Haleo for internal systems built for fast-moving teams."
        keywords="404, page not found, haleo, internal systems"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        
        <div className="pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
              <div className="mb-8">
                <div className="text-8xl sm:text-9xl font-bold gradient-text mb-6">404</div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink mb-6">
                  Oops! Page Not Found
                </h1>
                <p className="text-base sm:text-xl text-haleo-gray max-w-2xl mx-auto mb-8">
                  The page you requested is not available. Head back to the homepage and we will get you where you need to go.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link 
                  to="/" 
                  className="gradient-bg text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
                >
                  <Home className="h-5 w-5" />
                  Return to Home
                </Link>
                <Link 
                  to="/workflow-review" 
                  className="border-2 border-haleo-core text-haleo-core px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Request a Workflow Review
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="border-t border-haleo-cloud pt-8 mt-8">
                <p className="text-haleo-gray mb-4">Quick links</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/services" className="text-haleo-violet hover:text-haleo-core transition-colors font-medium">
                    What Haleo Builds
                  </Link>
                  <Link to="/workflow-review" className="text-haleo-violet hover:text-haleo-core transition-colors font-medium">
                    Workflow Review
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
