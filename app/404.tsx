---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Not Found - Payflo">
  <section className="py-20 md:py-32 flex items-center min-h-[60vh]">
    <div className="container-custom text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary">
        Back to Home
      </a>
    </div>
  </section>
</Layout>
