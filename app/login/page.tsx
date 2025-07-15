import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { Metadata } from "next";
import Image from "next/image";
import { AnimatePage } from "@/components/AnimatePage";
import logoImage from "@/public/assets/logo-square.svg";

export const metadata: Metadata = {
  title: "Privacy Policy | Payroll Solution",
};

export default async function LoginPage() {
  return (
    <>
      <AnimatePage />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-payflo-gray/50 to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <a href="/" className="flex items-center space-x-2">
              <Image src={logoImage} alt="Payflo" className="h-8 w-auto" />
            </a>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h1 className="font-bold text-2xl">Welcome back</h1>
              <p className="mt-2 text-gray-600">Log in to your Payflo account</p>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-payflo-purple focus:ring-payflo-purple/20"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-700 text-sm">
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="font-medium text-payflo-purple text-sm hover:text-payflo-purple/80"
                >
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-lg border border-transparent bg-payflo-purple px-4 py-3 font-medium text-sm text-white shadow-sm hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-gray-200 border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-700 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
                >
                  <SiGithub className="mr-2 h-5 w-5" />
                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-700 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
                >
                  <SiGoogle className="mr-2 h-5 w-5" />
                  Google
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600 text-sm">
            Don't have an account?
            <a
              href="/book-demo"
              className="font-medium text-payflo-purple hover:text-payflo-purple/80"
            >
              Book a demo
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
