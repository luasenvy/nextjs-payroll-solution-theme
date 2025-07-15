import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatePage } from "@/components/AnimatePage";
import BlogPayrollImage from "@/public/blog/future-payroll.webp";
import PartnerLogoImage1 from "@/public/partner-logo-1.svg";
import PartnerLogoImage2 from "@/public/partner-logo-2.svg";
import PartnerLogoImage3 from "@/public/partner-logo-3.svg";
import PartnerLogoImage4 from "@/public/partner-logo-4.svg";

export const metadata: Metadata = {
  title: "Case Studies | Payflo",
};

export default async function CaseStudiesPage() {
  return (
    <>
      <AnimatePage />

      <section className="overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl lg:text-6xl">
                Customer <span className="gradient-text">Success</span>
              </h1>
              <p className="mt-6 max-w-lg animate-on-scroll text-gray-600 text-xl delay-1">
                Discover how businesses are transforming their payroll operations with our
                solutions.
              </p>
              <div className="mt-8 animate-on-scroll delay-2">
                <a href="#featured-case-study" className="btn btn-primary">
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="animate-on-scroll delay-3">
              <div className="relative">
                <div className="-inset-0.5 absolute rounded-xl bg-gradient-to-r from-payflo-purple to-payflo-blue opacity-30 blur"></div>
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                        <svg
                          className="h-6 w-6 text-payflo-purple"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8v8m-8-8v8M12 4v16m5-16l1 1v14l-1 1H7l-1-1V5l1-1h10z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Enterprise</h3>
                        <p className="text-gray-600">Large-scale solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                        <svg
                          className="h-6 w-6 text-payflo-blue"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Startups</h3>
                        <p className="text-gray-600">Scaling solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                        <svg
                          className="h-6 w-6 text-payflo-purple"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0h-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">SMBs</h3>
                        <p className="text-gray-600">Right-sized solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-case-study" className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Featured <span className="gradient-text">Case Study</span>
          </h2>
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="grid animate-on-scroll gap-8 delay-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <Image src={PartnerLogoImage1} alt="TechCorp Logo" className="size-12" />
                  <h3 className="font-bold text-2xl text-gray-900">
                    TechCorp's Payroll Transformation
                  </h3>
                </div>
                <p className="mb-6 text-gray-600">
                  Learn how TechCorp streamlined their payroll process, reduced processing time by
                  75%, and achieved 100% compliance across multiple jurisdictions.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="size-5 text-payflo-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    75% reduction in processing time
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="size-5 text-payflo-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    100% compliance achievement
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="size-5 text-payflo-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    $200,000 annual cost savings
                  </li>
                </ul>
                <Link href="/case-studies/techcorp" className="btn btn-primary">
                  Read the full story →
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src={BlogPayrollImage}
                  alt="TechCorp Office"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/case-studies/startup-success" className="group animate-on-scroll delay-1">
              <div className="feature-card">
                <Image src={PartnerLogoImage2} alt="StartupCo Logo" className="mb-4 size-12" />
                <h3 className="mb-2 font-semibold text-xl transition-colors duration-200 group-hover:text-payflo-purple">
                  StartupCo's Scaling Story
                </h3>
                <p className="mb-4 text-gray-600">
                  How a fast-growing startup managed payroll for their expanding team across 5
                  countries.
                </p>
                <div className="flex items-center gap-2 text-payflo-purple">
                  <span>Read more</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <a
              href="/case-studies/enterprise-evolution"
              className="group animate-on-scroll delay-2"
            >
              <div className="feature-card">
                <Image src={PartnerLogoImage3} alt="Enterprise Inc Logo" className="mb-4 size-12" />
                <h3 className="mb-2 font-semibold text-xl transition-colors duration-200 group-hover:text-payflo-purple">
                  Enterprise Inc's Evolution
                </h3>
                <p className="mb-4 text-gray-600">
                  Modernizing legacy systems and achieving seamless payroll integration for 10,000+
                  employees.
                </p>
                <div className="flex items-center gap-2 text-payflo-purple">
                  <span>Read more</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <Link
              href="/case-studies/retail-revolution"
              className="group animate-on-scroll delay-3"
            >
              <div className="feature-card">
                <Image src={PartnerLogoImage4} alt="RetailPro Logo" className="mb-4 size-12" />
                <h3 className="mb-2 font-semibold text-xl transition-colors duration-200 group-hover:text-payflo-purple">
                  RetailPro's Revolution
                </h3>
                <p className="mb-4 text-gray-600">
                  Simplifying complex payroll calculations for hourly workers across 200 retail
                  locations.
                </p>
                <div className="flex items-center gap-2 text-payflo-purple">
                  <span>Read more</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
            Browse by <span className="gradient-text">Industry</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/case-studies/technology"
              className="feature-card animate-on-scroll transition-shadow delay-1 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Technology</h3>
              <p className="text-gray-600">
                Success stories from software companies and tech startups.
              </p>
            </a>

            <a
              href="/case-studies/retail"
              className="feature-card animate-on-scroll transition-shadow delay-2 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Retail</h3>
              <p className="text-gray-600">
                How retail businesses manage complex workforce payroll.
              </p>
            </a>

            <a
              href="/case-studies/healthcare"
              className="feature-card animate-on-scroll transition-shadow delay-3 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Healthcare</h3>
              <p className="text-gray-600">Payroll solutions for healthcare organizations.</p>
            </a>

            <a
              href="/case-studies/manufacturing"
              className="feature-card animate-on-scroll transition-shadow delay-4 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Manufacturing</h3>
              <p className="text-gray-600">Managing payroll for manufacturing workforce.</p>
            </a>

            <a
              href="/case-studies/professional-services"
              className="feature-card animate-on-scroll transition-shadow delay-5 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Professional Services</h3>
              <p className="text-gray-600">Solutions for consulting and service firms.</p>
            </a>

            <a
              href="/case-studies/nonprofit"
              className="feature-card animate-on-scroll transition-shadow delay-6 duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 font-semibold text-lg">Nonprofit</h3>
              <p className="text-gray-600">How nonprofits optimize their payroll processes.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-payflo-purple to-payflo-blue">
        <div className="container-custom text-center">
          <h2 className="mb-8 animate-on-scroll font-bold text-3xl text-white delay-0 md:text-4xl">
            Ready to Transform Your Payroll?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl animate-on-scroll text-white/90 text-xl delay-1">
            Join these successful businesses in revolutionizing your payroll operations with Payflo.
          </p>
          <a
            href="/book-demo"
            className="btn animate-on-scroll bg-white text-payflo-purple delay-2 hover:bg-white/90"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </>
  );
}
