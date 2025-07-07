
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#templates" className="text-gray-300 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="https://onehaleo.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get automation tips and new templates first.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-haleo-gray text-white px-4 py-2 rounded-lg flex-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-haleo-violet"
              />
              <button className="gradient-bg px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-haleo-gray mt-12 pt-8 text-center">
          <p className="text-gray-400">© Haleo LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
