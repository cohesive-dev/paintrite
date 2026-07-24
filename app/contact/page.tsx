import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import BookingEmbed from "@/app/components/BookingEmbed";
import { PHONE_DISPLAY, PHONE_HREF, LICENSE, INSURANCE } from "@/lib/site";
import { ALL_CITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact PaintRite Painters San Diego",
  description:
    "Request a free painting estimate from PaintRite Painters. Call (619) 843-9026, Mon–Sat 7am–7pm. Serving San Diego County since 1994.",
};

const CREDENTIALS = [
  LICENSE,
  INSURANCE,
  "Google Guaranteed Service Provider",
  "HomeAdvisor Screened & Approved",
  "PCA Accredited Contractor",
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Contact"
          title="Get a Free Quote"
          intro="Tell us about your project and we'll get back to you within one business day. No pressure, no obligation — just an honest estimate."
          image="/images/hero.jpg"
        />

        {/* Booking form — full width so the embedded form has room to breathe */}
        <section id="book" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                Request an appointment
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                Let&apos;s talk about your project.
              </h2>
              <p className="text-body text-lg">
                The more you can tell us, the more accurate your estimate will be. Not sure about the
                details yet? Send what you know — we&apos;ll take it from there.
              </p>
            </div>
            <BookingEmbed />
          </div>
        </section>

        {/* Contact details */}
        <section className="py-24 bg-soft border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              <div className="bg-navy-deep rounded-xl p-7">
                <div className="font-display text-[11px] font-bold text-yellow tracking-[0.1em] uppercase mb-2">
                  Call us direct
                </div>
                <a
                  href={PHONE_HREF}
                  className="font-display block text-2xl font-black text-white hover:text-yellow transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-sm text-white/60 mt-2">
                  The fastest way to reach us. A real person answers.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-7">
                <h3 className="font-display font-bold text-ink mb-3">Hours</h3>
                <p className="text-body mb-1">
                  <strong className="text-ink font-semibold">Monday – Saturday:</strong> 7:00am –
                  7:00pm
                </p>
                <p className="text-body">
                  <strong className="text-ink font-semibold">Sunday:</strong> Closed
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-7">
                <h3 className="font-display font-bold text-ink mb-3">Service area</h3>
                <p className="text-body leading-relaxed text-sm">
                  Based in San Diego, CA and serving communities across San Diego County —{" "}
                  {ALL_CITIES.join(", ")}.
                </p>
              </div>

              <div className="bg-white border border-line rounded-xl p-7">
                <h3 className="font-display font-bold text-ink mb-4">Licensed &amp; insured</h3>
                <ul className="space-y-3">
                  {CREDENTIALS.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-navy shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-body text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
