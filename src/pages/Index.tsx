
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyHaleoSection from '../components/WhyHaleoSection';
import FeaturedTemplateSection from '../components/FeaturedTemplateSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyHaleoSection />
      <FeaturedTemplateSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
