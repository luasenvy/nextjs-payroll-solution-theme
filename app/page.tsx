import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Payflo - Launch Payroll Fast",
};

export default async function IndexPage() {
  return (
    <>
      <AnimatePage />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
