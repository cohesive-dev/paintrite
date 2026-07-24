import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

/** The closing call-to-action strip shared by every sub-page. */
export default function CTABand({
  heading,
  sub,
}: {
  heading: string;
  sub: string;
}) {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">{heading}</h2>
          <p className="text-white/75">{sub}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/contact"
            className="font-display inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-yellow text-navy-deep font-bold hover:bg-yellow-dark transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
          <a
            href={PHONE_HREF}
            className="font-display inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/35 text-white font-bold hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
