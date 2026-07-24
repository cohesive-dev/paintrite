import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABand from "@/app/components/CTABand";
import Faq from "@/app/components/Faq";
import { LICENSE, INSURANCE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | PaintRite Painters — Family Owned in San Diego Since 1994",
  description:
    "Founded over 30 years ago by Tony Zuniga, PaintRite Painters is a family owned San Diego painting contractor built on integrity, professionalism, and craftsmanship.",
};

const VALUES = [
  {
    title: "Integrity",
    desc: "Honest estimates, honest timelines, honest answers. If something on your property needs attention before paint goes on it, you'll hear about it — even when that's not the easy conversation.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Professionalism",
    desc: "Crews that show up when they said they would, protect your floors and furniture, clean up daily, and communicate clearly from the first call to the final walkthrough.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
  },
  {
    title: "Craftsmanship",
    desc: "Meticulous prep, premium paints and materials, and clean lines that hold up. The finish is what you see — the preparation underneath it is what makes it last.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
  },
];

const STATS = [
  { value: "1994", label: "Year founded" },
  { value: "30+", label: "Years of experience" },
  { value: "5.0", label: "Customer rating" },
  { value: "100%", label: "Family operated" },
];

const CREDENTIALS = [
  { title: "CSLB Licensed", desc: "License #684193, in good standing with the Contractors State License Board." },
  { title: "Fully Insured", desc: `${INSURANCE}. Licensed, bonded, and insured for your protection.` },
  { title: "Google Guaranteed", desc: "Background-checked and backed by Google's service provider guarantee." },
  { title: "PCA Accredited", desc: "Accredited contractor with the Painting Contractors Association, plus HomeAdvisor screened & approved." },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="About"
          title="About PaintRite Painters"
          intro="Locally owned and operated since 1994. Blending traditional principles with modern methods — because when it's worth doing, it's worth doing right."
          image="/images/about-fleet.jpg"
        />

        {/* Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                  Our story
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-5">
                  Started by a painter who cared about the details.
                </h2>
                <div className="space-y-4 text-body text-lg leading-relaxed">
                  <p>
                    PaintRite Painters was founded over 30 years ago by{" "}
                    <strong className="text-ink font-semibold">Tony Zuniga</strong>, a passionate
                    painter with a vision to serve San Diego&apos;s residents and businesses. It began
                    as a small, family-owned business with a simple idea: do the work properly, treat
                    people honestly, and let the results bring the next customer.
                  </p>
                  <p>
                    Three decades later, PaintRite has grown into a reputable painting contractor
                    serving all of San Diego County — while staying exactly what it started as: a
                    family-operated enterprise that blends traditional principles with modern methods.
                  </p>
                  <p>
                    That motto — <em>&ldquo;When it&apos;s worth doing right&rdquo;</em> — isn&apos;t
                    marketing. It&apos;s the standard every crew is held to, on every job, whether
                    it&apos;s a single bedroom in Lemon Grove or a full commercial exterior in
                    Carlsbad.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="font-display inline-block mt-8 px-6 py-3 rounded-md border-2 border-navy text-navy text-sm font-bold hover:bg-navy hover:text-white transition-colors"
                >
                  Work with us →
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-team.jpg"
                    alt="A PaintRite painter in company uniform beside a PaintRite truck"
                    className="w-full h-[26rem] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-yellow rounded-xl px-6 py-4 shadow-lg">
                  <div className="font-display text-2xl font-black text-navy-deep leading-none">1994</div>
                  <div className="text-xs font-semibold text-navy-deep/70 mt-1">Family owned</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-navy-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <div className="font-display text-xs font-bold text-yellow uppercase tracking-widest mb-3">
                What we stand for
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Integrity, professionalism, craftsmanship.
              </h2>
              <p className="text-white/70 text-lg">
                Three values that decide how we quote, how we prep, and how we leave your property at
                the end of the day.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-yellow flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                      {v.icon}
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-navy py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-black text-yellow leading-none">{s.value}</div>
                <div className="text-sm text-white/75 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                Credentials
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                Licensed, insured, and accountable.
              </h2>
              <p className="text-body text-lg">
                Every credential below is one more reason you don&apos;t have to take our word for it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CREDENTIALS.map((c) => (
                <div key={c.title} className="bg-soft border border-line rounded-xl p-6 text-center">
                  <h3 className="font-display font-bold text-ink mb-2">{c.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted">{LICENSE} · {INSURANCE}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-soft border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                Questions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Frequently asked.
              </h2>
            </div>
            <Faq />
          </div>
        </section>

        <CTABand
          heading="Ready to see what 30 years of experience looks like?"
          sub="Free, no-obligation estimates across San Diego County."
        />
      </main>
      <Footer />
    </>
  );
}
