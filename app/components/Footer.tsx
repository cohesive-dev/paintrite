import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, LICENSE, INSURANCE, FOUNDED } from "@/lib/site";
import { SERVICES, ALL_CITIES } from "@/lib/content";

const CREDENTIALS = [LICENSE, INSURANCE, "Google Guaranteed", "PCA Accredited"];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="inline-flex bg-white rounded-xl p-3 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo.png" alt="PaintRite Painters" className="h-12 w-auto object-contain" />
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Family owned and operated since {FOUNDED}. Premiere residential &amp; commercial
              painting experts serving San Diego County.
            </p>
            <p className="font-display text-yellow font-semibold text-sm mb-5">
              &ldquo;When it&apos;s worth doing right, call PaintRite.&rdquo;
            </p>
            <div className="flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="text-[11px] font-semibold text-white/60 border border-white/15 rounded-full px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {ALL_CITIES.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link href="/service-areas" className="hover:text-white transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-yellow hover:text-white transition-colors">
                  See all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={PHONE_HREF} className="text-white font-bold hover:text-yellow transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="pt-1">San Diego, CA</li>
              <li>Mon–Sat: 7am–7pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <Link
              href="/contact"
              className="font-display inline-block mt-5 px-5 py-2.5 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs">© 2026 PaintRite Painters. All rights reserved.</p>
          <p className="text-xs text-white/50">
            Locally owned &amp; operated in San Diego, CA
            <span className="mx-2">·</span>
            {LICENSE}
            <span className="mx-2">·</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
