import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";

export const metadata: Metadata = {
  title: "Cookie Policy | Payroll Solution",
};

export default async function CookiePolicyPage() {
  return (
    <>
      <AnimatePage />
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="prose prose-slate mx-auto max-w-3xl">
          <h1 className="mb-8 font-bold text-4xl">Cookie Policy</h1>

          <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when
              you visit a website. They are widely used to make websites work more efficiently and
              provide a better user experience, as well as to provide information to the owners of
              the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">2. How We Use Cookies</h2>
            <p>We use cookies for several purposes, including:</p>
            <ul className="mt-4 list-disc pl-6">
              <li>Essential cookies: Required for the operation of our website</li>
              <li>Analytical/performance cookies: Allow us to recognize and count visitors</li>
              <li>Functionality cookies: Used to recognize you when you return to our website</li>
              <li>Targeting cookies: Record your visit, pages visited, and links followed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">3. Types of Cookies We Use</h2>
            <div className="mt-4">
              <h3 className="mb-3 font-semibold text-xl">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core
                functionality such as security, network management, and accessibility.
              </p>

              <h3 className="mt-6 mb-3 font-semibold text-xl">Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by
                collecting and reporting information anonymously.
              </p>

              <h3 className="mt-6 mb-3 font-semibold text-xl">Functionality Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and
                personalization based on your previous visits and choices.
              </p>

              <h3 className="mt-6 mb-3 font-semibold text-xl">Targeting Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners to build a
                profile of your interests and show you relevant adverts on other sites.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences.
              However, if you limit the ability of websites to set cookies, you may worsen your
              overall user experience. To learn more about cookies and how to manage them, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutcookies.org
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">5. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this
              page with an updated revision date. Please check back frequently to see any updates or
              changes to our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">6. Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <div className="mt-4">
              <p>Email: privacy@payrollsolution.com</p>
              <p>Address: [Your Company Address]</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
