import "./bookdemo.css";

import { FileBadge, LockKeyhole, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { AnimatePage } from "@/components/AnimatePage";
import { BookDemoApp } from "./BookDemoApp";

export const metadata: Metadata = {
  title: "Book a Demo - Payflo Payroll Infrastructure",
  description:
    "Schedule a demo to see how Payflo can help you add payroll capabilities to your platform.",
};

export default async function BookDemoPage() {
  return (
    <>
      <AnimatePage />
      <BookDemoApp />
      <div className="min-h-screen bg-gradient-to-b from-payflo-gray/50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl">Book a Demo</h1>
            <p className="text-gray-600 text-xl">
              See how Payflo can help you add payroll capabilities to your platform
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
            <div className="flex border-gray-100 border-b" id="progress-steps">
              <div
                className="current-step flex-1 border-gray-100 border-r bg-payflo-purple/5 p-4 text-center"
                data-step="1"
              >
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-payflo-purple text-white">
                    <span>1</span>
                  </div>
                </div>
                <span className="font-medium text-sm">Company Info</span>
              </div>
              <div className="flex-1 border-gray-100 border-r p-4 text-center" data-step="2">
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    <span>2</span>
                  </div>
                </div>
                <span className="font-medium text-sm">Contact Details</span>
              </div>
              <div className="flex-1 p-4 text-center" data-step="3">
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    <span>3</span>
                  </div>
                </div>
                <span className="font-medium text-sm">Schedule Demo</span>
              </div>
            </div>

            <form id="demo-form" className="p-8">
              <div className="step-content" id="step-1">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company-size"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Company Size
                    </label>
                    <select
                      id="company-size"
                      name="company-size"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    >
                      <option value="">Select industry</option>
                      <option value="hr-software">HR Software</option>
                      <option value="workforce-management">Workforce Management</option>
                      <option value="time-tracking">Time Tracking</option>
                      <option value="erp">ERP</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="step-content hidden" id="step-2">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="mb-1 block font-medium text-gray-700 text-sm"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="mb-1 block font-medium text-gray-700 text-sm"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="work-email"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="work-email"
                      name="work-email"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="job-title"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="job-title"
                      name="job-title"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block font-medium text-gray-700 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div className="step-content hidden" id="step-3">
                <div className="space-y-6">
                  <div>
                    <label className="mb-1 block font-medium text-gray-700 text-sm">
                      Preferred Demo Date
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        type="button"
                        className="rounded-lg border border-gray-200 px-4 py-3 hover:border-payflo-purple hover:bg-payflo-purple/5 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                        data-date="tomorrow"
                      >
                        Tomorrow
                        <br />
                        <span className="text-gray-500 text-sm">10:00 AM</span>
                      </button>
                      <button
                        type="button"
                        className="rounded-lg border border-gray-200 px-4 py-3 hover:border-payflo-purple hover:bg-payflo-purple/5 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                        data-date="day-after"
                      >
                        Day After
                        <br />
                        <span className="text-gray-500 text-sm">2:00 PM</span>
                      </button>
                      <button
                        type="button"
                        className="rounded-lg border border-gray-200 px-4 py-3 hover:border-payflo-purple hover:bg-payflo-purple/5 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                        data-date="custom"
                      >
                        Custom Date
                        <br />
                        <span className="text-gray-500 text-sm">Choose Time</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timezone"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Your Timezone
                    </label>
                    <select
                      id="timezone"
                      name="timezone"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block font-medium text-gray-700 text-sm"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-payflo-purple focus:outline-none focus:ring-2 focus:ring-payflo-purple/20"
                      placeholder="Tell us about your specific needs or any questions you have..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  id="prev-step"
                  className="hidden rounded-lg border border-gray-200 px-6 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
                >
                  Previous
                </button>
                <button
                  type="button"
                  id="next-step"
                  className="ml-auto rounded-lg bg-payflo-purple px-6 py-3 text-white hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
                >
                  Next
                </button>
                <button
                  type="submit"
                  id="submit-form"
                  className="ml-auto hidden rounded-lg bg-payflo-purple px-6 py-3 text-white hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:ring-offset-2"
                >
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600 text-sm">Trusted by leading software companies</p>
            <div className="flex justify-center space-x-8">
              <ShieldCheck className="size-6 text-gray-400" />
              <LockKeyhole className="size-6 text-gray-400" />
              <FileBadge className="size-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
