
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedTemplateSection from '../components/FeaturedTemplateSection';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const Index = () => {
  return (
    <PageTransition>
      <SEOHead 
        title="Haleo - Automation Systems That Work While You Don't | Solopreneur Tools"
        description="Build scalable business automation systems for solopreneurs. Get custom templates, AI agents, and automated workflows that work 24/7. Start automating your business today."
        keywords="automation systems, solopreneur automation, business automation tools, AI agents, workflow automation, small business productivity, custom templates, automated systems"
      />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        
        {/* Brief Services Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">Automation Systems for Growing Businesses</h2>
            <p className="text-haleo-gray mb-8 max-w-2xl mx-auto">
              From custom automation workflows to AI-powered agents, we build scalable systems that work 24/7 while you focus on strategic growth and business development.
            </p>
            <Link 
              to="/services" 
              className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FeaturedTemplateSection />
        
        {/* Brief Why Haleo Preview */}
        <section className="py-16 bg-haleo-cloud">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">Why Solopreneurs Choose Haleo for Business Automation</h2>
            <p className="text-haleo-gray mb-8 max-w-2xl mx-auto">
              Purpose-built automation systems for solopreneurs and small business owners who need scalable solutions without enterprise complexity or overhead costs.
            </p>
            <Link 
              to="/why-haleo" 
              className="border-2 border-haleo-core text-haleo-core px-8 py-3 rounded-full hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
