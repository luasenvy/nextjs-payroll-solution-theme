import Image from "next/image";
import PartnerLogo1 from "@/public/partner-logo-1.svg";
import PartnerLogo2 from "@/public/partner-logo-2.svg";
import PartnerLogo3 from "@/public/partner-logo-3.svg";
import PartnerLogo4 from "@/public/partner-logo-4.svg";
import PartnerLogo5 from "@/public/partner-logo-5.svg";
import PartnerLogo6 from "@/public/partner-logo-6.svg";

const partners = [
  { name: "Acme Corp", logo: PartnerLogo1 },
  { name: "TechFlow", logo: PartnerLogo2 },
  { name: "Quantum", logo: PartnerLogo3 },
  { name: "Innovate", logo: PartnerLogo4 },
  { name: "PlatformX", logo: PartnerLogo5 },
  { name: "SyncWave", logo: PartnerLogo6 },
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
                <Image
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
