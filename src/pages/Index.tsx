
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
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">💼 Done-For-You Services</h2>
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
            <p className="text-sm text-haleo-gray mt-2">Get expert help setting up your first automation</p>
          </div>
        </section>

        <FeaturedTemplateSection />
        
        {/* SEO Supporting Copy */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-haleo-ink mb-6">Automation Systems Built for Solopreneurs Who Scale</h2>
            <p className="text-haleo-gray leading-relaxed mb-4">
              Haleo builds done-for-you automation systems, custom AI agents, and business templates across tools like Notion, Zapier, and Make.com. Whether you're just starting or scaling fast, Haleo makes your systems smarter.
            </p>
            <p className="text-haleo-gray leading-relaxed">
              From Notion CRM templates to custom AI agents, our automation solutions help solopreneurs ditch the chaos and focus on what they do best. Join 100+ business owners who've automated their workflows with Haleo.
            </p>
            
            {/* Trust Signal - Testimonial */}
            <div className="mt-12 bg-haleo-cloud rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <blockquote className="text-lg italic text-haleo-ink mb-4">
                "I didn't realize how much time I was losing until Haleo automated my entire intake system. Now I get leads, convert them, and onboard clients while I sleep."
              </blockquote>
              <cite className="text-haleo-gray font-semibold">
                — Sarah K., Marketing Consultant
              </cite>
            </div>
          </div>
        </section>
        
        {/* Brief Why Haleo Preview */}
        <section className="py-16 bg-haleo-cloud">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">🤖 Why Solopreneurs Choose Haleo</h2>
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
            <p className="text-sm text-haleo-gray mt-2">See how we've helped 100+ solopreneurs scale</p>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
