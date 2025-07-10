
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedTemplateSection from '../components/FeaturedTemplateSection';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { useContent } from '../hooks/useContent';

const Index = () => {
  const { content, loading, error } = useContent();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;
  if (!content) return <div>No content available</div>;

  return (
    <PageTransition animate={true}>
      <SEOHead 
        title={content.seo.default.title}
        description={content.seo.default.description}
        keywords={content.seo.default.keywords}
      />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        
        {/* Brief Services Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">{content.index.services_preview.title}</h2>
            <p className="text-haleo-gray mb-8 max-w-2xl mx-auto">
              {content.index.services_preview.description}
            </p>
            <Link 
              to={content.index.services_preview.cta.url}
              className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2"
            >
              {content.index.services_preview.cta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FeaturedTemplateSection />
        
        {/* SEO Supporting Copy */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-haleo-ink mb-6">{content.index.seo_section.title}</h2>
            {content.index.seo_section.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-haleo-gray leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            
            {/* Trust Signal - Testimonial */}
            <div className="mt-12 bg-haleo-cloud rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <div className="flex text-haleo-violet">
                  {Array.from({ length: content.index.seo_section.testimonial.rating }, (_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg italic text-haleo-ink mb-4">
                "{content.index.seo_section.testimonial.quote}"
              </blockquote>
              <cite className="text-haleo-gray font-semibold">
                {content.index.seo_section.testimonial.author}
              </cite>
            </div>
          </div>
        </section>
        
        {/* Brief Why Haleo Preview */}
        <section className="py-16 bg-haleo-cloud">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-haleo-ink mb-4">{content.index.why_haleo_preview.title}</h2>
            <p className="text-haleo-gray mb-8 max-w-2xl mx-auto">
              {content.index.why_haleo_preview.description}
            </p>
            <Link 
              to={content.index.why_haleo_preview.cta.url}
              className="border-2 border-haleo-core text-haleo-core px-8 py-3 rounded-full hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              {content.index.why_haleo_preview.cta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-haleo-gray mt-2">{content.index.why_haleo_preview.sub_text}</p>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
