import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { resolveAssetUrl } from '../components/Navigation';
import { useCmsContent } from '../hooks/useCmsContent';
import { asStringList } from '../lib/cmsYamlLists';

const About = () => {
  const { content } = useCmsContent();
  if (!content) return null;
  const { home } = content;
  const background = asStringList(home.built_from_bullets);

  return (
    <PageTransition>
      <SEOHead
        title="About | Haleo"
        description="Haleo is based in Durham, North Carolina, and helps small businesses use AI safely, drawing on a background in cybersecurity and software."
      />
      <Navigation />
      <main className="bg-haleo-surface">
        <section className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="eyebrow mb-3">About</p>
              <h1 className="text-[38px] font-bold leading-[1.1] text-haleo-ink sm:text-[46px]">
                Hi, I'm the founder of Haleo.
              </h1>
              <div className="reading mt-8 max-w-2xl space-y-5 text-[18px]">
                <p>
                  I've spent five years at a large consulting firm, moving from software engineering to strategy work and then to cybersecurity. Most of my days involve vulnerability research and building the tools a security team relies on.
                </p>
                <p>
                  The thing I'm best at is finding the slow, manual part of a process and fixing it. On one project I helped cut a task that took six people two weeks down to two people and three days. That's the same instinct I bring to AI: use it where it saves real time, and put guardrails around it so nothing private leaks out.
                </p>
                <p>
                  Small businesses are adopting AI fast, usually without anyone deciding what's allowed. I started Haleo to give owners a clear, practical way to say yes to AI without gambling with their clients' trust.
                </p>
                <p>
                  I live in Durham, I'm finishing an MBA, and I'm always happy to meet at your office or for coffee.
                </p>
              </div>
              <Link to="/safety-check" className="btn-primary mt-8">
                Book a free AI Safety Check
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <aside className="self-start">
              <div className="arch-top flex aspect-[4/5] w-full max-w-sm items-end justify-center overflow-hidden bg-haleo-vault">
                <img
                  src={resolveAssetUrl('/brand/haleo-mark-reverse.svg')}
                  alt=""
                  className="mb-10 h-28 w-auto opacity-90"
                />
              </div>
              <ul className="mt-6 max-w-sm rounded-lg border border-haleo-hairline bg-white p-6">
                {background.map((b) => (
                  <li key={b} className="border-b border-haleo-hairline py-2.5 text-[15px] text-haleo-ink last:border-0">
                    {b}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-t border-haleo-hairline bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[28px] font-bold leading-tight text-haleo-ink sm:text-[32px]">How I work</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-[19px] font-semibold text-haleo-ink">Plain English, short documents</h3>
                <p className="reading mt-2 text-haleo-muted">
                  Your policy fits on one page. If your team won't read it, it doesn't protect anyone.
                </p>
              </div>
              <div>
                <h3 className="text-[19px] font-semibold text-haleo-ink">Fixed prices, in writing</h3>
                <p className="reading mt-2 text-haleo-muted">
                  You'll know the cost and the timeline before any work starts. No hourly billing.
                </p>
              </div>
              <div>
                <h3 className="text-[19px] font-semibold text-haleo-ink">Your data stays yours</h3>
                <p className="reading mt-2 text-haleo-muted">
                  I work in your accounts, sign an NDA before we talk specifics, and never keep client information I don't need.
                </p>
              </div>
              <div>
                <h3 className="text-[19px] font-semibold text-haleo-ink">Honest about limits</h3>
                <p className="reading mt-2 text-haleo-muted">
                  I give practical guidance, not legal advice. If you need an attorney or a formal audit, I'll tell you and point you to one.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;
