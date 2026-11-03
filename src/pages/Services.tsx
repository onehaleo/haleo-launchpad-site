import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { useCmsContent } from '../hooks/useCmsContent';
import { asStringList } from '../lib/cmsYamlLists';

const Services = () => {
  const { content } = useCmsContent();
  if (!content) return null;
  const { services, home } = content;

  return (
    <PageTransition>
      <SEOHead
        title="Services | Haleo"
        description="A free AI Safety Check, a fixed price Safe AI Starter, safe automation builds, and ongoing support for small businesses that want to use AI without risking client information."
      />
      <Navigation />
      <main className="bg-haleo-surface">
        <section className="px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-3">Services</p>
            <h1 className="max-w-3xl text-[38px] font-bold leading-[1.1] text-haleo-ink sm:text-[46px]">
              Start small, and only pay for what you need.
            </h1>
            <p className="reading mt-5 max-w-2xl text-[19px] text-haleo-muted">{home.services_section_intro}</p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl divide-y divide-haleo-hairline rounded-lg border border-haleo-hairline bg-white">
            {services.map((s, i) => {
              const features = asStringList(s.features);
              const isFirst = i === 0;
              return (
                <article key={s.slug} id={s.slug} className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <h2 className="text-[26px] font-bold leading-tight text-haleo-ink">{s.title}</h2>
                    <p className="mt-2 text-[17px] font-semibold text-haleo-pine">{s.price}</p>
                    {s.timeline && <p className="mt-1 text-[15px] text-haleo-muted">{s.timeline}</p>}
                    <p className="reading mt-5">{s.short_description}</p>
                    <p className="mt-4 text-[15px] text-haleo-muted">
                      <span className="font-semibold text-haleo-ink">Best for: </span>
                      {s.best_for}
                    </p>
                    {isFirst && (
                      <Link to="/safety-check" className="btn-primary mt-6">
                        Book a Safety Check
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                  <div className="rounded-lg bg-haleo-surface p-6">
                    <h3 className="mb-3 text-[15px] font-semibold text-haleo-ink">What's included</h3>
                    <ul className="space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex gap-3 font-text text-[16px] leading-snug text-haleo-ink">
                          <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-haleo-pine" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-6xl text-sm text-haleo-muted">
            Prices are starting points. You'll get a fixed price in writing before any work begins. Haleo provides operational guidance, not legal advice.
          </p>
        </section>

        <section className="bg-haleo-sage px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-[28px] font-bold leading-tight text-haleo-ink sm:text-[32px]">{home.final_cta_headline}</h2>
              <p className="reading mt-2 text-haleo-muted">{home.final_cta_subheadline}</p>
            </div>
            <Link to={home.final_cta_link} className="btn-primary shrink-0">
              {home.final_cta_text}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Services;
