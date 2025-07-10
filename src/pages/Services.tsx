import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Settings, Brain, Database, Wrench, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-16 w-16 text-haleo-violet" />,
      title: "Automation Systems",
      subtitle: "Ditch the daily busywork.",
      description: "Your time is too valuable to waste on repetitive tasks. Haleo designs custom automation systems that take work off your plate and make your business run smoother while you sleep.",
      features: [
        "Lead capture to CRM (yep, even without you touching a form)",
        "Proposal, contract, and invoice workflows", 
        "Client onboarding flows",
        "Payment + follow-up automations",
        "Internal ops (task creation, file sorting, reminders)"
      ],
      platforms: "Make, Zapier, Notion, Wave, Airtable, and more.",
      testimonial: "I didn't realize how much time I was losing until Haleo automated my entire intake system.",
      ctaText: "Book a Free Audit",
      ctaSubtext: "Let's map out your automation"
    },
    {
      icon: <Brain className="h-16 w-16 text-haleo-violet" />,
      title: "AI-Powered Systems", 
      subtitle: "AI is your assistant now — not your enemy.",
      description: "Whether you're ready to clone your brain or delegate that client Q&A, Haleo builds AI agents that actually understand your workflows.",
      features: [
        "AI project manager",
        "Personalized client assistant",
        "Content researcher & rewriter", 
        "Internal ops buddy (trackers, reports, replies)"
      ],
      platforms: "Ethical. Private. Built to protect your brand voice and client data.",
      testimonial: "I thought AI would be too complex. Haleo made it feel like magic — but it's built just for me.",
      ctaText: "Book Your AI Build",
      ctaSubtext: "Get your custom AI built"
    },
    {
      icon: <Database className="h-16 w-16 text-haleo-violet" />,
      title: "Templates (But Make Them Smart)",
      subtitle: "Plug-and-play systems that feel custom.",
      description: "Not ready to invest in done-for-you? Haleo's Notion-based templates are designed for solopreneurs who want clarity, systems, and strategy in one beautiful dashboard.",
      features: [
        "Solopreneur CRM (client, task & content tracking)",
        "HQ Notion Command Center",
        "Mini systems (content planner, engagement tracker)"
      ],
      platforms: "One-time buy. Lifetime use.",
      testimonial: "This CRM gave me back 5+ hours a week. Seriously.",
      ctaText: "Get the Templates",
      ctaSubtext: "Browse the shop"
    },
    {
      icon: <Wrench className="h-16 w-16 text-haleo-violet" />,
      title: "Custom Systems",
      subtitle: "Your business doesn't fit a template. Good.",
      description: "That's where Haleo comes in. Haleo helps you design a lightweight operations stack that works exactly how you work — no extra apps, fluff, or overwhelm.",
      features: [
        "A fully mapped client journey",
        "Tools + tech to support your workflow",
        "Custom dashboards or automations",
        "Training videos (so you're never guessing)"
      ],
      platforms: "",
      testimonial: "I finally stopped duct-taping apps together. Haleo gave me a system I actually want to use.",
      ctaText: "Book Your Call",
      ctaSubtext: "Start with a Systems Strategy Call"
    },
    {
      icon: <Calendar className="h-16 w-16 text-haleo-violet" />,
      title: "Done-With-You Intensives",
      subtitle: "Build it. Fix it. Upgrade it — together.",
      description: "Whether you need a systems refresh or a Notion co-build session, you'll get Haleo's expertise on your business (without the full custom price tag).",
      features: [
        "90-minute power sessions",
        "1-day intensives",
        "Audit + fix mini projects"
      ],
      platforms: "",
      testimonial: "It felt like I had a cofounder for a day. Game changer.",
      ctaText: "Book a Working Session",
      ctaSubtext: "Let's get to work"
    }
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="Business Automation Services | AI Agents & Custom Systems | Haleo"
        description="Professional automation services for solopreneurs. Custom AI agents, workflow automation, CRM systems, and done-with-you intensives. Start automating your business operations today."
        keywords="business automation services, AI agents, custom automation systems, solopreneur services, workflow automation, CRM automation, business process automation"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        
        <div className="pt-20 sm:pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold text-haleo-ink mb-6 leading-tight">
                Business Automation <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
                Custom automation systems, AI agents, and workflow solutions designed specifically for growing solopreneurs and small businesses
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
                          <h4 className="font-semibold text-haleo-ink mb-4 text-center sm:text-left">What Haleo automates for you:</h4>
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
                            <strong>Platforms Haleo works with:</strong> {service.platforms}
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
                        <button className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg">
                          {service.ctaText}
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-3xl p-8 lg:p-12 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to stop DIYing your backend?</h3>
                <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                  Haleo helps you clear the clutter and build operations that scale with you — not against you.
                </p>
                <p className="text-base lg:text-lg mb-8">
                  Book a free consult or shop the templates to get started today.
                </p>
                <button className="bg-white text-haleo-core px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg">
                  Let's Build Your System
                  <ArrowRight className="h-6 w-6" />
                </button>
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