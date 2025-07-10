import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const beliefs = [
    "Simpler is better",
    "You don't need a team to feel organized", 
    "Systems should save you time, not create more work",
    "Automation should feel like magic — even if it's boring under the hood"
  ];

  const whatHaleoDoes = [
    "Build custom automations for things like lead gen, onboarding, invoicing, and internal ops",
    "Design AI agents that actually understand your workflows",
    "Create clean, powerful Notion templates (like CRMs and central dashboards)",
    "Offer intensives for strategy, co-builds, or systems cleanup"
  ];

  return (
    <PageTransition animate={false}>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-20 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
                About <span className="gradient-text">Haleo</span>
              </h1>
              <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
                — automation that works while you don't.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-haleo-core to-haleo-violet rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">H</span>
                  </div>
                  <h2 className="text-3xl font-bold text-haleo-ink mb-2">Haleo</h2>
                  <p className="text-haleo-gray">Automation Studio for Solopreneurs</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  Haleo was founded because too many smart, capable solopreneurs were stuck in messy ops, half-baked templates, or spending hours on things that should take seconds.
                </p>
                
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  Built on a foundation of automation and cloud architecture experience from working with enterprise federal clients, Haleo bridges the gap between complex enterprise solutions and solopreneur needs.
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <p className="text-xl font-semibold text-haleo-core text-center italic">
                    Why don't solo business owners have access to the same powerful tools?
                  </p>
                </div>

                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  The answer: they do. Enterprise-grade automation tools just need to be simplified, stripped down, and tailored to solopreneur workflows.
                </p>

                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  Haleo specializes in creating automation solutions designed for solopreneurs who want to scale without burning out.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What Haleo offers:</h3>
                <ul className="space-y-4">
                  {whatHaleoDoes.map((item, index) => (
                    <li key={index} className="flex items-start text-haleo-gray">
                      <div className="w-2 h-2 bg-haleo-violet rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What Haleo believes:</h3>
                <ul className="space-y-4">
                  {beliefs.map((belief, index) => (
                    <li key={index} className="flex items-start text-haleo-gray">
                      <CheckCircle className="h-6 w-6 text-haleo-violet mt-0.5 mr-3 flex-shrink-0" />
                      {belief}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-3xl p-8 md:p-12 text-white text-center mb-16">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                Whether you're buying a plug-and-play template or booking a full custom build, Haleo's goal is the same:
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                Help you get more done with less effort — and finally feel in control of your business backend.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold gradient-text mb-6">
                  Let's build a business that runs beautifully behind the scenes.
                </h3>
                <button className="gradient-bg text-white px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg">
                  Book Your Discovery Call
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;