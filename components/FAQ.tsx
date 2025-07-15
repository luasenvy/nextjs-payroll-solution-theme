import GridPattern from "@/public/grid-pattern.svg";

const faqs = [
  {
    question: "How long does it take to implement Payflo's payroll solution?",
    answer:
      "Most customers can integrate and launch within 2-4 weeks, depending on your specific requirements and technical resources.",
  },
  {
    question: "Is Payflo compliant with tax regulations?",
    answer:
      "Yes, our infrastructure handles all tax compliance, filings, and payments across the U.S. and Canada, ensuring you stay compliant at all times.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We maintain SOC 2 compliance and employ bank-level encryption for all data. Our infrastructure is built with security as a top priority.",
  },
  {
    question: "Can I customize the user interface?",
    answer:
      "Absolutely! You can use our API to build a completely custom experience or leverage our pre-built UI components that can be styled to match your brand.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer dedicated implementation support, technical documentation, and ongoing assistance from our team of payroll experts.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing scales with your business. Contact us for a customized quote based on your platform's specific needs and user base.",
  },
];

export function FAQ() {
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
        <div className="mx-auto max-w-3xl animate-on-scroll text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600 text-xl">
            Everything you need to know about our payroll infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={`faq-${index}`}
              className="faq-item mb-6 animate-on-scroll overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-6 transition-all duration-300 hover:bg-gray-50">
                  <h3 className="font-medium text-lg transition-colors duration-300 group-hover:text-payflo-purple">
                    {faq.question}
                  </h3>
                  <div className="ml-2 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 transition-transform duration-500 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="faq-content px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-on-scroll text-center">
          <p className="text-gray-600">Still have questions? We're here to help.</p>
          <a
            href="/contact"
            className="group mt-4 inline-flex items-center font-medium text-payflo-purple hover:underline"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
