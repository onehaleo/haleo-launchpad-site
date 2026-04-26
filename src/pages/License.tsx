import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SEOHead from "../components/SEOHead";

const License = () => {
  return (
    <PageTransition animate={true}>
      <SEOHead
        title="License | Haleo"
        description="License terms for Haleo templates, resources, and materials."
        keywords="haleo license, template license, usage rights"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-6">License</h1>
              <div className="space-y-6 text-haleo-gray leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Template and Resource Use</h2>
                  <p>
                    Purchased templates and resources are licensed for use in your own business operations unless otherwise specified.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Restrictions</h2>
                  <p>
                    You may not resell, redistribute, or publicly share Haleo templates or proprietary materials as your own.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Client Deliverables</h2>
                  <p>
                    Ownership and licensing of custom deliverables are governed by each client service agreement.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Contact</h2>
                  <p>License questions: hello@onehaleo.com</p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default License;
