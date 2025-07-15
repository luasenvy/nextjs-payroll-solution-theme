import Image from "next/image";
import HeroImage from "@/public/assets/hero-dashboard.webp";
import GridPattern from "@/public/grid-pattern.svg";

import Avatar1 from "@/public/testimonial-avatar-1.webp";
import Avatar2 from "@/public/testimonial-avatar-2.webp";
import Avatar3 from "@/public/testimonial-avatar-3.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="parallax absolute inset-0 opacity-5" data-speed="0.2">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('${GridPattern.src}')`,
          }}
        ></div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="animate-on-scroll font-bold text-4xl leading-tight delay-0 md:text-5xl lg:text-6xl">
              Launch <span className="gradient-text">Payroll</span> Fast
            </h1>
            <p className="mt-6 max-w-lg animate-on-scroll text-gray-600 text-xl delay-1">
              We make it fast and easy for SaaS platforms to build and embed payroll using our
              infrastructure, APIs and UI components.
            </p>
            <div className="mt-8 flex animate-on-scroll flex-col gap-4 delay-2 sm:flex-row">
              <a href="/book-demo" className="btn btn-primary">
                Book a Demo
              </a>
              <a href="/documentation" className="btn btn-secondary">
                Read Documentation
              </a>
            </div>
            <div className="mt-8 flex animate-on-scroll items-center space-x-4 delay-3">
              <div className="-space-x-2 flex" role="img" aria-label="Customer testimonial avatars">
                <Image
                  src={Avatar1}
                  alt="Sarah from TechCorp"
                  className="h-10 w-10 rounded-full border-2 border-white transition-transform duration-300 hover:z-10 hover:scale-110"
                />
                <Image
                  src={Avatar2}
                  alt="Michael from DataFlow"
                  className="h-10 w-10 rounded-full border-2 border-white transition-transform duration-300 hover:z-10 hover:scale-110"
                />
                <Image
                  src={Avatar3}
                  alt="Emma from CloudSuite"
                  className="h-10 w-10 rounded-full border-2 border-white transition-transform duration-300 hover:z-10 hover:scale-110"
                />
              </div>
              <div className="text-gray-600 text-sm">Trusted by innovative SaaS platforms</div>
            </div>
          </div>

          <div className="animate-on-scroll delay-4">
            <div className="hover-zoom relative">
              <div className="-inset-0.5 absolute rounded-xl bg-gradient-to-r from-payflo-purple to-payflo-blue opacity-30 blur transition-opacity duration-300 hover:opacity-50"></div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                <Image
                  src={HeroImage}
                  alt="Payflo Dashboard"
                  className="h-auto w-full transition-all duration-500"
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
