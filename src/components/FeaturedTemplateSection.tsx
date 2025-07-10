
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useContent } from '../hooks/useContent';

const FeaturedTemplateSection = () => {
  const { content, loading, error } = useContent();

  if (loading) return <div>Loading templates...</div>;
  if (error) return <div>Error loading templates</div>;
  if (!content) return <div>No template content available</div>;

  return (
    <section className="py-20 bg-haleo-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-6">{content.templates.title}</h2>
          <p className="text-lg sm:text-xl text-haleo-gray max-w-3xl mx-auto">
            {content.templates.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {content.templates.featured.map((template, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 ${template.coming_soon ? 'opacity-75' : 'hover:scale-105'}`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-haleo-ink">{template.title}</CardTitle>
                <CardDescription className="text-haleo-gray text-sm">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <ul className="text-sm text-haleo-gray space-y-1">
                    {template.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-haleo-core mb-3">{template.price}</div>
                    {template.coming_soon ? (
                      <button disabled className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-full text-sm">
                        Coming Soon
                      </button>
                    ) : (
                      <a 
                        href={template.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full gradient-bg text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-center text-sm font-semibold"
                      >
                        Get Template
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center px-4">
          <Link 
            to={content.templates.cta.url}
            className="border-2 border-haleo-core text-haleo-core px-6 sm:px-8 py-3 rounded-full hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            {content.templates.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplateSection;
