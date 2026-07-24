import Link from "next/link";
import CheckList from "@/app/components/CheckList";

/**
 * Image-beside-copy service block used by /residential and /commercial.
 * `flip` puts the image on the right; alternating them down the page is what
 * gives those pages their rhythm.
 */
export default function SplitSection({
  id,
  eyebrow,
  title,
  paragraphs,
  points,
  image,
  imageAlt,
  badge,
  cta,
  flip = false,
  soft = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points: React.ReactNode[];
  image: string;
  imageAlt: string;
  badge: { title: string; sub: string };
  cta: string;
  flip?: boolean;
  soft?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 scroll-mt-20 ${soft ? "bg-soft border-y border-line" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative ${flip ? "lg:order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={imageAlt} loading="lazy" className="w-full h-[26rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-yellow rounded-xl px-6 py-4 shadow-lg">
              <div className="font-display text-lg font-black text-navy-deep leading-none">
                {badge.title}
              </div>
              <div className="text-xs font-semibold text-navy-deep/70 mt-1">{badge.sub}</div>
            </div>
          </div>

          <div className={flip ? "lg:order-1" : ""}>
            <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
              {eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-5">{title}</h2>
            <div className="space-y-4 text-body text-lg leading-relaxed mb-7">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <CheckList items={points} />
            <Link
              href="/contact"
              className="font-display inline-block px-6 py-3 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors shadow-sm"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
