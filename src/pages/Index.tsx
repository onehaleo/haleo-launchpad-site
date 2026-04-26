
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, XCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { useContent } from '../hooks/useContent';

const Index = () => {
  const { content, loading, error } = useContent();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;
  if (!content) return <div>No content available</div>;

  return (
    <PageTransition animate={true}>
      <SEOHead 
        title={content.seo.default.title}
        description={content.seo.default.description}
        keywords={content.seo.default.keywords}
      />
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 bg-gradient-to-br from-haleo-cloud via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-haleo-ink leading-tight">
                  Your messy spreadsheets turned into a custom internal system in 10 days.
                </h1>
                <p className="text-base sm:text-xl text-haleo-gray mt-5 sm:mt-6 max-w-3xl mx-auto">
                  For fast-moving agencies and small teams that have outgrown spreadsheets, manual tracking, and duct-taped workflows.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch">
                  <Link to="/workflow-review" className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                    See How This Would Look For Your Business
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#demos" className="border-2 border-haleo-core text-haleo-core px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-haleo-core hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                    <PlayCircle className="h-4 w-4" />
                    Watch Demo
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-3 justify-center text-sm text-haleo-gray">
                  <span className="bg-white/80 px-4 py-2 rounded-full">Built in 10 days</span>
                  <span className="bg-white/80 px-4 py-2 rounded-full">Teams under 20 people</span>
                  <span className="bg-white/80 px-4 py-2 rounded-full">Operational clarity first</span>
                </div>
              </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink mb-8 text-center">Your team is moving fast. Your systems are barely holding on.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Projects tracked across too many spreadsheets',
                'Client work slipping through the cracks',
                'No clear source of truth',
                'Manual follow-ups eating time',
                'Team members asking the same status questions',
                'Reporting takes too long',
                'Current tools are either too generic or too bloated',
              ].map((point) => (
                <div key={point} className="bg-haleo-cloud rounded-xl p-4 text-haleo-gray">{point}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-cloud">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-4">Before</h3>
                <ul className="space-y-3 text-haleo-gray">
                  {['Scattered spreadsheets', 'Manual updates', 'Unclear ownership', 'Missed handoffs', 'Reactive operations'].map((item) => (
                    <li key={item} className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-haleo-ink mb-4">After</h3>
                <ul className="space-y-3 text-haleo-gray">
                  {['One internal system', 'Clear workflow stages', 'Assigned owners', 'Live project visibility', 'Cleaner handoffs', 'Faster reporting'].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-4">What Haleo builds</h2>
            <p className="text-haleo-gray text-center max-w-3xl mx-auto mb-10">
              A custom internal system built around the way your team actually works — not a generic template you have to force your business into.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Client + Project Operations System',
                  replaces: 'Scattered spreadsheets, Slack updates, and disconnected PM boards',
                  helps: 'Track delivery, ownership, deadlines, and account status in one workflow',
                  bestFor: 'Marketing agencies, PR teams, and creative studios',
                },
                {
                  title: 'Lead Intake + Sales Pipeline System',
                  replaces: 'Manual lead routing, inconsistent follow-up, and messy CRM notes',
                  helps: 'Standardize qualification, assign ownership, and keep pipeline movement visible',
                  bestFor: 'Service businesses and recruiting agencies',
                },
                {
                  title: 'Fulfillment + Task Tracking System',
                  replaces: 'Ad-hoc checklists, reminder chaos, and unclear handoffs',
                  helps: 'Coordinate execution stages with accountable owners and clean handovers',
                  bestFor: 'Operational teams and construction offices',
                },
              ].map((card) => (
                <div key={card.title} className="bg-haleo-cloud rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-haleo-ink mb-4">{card.title}</h3>
                  <p className="text-sm text-haleo-gray mb-2"><strong>Replaces:</strong> {card.replaces}</p>
                  <p className="text-sm text-haleo-gray mb-2"><strong>Helps with:</strong> {card.helps}</p>
                  <p className="text-sm text-haleo-gray"><strong>Best for:</strong> {card.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-cloud" id="demos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-10">Explore example systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Marketing Agency Operations System',
                  description: 'Track clients, campaigns, deliverables, approvals, and team workload in one place.',
                  link: '/demos/marketing-agency',
                },
                {
                  title: 'Construction Office Workflow System',
                  description: 'Manage jobs, estimates, subcontractor handoffs, materials, and project status without spreadsheet sprawl.',
                  link: '/demos/construction-office',
                },
                {
                  title: 'PR / Creative Studio Delivery System',
                  description: 'Organize clients, retainers, deliverables, approvals, and reporting across fast-moving accounts.',
                  link: '/demos/pr-studio',
                },
              ].map((demo) => (
                <div key={demo.title} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col">
                  <h3 className="text-xl font-semibold text-haleo-ink mb-3">{demo.title}</h3>
                  <p className="text-haleo-gray mb-6 flex-1">{demo.description}</p>
                  <Link to={demo.link} className="text-haleo-core font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    View Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-10">How it works</h2>
            <div className="space-y-5">
              {[
                ['1. Show us the chaos', 'You complete a structured intake showing your current workflow, spreadsheets, tools, and bottlenecks.'],
                ['2. We map the system', 'Haleo translates your workflow into a clean internal system structure and sends a walkthrough before build.'],
                ['3. We build in 10 days', 'Your system is configured, tested, and delivered with a personalized Loom walkthrough.'],
                ['4. Your team starts using it', 'You get a clean operating system your team can actually adopt.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-purple-100 p-6">
                  <h3 className="text-lg font-semibold text-haleo-ink">{title}</h3>
                  <p className="text-haleo-gray mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-haleo-cloud">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-haleo-ink text-center mb-8">Built fast because the scope is clear.</h2>
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
                    'Teams under 20 people',
                    'Agencies or operational businesses',
                    'Currently using spreadsheets or manual workflows',
                    'Have recurring processes',
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to see how this would look for your business?</h2>
            <p className="text-gray-300 mb-8 px-2">Send us your current workflow. We’ll show you what your internal system could become.</p>
            <Link to="/workflow-review" className="gradient-bg text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Start With a Workflow Review
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
