
import React from 'react';
import { Instagram, Youtube, Linkedin, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-haleo-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/8bf9a199-52de-4152-9751-1a25c3bd7e0d.png" 
              alt="Haleo"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Automation that works while you don't. Simple, scalable systems for solopreneurs who value their time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-haleo-violet transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-haleo-violet transition-colors">
                <Music className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-haleo-violet transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-haleo-violet transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Automation Systems</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="/templates" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Custom Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/why-haleo" className="text-gray-300 hover:text-white transition-colors">Why Haleo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & License</a></li>
              <li><a href="mailto:hello@onehaleo.com" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Get automation tips and new templates first.</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-haleo-gray text-white px-3 py-2 rounded-lg flex-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-haleo-violet text-sm"
                />
                <button className="gradient-bg px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-haleo-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Haleo LLC. All rights reserved.</p>
            <p className="text-gray-400 text-sm">By purchasing templates, you agree to our license terms.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
