const partners = [
  { name: "Acme Corp", logo: "/partner-logo-1.svg" },
  { name: "TechFlow", logo: "/partner-logo-2.svg" },
  { name: "Quantum", logo: "/partner-logo-3.svg" },
  { name: "Innovate", logo: "/partner-logo-4.svg" },
  { name: "PlatformX", logo: "/partner-logo-5.svg" },
  { name: "SyncWave", logo: "/partner-logo-6.svg" },
];

export function Partners() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="animate-on-scroll font-medium text-gray-500 tracking-wider delay-0">
            TRUSTED BY LEADING COMPANIES
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className={`group animate-on-scroll cursor-pointer delay-${index}`}
            >
              <div className="relative rounded-lg p-4 transition-all duration-300 hover:bg-gray-50">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="mx-auto h-12 w-auto transform opacity-60 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
