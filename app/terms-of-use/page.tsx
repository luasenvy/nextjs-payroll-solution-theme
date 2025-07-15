import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Payroll Solution",
};

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="prose prose-slate mx-auto max-w-3xl">
        <h1 className="mb-8 font-bold text-4xl">Terms of Use</h1>

        <p className="mb-6 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">1. Agreement to Terms</h2>
          <p>
            By accessing and using Payroll Solution's website and services, you agree to be bound by
            these Terms of Use and all applicable laws and regulations. If you do not agree with any
            of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on
            Payroll Solution's website for personal, non-commercial transitory viewing only. This is
            the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or "mirror" the materials on any other server
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">3. Disclaimer</h2>
          <p>
            The materials on Payroll Solution's website are provided on an 'as is' basis. Payroll
            Solution makes no warranties, expressed or implied, and hereby disclaims and negates all
            other warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">4. Limitations</h2>
          <p>
            In no event shall Payroll Solution or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the materials on the website,
            even if Payroll Solution or a Payroll Solution authorized representative has been
            notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Payroll Solution's website could include technical,
            typographical, or photographic errors. Payroll Solution does not warrant that any of the
            materials on its website are accurate, complete, or current. Payroll Solution may make
            changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">6. Links</h2>
          <p>
            Payroll Solution has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by Payroll Solution of the site. Use of any such linked website is at
            the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">7. Modifications</h2>
          <p>
            Payroll Solution may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current version
            of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and
            you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </main>
  );
}
