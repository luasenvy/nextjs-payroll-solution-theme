import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Payflo",
};

export default async function notfound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20 md:py-32">
      <div className="container-custom text-center">
        <h1 className="mb-6 font-bold text-4xl md:text-6xl">404</h1>
        <h2 className="mb-6 font-bold text-2xl md:text-3xl">Page Not Found</h2>
        <p className="mx-auto mb-10 max-w-xl text-gray-600 text-xl">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
