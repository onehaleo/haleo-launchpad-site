import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';

const NotFound = () => (
  <PageTransition>
    <SEOHead title="Page not found | Haleo" description="This page doesn't exist. Head back to Haleo." robots="noindex" />
    <Navigation />
    <main className="bg-haleo-surface px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow mb-3">Page not found</p>
        <h1 className="text-[36px] font-bold leading-tight text-haleo-ink sm:text-[42px]">That door doesn't lead anywhere.</h1>
        <p className="reading mt-4 text-haleo-muted">
          The page may have moved when the site was updated. These are the places most people are looking for.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">Go to the home page</Link>
          <Link to="/safety-check" className="btn-secondary">Book a Safety Check</Link>
        </div>
      </div>
    </main>
    <Footer />
  </PageTransition>
);

export default NotFound;
