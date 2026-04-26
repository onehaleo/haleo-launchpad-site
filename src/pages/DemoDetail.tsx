import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SEOHead from "../components/SEOHead";
import { getDemoBySlug } from "../content/cmsData";
import { ArrowRight } from "lucide-react";

type DemoDetailProps = {
  slug: string;
};

const DemoDetail = ({ slug }: DemoDetailProps) => {
  const demo = getDemoBySlug(slug);

  if (!demo) {
    return (
      <PageTransition animate={true}>
        <div className="min-h-screen bg-haleo-cloud">
          <Navigation />
          <main className="pt-24 sm:pt-28 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <h1 className="text-3xl font-bold text-haleo-ink mb-4">Demo Not Found</h1>
                <p className="text-haleo-gray mb-6">This demo page is not available.</p>
                <Link to="/#demos" className="text-haleo-core font-semibold">Back to Demos</Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition animate={true}>
      <SEOHead
        title={`${demo.title} | Haleo Demo`}
        description={demo.short_description}
        keywords={`demo, ${demo.agency_type}, haleo systems`}
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <p className="text-sm font-semibold text-haleo-violet mb-3">{demo.agency_type}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-4">{demo.title}</h1>
              <p className="text-haleo-gray mb-8">{demo.short_description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-haleo-cloud rounded-xl p-5">
                  <h2 className="text-lg font-semibold text-haleo-ink mb-2">Before</h2>
                  <p className="text-haleo-gray">{demo.before_state}</p>
                </div>
                <div className="bg-haleo-cloud rounded-xl p-5">
                  <h2 className="text-lg font-semibold text-haleo-ink mb-2">After</h2>
                  <p className="text-haleo-gray">{demo.after_state}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-haleo-ink mb-2">Problem Summary</h2>
                <p className="text-haleo-gray">{demo.problem_summary}</p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-haleo-ink mb-3">Modules</h2>
                <ul className="space-y-2 text-haleo-gray">
                  {demo.modules.map((module) => (
                    <li key={module}>• {module}</li>
                  ))}
                </ul>
              </div>

              <Link to={demo.cta_link} className="gradient-bg text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2">
                {demo.cta_text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default DemoDetail;
