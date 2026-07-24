import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import QuotePanel from "@/app/components/QuotePanel";
import AreaTabs from "@/app/components/AreaTabs";
import Testimonials from "@/app/components/Testimonials";
import { PHONE_DISPLAY, PHONE_HREF, LICENSE } from "@/lib/site";
import { SERVICES } from "@/lib/content";

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const collage = [
    { alt: "Modern two-story home with freshly painted white exterior", image: "/images/gallery-01.jpg" },
    { alt: "Two-story stucco home repainted by PaintRite", image: "/images/gallery-02.jpg" },
    { alt: "Tudor-style home with repainted trim and stucco", image: "/images/gallery-03.jpg" },
    { alt: "Wood garage doors finished with a custom stain", image: "/images/gallery-07.jpg" },
    { alt: "Commercial office building exterior after repainting", image: "/images/gallery-10.jpg" },
    { alt: "Retail storefront with repainted facade", image: "/images/gallery-11.jpg" },
  ];

  return (
    <section id="top" className="pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="font-display inline-flex items-center gap-2 rounded-full bg-navy/8 px-4 py-1.5 text-xs font-bold text-navy mb-5">
          <span className="w-2 h-2 rounded-full bg-yellow" />
          Locally owned &amp; operated since 1994
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] tracking-tight mb-5">
          Top rated interior &amp; exterior painting in{" "}
          <span className="text-navy">San Diego, CA.</span>
        </h1>
        <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
          Your trusted local painting experts. When it&apos;s worth doing right, call PaintRite.
        </p>
      </div>

      {/* Photo collage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 md:rounded-t-2xl overflow-hidden">
          {collage.map((c, i) => (
            <div key={c.image} className={`relative h-40 sm:h-56 overflow-hidden ${i >= 3 ? "hidden md:block" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.alt} decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-deep/10" />
            </div>
          ))}
        </div>

        {/* Overlapping quote widget */}
        <div
          id="quote"
          className="relative z-10 mt-6 md:-mt-16 flex flex-col md:flex-row gap-4 md:gap-0 px-2 md:px-0 scroll-mt-24"
        >
          <div className="md:flex-[5] bg-white shadow-2xl rounded-lg md:rounded-r-none border border-line p-6 sm:p-8">
            <QuotePanel />
          </div>

          {/* Stats panel — desktop only; on mobile the hero badge carries the message. */}
          <div className="hidden md:flex md:flex-[3] bg-navy-deep rounded-lg md:rounded-l-none p-6 sm:p-8 flex-col justify-center gap-6">
            <div className="font-display text-[11px] font-bold text-white/50 tracking-[0.1em] uppercase">
              Why San Diego calls PaintRite
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-black text-white leading-none">30+</div>
                <div className="text-xs text-white/60 mt-1 font-medium">years in business</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-black text-yellow leading-none">5.0★</div>
                <div className="text-xs text-white/60 mt-1 font-medium">average rating</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-black text-white leading-none">15+</div>
                <div className="text-xs text-white/60 mt-1 font-medium">cities served</div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-black text-yellow leading-none">100%</div>
                <div className="text-xs text-white/60 mt-1 font-medium">licensed &amp; insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-16" />
    </section>
  );
}

// ─── Trust bar ──────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    `Licensed & Insured (${LICENSE})`,
    "Google Guaranteed",
    "PCA Accredited Contractor",
    "Free Estimates",
    "Family Owned Since 1994",
  ];
  return (
    <section className="bg-soft border-y border-line py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink">
          {items.map((it) => (
            <span key={it} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-navy shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ─────────────────────────────────────────────────────────────────

function WhyUs() {
  const points = [
    {
      title: "Expertise",
      desc: "Three decades in the trade. Our crews bring precision to every surface — walls, cabinetry, stucco, and custom stain-work alike.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      ),
    },
    {
      title: "Customer satisfaction",
      desc: "It's our top priority. We work to understand your vision first, then hold the job to it — and exceed what you expected from it.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      ),
    },
    {
      title: "Attention to detail",
      desc: "Meticulous prep, clean lines, and a walkthrough you actually feel good about. The finish is what you see — the prep is what makes it last.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
    {
      title: "Licensed & insured",
      desc: `${LICENSE}, fully insured, Google Guaranteed, and a PCA Accredited Contractor. Every credential is one less thing to take on faith.`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      ),
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="font-display text-xs font-bold text-yellow uppercase tracking-widest mb-3">
            Why choose PaintRite
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Three decades of doing it right the first time.
          </h2>
          <p className="text-white/70 text-lg">
            Founded over 30 years ago by Tony Zuniga, PaintRite has grown into one of the region&apos;s
            most trusted painting contractors — without losing the values it was built on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="font-display inline-block px-6 py-3 rounded-md border border-white/35 text-white text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Process ────────────────────────────────────────────────────────────────

function Process() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "We sit down with you to discuss your vision, preferences, and project goals — then put together a clear, honest estimate with no surprises buried in it.",
      detail: "Free, and no obligation.",
    },
    {
      step: "02",
      title: "Painting Process",
      desc: "Our crew preps thoroughly, protects your space, and applies premium materials with the attention to detail the job deserves. We keep you posted as we go.",
      detail: "Clean site, every single day.",
    },
    {
      step: "03",
      title: "Final Inspection",
      desc: "We walk the project together, verify quality against our standards, and handle every touch-up until you're genuinely happy with the result.",
      detail: "We don't leave until it's right.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
            How it works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            A seamless and stress-free process.
          </h2>
          <p className="text-body text-lg">
            From the initial color consultation to the final walkthrough, we work closely with you at
            every stage.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
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
                <p className="text-body leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm font-semibold text-navy">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-24 bg-soft border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
            What we do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            Premiere residential &amp; commercial painting experts.
          </h2>
          <p className="text-body text-lg">
            From a single accent wall to a full commercial facade, every PaintRite project gets the
            same premium materials, meticulous prep, and finish-obsessed crew.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group bg-white border border-line rounded-xl overflow-hidden hover:shadow-lg hover:border-navy hover:-translate-y-1 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
                <span className="font-display absolute top-3 left-3 rounded-full bg-yellow text-navy-deep text-[11px] font-bold px-2.5 py-1">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-ink mb-2 group-hover:text-navy transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="font-display inline-block px-6 py-3 rounded-md border-2 border-navy text-navy text-sm font-bold hover:bg-navy hover:text-white transition-colors"
          >
            Don&apos;t see what you need? Ask us →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Service Areas ──────────────────────────────────────────────────────────

function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
              Where we work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-4">
              Proudly serving San Diego County.
            </h2>
            <p className="text-body text-lg mb-6">
              Comprehensive residential and commercial painting across the coastal San Diego region —
              meticulous and personalized on every project. Whether you&apos;re on the coast or
              inland, you get the same crew, the same prep, and the same finish.
            </p>
            <Link
              href="/service-areas"
              className="font-display inline-block px-6 py-3 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors shadow-sm"
            >
              See all service areas →
            </Link>
          </div>

          <AreaTabs />
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(247,223,30,.14) 0%, transparent 62%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-display text-xs font-bold text-yellow uppercase tracking-widest mb-3">
              Get started
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              When it&apos;s worth doing right, call PaintRite.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              Free estimates across San Diego County. Tell us about your project and we&apos;ll get
              back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="font-display inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-yellow text-navy-deep font-bold hover:bg-yellow-dark transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact#book"
                className="font-display inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
              >
                Request online →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
            <QuotePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <Process />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
