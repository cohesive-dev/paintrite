import Link from "next/link";

/**
 * The banner every sub-page opens with — the counterpart to the landing page's
 * full hero. Dark navy surface, breadcrumb, title, and a short lede.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/70" />
        </>
      )}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-yellow transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{eyebrow}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-white/75 text-lg leading-relaxed max-w-2xl">{intro}</p>
      </div>
    </section>
  );
}
