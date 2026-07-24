import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABand from "@/app/components/CTABand";
import SplitSection from "@/app/components/SplitSection";
import { LICENSE, INSURANCE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Painting Services | PaintRite Painters San Diego",
  description:
    "Commercial interior and exterior painting in San Diego for retail, offices, restaurants, and multi-family properties. Minimal disruption, licensed & insured — (619) 843-9026.",
};

const SECTORS = [
  { title: "Retail", desc: "Storefronts and showrooms painted around your open hours." },
  { title: "Offices", desc: "Suites and common areas phased so your team keeps working." },
  { title: "Restaurants", desc: "Overnight crews so you never miss a service window." },
  { title: "Multi-Family", desc: "Apartment and HOA repaints coordinated with residents." },
];

const STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "We discuss your vision, preferences, and project goals — then scope the work and schedule around your operations, not ours.",
  },
  {
    step: "02",
    title: "Painting Process",
    desc: "Application using quality materials with attention to detail, executed by a licensed and insured crew that keeps your site clean and safe.",
  },
  {
    step: "03",
    title: "Final Inspection",
    desc: "We verify quality across the full scope and handle every touch-up needed before we call it complete and sign off with you.",
  },
];

const bold = (label: string, rest: string) => (
  <>
    <strong className="text-ink font-semibold">{label}</strong> {rest}
  </>
);

export default function Commercial() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Commercial"
          title="Commercial Painting"
          intro="Solutions meticulously crafted to minimize disruptions to your operations — for retail, offices, restaurants, and other establishments across San Diego County."
          image="/images/comm-exterior.jpg"
        />

        <SplitSection
          id="interior"
          eyebrow="Service 01"
          title="Commercial Interior Painting"
          paragraphs={[
            "PaintRite Painters — your premier destination for expert commercial interior painting services. The appearance of your commercial space significantly influences the success of your business, and we offer customized solutions for the environment you actually operate in.",
            "We schedule around you: nights, weekends, or phased by floor and suite. Your doors stay open, your customers stay comfortable, and the work still gets done right.",
          ]}
          points={[
            bold("Offices & suites —", "repaints phased so teams keep working through it."),
            bold("Retail & restaurants —", "after-hours crews so you never lose a service window."),
            bold("Common areas & corridors —", "durable, scrubbable finishes for high-traffic surfaces."),
            bold("Drywall & surface repair —", "damage corrected before the finish coat goes on."),
          ]}
          image="/images/comm-interior.jpg"
          imageAlt="Commercial interior painted by PaintRite"
          badge={{ title: "Interior", sub: "Off-hours available" }}
          cta="Request a bid →"
        />

        <SplitSection
          id="exterior"
          eyebrow="Service 02"
          title="Commercial Exterior Painting"
          paragraphs={[
            "PaintRite Painters — your trusted partner for professional commercial exterior painting services. The exterior of your building creates the first impression a customer ever forms, and this service is tailored specifically to meet the needs of your commercial exterior.",
          ]}
          points={[
            bold("Storefronts & facades —", "a fresh, sharp exterior that reads as a business worth walking into."),
            bold("Multi-family & apartment buildings —", "large-scale repaints coordinated around tenants."),
            bold("Wood, fascia & stucco repair —", "structural fixes handled alongside the paint scope."),
            bold("Parking structures & concrete coating —", "durable coatings for surfaces that take a beating."),
          ]}
          image="/images/comm-exterior.jpg"
          imageAlt="Commercial building exterior repainted by PaintRite"
          badge={{ title: "Exterior", sub: "Large-scale ready" }}
          cta="Request a bid →"
          flip
          soft
        />

        {/* Sectors */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                Who we work with
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                Built for businesses that can&apos;t afford downtime.
              </h2>
              <p className="text-body text-lg">
                Whatever you run, the goal is the same: a finish that looks right and a schedule that
                doesn&apos;t cost you revenue.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SECTORS.map((s) => (
                <div key={s.title} className="bg-soft border border-line rounded-xl p-6 text-center">
                  <h3 className="font-display font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-soft border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                Our process
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Three steps, transparent throughout.
              </h2>
            </div>
            <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
              {STEPS.map((s, i) => (
                <div key={s.step} className="relative">
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-12 left-1/2 h-px bg-line"
                      style={{ width: "calc(100% + 3rem)" }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="font-display w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 relative z-10 bg-yellow text-navy-deep">
                      {s.step}
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-3">{s.title}</h3>
                    <p className="text-body leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials band */}
        <section className="bg-navy-deep py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {LICENSE} · {INSURANCE} · Family operated since 1994
            </h2>
            <p className="text-white/70 text-lg">
              Transparent communication and timely project completion — the two things commercial
              clients actually need from a painting contractor.
            </p>
          </div>
        </section>

        <CTABand
          heading="Let's talk about your property."
          sub="Free commercial estimates across San Diego County."
        />
      </main>
      <Footer />
    </>
  );
}
