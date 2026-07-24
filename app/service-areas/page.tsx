import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABand from "@/app/components/CTABand";
import AreaTabs from "@/app/components/AreaTabs";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | PaintRite Painters — Serving San Diego County",
  description:
    "PaintRite Painters serves Chula Vista, Escondido, Oceanside, Del Mar, Ramona, La Mesa, Solana Beach, National City, El Cajon, Carlsbad, and more across San Diego County.",
};

const HIGHLIGHTS = [
  { city: "Chula Vista", desc: "Our home base and where we've painted the most homes. Interior repaints, exterior refreshes, and multi-family work across every neighborhood in the city." },
  { city: "Escondido", desc: "Inland heat is hard on an exterior. We spec coatings that hold their color through Escondido summers instead of chalking out in two years." },
  { city: "Oceanside", desc: "Coastal salt air attacks wood and finishes fast. We handle the repair work first, then protect it with marine-tough exterior products." },
  { city: "Del Mar", desc: "High-end interiors and coastal exteriors where the detail work has to be flawless. Custom color matching and cabinetry finishes included." },
  { city: "Carlsbad", desc: "Residential and commercial repaints from the village to the inland tracts, scheduled around your household or your business hours." },
  { city: "La Mesa", desc: "Older homes with real character — and real prep needs. Drywall repair, wood repair, and wallpaper removal are all part of the job here." },
  { city: "El Cajon", desc: "Full-service interior and exterior painting, including stucco repair and decorative concrete coating for driveways and patios." },
  { city: "Encinitas & Solana Beach", desc: "Coastal properties where curb appeal matters and the ocean weathers everything. Durable finishes, clean lines, respectful crews." },
  { city: "Ramona & Fallbrook", desc: "Inland and rural properties, including larger homes, outbuildings, decks, and custom stain-work on wood that's earned some sun." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Service Areas"
          title="Where We Work"
          intro="We provide comprehensive residential and commercial painting services to communities throughout the coastal San Diego region — meticulous and personalized on every project."
          image="/images/areas.jpg"
        />

        {/* Full city list, grouped by region */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                  Full coverage
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                  15+ communities, one standard.
                </h2>
                <p className="text-body text-lg mb-6">
                  Whether you&apos;re on the coast or inland, you get the same crew, the same prep, and
                  the same finish. Don&apos;t see yours? Call us — if you&apos;re in San Diego County,
                  there&apos;s a good chance we can help.
                </p>
                <a
                  href={PHONE_HREF}
                  className="font-display inline-block px-6 py-3 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors shadow-sm"
                >
                  Call {PHONE_DISPLAY} →
                </a>
              </div>

              <AreaTabs />
            </div>
          </div>
        </section>

        {/* City detail cards */}
        <section className="py-24 bg-soft border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
                San Diego County
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                What we see in each community.
              </h2>
              <p className="text-body text-lg">
                Different neighborhoods bring different problems. Here&apos;s what the work usually
                looks like where you live.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {HIGHLIGHTS.map((h) => (
                <article key={h.city} className="bg-white border border-line rounded-xl p-6">
                  <h3 className="font-display font-bold text-ink mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-navy shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.572l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {h.city}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{h.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          heading="In our service area? Let's get you a quote."
          sub="Free estimates, Mon–Sat 7am–7pm."
        />
      </main>
      <Footer />
    </>
  );
}
