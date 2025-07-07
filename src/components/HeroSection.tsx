
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-haleo-cloud via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
            Automation that works{' '}
            <span className="gradient-text">while you don't.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-haleo-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            Haleo builds simple, scalable systems for solopreneurs — so you can ditch the chaos and get back to what you do best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://onehaleo.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Browse Templates
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <button className="border-2 border-haleo-core text-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300">
              Book Free Consult
            </button>
          </div>
        </div>
        
        <div className="mt-20 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-haleo-core mb-2">50+</div>
                <div className="text-haleo-gray">Templates Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-haleo-core mb-2">100%</div>
                <div className="text-haleo-gray">Solopreneur Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-haleo-core mb-2">24/7</div>
                <div className="text-haleo-gray">Automation Running</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
