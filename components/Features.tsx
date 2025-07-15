import { Globe, Star, Zap } from "lucide-react";
import Image from "next/image";
import { createElement } from "react";
import featureImage1 from "@/public/assets/feature-1.svg";
import featureImage2 from "@/public/assets/feature-2.svg";
import featureImage3 from "@/public/assets/feature-3.svg";
import GridPattern from "@/public/grid-pattern.svg";

const features = [
  {
    title: "Become indispensable",
    description:
      "Adding a payroll solution on top of your existing features means your customers can get everything done inside their favorite platform: yours.",
    icon: Star,
    image: featureImage1,
  },
  {
    title: "Access the most modern tools",
    description:
      "We haven't just replicated what's out there – we've leveled up. Our infrastructure is faster to set up, easier to maintain, more scalable and less error-prone.",
    icon: Zap,
    image: featureImage2,
  },
  {
    title: "Now available in the U.S. & Canada",
    description:
      "Launch your product out in the world within just a few weeks and get fast, valuable feedback from customers to keep growing.",
    icon: Globe,
    image: featureImage3,
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-payflo-gray py-20">
      <div className="parallax absolute inset-0 opacity-5" data-speed="0.1">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('${GridPattern.src}')`,
          }}
        ></div>
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="animate-on-scroll font-bold text-3xl delay-0 md:text-4xl">
            Everything you need to build embedded payroll
          </h2>
          <p className="mt-4 animate-on-scroll text-gray-600 text-xl delay-1">
            Our tools combine ease and flexibility with maximum customization. No matter how you
            choose to build, you can launch quickly and ensure a stellar user experience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className={`feature-card animate-on-scroll delay-${index + 2} group`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue text-white transition-transform duration-300 group-hover:scale-110">
                {feature.icon &&
                  createElement(feature.icon, {
                    className: "h-6 w-6 transition-transform duration-300 group-hover:rotate-12",
                  })}
              </div>
              <h3 className="font-semibold text-xl transition-colors duration-300 group-hover:text-payflo-purple">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
              <div className="hover-zoom mt-6 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="h-auto w-full rounded-lg transition-all duration-500"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
