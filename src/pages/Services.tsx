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
      title: "Client + Project Operations System",
      subtitle: "One system for delivery, ownership, and visibility.",
      description: "Built for teams managing multiple clients and timelines at once. Haleo maps your workflow into a clean internal operating system so deadlines, handoffs, and status are always visible.",
      features: [
        "What it replaces: scattered project sheets, Slack check-ins, and disconnected PM tools",
        "What it helps with: stage tracking, ownership, approvals, and account health",
        "Best for: marketing agencies, PR firms, and creative studios"
      ],
      platforms: "Built around your current stack, then streamlined into a single source of truth.",
      testimonial: "We finally stopped asking who owns what. The system made responsibilities and status obvious.",
      ctaText: "See How This Would Look For Your Business",
      ctaSubtext: "Start with a workflow review"
    },
    {
      icon: <BriefcaseBusiness className="h-16 w-16 text-haleo-violet" />,
      title: "Lead Intake + Sales Pipeline System",
      subtitle: "Turn inbound chaos into a structured revenue workflow.",
      description: "Haleo designs lead-to-close systems that give your team a clear qualification flow, ownership handoff, and pipeline visibility without bloated CRM overhead.",
      features: [
        "What it replaces: manual lead routing, duplicate follow-ups, and unstructured notes",
        "What it helps with: intake standardization, assignment logic, and deal stage clarity",
        "Best for: recruiting agencies, service businesses, and client-based teams"
      ],
      platforms: "Configured to match your sales motion and reporting needs.",
      testimonial: "The same lead no longer gets touched by three people in three different tools.",
      ctaText: "See How This Would Look For Your Business",
      ctaSubtext: "Map your current pipeline"
    },
    {
      icon: <ClipboardList className="h-16 w-16 text-haleo-violet" />,
      title: "Fulfillment + Task Tracking System",
      subtitle: "Cleaner handoffs. Fewer dropped details. Faster delivery.",
      description: "Haleo builds fulfillment systems that organize recurring operational work into clear stages with owners, priorities, and real-time visibility.",
      features: [
        "What it replaces: ad-hoc reminders, spreadsheet trackers, and reactive execution",
        "What it helps with: delivery flow, team accountability, and bottleneck reduction",
        "Best for: construction offices, operations teams, and execution-heavy businesses"
      ],
      platforms: "Designed for practical team adoption, not enterprise process overhead.",
      testimonial: "Handoffs became clean, and reporting stopped taking half a day.",
      ctaText: "See How This Would Look For Your Business",
      ctaSubtext: "Review your current fulfillment flow"
    }
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="What Haleo Builds | Internal Systems for Small Teams"
        description="Haleo builds custom internal systems in 10 days for fast-moving agencies and operational businesses that have outgrown spreadsheets."
        keywords="internal operations system, workflow system, agency operations, small team systems, spreadsheet replacement"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        
        <div className="pt-20 sm:pt-24 pb-14 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink mb-6 leading-tight">
                What <span className="gradient-text">Haleo Builds</span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
                Custom internal systems for agencies and operational teams under 20 people that need cleaner execution, visibility, and accountability.
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
                          <h4 className="font-semibold text-haleo-ink mb-4 text-center sm:text-left">System fit details:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-haleo-gray text-sm sm:text-base">
                                <div className="w-2 h-2 bg-haleo-violet rounded-full mt-2 mr-4 flex-shrink-0"></div>
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

                    <div className="bg-haleo-cloud rounded-2xl p-6 lg:p-8">
                      <blockquote className="text-lg italic text-haleo-ink mb-6 text-center">
                        "{service.testimonial}"
                      </blockquote>
                      
                      <div className="text-center">
                        <p className="text-haleo-gray mb-4">👉 {service.ctaSubtext}</p>
                        <Link to="/workflow-review" className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                          {service.ctaText}
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
                  Every build follows a focused 10-day scope with clear boundaries, no bloated implementation cycle, and optional add-on modules after launch.
                </p>
                <p className="text-base lg:text-lg mb-8">
                  If your team is juggling spreadsheets, manual follow-ups, and disconnected tools, this is likely a fit.
                </p>
                <Link to="/workflow-review" className="bg-white text-haleo-core px-7 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg w-full sm:w-fit">
                  Start With a Workflow Review
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