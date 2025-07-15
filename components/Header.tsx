import Image from "next/image";
import Link from "next/link";
import logoSrc from "@/public/assets/logo.svg";

const navItems = [
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-gray-100 border-b bg-white/80 backdrop-blur-md"
      role="banner"
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center rounded-smtransition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          aria-label="Payflo home"
        >
          <Image
            src={logoSrc}
            alt="Payflo Logo"
            width={120}
            height={40}
            className="transition-all duration-300 hover:brightness-110 focus:brightness-110"
          />
        </Link>

        <nav
          className="hidden items-center space-x-8 md:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <Link
              key={`nav-item-${index}`}
              href={item.href}
              className="rounded-smpx-2 py-1 text-gray-700 transition-all duration-300 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="relative hidden rounded-smpx-2 py-1 text-payflo-dark transition-all duration-300 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 md:inline-block"
          >
            Log In
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-payflo-purple transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/book-demo"
            className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          >
            Book a Demo
          </Link>

          <button
            id="menu-toggle"
            className="flex items-center rounded-smp-1 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden w-full border-gray-100 border-t bg-white md:hidden"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container-custom space-y-4 py-4">
          {navItems.map((item, index) => (
            <Link
              key={`mobile-nav-item-${index}`}
              href={item.href}
              className="block rounded-smpx-2 py-2 text-gray-700 transition-all duration-300 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block rounded-smpx-2 py-2 text-gray-700 transition-all duration-300 hover:text-payflo-purple focus:text-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
}
