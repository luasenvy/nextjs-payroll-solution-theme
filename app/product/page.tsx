import { Brush, ChartLine, Code, CreditCard, PanelsTopLeft, SquareCheck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { createElement } from "react";
import { AnimatePage } from "@/components/AnimatePage";
import { CTASection } from "@/components/CTASection";
import ProductImage from "@/public/assets/product-dashboard.webp";

const features = [
  {
    title: "Fully Embedded Experience",
    description:
      "Seamlessly integrate payroll into your existing platform with our APIs and UI components.",
    icon: PanelsTopLeft,
  },
  {
    title: "Tax Filing & Compliance",
    description:
      "We handle all tax calculations, filings, and payments so you don't have to worry about compliance.",
    icon: SquareCheck,
  },
  {
    title: "Flexible Payment Options",
    description:
      "Support for direct deposit, checks, and other payment methods to suit your customers' needs.",
    icon: CreditCard,
  },
  {
    title: "White-Label Solution",
    description:
      "Customize the entire experience to match your brand, making it feel like a native part of your platform.",
    icon: Brush,
  },
  {
    title: "Detailed Reporting",
    description: "Provide comprehensive payroll reports and analytics for your customers.",
    icon: ChartLine,
  },
  {
    title: "Developer-Friendly APIs",
    description:
      "Well-documented RESTful APIs that make integration straightforward for your development team.",
    icon: Code,
  },
];

export const metadata: Metadata = {
  title: "Payflo - Product",
  description:
    "Payflo's payroll API is easy to use and fast to launch, with compliant infrastructure and features customers will love.",
};

export default async function ProductPage() {
  return (
    <>
      <AnimatePage />
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll">
              <h1 className="font-bold text-4xl leading-tight md:text-5xl">
                A <span className="gradient-text">Modern Approach</span> to Payroll Infrastructure
              </h1>
              <p className="mt-6 max-w-lg text-gray-600 text-xl">
                Payflo's payroll API is easy to use and fast to launch, with compliant
                infrastructure and features customers will love.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/book-demo" className="btn btn-primary">
                  Book a Demo
                </a>
                <a href="/documentation" className="btn btn-secondary">
                  View API Docs
                </a>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="-inset-0.5 absolute rounded-xl bg-gradient-to-r from-payflo-purple to-payflo-blue opacity-30 blur"></div>
                <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                  <Image
                    src={ProductImage}
                    alt="Payflo Product Dashboard"
                    className="h-auto w-full"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Key Features</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Everything you need to offer a complete payroll solution to your customers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="animate-on-scroll rounded-xl bg-white p-8 shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue text-white">
                  {createElement(feature.icon, { className: "size-6" })}
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
