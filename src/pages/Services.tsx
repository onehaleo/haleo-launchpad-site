import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Settings, Brain, Database, Wrench, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-16 w-16 text-haleo-violet" />,
      title: "Automation Systems",
      subtitle: "Ditch the daily busywork.",
      description: "Your time is too valuable to waste on repetitive tasks. I design custom automation systems that take work off your plate and make your business run smoother while you sleep.",
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
      description: "Whether you're ready to clone your brain or delegate that client Q&A, I'll build AI agents that actually understand your workflows.",
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
      description: "Not ready to invest in done-for-you? My Notion-based templates are designed for solopreneurs who want clarity, systems, and strategy in one beautiful dashboard.",
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
      description: "That's where I come in. I'll help you design a lightweight operations stack that works exactly how you work — no extra apps, fluff, or overwhelm.",
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
      description: "Whether you need a systems refresh or a Notion co-build session, you'll get my brain on your business (without the full custom price tag).",
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
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed">
              Everything you need to automate your business and reclaim your time
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      {service.icon}
                      <div>
                        <h2 className="text-3xl font-bold text-haleo-ink mb-2">{service.title}</h2>
                        <p className="text-xl font-semibold text-haleo-violet">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-haleo-gray mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-haleo-ink mb-4">What I automate for you:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-haleo-gray">
                              <div className="w-2 h-2 bg-haleo-violet rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.platforms && (
                      <p className="text-haleo-gray mb-6">
                        <span className="font-semibold">Platforms I work with:</span> {service.platforms}
                      </p>
                    )}
                  </div>

                  <div className="bg-gradient-to-br from-haleo-cloud to-purple-50 rounded-2xl p-8">
                    <blockquote className="text-lg text-haleo-ink italic mb-6 leading-relaxed">
                      "{service.testimonial}"
                    </blockquote>
                    
                    <div className="text-center">
                      <p className="text-haleo-gray mb-4">{service.ctaSubtext}</p>
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

          <div className="text-center mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-haleo-ink mb-4">Ready to stop DIYing your backend?</h3>
              <p className="text-xl text-haleo-gray mb-8 leading-relaxed">
                I'll help you clear the clutter and build operations that scale with you — not against you.<br/>
                Book a free consult or shop the templates to get started today.
              </p>
              <button className="gradient-bg text-white px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
                Let's Build Your System
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;