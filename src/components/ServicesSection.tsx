
import React from 'react';
import { Settings, Brain, Database, ArrowRight } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const ServicesSection = () => {
  const { content, loading, error } = useContent();

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error loading services</div>;
  if (!content) return <div>No service content available</div>;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'settings': return <Settings className="h-12 w-12 text-haleo-violet" />;
      case 'brain': return <Brain className="h-12 w-12 text-haleo-violet" />;
      case 'database': return <Database className="h-12 w-12 text-haleo-violet" />;
      default: return <Settings className="h-12 w-12 text-haleo-violet" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-haleo-ink mb-6">
            {content.services.title} <span className="gradient-text">{content.services.title_accent}</span>
          </h2>
          <p className="text-xl text-haleo-gray max-w-3xl mx-auto">
            {content.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {content.services.items.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-haleo-cloud p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">{getServiceIcon(service.icon)}</div>
              <h3 className="text-2xl font-bold text-haleo-ink mb-3">{service.title}</h3>
              <p className="text-haleo-gray mb-6 text-lg">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-haleo-gray">
                    <div className="w-2 h-2 bg-haleo-violet rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg">
            {content.services.cta.text}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
