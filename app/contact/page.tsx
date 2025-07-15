import { DollarSign, Handshake, LifeBuoy } from "lucide-react";
import { Metadata } from "next";
import { createElement } from "react";
import { AnimatePage } from "@/components/AnimatePage";

const contactMethods = [
  {
    title: "Sales",
    description: "Talk to our sales team about implementing Payflo for your platform.",
    icon: DollarSign,
    email: "sales@payflo.dev",
  },
  {
    title: "Support",
    description: "Get help with technical questions or implementation issues.",
    icon: LifeBuoy,
    email: "support@payflo.dev",
  },
  {
    title: "Partnerships",
    description: "Explore partnership opportunities with our team.",
    icon: Handshake,
    email: "partners@payflo.dev",
  },
];

export const metadata: Metadata = {
  title: "Contact Us - Payflo",
  description:
    "Get in touch with our team for sales inquiries, technical support, or partnership opportunities.",
};

export default async function ContactPage() {
  return (
    <>
      <AnimatePage />

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-6 text-gray-600 text-xl">
              We'd love to hear from you. Reach out to our team with any questions or inquiries.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div
                key={`contact-method-${index}`}
                className="animate-on-scroll rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-payflo-purple/10 text-payflo-purple">
                  {createElement(method.icon, { className: "size-8" })}
                </div>
                <h3 className="font-semibold text-xl">{method.title}</h3>
                <p className="mt-3 text-gray-600">{method.description}</p>
                <a
                  href={`mailto:${method.email}`}
                  className="mt-4 block font-medium text-payflo-purple hover:underline"
                >
                  {method.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-8 md:p-12">
              <h2 className="mb-6 font-bold text-2xl md:text-3xl">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-payflo-purple focus:ring-2 focus:ring-payflo-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-payflo-purple focus:ring-2 focus:ring-payflo-purple"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-payflo-purple focus:ring-2 focus:ring-payflo-purple"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-payflo-purple focus:ring-2 focus:ring-payflo-purple"
                    required
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="Sales Inquiry">Sales Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-payflo-purple focus:ring-2 focus:ring-payflo-purple"
                    required
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-full md:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Visit Us</h2>
            <p className="mt-4 text-gray-600 text-xl">
              Our headquarters is located in San Francisco, California.
            </p>
            <address className="mt-6 text-gray-600 not-italic">
              123 Tech Avenue, Suite 400
              <br />
              San Francisco, CA 94107
              <br />
              United States
            </address>
          </div>

          <div className="mt-12 h-96 animate-on-scroll overflow-hidden rounded-xl">
            <div className="flex h-full w-full items-center justify-center bg-payflo-gray">
              <p className="text-gray-500">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
