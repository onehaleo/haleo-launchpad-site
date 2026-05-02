import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  const beliefs = [
    'Systems should make work clearer, not heavier',
    'Small teams deserve operational visibility without enterprise software',
    'The best system is the one people actually use',
    'Fast builds require clear scope',
    'Tools should support the workflow, not become the workflow',
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead
        title="About Haleo | Systems studio"
        description="Haleo is a small systems studio that builds practical internal tools for growing teams—replacing spreadsheet chaos with simple operating systems."
        keywords="Haleo, internal systems, operations, workflow systems"
      />
      <div className="min-h-screen">
        <Navigation />

        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-haleo-ink mb-8 text-center leading-tight">
              About Haleo
            </h1>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm mb-10">
              <div className="space-y-5 text-haleo-gray text-base sm:text-lg leading-relaxed">
                <p>
                  Haleo is a small systems studio that builds practical internal tools for growing teams. We help businesses replace scattered spreadsheets, manual follow-up, and unclear workflows with simple operating systems that are easier to run.
                </p>
                <p>
                  Our focus is speed, clarity, and adoption. Each build starts with the workflow, not the tool, so the final system fits how the team actually works.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold text-haleo-ink mb-6">What we believe</h2>
              <ul className="space-y-3">
                {beliefs.map((belief, index) => (
                  <li key={index} className="flex items-start text-haleo-gray">
                    <CheckCircle className="h-6 w-6 text-haleo-violet mt-0.5 mr-3 shrink-0" />
                    {belief}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-haleo-ink rounded-2xl p-7 sm:p-10 text-white max-w-4xl mx-auto">
                <p className="text-gray-300 mb-7">
                  Share your current workflow and bottlenecks—we will map what a focused internal system could look like for your team.
                </p>
                <Link
                  to="/workflow-review"
                  className="gradient-bg text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit"
                >
                  Request a Workflow Review
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
