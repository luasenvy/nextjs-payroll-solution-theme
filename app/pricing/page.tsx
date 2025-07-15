import { CircleCheck, CircleX } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { AnimatePage } from "@/components/AnimatePage";
import { CTASection } from "@/components/CTASection";

const tiers = [
  {
    name: "Growth",
    price: "$499",
    period: "/month",
    description: "Perfect for growing platforms ready to add payroll capabilities.",
    features: [
      "Up to 500 employees",
      "Direct deposit & checks",
      "Tax calculations & filings",
      "Standard support",
      "Basic API access",
      "Standard reporting",
      "Basic integrations",
      "99.9% uptime SLA",
    ],
    cta: {
      text: "Start Free Trial",
      href: "/book-demo",
    },
  },
  {
    name: "Scale",
    price: "$999",
    period: "/month",
    description: "For established platforms with advanced payroll needs.",
    features: [
      "Up to 2,000 employees",
      "All Growth features",
      "Priority support",
      "Advanced API access",
      "Custom reports",
      "Advanced integrations",
      "White-labeling",
      "99.99% uptime SLA",
    ],
    cta: {
      text: "Book a Demo",
      href: "/book-demo",
    },
  },
];

const enterpriseFeatures = [
  "Unlimited employees",
  "24/7 dedicated support",
  "Custom development",
  "Multi-country payroll",
  "Custom integrations",
  "Dedicated account manager",
  "Custom SLA",
  "On-premise deployment options",
];

export const metadata: Metadata = {
  title: "Payflo - Pricing",
  description:
    "Simple, transparent pricing for platforms of all sizes. Start with a free trial and scale as you grow.",
};

export default async function PricingPage() {
  return (
    <>
      <AnimatePage />
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="mt-6 animate-on-scroll text-gray-600 text-xl delay-1">
              Start with a free trial and scale as your platform grows. No hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                className={`relative animate-on-scroll rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl delay-${index + 2}`}
              >
                {tier.name === "Scale" && (
                  <div className="-top-4 -translate-x-1/2 absolute left-1/2 rounded-full bg-gradient-to-r from-payflo-purple to-payflo-blue px-4 py-1 font-medium text-sm text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="font-semibold text-2xl">{tier.name}</h3>
                <div className="mt-4">
                  <span className="font-bold text-4xl">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <p className="mt-4 text-gray-600">{tier.description}</p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li className="flex items-center text-gray-700">
                      <CircleCheck className="mr-2 size-5 text-payflo-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href={tier.cta.href} className="btn btn-primary w-full text-center">
                    {tier.cta.text}
                  </Link>
                </div>
              </div>
            ))}

            <div className="animate-on-scroll rounded-xl bg-gradient-to-br from-payflo-purple to-payflo-blue p-8 text-white delay-4">
              <h3 className="font-semibold text-2xl">Enterprise</h3>
              <div className="mt-4">
                <span className="font-medium text-2xl">Custom Pricing</span>
              </div>
              <p className="mt-4 text-white/90">
                For large platforms with custom requirements and enterprise-grade needs.
              </p>
              <ul className="mt-8 space-y-4">
                {enterpriseFeatures.map((feature) => (
                  <li className="flex items-center">
                    <CircleCheck className="mr-2 size-5 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="btn w-full bg-white text-center text-payflo-purple hover:bg-white/90"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Compare Plans</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Find the perfect plan for your platform's needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse animate-on-scroll">
              <thead>
                <tr className="border-gray-200 border-b">
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">Growth</th>
                  <th className="px-6 py-4 text-center">Scale</th>
                  <th className="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-gray-200 border-b">
                  <td className="px-6 py-4">Employee Limit</td>
                  <td className="px-6 py-4 text-center">500</td>
                  <td className="px-6 py-4 text-center">2,000</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-gray-200 border-b">
                  <td className="px-6 py-4">Support Level</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center">Priority</td>
                  <td className="px-6 py-4 text-center">24/7 Dedicated</td>
                </tr>
                <tr className="border-gray-200 border-b">
                  <td className="px-6 py-4">API Access</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                  <td className="px-6 py-4 text-center">Custom</td>
                </tr>
                <tr className="border-gray-200 border-b">
                  <td className="px-6 py-4">White Labeling</td>
                  <td className="px-6 py-4 text-center">
                    <CircleX className="mx-auto size-5 text-gray-400" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleCheck className="mx-auto size-5 text-payflo-purple" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleCheck className="mx-auto size-5 text-payflo-purple" />
                  </td>
                </tr>
                <tr className="border-gray-200 border-b">
                  <td className="px-6 py-4">Custom Development</td>
                  <td className="px-6 py-4 text-center">
                    <CircleX className="mx-auto size-5 text-gray-400" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleX className="mx-auto size-5 text-gray-400" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleCheck className="mx-auto size-5 text-payflo-purple" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Have questions about our pricing? Check out our FAQ or contact us for more details.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
