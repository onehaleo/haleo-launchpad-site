import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Workflow, BriefcaseBusiness, ClipboardList } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Workflow className="h-16 w-16 text-haleo-violet" />,
      title: 'Workflow & Process Automation',
      subtitle: 'Replace manual, repetitive work with systems that run themselves.',
      description:
        'We replace manual, spreadsheet-driven processes with automated systems that run on real data. Your team gets hours back every week, fewer errors, and a process that does not depend on someone remembering to do it.',
      features: [
        'Replaces: manual data entry, copy-paste workflows, spreadsheet tracking',
        'Helps with: saving time, reducing errors, creating repeatable processes',
        'Best for: small operational teams with manual-heavy workflows',
      ],
      platforms: 'Built with n8n, Make.com, Python, or REST APIs depending on your stack.',
    },
    {
      icon: <ClipboardList className="h-16 w-16 text-haleo-violet" />,
      title: 'Custom Web App Development',
      subtitle: 'One tool built for how your team actually works.',
      description:
        'We build internal tools and multi-user apps for teams duct-taping together three SaaS tools that still do not quite work. One custom system, one flat fee, no monthly subscriptions, no paying for seats you do not use.',
      features: [
        'Replaces: SaaS subscription stacks, frankensteined tool combinations',
        'Helps with: consolidating tools, eliminating recurring costs, building something that fits',
        'Best for: teams paying monthly for software that still does not solve the problem',
      ],
      platforms: 'Built with React, Node.js, and Python. You own the codebase outright.',
    },
    {
      icon: <BriefcaseBusiness className="h-16 w-16 text-haleo-violet" />,
      title: 'Website Builds',
      subtitle: 'Clean, fast, and free to host forever.',
      description:
        'Clean, fast websites for service businesses that need a professional presence without ongoing hosting costs. For static sites, we host on GitHub Pages — free forever, no Squarespace bill, no Webflow subscription.',
      features: [
        'Replaces: Squarespace, Webflow, Wix, and other subscription site builders',
        'Helps with: professional presence, eliminating monthly hosting costs',
        'Best for: service businesses that want to own their site outright',
      ],
      platforms: 'Built with HTML/CSS/JS or React. GitHub Pages hosting included at no cost.',
    },
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="What Haleo Builds | Workflow Automation & Custom Tools"
        description="Workflow automation, custom web apps, and website builds for small operational teams — flat fee, no subscriptions, you own everything."
        keywords="workflow automation, custom web app, website build, internal tools, process automation, no subscription"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        
        <div className="pt-20 sm:pt-24 pb-14 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink mb-6 leading-tight">
                What <span className="gradient-text">Haleo builds</span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
                Haleo builds workflow automations, custom internal tools, and websites for small operational teams — for a flat fee, with no ongoing subscription costs.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 text-center sm:text-left">
                        {service.icon}
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink mb-2">{service.title}</h2>
                          <p className="text-lg sm:text-xl font-semibold text-haleo-violet">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-base sm:text-lg text-haleo-gray mb-8 leading-relaxed text-center sm:text-left">
                        {service.description}
                      </p>

                      {service.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-haleo-ink mb-4 text-center sm:text-left">System fit details</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-haleo-gray text-sm sm:text-base">
                                <div className="w-2 h-2 bg-haleo-violet rounded-full mt-2 mr-4 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.platforms && (
                        <div className="mb-6">
                          <p className="text-sm text-haleo-gray text-center sm:text-left">
                            <strong>Implementation note:</strong> {service.platforms}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-haleo-cloud rounded-2xl p-6 lg:p-8 flex flex-col justify-center min-h-[200px]">
                      <p className="text-haleo-gray text-center mb-6 text-sm sm:text-base">
                        If this matches how your team operates today, the next step is a structured workflow review.
                      </p>
                      <div className="text-center">
                        <Link to="/workflow-review" className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                          Request a Workflow Review
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-3xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Ready to stop doing it manually?</h3>
                <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                  Let's talk about what's broken and figure out what to build. Flat fee, no subscriptions, you own everything.
                </p>
                <Link to="#contact" className="bg-white text-haleo-core px-7 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                  Book a free 30-minute call
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
