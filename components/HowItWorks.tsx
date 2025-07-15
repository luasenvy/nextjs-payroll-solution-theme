import GridPattern from "@/public/grid-pattern.svg";

const steps = [
  {
    number: "01",
    title: "Connect with our API",
    description: "Integrate with our RESTful API to access our payroll infrastructure.",
  },
  {
    number: "02",
    title: "Configure your experience",
    description: "Customize the user interface to match your brand and requirements.",
  },
  {
    number: "03",
    title: "Launch and scale",
    description: "Go live with your payroll solution and scale as your customer base grows.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-payflo-gray py-20">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('${GridPattern.src}')`,
          }}
        ></div>
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="animate-on-scroll font-bold text-3xl delay-0 md:text-4xl">How It Works</h2>
          <p className="mt-4 animate-on-scroll text-gray-600 text-xl delay-1">
            Get up and running with embedded payroll in three simple steps.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="absolute top-16 right-1/6 left-1/6 hidden h-0.5 bg-gradient-to-r from-payflo-purple to-payflo-blue md:block"></div>

          {steps.map((step, index) => (
            <div
              key={`step-${index}`}
              className={`animate-on-scroll rounded-xl border border-gray-100 bg-white p-8 shadow-lg delay-${index + 2} group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-payflo-purple/10 font-semibold text-payflo-purple transition-all duration-300 group-hover:scale-110 group-hover:bg-payflo-purple group-hover:text-white">
                {step.number}
              </div>
              <h3 className="mt-6 font-semibold text-xl transition-colors duration-300 group-hover:text-payflo-purple">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="mt-4 flex justify-center md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 animate-bounce text-payflo-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="animate-on-scroll delay-5">
            <a href="/documentation" className="btn btn-primary group">
              <span className="inline-flex items-center">
                View API Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
