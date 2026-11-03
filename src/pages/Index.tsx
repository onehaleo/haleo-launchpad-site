import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import StatusTag from '../components/StatusTag';
import { useCmsContent } from '../hooks/useCmsContent';
import { asStringList } from '../lib/cmsYamlLists';

/** A sample from an approved tools list: the kind of document a client receives. */
const SAMPLE_TOOLS: { tool: string; use: string; status: 'approved' | 'review' | 'blocked' }[] = [
  { tool: 'Company AI account', use: 'Drafting and summaries, no client names', status: 'approved' },
  { tool: 'Grammar and spell check', use: 'Internal documents only', status: 'approved' },
  { tool: 'Meeting note recorders', use: 'Pending a vendor review', status: 'review' },
  { tool: 'Free chatbots on personal accounts', use: 'Never with client information', status: 'blocked' },
];

const Index = () => {
  const { content } = useCmsContent();
  if (!content) return null;
  const { home, services } = content;
  const problemPoints = asStringList(home.problem_points);
  const beforePoints = asStringList(home.before_points);
  const afterPoints = asStringList(home.after_points);
  const aboutBullets = asStringList(home.built_from_bullets);
  const scopeBullets = asStringList(home.scope_bullets);
  const fitGood = asStringList(home.who_for_good);
  const fitNot = asStringList(home.who_for_not);

  return (
    <PageTransition>
      <SEOHead
        title="Haleo | Safe AI for small business"
        description="Haleo helps small businesses in the Triangle use AI without putting client information at risk: a written AI policy, the right tools, and a team that knows the rules."
      />
      <Navigation />
      <main className="bg-haleo-surface">
        {/* Hero */}
        <section className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="eyebrow mb-4">Safe AI for small business</p>
              <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-0.015em] text-haleo-ink sm:text-[52px]">
                {home.hero_headline}
              </h1>
              <p className="reading mt-6 max-w-xl text-[19px] leading-[1.6] text-haleo-muted sm:text-[20px]">
                {home.hero_subheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to={home.primary_cta_link} className="btn-primary">
                  {home.primary_cta_text}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {home.secondary_cta_text?.trim() && (
                  <Link to={home.secondary_cta_link} className="btn-secondary">
                    {home.secondary_cta_text}
                  </Link>
                )}
              </div>
              <p className="mt-5 max-w-md text-sm text-haleo-muted">{home.hero_trust_line}</p>
            </div>

            {/* Arch framed sample deliverable */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="arch-top bg-haleo-vault px-6 pb-6 pt-24 sm:px-8 sm:pt-28">
                <div className="rounded-lg bg-white p-5 shadow-[0_1px_2px_rgba(14,59,57,0.08),0_8px_24px_rgba(14,59,57,0.18)]">
                  <div className="mb-3 flex items-baseline justify-between gap-3 border-b border-haleo-hairline pb-3">
                    <p className="text-[15px] font-semibold text-haleo-ink">Approved AI tools</p>
                    <p className="text-xs tabular-nums text-haleo-muted">Sample · v1.0</p>
                  </div>
                  <ul className="divide-y divide-haleo-hairline">
                    {SAMPLE_TOOLS.map((row) => (
                      <li key={row.tool} className="flex items-start justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold text-haleo-ink">{row.tool}</p>
                          <p className="font-text text-[14px] leading-snug text-haleo-muted">{row.use}</p>
                        </div>
                        <StatusTag status={row.status} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-haleo-muted">
                Part of a sample approved tools list, one of the documents every client gets.
              </p>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="border-t border-haleo-hairline bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.problem_section_title}</h2>
            <ul className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
              {problemPoints.map((point) => (
                <li key={point} className="reading border-t border-haleo-hairline pt-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Before and after */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.before_after_title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-haleo-hairline bg-white p-6 sm:p-8">
                <h3 className="mb-4 text-[19px] font-semibold text-haleo-ink">Without written rules</h3>
                <ul className="space-y-3">
                  {beforePoints.map((p) => (
                    <li key={p} className="flex gap-3 font-text text-[17px] leading-snug text-haleo-muted">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-haleo-line" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-haleo-sage p-6 sm:p-8">
                <h3 className="mb-4 text-[19px] font-semibold text-haleo-ink">After working with Haleo</h3>
                <ul className="space-y-3">
                  {afterPoints.map((p) => (
                    <li key={p} className="flex gap-3 font-text text-[17px] leading-snug text-haleo-ink">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-haleo-pine" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-haleo-hairline bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20" id="services">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.services_section_title}</h2>
                <p className="reading mt-3 text-haleo-muted">{home.services_section_intro}</p>
              </div>
              <Link to="/services" className="btn-quiet shrink-0">See full details</Link>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-haleo-hairline bg-haleo-hairline sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.slug} className="flex flex-col bg-white p-6">
                  <h3 className="text-[19px] font-semibold text-haleo-ink">{s.title}</h3>
                  <p className="mt-1 text-[15px] font-semibold text-haleo-pine">{s.price}</p>
                  <p className="mt-3 font-text text-[16px] leading-snug text-haleo-muted">{s.short_description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.scope_section_title}</h2>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {scopeBullets.map((b) => (
                <li key={b} className="border-t border-haleo-hairline pt-4 font-text text-[17px] leading-snug text-haleo-ink">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process: a real sequence, so it is numbered */}
        <section className="border-t border-haleo-hairline bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.process_title}</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {home.process_steps.map((step, i) => (
                <li key={step.title}>
                  <span className="arch-top inline-flex h-10 w-8 items-end justify-center bg-haleo-vault pb-1 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[19px] font-semibold text-haleo-ink">{step.title}</h3>
                  <p className="reading mt-2 text-haleo-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.built_from_heading}</h2>
              <p className="reading mt-5 max-w-2xl text-[18px]">{home.built_from_body}</p>
              <Link to="/about" className="btn-quiet mt-5">More about me</Link>
            </div>
            <ul className="self-start rounded-lg border border-haleo-hairline bg-white p-6">
              {aboutBullets.map((b) => (
                <li key={b} className="border-b border-haleo-hairline py-2.5 text-[15px] text-haleo-ink last:border-0">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fit */}
        <section className="border-t border-haleo-hairline bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[30px] font-bold leading-tight text-haleo-ink sm:text-[34px]">{home.who_for_section_title}</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-[17px] font-semibold text-haleo-approved">{home.who_for_good_heading}</h3>
                <ul className="space-y-3">
                  {fitGood.map((p) => (
                    <li key={p} className="font-text text-[17px] leading-snug text-haleo-ink">{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-[17px] font-semibold text-haleo-muted">{home.who_for_not_heading}</h3>
                <ul className="space-y-3">
                  {fitNot.map((p) => (
                    <li key={p} className="font-text text-[17px] leading-snug text-haleo-muted">{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final call to action */}
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

export default Index;
