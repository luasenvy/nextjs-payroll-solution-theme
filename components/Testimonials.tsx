import Image from "next/image";
import GridPattern from "@/public/grid-pattern.svg";
import Avatar1 from "@/public/testimonial-avatar-1.webp";
import Avatar2 from "@/public/testimonial-avatar-2.webp";
import Avatar3 from "@/public/testimonial-avatar-3.webp";

const testimonials = [
  {
    quote:
      "Integrating Payflo's payroll API into our platform took just weeks, not months. Our customers love having payroll built right into our software.",
    author: "Sarah Chen",
    role: "CTO at WorkFlow",
    avatar: Avatar1,
  },
  {
    quote:
      "The Payflo team guided us through every step of the implementation process. Their support has been exceptional from day one.",
    author: "Marcus Johnson",
    role: "Product Lead at StaffHub",
    avatar: Avatar2,
  },
  {
    quote:
      "Being able to offer embedded payroll has been a game-changer for customer retention. Payflo's infrastructure makes it seem like we built it ourselves.",
    author: "Priya Patel",
    role: "CEO at TeamSync",
    avatar: Avatar3,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="parallax absolute inset-0 opacity-5" data-speed="0.15">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('${GridPattern.src}')`,
          }}
        ></div>
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl animate-on-scroll text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Trusted by innovative SaaS platforms</h2>
          <p className="mt-4 text-gray-600 text-xl">
            See what our customers have to say about building with Payflo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="testimonial-card group animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 flex items-center">
                <div className="relative mr-4 overflow-hidden rounded-full transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-semibold transition-colors duration-300 group-hover:text-payflo-purple">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="relative text-gray-700 italic">
                <span className="-top-2 -left-1 absolute text-4xl text-payflo-purple opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40">
                  "
                </span>
                {testimonial.quote}
                <span className="-bottom-2 -right-1 absolute text-4xl text-payflo-purple opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40">
                  "
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
