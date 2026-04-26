import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { Timer, Target, Compass, ArrowRight } from 'lucide-react';

const WhyHaleo = () => {
  const differentiators = [
    {
      icon: <Timer className="h-16 w-16 text-haleo-violet" />,
      title: "Built in 10 days",
      description: "Haleo is designed for fast-moving teams that need operational relief now, not after a multi-month implementation cycle."
    },
    {
      icon: <Target className="h-16 w-16 text-haleo-violet" />,
      title: "Focused internal systems",
      description: "This is not generic consulting and not enterprise software replacement. Haleo scopes tightly around the workflows your team relies on every week."
    },
    {
      icon: <Compass className="h-16 w-16 text-haleo-violet" />,
      title: "Operational clarity over tool complexity",
      description: "Haleo removes spreadsheet sprawl and scattered updates by creating one practical operating system your team can actually use day to day."
    }
  ];

  return (
    <PageTransition animate={false}>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-20 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
                Why <span className="gradient-text">Haleo</span>
              </h1>
              <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed mb-8">
                Your team is moving fast.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-haleo-ink max-w-4xl mx-auto leading-tight">
                Your systems should not be the bottleneck.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-6">
                  Most small teams under 20 people are operating across spreadsheets, chat threads, and disconnected tools.
                </p>
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-6">
                  The issue usually is not effort. The issue is that the system never got rebuilt as the business grew.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-haleo-ink">
                  Haleo fixes that with a custom internal system in 10 days.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-haleo-ink text-center mb-12">
                What makes this approach <span className="gradient-text">different</span>?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {differentiators.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center gap-4">
                      {item.icon}
                      <h3 className="text-xl font-bold text-haleo-ink">{item.title}</h3>
                      <p className="text-haleo-gray leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-3xl p-8 md:p-12 text-white text-center mb-16">
              <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                "We stopped spending hours chasing status updates across spreadsheets and chat. Now everyone works from one system."
              </blockquote>
            </div>

            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-haleo-ink mb-4">Want to see how this would look for your business?</h3>
                <p className="text-xl text-haleo-gray mb-8">
                  Send your current workflow and we will map what your internal system could become.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/workflow-review"
                    className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
                  >
                    Start With a Workflow Review
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to="/demos/marketing-agency"
                    className="border-2 border-haleo-core text-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default WhyHaleo;