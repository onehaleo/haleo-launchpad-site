import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const beliefs = [
    "Operations should be clear before they are automated",
    "A small team can run with enterprise-level clarity without enterprise complexity",
    "Systems should reduce manager overhead, not add process theater",
    "Execution speed improves when ownership and workflow stages are visible"
  ];

  const whatIDo = [
    "Audit your current spreadsheets, tools, and workflow bottlenecks",
    "Map your recurring operational process into a clear internal system structure",
    "Build and configure the system in 10 days with practical team-ready workflows",
    "Deliver a guided handoff so your team can adopt it quickly"
  ];

  return (
    <PageTransition animate={false}>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink mb-6 leading-tight">
                Hey, I'm <span className="gradient-text">Alexis</span>
              </h1>
              <p className="text-lg sm:text-xl text-haleo-gray max-w-3xl mx-auto leading-relaxed">
                I built Haleo to help fast-moving small teams replace spreadsheet sprawl with a clean internal operating system they can actually run.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm mb-12">
              <div className="space-y-5 text-haleo-gray">
                <p className="text-base sm:text-lg leading-relaxed">
                  Before Haleo, I worked in automation and cloud architecture where operational clarity was non-negotiable.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  I kept seeing small teams with strong delivery and weak systems: scattered spreadsheets, unclear ownership, and constant status chasing.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Haleo exists to fix that with focused internal systems built in 10 days for agencies and operational businesses under 20 people.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What I do at Haleo:</h3>
                <ul className="space-y-3">
                  {whatIDo.map((item, index) => (
                    <li key={index} className="flex items-start text-haleo-gray">
                      <div className="w-2 h-2 bg-haleo-violet rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">What I believe:</h3>
                <ul className="space-y-3">
                  {beliefs.map((belief, index) => (
                    <li key={index} className="flex items-start text-haleo-gray">
                      <CheckCircle className="h-6 w-6 text-haleo-violet mt-0.5 mr-3 flex-shrink-0" />
                      {belief}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-haleo-ink rounded-2xl p-7 sm:p-10 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Want to see how this would look in your business?
                </h3>
                <p className="text-gray-300 mb-7">
                  Send your current workflow and I will map what your internal system can become.
                </p>
                <Link to="/workflow-review" className="gradient-bg text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                  Start With a Workflow Review
                  <ArrowRight className="h-5 w-5" />
                </Link>
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