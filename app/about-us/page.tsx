import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Brain, Code, Puzzle, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import { AnimatePage } from "@/components/AnimatePage";
import teamImage from "@/public/assets/team-photo.webp";
import AvatarJuan from "@/public/avatar-juan.webp";
import AvatarMarcus from "@/public/avatar-marcus.webp";
import AvatarPriya from "@/public/avatar-priya.webp";
import AvatarSophia from "@/public/avatar-sophia.webp";

const teamMembers = [
  {
    name: "Juan Rodriguez",
    role: "Founder & CEO",
    bio: "Built a 10-country payroll engine from the ground up and scaled it before selling to Intuit. Spent six years engineering Intuit's payroll product.",
    avatar: AvatarJuan,
    social: {
      twitter: "https://twitter.com/juanr",
    },
  },
  {
    name: "Sophia Chen",
    role: "CTO",
    bio: "Former engineering leader at Gusto with 12+ years experience in fintech. Expert in building secure, scalable financial infrastructure.",
    avatar: AvatarSophia,
    social: {
      github: "https://github.com/sophiac",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Product veteran from Xero with deep knowledge of the payroll space and what platforms need to succeed.",
    avatar: AvatarMarcus,
    social: {
      twitter: "https://twitter.com/marcusj",
    },
  },
  {
    name: "Priya Patel",
    role: "Head of Compliance",
    bio: "Former tax attorney with extensive experience in multi-state payroll tax compliance and regulatory requirements.",
    avatar: AvatarPriya,
    social: {},
  },
];

const values = [
  {
    title: "Empower Developers",
    description:
      "We're giving companies and developers access to the best tools possible to succeed in a competitive market and build payroll for the future.",
    icon: Code,
  },
  {
    title: "Simplify Complexity",
    description:
      "Payroll doesn't have to be hard. We make it fast, easy, and flexible to please both you and your customers.",
    icon: Puzzle,
  },
  {
    title: "Deep Expertise",
    description:
      "We know payroll so that you don't have to. You can trust that we'll take care of the complexities while you focus on satisfying your customers.",
    icon: Brain,
  },
  {
    title: "Build Trust",
    description:
      "We're committed to maintaining your trust, which we accomplish by ensuring 100% compliance and treating your customers like our own.",
    icon: ShieldCheck,
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Idea",
    description:
      "Juan builds and sells his first payroll engine to Intuit, sparking the idea for a better solution.",
  },
  {
    year: "2020",
    title: "Team Assembly",
    description:
      "Key team members from Intuit, Gusto, and Xero join forces to reimagine payroll infrastructure.",
  },
  {
    year: "2021",
    title: "Payflo Launch",
    description:
      "First version of Payflo's API launches, allowing platforms to embed payroll capabilities.",
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Payflo expands to serve platforms across multiple industries and countries.",
  },
];

export const metadata: Metadata = {
  title: "Payflo - About Us",
  description:
    "Read about Payflo's mission, values, team, and the story of how we came to build the most modern payroll infrastructure on the market.",
};

export default async function AboutUsPage() {
  return (
    <>
      <AnimatePage />

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h1 className="font-bold text-4xl leading-tight md:text-5xl">
              About <span className="gradient-text">Payflo</span>
            </h1>
            <p className="mt-6 text-gray-600 text-xl">
              We empower developers to reimagine payroll by building modern infrastructure designed
              for modern work.
            </p>
          </div>

          <div className="mt-16 animate-on-scroll">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={teamImage}
                alt="Payflo Team"
                className="h-auto w-full"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Our Values</h2>
            <p className="mt-4 text-gray-600 text-xl">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={`value-${index}`}
                className="animate-on-scroll rounded-xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue text-white">
                  {createElement(value.icon, { className: "size-6" })}
                </div>
                <h3 className="font-semibold text-xl">{value.title}</h3>
                <p className="mt-3 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Our Story</h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative">
              {timeline.map((event, index) => (
                <div
                  key={`timeline-event-${index}`}
                  className="relative animate-on-scroll pb-12 pl-8"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-payflo-purple to-payflo-blue"></div>
                  <div className="absolute top-2 left-[-4px] h-2 w-2 rounded-full bg-payflo-purple"></div>
                  <div className="font-semibold text-payflo-purple text-sm">{event.year}</div>
                  <h3 className="mt-2 font-semibold text-xl">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="font-medium text-gray-700 text-xl">
                From the team that brought you QuickBooks Payroll, Gusto, and Xero, we're building
                the infrastructure we wish we had when we started out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-payflo-gray py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <h2 className="font-bold text-3xl md:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-gray-600 text-xl">
              The experts behind Payflo's payroll infrastructure.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={`team-member-${index}`}
                className="animate-on-scroll rounded-xl bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-payflo-purple/20"
                  />
                  <div className="absolute right-0 bottom-4 h-6 w-6 rounded-full border-2 border-white bg-green-400"></div>
                </div>
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="font-medium text-payflo-purple">{member.role}</p>
                <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-payflo-purple"
                    >
                      <SiX className="size-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-payflo-purple"
                    >
                      <SiGithub className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-payflo-purple to-payflo-blue py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl animate-on-scroll text-center">
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1 font-medium text-sm">
              We're Hiring!
            </span>
            <h2 className="font-bold text-3xl md:text-4xl">Join Our Team</h2>
            <p className="mt-6 text-xl opacity-90">
              We're on a mission to transform payroll infrastructure and we're looking for talented
              people to join us.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/careers" className="btn bg-white text-payflo-purple hover:bg-opacity-90">
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="btn border-2 border-white bg-transparent hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
