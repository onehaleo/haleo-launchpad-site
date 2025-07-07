
import React from 'react';
import { Heart, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-haleo-cloud to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-haleo-ink mb-6">
            About <span className="gradient-text">Haleo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-haleo-core to-haleo-violet rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-2xl font-bold text-haleo-ink">Hi, I'm Alexis 👋</h3>
                <p className="text-haleo-gray">Founder & Automation Architect</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-haleo-violet mt-1 flex-shrink-0" />
                  <p className="text-haleo-gray">Passionate about helping solopreneurs reclaim their time through smart automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-haleo-violet mt-1 flex-shrink-0" />
                  <p className="text-haleo-gray">Focused on clarity over complexity, with solutions that actually work</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-haleo-violet mt-1 flex-shrink-0" />
                  <p className="text-haleo-gray">Committed to building systems that scale with your business growth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-6">
                Haleo is a systems studio for solo founders. Whether you're running a creative business, coaching brand, or just starting out — we build tools that give you your time back.
              </p>
              
              <p className="text-lg md:text-xl text-haleo-gray leading-relaxed mb-8">
                Founded by a one-person team (hi, I'm Alexis 👋), Haleo was born from a love of automation and a refusal to hustle 24/7.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold gradient-text mb-4 text-center">
                Empowering solo businesses with smart systems.
              </h4>
              <p className="text-haleo-gray text-center">
                Join the movement of entrepreneurs who choose efficiency over exhaustion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-haleo-core mb-2">2+</div>
                <div className="text-haleo-gray">Years Building</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-haleo-core mb-2">500+</div>
                <div className="text-haleo-gray">Hours Automated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
