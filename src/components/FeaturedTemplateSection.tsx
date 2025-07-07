
import React from 'react';
import { ExternalLink, Star, Users, Calendar, CheckSquare } from 'lucide-react';

const FeaturedTemplateSection = () => {
  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-haleo-ink mb-6">
            Featured <span className="gradient-text">Template</span>
          </h2>
          <p className="text-xl text-haleo-gray max-w-3xl mx-auto">
            Get started with our most popular template, designed specifically for solo entrepreneurs
          </p>
        </div>

        <div className="bg-gradient-to-br from-haleo-cloud to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-haleo-gray font-medium">4.9/5 (127 reviews)</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-haleo-ink mb-4">
                Solopreneur CRM
              </h3>
              
              <p className="text-xl text-haleo-gray mb-8 leading-relaxed">
                Built for clarity, not complexity. This Notion workspace tracks clients, meetings, and tasks in one synced dashboard.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-haleo-violet" />
                  <span className="text-haleo-gray">Client management & contact tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-haleo-violet" />
                  <span className="text-haleo-gray">Meeting schedules & follow-ups</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-6 w-6 text-haleo-violet" />
                  <span className="text-haleo-gray">Task management & project tracking</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://onehaleo.gumroad.com/l/solopreneur-crm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  View Template
                  <ExternalLink className="h-5 w-5" />
                </a>
                <button className="border-2 border-haleo-core text-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300">
                  Preview Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-haleo-ink">Client Dashboard</h4>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-haleo-cloud rounded-lg p-3">
                      <div className="h-2 bg-haleo-violet rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="bg-haleo-cloud rounded-lg p-3">
                      <div className="h-2 bg-haleo-violet rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="bg-haleo-cloud rounded-lg p-3">
                      <div className="h-2 bg-haleo-violet rounded w-1/2 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-center">
                  <p className="text-sm opacity-80">Clean, organized, effective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplateSection;
