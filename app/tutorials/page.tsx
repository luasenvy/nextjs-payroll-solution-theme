import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";

export const metadata: Metadata = {
  title: "Tutorials | Payflo",
};

export default function TutorialsPage() {
  return (
    <>
      <AnimatePage />

      <section className="overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl lg:text-6xl">
                Learn with <span className="gradient-text">Payflo</span>
              </h1>
              <p className="mt-6 max-w-lg animate-on-scroll text-gray-600 text-xl delay-1">
                Step-by-step guides to help you get the most out of our payroll infrastructure,
                APIs, and UI components.
              </p>
              <div className="mt-8 animate-on-scroll delay-2">
                <a href="#popular-tutorials" className="btn btn-primary">
                  View Tutorials
                </a>
              </div>
            </div>
            <div className="animate-on-scroll delay-3">
              <div className="relative">
                <div className="-inset-0.5 absolute rounded-xl bg-gradient-to-r from-payflo-purple to-payflo-blue opacity-30 blur"></div>
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                        <svg
                          className="h-6 w-6 text-payflo-purple"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Documentation</h3>
                        <p className="text-gray-600">Comprehensive guides</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <svg
                          className="h-6 w-6 text-payflo-blue"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">API Reference</h3>
                        <p className="text-gray-600">Detailed API docs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                        <svg
                          className="h-6 w-6 text-payflo-purple"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Quick Start</h3>
                        <p className="text-gray-600">Get up and running</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Getting <span className="gradient-text">Started</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="feature-card animate-on-scroll delay-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg
                  className="h-6 w-6 text-payflo-purple"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-semibold text-xl">Quick Start Guide</h3>
              <p className="text-gray-600">Get up and running with Payflo in under 15 minutes.</p>
              <a
                href="/tutorials/quickstart"
                className="mt-4 inline-block text-payflo-purple hover:text-payflo-blue"
              >
                Learn more →
              </a>
            </div>

            <div className="feature-card animate-on-scroll delay-2">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-payflo-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-semibold text-xl">Initial Setup</h3>
              <p className="text-gray-600">Configure your organization settings and preferences.</p>
              <a
                href="/tutorials/setup"
                className="mt-4 inline-block text-payflo-purple hover:text-payflo-blue"
              >
                Learn more →
              </a>
            </div>

            <div className="feature-card animate-on-scroll delay-3">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg
                  className="h-6 w-6 text-payflo-purple"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-semibold text-xl">API Integration</h3>
              <p className="text-gray-600">Learn how to integrate our API into your systems.</p>
              <a
                href="/tutorials/api-integration"
                className="mt-4 inline-block text-payflo-purple hover:text-payflo-blue"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-tutorials" className="section">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Popular <span className="gradient-text">Tutorials</span>
          </h2>
          <div className="space-y-6">
            <div className="feature-card animate-on-scroll delay-1">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  <svg
                    className="h-6 w-6 text-payflo-purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Running Your First Payroll</h3>
                  <p className="mb-4 text-gray-600 text-lg">
                    Learn how to process your first payroll run with our step-by-step guide.
                  </p>
                  <a
                    href="/tutorials/run-first-payroll"
                    className="text-payflo-purple hover:text-payflo-blue"
                  >
                    Read tutorial →
                  </a>
                </div>
              </div>
            </div>

            <div className="feature-card animate-on-scroll delay-2">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    className="h-6 w-6 text-payflo-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Employee Onboarding</h3>
                  <p className="mb-4 text-gray-600 text-lg">
                    Streamline your employee onboarding process with our comprehensive guide.
                  </p>
                  <a
                    href="/tutorials/employee-onboarding"
                    className="text-payflo-purple hover:text-payflo-blue"
                  >
                    Read tutorial →
                  </a>
                </div>
              </div>
            </div>

            <div className="feature-card animate-on-scroll delay-3">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  <svg
                    className="h-6 w-6 text-payflo-purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Tax Configuration</h3>
                  <p className="mb-4 text-gray-600 text-lg">
                    Set up your tax settings correctly to ensure compliance and accuracy.
                  </p>
                  <a
                    href="/tutorials/tax-setup"
                    className="text-payflo-purple hover:text-payflo-blue"
                  >
                    Read tutorial →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/tutorials/payroll"
              className="feature-card animate-on-scroll transition-shadow delay-1 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Payroll Processing</h3>
              <p className="text-gray-600">
                Learn about running payroll, adjustments, and special payments.
              </p>
            </a>

            <a
              href="/tutorials/compliance"
              className="feature-card animate-on-scroll transition-shadow delay-2 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Compliance</h3>
              <p className="text-gray-600">Stay compliant with tax laws and regulations.</p>
            </a>

            <a
              href="/tutorials/reporting"
              className="feature-card animate-on-scroll transition-shadow delay-3 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Reporting</h3>
              <p className="text-gray-600">Generate and customize various payroll reports.</p>
            </a>

            <a
              href="/tutorials/benefits"
              className="feature-card animate-on-scroll transition-shadow delay-4 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Benefits Management</h3>
              <p className="text-gray-600">Set up and manage employee benefits.</p>
            </a>

            <a
              href="/tutorials/integrations"
              className="feature-card animate-on-scroll transition-shadow delay-5 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Integrations</h3>
              <p className="text-gray-600">Connect with your favorite HR and accounting tools.</p>
            </a>

            <a
              href="/tutorials/security"
              className="feature-card animate-on-scroll transition-shadow delay-5 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Security</h3>
              <p className="text-gray-600">Learn about security features and best practices.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-payflo-purple to-payflo-blue">
        <div className="container-custom text-center">
          <h2 className="mb-8 animate-on-scroll font-bold text-3xl text-white delay-0 md:text-4xl">
            Need Help?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll text-white/90 text-xl delay-1">
            Can't find what you're looking for? Our support team is here to help you get the most
            out of Payflo.
          </p>
          <a
            href="/contact"
            className="btn animate-on-scroll bg-white text-payflo-purple delay-2 hover:bg-white/90"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
