export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-payflo-purple to-payflo-blue py-20 text-white">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="-top-40 -left-40 absolute h-80 w-80 animate-pulse rounded-full bg-white blur-3xl"></div>
        <div
          className="-right-20 absolute top-40 h-60 w-60 animate-pulse rounded-full bg-white blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="-bottom-40 absolute left-1/3 h-80 w-80 animate-pulse rounded-full bg-white blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl animate-on-scroll text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Ready to add payroll to your platform?</h2>
          <p className="mt-6 text-xl opacity-90">
            Join the growing number of SaaS platforms using Payflo to offer embedded payroll
            solutions to their customers.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/book-demo"
              className="btn transform bg-white text-payflo-purple transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-lg"
            >
              Book a Demo
            </a>
            <a
              href="/documentation"
              className="btn transform border border-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
