import { BriefcaseBusiness, Building2, CircleCheck, Users } from "lucide-react";
import { Metadata } from "next";
import { createElement } from "react";
import { AnimatePage } from "@/components/AnimatePage";
import { CTASection } from "@/components/CTASection";

const solutions = [
  {
    title: "HR Platforms",
    description:
      "Add payroll to your HR platform and become the all-in-one solution your customers need. Streamline employee management, benefits, and payroll in one place.",
    icon: Users,
    features: [
      "Employee onboarding integration",
      "Benefits management sync",
      "Time tracking connection",
      "Automated tax calculations",
    ],
  },
  {
    title: "Vertical SaaS",
    description:
      "Enhance your industry-specific software with built-in payroll capabilities. Whether you serve restaurants, healthcare, or other sectors, we adapt to your needs.",
    icon: Building2,
    features: [
      "Industry-specific calculations",
      "Custom payment schedules",
      "Role-based permissions",
      "Specialized reporting",
    ],
  },
  {
    title: "Staffing Platforms",
    description:
      "Power your staffing platform with flexible payroll that handles complex scenarios like multiple work sites, varying rates, and contractor payments.",
    icon: BriefcaseBusiness,
    features: [
      "Multi-location support",
      "Contractor management",
      "Variable rate handling",
      "Automated payments",
    ],
  },
];

export const metadata: Metadata = {
  title: "Payflo - Solutions",
  description:
    "Discover how Payflo's payroll infrastructure can be customized for your specific industry and use case.",
};

export default function SolutionPage() {
  return (
    <>
      <AnimatePage />
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl">
              Tailored <span className="gradient-text">Solutions</span> for Every Platform
            </h1>
            <p className="mt-6 animate-on-scroll text-gray-600 text-xl delay-1">
              Whether you're building an HR platform, vertical SaaS solution, or staffing platform,
              Payflo's payroll infrastructure adapts to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={`solution-${index}`}
                className={`animate-on-scroll rounded-xl bg-white p-8 shadow-lg delay-${index + 2}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue text-white">
                  {solution.icon && createElement(solution.icon, { className: "size-6" })}
                </div>
                <h3 className="mt-6 font-semibold text-2xl">{solution.title}</h3>
                <p className="mt-4 text-gray-600">{solution.description}</p>
                <ul className="mt-6 space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={`solution-feature-${i}`} className="flex items-center text-gray-700">
                      <CircleCheck className="mr-2 size-5 text-payflo-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Built for Your Success</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Our flexible infrastructure means you can build exactly what your customers need,
              without compromising on features or compliance.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
