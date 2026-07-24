"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="PaintRite Painters"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-display text-[15px] font-semibold text-ink hover:text-navy transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-bold text-ink hover:text-navy transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="font-display px-5 py-2.5 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden p-2 text-navy-deep hover:bg-soft rounded-md"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-ink hover:bg-soft rounded-md"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-sm font-bold text-ink hover:bg-soft rounded-md"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-display mt-2 py-2.5 px-3 rounded-md bg-yellow text-navy-deep text-sm font-bold text-center hover:bg-yellow-dark"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
