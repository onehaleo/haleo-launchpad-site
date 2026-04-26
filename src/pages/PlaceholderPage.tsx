import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

type PlaceholderPageProps = {
  title: string;
  description: string;
};

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <PageTransition animate={true}>
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 text-center">
              <p className="text-sm font-semibold text-haleo-core mb-3">Demo Placeholder</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-4">{title}</h1>
              <p className="text-haleo-gray mb-8">{description}</p>
              <Link
                to="/workflow-review"
                className="gradient-bg text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-block"
              >
                See How This Would Look For Your Business
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PlaceholderPage;
