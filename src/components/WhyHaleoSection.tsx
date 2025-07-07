
import React from 'react';
import { Users, TrendingUp, CheckCircle } from 'lucide-react';

const WhyHaleoSection = () => {
  const reasons = [
    {
      icon: <Users className="h-16 w-16 text-haleo-violet" />,
      title: "Solopreneur-Friendly",
      description: "No jargon. Just clarity.",
      detail: "We speak your language and understand the unique challenges of running a one-person business."
    },
    {
      icon: <TrendingUp className="h-16 w-16 text-haleo-violet" />,
      title: "System-First",
      description: "Workflows that scale with you.",
      detail: "Our solutions grow alongside your business, from startup to six-figure success."
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-haleo-violet" />,
      title: "Done-for-You",
      description: "We automate it. You exhale.",
      detail: "Sit back while we handle the technical setup. You focus on what you do best."
    }
  ];

  return (
    <section id="why-haleo" className="py-20 bg-gradient-to-br from-haleo-cloud to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-haleo-ink mb-6">
            Why <span className="gradient-text">Haleo</span>
          </h2>
          <p className="text-xl text-haleo-gray max-w-3xl mx-auto">
            Built specifically for solo entrepreneurs who value simplicity and results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-haleo-ink mb-3">{reason.title}</h3>
                <p className="text-xl text-haleo-violet font-semibold mb-4">{reason.description}</p>
                <p className="text-haleo-gray leading-relaxed">{reason.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-haleo-ink mb-4">Ready to get started?</h3>
            <p className="text-haleo-gray mb-6">Join hundreds of solopreneurs who've automated their way to freedom.</p>
            <button className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Automation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHaleoSection;
