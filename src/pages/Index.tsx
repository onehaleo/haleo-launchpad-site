
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { useCmsContent } from '../hooks/useCmsContent';

const Index = () => {
  const { content, loading, error } = useCmsContent();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;
  if (!content) return <div>No content available</div>;
  const { home, services } = content;
  const showSecondaryCta = Boolean(home.secondary_cta_text?.trim());

  return (
    <PageTransition animate={true}>
      <SEOHead 
        title="Haleo — Internal systems for fast-moving teams"
        description="Haleo builds simple internal systems for agencies, studios, and small operational teams in 10 days—replacing spreadsheet chaos and duct-taped workflows."
        keywords="internal systems, operations workflow, agency systems, small team operations, workflow review"
      />
      <div className="min-h-screen">
        <Navigation />
        <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="pointer-events-none absolute -top-20 -left-24 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="pointer-events-none absolute top-20 right-0 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink leading-tight">
                  {home.hero_headline}
                </h1>
                <p className="text-base sm:text-xl text-haleo-gray mt-5 sm:mt-6 max-w-3xl mx-auto">
                  {home.hero_subheadline}
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch">
                  <Link to={home.primary_cta_link} className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                    {home.primary_cta_text}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {showSecondaryCta && (
                    <a href={home.secondary_cta_link} className="border-2 border-haleo-core text-haleo-core px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                      {home.secondary_cta_text}
                    </a>
                  )}
                </div>
                <p className="mt-10 text-sm text-haleo-gray">
                  {home.hero_trust_line}
                </p>
              </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-20 bg-white">
          <div className="pointer-events-none absolute -bottom-20 right-8 h-64 w-64 rounded-full bg-violet-100/45 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink mb-8 text-center">{home.problem_section_title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {home.problem_points.map((point) => (
                <div key={point} className="bg-haleo-cloud rounded-xl p-4 text-haleo-gray">{point}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-cloud">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink mb-8 text-center">{home.before_after_title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-4">Before</h3>
                <ul className="space-y-3 text-haleo-gray">
                  {home.before_points.map((item) => (
                    <li key={item} className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-4">After</h3>
                <ul className="space-y-3 text-haleo-gray">
                  {home.after_points.map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-4">{home.services_section_title}</h2>
            <p className="text-haleo-gray text-center max-w-3xl mx-auto mb-10">
              {home.services_section_intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((card) => (
                <div key={card.title} className="bg-haleo-cloud rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-haleo-ink mb-4">{card.title}</h3>
                  <p className="text-sm text-haleo-gray mb-2">{card.short_description}</p>
                  <p className="text-sm text-haleo-gray mb-2"><strong>Replaces:</strong> {card.replaces}</p>
                  <p className="text-sm text-haleo-gray mb-2"><strong>Helps with:</strong> {card.helps_with}</p>
                  <p className="text-sm text-haleo-gray"><strong>Best for:</strong> {card.best_for}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-4">{home.built_from_heading}</h2>
            <p className="text-haleo-gray text-center max-w-3xl mx-auto mb-10">
              {home.built_from_body}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {home.built_from_bullets.map((item) => (
                <div key={item} className="bg-haleo-cloud rounded-xl p-4 text-haleo-gray text-center sm:text-left">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-20 bg-white">
          <div className="pointer-events-none absolute top-8 -right-16 h-56 w-56 rounded-full bg-indigo-100/40 blur-3xl" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-10">{home.process_title}</h2>
            <div className="space-y-5">
              {home.process_steps.map((step, idx) => (
                <div key={step.title} className="rounded-xl border border-purple-100 p-6">
                  <h3 className="text-lg font-semibold text-haleo-ink">{idx + 1}. {step.title}</h3>
                  <p className="text-haleo-gray mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-cloud">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-8">{home.scope_section_title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-haleo-gray">
              {[
                '10-day build timeline',
                'Focused internal systems',
                'No bloated enterprise implementation',
                'No endless consulting',
                'Clear project boundaries',
                'Optional add-on modules after delivery',
              ].map((item) => (
                <div key={item} className="bg-white rounded-xl p-5">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-10">Who it is for</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-haleo-cloud rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-haleo-ink mb-4">Good fit</h3>
                <ul className="space-y-2 text-haleo-gray">
                  {[
                    'Teams under 50 people',
                    'Agencies, studios, and operational businesses',
                    'Currently using spreadsheets or manual workflows',
                    'Fast-moving processes',
                    'Need visibility, accountability, and speed',
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-haleo-cloud rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-haleo-ink mb-4">Not a fit</h3>
                <ul className="space-y-2 text-haleo-gray">
                  {[
                    'Enterprise software replacement',
                    'Complex custom SaaS',
                    'Unclear or constantly changing workflows',
                    'Teams wanting open-ended development support',
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{home.final_cta_headline}</h2>
            <p className="text-gray-300 mb-8 px-2">{home.final_cta_subheadline}</p>
            <Link to={home.final_cta_link} className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              {home.final_cta_text}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
