import { Metadata } from "next";
import Link from "next/link";
import { AnimatePage } from "@/components/AnimatePage";

export const metadata: Metadata = {
  title: "Documentation | Payflo",
};

export default async function DocumentationPage() {
  return (
    <>
      <AnimatePage />
      <main className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 font-bold text-4xl text-gray-900 md:text-5xl">Documentation</h1>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Everything you need to know about integrating and using Payflo's platform.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/documentation/api-reference" className="group">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-payflo-blue/10">
                  <svg
                    className="h-6 w-6 text-payflo-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-payflo-blue">
                  API Reference
                </h2>
                <p className="text-gray-600">
                  Detailed documentation of our REST API endpoints and parameters.
                </p>
              </div>
            </Link>

            <Link href="/tutorials" className="group">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-payflo-purple/10">
                  <svg
                    className="h-6 w-6 text-payflo-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-payflo-purple">
                  Tutorials
                </h2>
                <p className="text-gray-600">
                  Step-by-step guides to help you get started with our platform.
                </p>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-payflo-purple/10">
                  <svg
                    className="h-6 w-6 text-payflo-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-payflo-purple">
                  Case Studies
                </h2>
                <p className="text-gray-600">
                  Real-world examples of successful Payflo implementations.
                </p>
              </div>
            </Link>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-bold text-3xl text-gray-900">Getting Started</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-xl">Quick Start Guide</h3>
                <p className="mb-6 text-gray-600">Get up and running with Payflo in minutes.</p>
                <ol className="list-inside list-decimal space-y-4 text-gray-600">
                  <li>Sign up for an account</li>
                  <li>Configure your organization settings</li>
                  <li>Add your first employee</li>
                  <li>Run your first payroll</li>
                </ol>
                <a
                  href="/documentation/quick-start"
                  className="mt-6 inline-block font-medium text-payflo-blue hover:text-payflo-purple"
                >
                  Read the guide →
                </a>
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-xl">Integration Guide</h3>
                <p className="mb-6 text-gray-600">
                  Learn how to integrate Payflo with your existing systems.
                </p>
                <ul className="list-inside list-disc space-y-4 text-gray-600">
                  <li>API authentication</li>
                  <li>Webhooks setup</li>
                  <li>Data synchronization</li>
                  <li>Error handling</li>
                </ul>
                <a
                  href="/documentation/integration"
                  className="mt-6 inline-block font-medium text-payflo-blue hover:text-payflo-purple"
                >
                  View integration docs →
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 font-bold text-3xl text-gray-900">Popular Topics</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="/documentation/payroll-processing"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Payroll Processing</h3>
                <p className="text-gray-600">
                  Learn about our payroll processing system and features.
                </p>
              </a>

              <a
                href="/documentation/tax-calculations"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Tax Calculations</h3>
                <p className="text-gray-600">Understanding how our tax engine works.</p>
              </a>

              <a
                href="/documentation/compliance"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Compliance</h3>
                <p className="text-gray-600">Stay compliant with our built-in compliance tools.</p>
              </a>

              <a
                href="/documentation/reporting"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Reporting</h3>
                <p className="text-gray-600">Generate and customize payroll reports.</p>
              </a>

              <a
                href="/documentation/employee-portal"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Employee Portal</h3>
                <p className="text-gray-600">Set up and manage the employee self-service portal.</p>
              </a>

              <a
                href="/documentation/security"
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-lg">Security</h3>
                <p className="text-gray-600">
                  Learn about our security features and best practices.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
