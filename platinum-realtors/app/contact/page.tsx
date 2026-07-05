"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

// Lucide's brand icons (Instagram/Facebook/Twitter) get renamed or dropped
// between versions, so these are defined locally to avoid build breaks.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your form handler / API route
    console.log(form);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ---------- NAVBAR ---------- */}
      <header className="relative z-20 flex items-center justify-between bg-[#292929] px-6 py-3 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DE4252]">
            <span className="text-xs font-bold text-[#DE4252]">P</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide text-white">
              PLATINUM
            </p>
            <p className="text-[9px] tracking-[0.2em] text-gray-400">
              REAL ESTATE
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          <a href="#" className="hover:text-[#DE4252]">
            Home
          </a>
          <a
            href="#"
            className="border border-[#DE4252] px-3 py-1 text-[#DE4252]"
          >
            About Us
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#DE4252]">
            Project Location <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-[#DE4252]">
            Contact Us
          </a>
        </nav>

        <button className="rounded bg-[#DE4252] px-5 py-2 text-sm font-medium text-white hover:bg-[#c73948]">
          Contact
        </button>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative flex h-[260px] items-center overflow-hidden bg-black md:h-[340px]">
        <Image
          src="/images/hero-building.jpg"
          alt="Platinum Real Estate building at night"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 px-6 md:px-16">
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-3 text-sm text-gray-200 md:text-base">
            Your Dream Property Starts with a Conversation
          </p>
        </div>
        {/* bottom red divider */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#DE4252] via-[#DE4252]/40 to-transparent" />
      </section>

      {/* ---------- GET IN TOUCH ---------- */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-12">
        {/* Left: text + info */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Contact us
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1a1a1a] md:text-4xl">
            Get in Touch with Us
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
            Whether you&apos;re searching for your next home or exploring
            investment opportunities, our team is ready to help you every
            step of the way.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#DE4252]" />
              <span>+91**********</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#DE4252]" />
              <span>platinumsales@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#DE4252]" />
              <span>
                Vibe Building, CP-67, Mohali, Sahibzada Ajit Singh Nagar,
                Punjab 140306
              </span>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-sm font-medium text-gray-800">
              Follow Us
            </p>
            <div className="flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#DE4252] hover:text-[#DE4252]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: image collage */}
        <div className="relative mx-auto h-[340px] w-full max-w-sm md:h-[400px]">
          <div className="absolute right-0 top-0 h-[230px] w-[190px] overflow-hidden rounded-t-full border-4 border-white shadow-lg">
            <Image
              src="/images/bedroom.jpg"
              alt="Bedroom interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 top-[90px] h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/images/living-room.jpg"
              alt="Living room interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-[40px] h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/images/statue.jpg"
              alt="Decorative statue"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- FORM ---------- */}
      <section className="relative overflow-hidden bg-black px-6 py-16 md:px-12">
        {/* decorative diagonal red streaks */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(222,66,82,0.35),_transparent_60%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[500px] w-[500px] rotate-12 bg-gradient-to-tl from-[#DE4252]/40 via-transparent to-transparent blur-2xl" />

        <div className="relative mx-auto flex max-w-5xl justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg rounded-md bg-white p-8 shadow-xl"
          >
            <h3 className="mb-6 text-lg font-semibold text-[#1a1a1a]">
              How can we help you reach your goals?
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#DE4252]"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#DE4252]"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#DE4252]"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#DE4252]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full resize-none rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#DE4252]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded bg-[#DE4252] px-6 py-2 text-sm font-medium text-white hover:bg-[#c73948]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}