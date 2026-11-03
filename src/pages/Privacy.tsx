import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SEOHead from "../components/SEOHead";

const Privacy = () => {
  return (
    <PageTransition animate={true}>
      <SEOHead
        title="Privacy Policy | Haleo"
        description="Privacy policy covering how Haleo collects and uses information."
        keywords="haleo privacy, privacy policy, data policy"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink mb-6">Privacy Policy</h1>
              <div className="space-y-6 text-haleo-gray leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Information we collect</h2>
                  <p>
                    When you request a Safety Check or email Haleo, we receive the details you choose to share, such as your name, email, business name and team size. Requests sent through the website form are delivered by Formspree. The site also uses Google Analytics to count visits and see which pages are read.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">How we use it</h2>
                  <p>
                    We use this information to reply to you, schedule and deliver services, and improve the website. We don't add you to a mailing list without asking.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Sharing</h2>
                  <p>
                    Haleo does not sell personal information. Information is shared only with the service providers needed to run the business, such as the form and email providers named above.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Security</h2>
                  <p>
                    We use reasonable safeguards to protect information, but no method of internet transmission is completely secure.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-haleo-ink mb-2">Contact</h2>
                  <p>For privacy requests or questions: hello@onehaleo.com</p>
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

export default Privacy;
