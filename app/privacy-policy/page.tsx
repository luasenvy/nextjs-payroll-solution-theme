import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";

export const metadata: Metadata = {
  title: "Privacy Policy | Payroll Solution",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnimatePage />
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="prose prose-slate mx-auto max-w-3xl">
          <h1 className="mb-8 font-bold text-4xl">Privacy Policy</h1>

          <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">1. Introduction</h2>
            <p>
              Welcome to Payroll Solution. We respect your privacy and are committed to protecting
              your personal data. This privacy policy will inform you about how we look after your
              personal data when you visit our website and tell you about your privacy rights and
              how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul className="mt-4 list-disc pl-6">
              <li>Identity Data: includes first name, last name, username</li>
              <li>Contact Data: includes email address and telephone numbers</li>
              <li>Technical Data: includes IP address, browser type and version</li>
              <li>Usage Data: includes information about how you use our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will
              use your personal data in the following circumstances:
            </p>
            <ul className="mt-4 list-disc pl-6">
              <li>To provide our services to you</li>
              <li>To improve our website and services</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from
              being accidentally lost, used, or accessed in an unauthorized way. We limit access to
              your personal data to those employees, agents, contractors, and other third parties
              who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to
              your personal data, including the right to:
            </p>
            <ul className="mt-4 list-disc pl-6">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-semibold text-2xl">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please
              contact us at:
            </p>
            <div className="mt-4">
              <p>Email: privacy@payrollsolution.com</p>
              <p>Address: [Your Company Address]</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
