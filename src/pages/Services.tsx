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
      title: 'Client + Project Operations System',
      subtitle: 'One internal system for delivery workflows, ownership, and recurring updates.',
      description:
        'Built for teams managing multiple clients and timelines at once. Haleo maps your workflow into a single internal operating system so deliverables, ownership, and status stay in one place.',
      features: [
        'Replaces: duplicate spreadsheets, Slack updates, and disconnected PM boards',
        'Helps with: tracking deliverables, accountability, client visibility, and recurring status',
        'Best for: agencies, studios, PR teams, and service businesses',
      ],
      platforms: 'Configured around how your team already runs delivery—not a generic template.',
    },
    {
      icon: <ClipboardList className="h-16 w-16 text-haleo-violet" />,
      title: 'Fulfillment + Task Tracking System',
      subtitle: 'Organize recurring execution work with clear stages, ownership, and reporting.',
      description:
        'Haleo builds fulfillment systems that organize recurring operational work into clear stages with owners, priorities, and visibility—fewer open loops between handoffs.',
      features: [
        'Replaces: ad hoc checklists, manual reminders, and unclear handoffs',
        'Helps with: execution flow, team accountability, and fewer open-loop tasks',
        'Best for: operations teams, service businesses, and delivery-heavy teams',
      ],
      platforms: 'Designed for practical team adoption, not heavyweight process overhead.',
    },
    {
      icon: <BriefcaseBusiness className="h-16 w-16 text-haleo-violet" />,
      title: 'Lead Intake + Sales Pipeline System',
      subtitle: 'Turn inbound lead chaos into a clear, structured pipeline workflow.',
      description:
        'Haleo designs lead-to-close systems that give your team structured intake, ownership, and pipeline movement without bloated CRM overhead.',
      features: [
        'Replaces: manual lead routing, inconsistent follow-up, and fragmented CRM notes',
        'Helps with: lead review, qualification, owner assignment, and clear pipeline movement',
        'Best for: recruiting agencies, service businesses, and client-based teams',
      ],
      platforms: 'Configured to match your intake motion and reporting needs.',
    },
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="What Haleo Builds | Internal Systems for Small Teams"
        description="Haleo builds simple internal systems in 10 days for fast-moving agencies and operational teams that have outgrown spreadsheets."
        keywords="internal operations system, workflow system, agency operations, small team systems, spreadsheet replacement"
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
                Haleo builds simple internal systems for fast-moving agencies, studios, and small operational teams that have outgrown spreadsheets, manual tracking, and duct-taped workflows.
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Built fast because the scope is clear.</h3>
                <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                  Every build follows a focused 10-day scope with clear boundaries, no bloated implementation cycle, and optional add-on modules after delivery.
                </p>
                <p className="text-base lg:text-lg mb-8">
                  If your team is juggling spreadsheets, manual follow-up, and disconnected tools, this is likely a fit.
                </p>
                <Link to="/workflow-review" className="bg-white text-haleo-core px-7 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                  Request a Workflow Review
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
