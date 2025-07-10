import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const Templates = () => {

  const templates = [
    {
      title: "Solopreneur CRM",
      description: "Your entire client experience in one intuitive dashboard.",
      price: "$47",
      priceNote: "(launch price)",
      features: [
        "Client database",
        "Engagement pipeline", 
        "Task tracking with priority filters",
        "Tag-based content view (emails, meetings, calls)",
        "Built-in dashboard navigation",
        "Fully customizable and mobile-ready"
      ],
      perfectFor: "service providers, coaches, freelancers, and consultants",
      testimonial: "This saved me 5+ hours a week. I finally feel like I'm running a business, not chasing one.",
      link: "https://onehaleo.gumroad.com/l/solopreneur-crm",
      featured: true
    },
    {
      title: "Notion HQ Dashboard", 
      description: "Your business brain, all in one place.",
      price: "$29",
      features: [
        "Daily dashboard",
        "Habit & energy tracker",
        "Business ops + metrics tracker", 
        "Notes, docs, and planning tools",
        "Clean, calming layout for solopreneur sanity"
      ],
      perfectFor: "founders who need structure without overwhelm",
      link: "https://onehaleo.gumroad.com"
    },
    {
      title: "Content Planner Mini-System",
      description: "Stop losing your best ideas. Start showing up consistently.",
      price: "$17", 
      features: [
        "Monthly content calendar",
        "Platform tracker (IG, TikTok, Email, etc.)",
        "Idea bank with tags + visibility status",
        "Hashtag library",
        "Optional Make.com scheduling flow (instructions included)"
      ],
      perfectFor: "personal brands, creators, and small teams",
      link: "https://onehaleo.gumroad.com"
    },
    {
      title: "AI Client Q&A Assistant",
      description: "Smart client support that understands your business.",
      price: "Coming Soon",
      features: [
        "Custom training on your business",
        "Brand voice preservation",
        "Auto responses to common questions",
        "Private & secure data handling"
      ],
      perfectFor: "service providers with frequent client questions",
      link: "#",
      comingSoon: true
    }
  ];

  const templateIncludes = [
    "Lifetime access",
    "One-click Notion duplication", 
    "Instructions + onboarding notes",
    "Clean, minimalist design",
    "Built with real business strategy"
  ];

  const comingSoon = [
    "Ops & Inventory Tracker",
    "Revenue + Expense Mini-Dashboard"
  ];

  return (
    <PageTransition animate={false}>
      <SEOHead 
        title="Business Automation Templates | Notion CRM & Workflow Systems | Haleo"
        description="Ready-to-use Notion templates for solopreneurs. Get our CRM system, content planner, AI assistants, and business dashboards. One-time purchase, lifetime access."
        keywords="notion templates, business templates, solopreneur CRM, automation templates, notion systems, business dashboards, content planning templates"
      />
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-20 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold text-haleo-ink mb-6 leading-tight">
                <span className="gradient-text">Templates</span>
              </h1>
              <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed mb-8">
                Plug-and-play systems for solopreneurs who want clarity without the chaos.
              </p>
              <p className="text-lg text-haleo-gray max-w-3xl mx-auto leading-relaxed mb-6">
                You've got clients to serve, content to post, and a business to grow — you don't have time to start from scratch every time you need a process.
              </p>
              <p className="text-lg text-haleo-gray max-w-3xl mx-auto leading-relaxed">
                That's why I built these Notion templates: Clean, powerful systems that help you stay organized, deliver faster, and actually enjoy your backend.
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-haleo-core">
                  One-time buy. Instant delivery. Lifetime use.
                </p>
              </div>
            </div>

            {/* Template Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {templates.map((template, index) => (
                <Card key={index} className={`relative bg-white border border-gray-100 hover:border-haleo-violet hover:ring-2 hover:ring-haleo-violet/20 transition-all duration-300 group flex flex-col h-full ${template.comingSoon ? 'opacity-75' : 'hover:scale-[1.02] hover:shadow-xl'}`}>
                  {template.featured && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-haleo-core to-haleo-violet text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="p-4 pb-2 flex-shrink-0">
                    <CardTitle className="text-lg font-bold text-haleo-ink mb-1">{template.title}</CardTitle>
                    <div className="text-2xl font-bold text-haleo-core mb-2">
                      {template.price}
                      {template.priceNote && (
                        <span className="text-xs text-haleo-gray ml-2 font-normal">{template.priceNote}</span>
                      )}
                    </div>
                    <CardDescription className="text-haleo-gray text-sm leading-relaxed">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 flex flex-col flex-1">
                    <div className="flex-1 space-y-3">
                      <ul className="space-y-1.5">
                        {template.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-haleo-gray">
                            <CheckCircle className="h-3 w-3 text-haleo-violet mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-haleo-cloud/50 rounded-lg p-2">
                        <span className="text-xs font-semibold text-haleo-ink">Perfect for: </span>
                        <span className="text-xs text-haleo-gray">{template.perfectFor}</span>
                      </div>
                      
                      {template.testimonial && (
                        <blockquote className="text-xs text-haleo-ink italic bg-gradient-to-r from-haleo-violet/5 to-transparent border-l-2 border-haleo-violet pl-3 py-2 rounded-r-lg">
                          "{template.testimonial}"
                        </blockquote>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-4 flex-shrink-0">
                      {template.comingSoon ? (
                        <button disabled className="w-full bg-gray-200 text-gray-500 px-4 py-2.5 rounded-lg text-sm font-medium">
                          Coming Soon
                        </button>
                      ) : (
                        <a 
                          href={template.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full gradient-bg text-white px-4 py-2.5 rounded-lg hover:opacity-90 transition-all duration-300 text-center text-sm font-semibold"
                        >
                          Get Template
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Template Includes */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
              <h3 className="text-2xl font-bold text-haleo-ink text-center mb-8">Every Template Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templateIncludes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-haleo-violet flex-shrink-0" />
                    <span className="text-haleo-gray">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-haleo-ink mb-4">Optional upgrades available:</h4>
                <div className="space-y-2 text-haleo-gray">
                  <p>→ Need it customized? Book a working session</p>
                  <p>→ Want it automated? Ask about bundle & build deals</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-haleo-ink mb-6">Coming Soon</h3>
                <ul className="space-y-4">
                  {comingSoon.map((item, index) => (
                    <li key={index} className="flex items-center text-haleo-gray">
                      <div className="w-2 h-2 bg-haleo-violet rounded-full mr-4"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 bg-haleo-cloud rounded-xl p-6">
                  <p className="text-haleo-ink font-semibold mb-4">Want early access + launch discounts?</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haleo-violet transition-all duration-300 min-w-0"
                    />
                    <button className="gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                      <Mail className="h-4 w-4" />
                      Join
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Need something custom?</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  If your workflow doesn't fit a template — good.<br/>
                  Let's build something that actually works for you.
                </p>
                <button className="bg-white text-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg">
                  Book a Systems Call
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

export default Templates;