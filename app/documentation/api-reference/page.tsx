import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";

export const metadata: Metadata = {
  title: "API Reference | Payflo",
};

export default async function ApiReferencePage() {
  return (
    <>
      <AnimatePage />
      <main className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 font-bold text-4xl text-gray-900 md:text-5xl">API Reference</h1>
            <p className="mx-auto max-w-2xl text-gray-600 text-xl">
              Complete reference documentation for the Payflo API.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-bold text-3xl text-gray-900">API Overview</h2>
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="mb-4 font-semibold text-xl">Base URL</h3>
                <div className="rounded-lg bg-gray-50 p-4">
                  <code className="text-payflo-blue">https://api.payflo.dev/v1</code>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-semibold text-xl">Authentication</h3>
                <p className="mb-4 text-gray-600">
                  All API requests require authentication using an API key in the header:
                </p>
                <div className="rounded-lg bg-gray-50 p-4">
                  <code className="text-payflo-blue">Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-xl">Response Format</h3>
                <p className="mb-4 text-gray-600">
                  All responses are returned in JSON format with the following structure:
                </p>
                <div className="rounded-lg bg-gray-50 p-4">
                  <pre className="text-payflo-blue text-sm">{`
{
  "status": "success",
  "data": { },
  "meta": { }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-bold text-3xl text-gray-900">Endpoints</h2>

            <div className="mb-12">
              <h3 className="mb-6 font-bold text-2xl text-gray-900">Employees</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 text-sm">
                      GET
                    </span>
                    <code className="text-gray-900">/employees</code>
                  </div>
                  <p className="mb-4 text-gray-600">List all employees</p>
                  <a
                    href="/documentation/api-reference/employees#list"
                    className="font-medium text-payflo-blue hover:text-payflo-purple"
                  >
                    View details →
                  </a>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700 text-sm">
                      POST
                    </span>
                    <code className="text-gray-900">/employees</code>
                  </div>
                  <p className="mb-4 text-gray-600">Create a new employee</p>
                  <a
                    href="/documentation/api-reference/employees#create"
                    className="font-medium text-payflo-blue hover:text-payflo-purple"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-6 font-bold text-2xl text-gray-900">Payroll</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 text-sm">
                      GET
                    </span>
                    <code className="text-gray-900">/payroll/runs</code>
                  </div>
                  <p className="mb-4 text-gray-600">List all payroll runs</p>
                  <a
                    href="/documentation/api-reference/payroll#list-runs"
                    className="font-medium text-payflo-blue hover:text-payflo-purple"
                  >
                    View details →
                  </a>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700 text-sm">
                      POST
                    </span>
                    <code className="text-gray-900">/payroll/runs</code>
                  </div>
                  <p className="mb-4 text-gray-600">Create a new payroll run</p>
                  <a
                    href="/documentation/api-reference/payroll#create-run"
                    className="font-medium text-payflo-blue hover:text-payflo-purple"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-bold text-2xl text-gray-900">Reports</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 text-sm">
                      GET
                    </span>
                    <code className="text-gray-900">/reports</code>
                  </div>
                  <p className="mb-4 text-gray-600">Generate payroll reports</p>
                  <a
                    href="/documentation/api-reference/reports#generate"
                    className="font-medium text-payflo-blue hover:text-payflo-purple"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-bold text-3xl text-gray-900">Rate Limits</h2>
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
              <p className="mb-6 text-gray-600">
                Our API implements rate limiting to ensure stability and fair usage:
              </p>
              <ul className="list-inside list-disc space-y-4 text-gray-600">
                <li>100 requests per minute per API key</li>
                <li>1000 requests per hour per API key</li>
                <li>10000 requests per day per API key</li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-600">
                  Rate limit information is included in the response headers:
                </p>
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <pre className="text-payflo-blue text-sm">{`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1625097600`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 font-bold text-3xl text-gray-900">Error Handling</h2>
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
              <p className="mb-6 text-gray-600">
                The API uses conventional HTTP response codes to indicate the success or failure of
                an API request:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="font-semibold text-green-600">2xx</span>
                  <p className="text-gray-600">
                    Success response indicating the request was processed successfully
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-semibold text-yellow-600">4xx</span>
                  <p className="text-gray-600">
                    Client error response indicating an issue with the request
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-semibold text-red-600">5xx</span>
                  <p className="text-gray-600">
                    Server error response indicating an issue on our end
                  </p>
                </li>
              </ul>
              <div className="mt-6">
                <p className="mb-4 text-gray-600">Error Response Format:</p>
                <div className="rounded-lg bg-gray-50 p-4">
                  <pre className="text-payflo-blue text-sm">{`
{
  "status": "error",
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": { }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
