
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const FeaturedTemplateSection = () => {
  const templates = [
    {
      title: "Solopreneur CRM",
      description: "Your entire client experience in one intuitive dashboard.",
      price: "$47",
      features: ["Client database", "Task tracking", "Meeting logs", "Custom views"],
      link: "https://onehaleo.gumroad.com/l/solopreneur-crm"
    },
    {
      title: "Notion HQ Dashboard",
      description: "Your business brain, all in one place.",
      price: "$29",
      features: ["Daily dashboard", "Habit tracker", "Business metrics", "Clean layout"],
      link: "https://onehaleo.gumroad.com"
    },
    {
      title: "Content Planner",
      description: "Stop losing your best ideas. Start showing up consistently.",
      price: "$17",
      features: ["Content calendar", "Platform tracker", "Idea bank", "Hashtag library"],
      link: "https://onehaleo.gumroad.com"
    },
    {
      title: "AI Q&A Assistant",
      description: "Smart client support that understands your business.",
      price: "Coming Soon",
      features: ["Custom training", "Brand voice", "Auto responses", "Private & secure"],
      link: "#",
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 bg-haleo-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-haleo-ink mb-6">Featured Templates</h2>
          <p className="text-xl text-haleo-gray max-w-3xl mx-auto">
            Plug-and-play systems for solopreneurs who want clarity without the chaos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 ${template.comingSoon ? 'opacity-75' : 'hover:scale-105'}`}>
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
                    {template.comingSoon ? (
                      <button disabled className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-full text-sm">
                        Coming Soon
                      </button>
                    ) : (
                      <a 
                        href={template.link}
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
        
        <div className="text-center">
          <Link 
            to="/templates" 
            className="border-2 border-haleo-core text-haleo-core px-8 py-3 rounded-full hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            Browse All Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplateSection;
