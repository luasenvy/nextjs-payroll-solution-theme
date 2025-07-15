import { Metadata } from "next";
import Image from "next/image";
import { AnimatePage } from "@/components/AnimatePage";
import teamPhoto from "@/public/assets/team-photo.webp";

export const metadata: Metadata = {
  title: "Careers | Payflo",
};

export default async function CaseStudiesPage() {
  return (
    <>
      <AnimatePage />
      <main>
        <section className="overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl lg:text-6xl">
                  Join Our <span className="gradient-text">Team</span>
                </h1>
                <p className="mt-6 max-w-lg animate-on-scroll text-gray-600 text-xl delay-1">
                  Help us revolutionize the future of payroll technology. We're looking for
                  passionate individuals who want to make a difference.
                </p>
                <div className="mt-8 animate-on-scroll delay-2">
                  <a href="#open-positions" className="btn btn-primary">
                    View Open Positions
                  </a>
                </div>
              </div>
              <div className="animate-on-scroll delay-3">
                <div className="relative">
                  <div className="-inset-0.5 absolute rounded-xl bg-gradient-to-r from-payflo-purple to-payflo-blue opacity-30 blur"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                    <Image
                      src={teamPhoto}
                      alt="Our Team"
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

        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
              Why Join <span className="gradient-text">Payflo</span>?
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
                      d="M13 10V3L4 14H11V21L20 10H13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-2xl">Innovation First</h3>
                <p className="text-gray-600 text-lg">
                  Work on cutting-edge technology that's transforming how businesses handle payroll.
                </p>
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
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-2xl">Great Culture</h3>
                <p className="text-gray-600 text-lg">
                  Join a diverse, inclusive team that values collaboration, growth, and work-life
                  balance.
                </p>
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
                      d="M12 20V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 20V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 font-semibold text-2xl">Growth Opportunities</h3>
                <p className="text-gray-600 text-lg">
                  Develop your skills and advance your career with continuous learning and
                  mentorship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
              Our <span className="gradient-text">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="feature-card animate-on-scroll delay-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <svg
                    className="h-6 w-6 text-payflo-purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1V23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 font-semibold text-xl">Competitive Salary</h3>
                <p className="text-gray-600">Industry-leading compensation packages</p>
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
                      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 font-semibold text-xl">Health Benefits</h3>
                <p className="text-gray-600">Comprehensive medical, dental, and vision</p>
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
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 font-semibold text-xl">Flexible PTO</h3>
                <p className="text-gray-600">Take time off when you need it</p>
              </div>

              <div className="feature-card animate-on-scroll delay-4">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    className="h-6 w-6 text-payflo-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 font-semibold text-xl">Learning Budget</h3>
                <p className="text-gray-600">Annual allowance for courses and conferences</p>
              </div>
            </div>
          </div>
        </section>

        <section id="open-positions" className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-16 animate-on-scroll text-center font-bold text-3xl delay-0 md:text-4xl">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <div className="space-y-6">
              <div className="feature-card animate-on-scroll delay-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-3 font-semibold text-2xl">Senior Software Engineer</h3>
                    <p className="mb-4 text-gray-600 text-lg">
                      Help build and scale our core payroll infrastructure.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-purple-100 px-4 py-1.5 font-medium text-payflo-purple text-sm">
                        Full-time
                      </span>
                      <span className="rounded-full bg-blue-100 px-4 py-1.5 font-medium text-payflo-blue text-sm">
                        Remote
                      </span>
                    </div>
                  </div>
                  <a
                    href="/careers/senior-software-engineer"
                    className="btn btn-primary mt-6 md:mt-0"
                  >
                    Learn more →
                  </a>
                </div>
              </div>

              <div className="feature-card animate-on-scroll delay-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-3 font-semibold text-2xl">Product Designer</h3>
                    <p className="mb-4 text-gray-600 text-lg">
                      Create beautiful, intuitive experiences for our customers.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-purple-100 px-4 py-1.5 font-medium text-payflo-purple text-sm">
                        Full-time
                      </span>
                      <span className="rounded-full bg-blue-100 px-4 py-1.5 font-medium text-payflo-blue text-sm">
                        Remote
                      </span>
                    </div>
                  </div>
                  <a href="/careers/product-designer" className="btn btn-primary mt-6 md:mt-0">
                    Learn more →
                  </a>
                </div>
              </div>

              <div className="feature-card animate-on-scroll delay-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-3 font-semibold text-2xl">Customer Success Manager</h3>
                    <p className="mb-4 text-gray-600 text-lg">
                      Help our customers succeed with our payroll solutions.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-purple-100 px-4 py-1.5 font-medium text-payflo-purple text-sm">
                        Full-time
                      </span>
                      <span className="rounded-full bg-blue-100 px-4 py-1.5 font-medium text-payflo-blue text-sm">
                        Remote
                      </span>
                    </div>
                  </div>
                  <a
                    href="/careers/customer-success-manager"
                    className="btn btn-primary mt-6 md:mt-0"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-r from-payflo-purple to-payflo-blue">
          <div className="container-custom text-center">
            <h2 className="mb-8 animate-on-scroll font-bold text-3xl text-white delay-0 md:text-4xl">
              Don't see the right position?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl animate-on-scroll text-white/90 text-xl delay-1">
              We're always looking for talented individuals to join our team. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@payflo.dev"
              className="btn animate-on-scroll bg-white text-payflo-purple delay-2 hover:bg-white/90"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
