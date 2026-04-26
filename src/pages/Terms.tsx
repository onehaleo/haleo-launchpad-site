import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SEOHead from "../components/SEOHead";

const Terms = () => {
  return (
    <PageTransition animate={true}>
      <SEOHead
        title="Terms of Service | Haleo"
        description="Terms of service for Haleo website usage, services, and deliverables."
        keywords="haleo terms, terms of service, legal"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-6">Terms of Service</h1>
              <div className="space-y-6 text-haleo-gray leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Use of Site</h2>
                  <p>
                    By accessing this website, you agree to use it for lawful purposes only and in a way that does not
                    harm Haleo, its users, or its services.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Service Scope</h2>
                  <p>
                    Project timelines, deliverables, and boundaries are defined per engagement. Any additional features or
                    modules beyond the agreed scope may require a separate agreement.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Intellectual Property</h2>
                  <p>
                    Unless otherwise agreed in writing, content and materials on this site remain property of Haleo.
                    Client project ownership terms are defined in each client agreement.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Limitation of Liability</h2>
                  <p>
                    Haleo is not liable for indirect or consequential damages arising from use of the site or services.
                    Services are provided in good faith based on the provided workflow and requirements.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Contact</h2>
                  <p>Questions about these terms: hello@onehaleo.com</p>
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

export default Terms;
