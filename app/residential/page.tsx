import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABand from "@/app/components/CTABand";
import SplitSection from "@/app/components/SplitSection";

export const metadata: Metadata = {
  title: "Residential Painting Services | PaintRite Painters San Diego",
  description:
    "Interior painting, exterior painting, and custom wood staining for San Diego homeowners. Premium materials, meticulous prep, free estimates — (619) 843-9026.",
};

const STEPS = [
  {
    title: "Color Consultation",
    desc: "We talk through your vision and help you land on colors you'll still love in five years — with samples on your walls, in your light.",
  },
  {
    title: "Prep & Protect",
    desc: "Furniture covered, floors masked, surfaces washed, patched, sanded, and primed. This is where a lasting finish is actually decided.",
  },
  {
    title: "Precision Painting",
    desc: "Premium product applied by a skilled crew who cut clean lines, keep a tidy site, and clean up at the end of every day.",
  },
  {
    title: "Final Walkthrough",
    desc: "We walk it with you, mark anything that isn't right, and touch it up until you're genuinely happy. Then we're out of your hair.",
  },
];

const bold = (label: string, rest: string) => (
  <>
    <strong className="text-ink font-semibold">{label}</strong> {rest}
  </>
);

export default function Residential() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Residential"
          title="Residential Painting"
          intro="Our residential painting services are crafted to meet the distinct needs and aspirations of homeowners — from interior revitalization to comprehensive renovations and cabinetry work."
          image="/images/resi-exterior.jpg"
        />

        <SplitSection
          id="interior"
          eyebrow="Service 01"
          title="Interior Painting"
          paragraphs={[
            "We specialize in interior painting services tailored to the unique needs and desires of homeowners like yourself. Whether you're refreshing a single room, conducting a full-scale renovation, or enhancing your cabinetry, we bring precision and premium materials to the work.",
          ]}
          points={[
            bold("Walls, ceilings & trim —", "clean lines, even coverage, no drips on the baseboards."),
            bold("Kitchen & bath cabinetry —", "a factory-smooth finish that transforms a room for a fraction of a remodel."),
            bold("Drywall & wood repair —", "cracks, dents, and damage handled before a drop of paint goes on."),
            bold("Acoustic & wallpaper removal —", "popcorn ceilings and dated wallpaper taken out cleanly."),
          ]}
          image="/images/resi-interior.jpg"
          imageAlt="Interior walls and ceilings painted by PaintRite"
          badge={{ title: "Interior", sub: "Room to whole-home" }}
          cta="Quote my interior →"
        />

        <SplitSection
          id="exterior"
          eyebrow="Service 02"
          title="Exterior Painting"
          paragraphs={[
            "We specialize in exterior painting services designed to enhance and protect your home's outer beauty. Whether you're restoring curb appeal or refreshing a tired facade, we use durable finishes that stand up to the elements.",
            "San Diego weather is deceptively tough on a house — relentless sun on the south face, salt air near the coast, and dry heat inland. We spec the coating to the exposure, not to the invoice.",
          ]}
          points={[
            bold("Stucco & siding —", "pressure washing, patching, priming, and finish coats built to last."),
            bold("Wood & stucco repair —", "rot, fascia, and trim replaced before we paint over them."),
            bold("Decorative concrete coating —", "driveways, patios, and walkways brought back to life."),
            bold("Doors, shutters & garages —", "the accents that make the whole elevation read as finished."),
          ]}
          image="/images/resi-exterior.jpg"
          imageAlt="Two-story stucco home repainted by PaintRite in San Diego"
          badge={{ title: "Exterior", sub: "Built for SD sun" }}
          cta="Quote my exterior →"
          flip
          soft
        />

        <SplitSection
          id="staining"
          eyebrow="Service 03"
          title="Wood Staining & Painting"
          paragraphs={[
            "At PaintRite Painting, no one can do custom stain-work quite like us. Our team handles hardwood floors and outdoor furniture restoration with artisan-level craftsmanship — matching tone, respecting the grain, and finishing with a durability that holds up to real life.",
          ]}
          points={[
            bold("Hardwood floors —", "sanded, stained, and sealed to the tone you actually want."),
            bold("Outdoor furniture restoration —", "weathered pieces brought back rather than thrown out."),
            bold("Decks, railings & pergolas —", "protected against sun and moisture, not just recolored."),
            bold("Custom color matching —", "samples on your wood, in your light, before we commit."),
          ]}
          image="/images/resi-stain.jpg"
          imageAlt="Wood door being refinished with custom stain"
          badge={{ title: "Stain", sub: "Custom work" }}
          cta="Ask about stain-work →"
        />

        {/* Process */}
        <section className="py-24 bg-navy-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <div className="font-display text-xs font-bold text-yellow uppercase tracking-widest mb-3">
                Our approach
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                From color consultation to final walkthrough.
              </h2>
              <p className="text-white/70 text-lg">
                We collaborate closely with homeowners to ensure a seamless and stress-free process,
                using premium paints and materials with attention to detail at every stage.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="font-display w-11 h-11 rounded-lg bg-yellow text-navy-deep flex items-center justify-center font-black mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          heading="Let's transform your home."
          sub="Free estimates for homeowners across San Diego County."
        />
      </main>
      <Footer />
    </>
  );
}
