import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { Brain, Shield, Users, MessageCircle, ArrowRight } from 'lucide-react';

const WhyHaleo = () => {
  const differentiators = [
    {
      icon: <Brain className="h-16 w-16 text-haleo-violet" />,
      title: "Strategy-first builds",
      description: "I don't just automate tasks. I design systems around your unique workflows, goals, and capacity. Whether you're a visual thinker, a list lover, or somewhere in between — your system will match the way you work."
    },
    {
      icon: <Shield className="h-16 w-16 text-haleo-violet" />,
      title: "Data-secure by design", 
      description: "No shady scraping. No mystery automations. I use trusted tools like Make, Notion, and Wave — and build everything with ethical AI principles and private data handling in mind. Your systems stay yours."
    },
    {
      icon: <Users className="h-16 w-16 text-haleo-violet" />,
      title: "Built for solopreneurs",
      description: "I don't speak corporate. I speak \"one-person business doing big things.\" That means every automation, dashboard, or AI agent I build is lightweight, scalable, and totally manageable without a team."
    },
    {
      icon: <MessageCircle className="h-16 w-16 text-haleo-violet" />,
      title: "No jargon. No fluff.",
      description: "I believe in clear systems, clean builds, and explanations you don't need to Google. Whether we're building together or you're buying a plug-and-play template, you'll always know exactly how it works."
    }
  ];

  return (
    <PageTransition animate={false}>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-20 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-haleo-ink mb-6 leading-tight">
                Why <span className="gradient-text">Haleo</span>
              </h1>
              <p className="text-xl md:text-2xl text-haleo-gray max-w-4xl mx-auto leading-relaxed mb-8">
                You don't need more apps.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-haleo-ink max-w-4xl mx-auto leading-tight">
                You need a system that thinks like you do.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-6">
                  Most solopreneurs are running their businesses on a patchwork of tools, reminders, and vibes.
                </p>
                <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-6">
                  You're not disorganized — your systems just haven't caught up with your growth.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-haleo-ink">
                  That's where I come in.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-haleo-ink text-center mb-12">
                What makes <span className="gradient-text">Haleo</span> different?
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {differentiators.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-haleo-ink mb-4">{item.title}</h3>
                        <p className="text-haleo-gray leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-haleo-core to-haleo-violet rounded-3xl p-8 md:p-12 text-white text-center mb-16">
              <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                "Working with Haleo gave me structure without the stress. I finally have systems that feel like they were built for me — because they were."
              </blockquote>
            </div>

            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-haleo-ink mb-4">Solopreneurs deserve powerful systems, too.</h3>
                <p className="text-xl text-haleo-gray mb-8">
                  Let's build the backend your business actually needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/services"
                    className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
                  >
                    See Services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to="/templates"
                    className="border-2 border-haleo-core text-haleo-core px-8 py-4 rounded-full text-lg font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300"
                  >
                    Shop Templates
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