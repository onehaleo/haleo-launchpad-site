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

  const whatIDo = [
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
                Hey, I'm <span className="gradient-text">Alexis</span> 👋
              </h1>
              <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
                — the brains behind Haleo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-haleo-core to-haleo-violet rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">A</span>
                  </div>
                  <h2 className="text-3xl font-bold text-haleo-ink mb-2">Alexis</h2>
                  <p className="text-haleo-gray">Founder & Automation Architect</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  I started Haleo because I was tired of seeing smart, capable solopreneurs stuck in messy ops, half-baked templates, or spending hours on things that should take seconds.
                </p>
                
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  My background is in automation and cloud architecture — building secure systems for big-name federal clients. But I kept thinking:
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <p className="text-xl font-semibold text-haleo-core text-center italic">
                    Why don't solo business owners have access to the same tools?
                  </p>
                </div>

                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  Turns out, we do. They just need to be simplified, stripped down, and tailored to you.
                </p>

                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed">
                  So I left the red tape and built Haleo — an automation studio designed for solopreneurs who want to scale without burning out.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What I do at Haleo:</h3>
                <ul className="space-y-4">
                  {whatIDo.map((item, index) => (
                    <li key={index} className="flex items-start text-haleo-gray">
                      <div className="w-2 h-2 bg-haleo-violet rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What I believe:</h3>
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
                Whether you're buying a plug-and-play template or booking a full custom build, my goal is the same:
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