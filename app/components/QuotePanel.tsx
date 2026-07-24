import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const POINTS = [
  "Free, no-obligation estimate",
  "We reply within one business day",
  "Pick the dates and times that suit you",
  "Add project photos so the quote is accurate",
];

/**
 * The booking call-to-action card that sits in the hero and the closing CTA.
 * The actual form lives on /contact (the DripJobs embed) — this panel keeps
 * those blocks compact and sends people to it, rather than dropping a very tall
 * cross-origin iframe into the middle of the landing page.
 */
export default function QuotePanel() {
  return (
    <div className="text-left">
      <div className="font-display text-[11px] font-bold text-navy tracking-[0.1em] uppercase mb-2">
        Request Your Free Estimate
      </div>
      <h3 className="font-display text-2xl font-extrabold text-ink mb-3">
        Book your estimate online.
      </h3>
      <p className="text-sm text-body leading-relaxed mb-5">
        Tell us about the project, pick a date that works, and a member of the PaintRite team
        will confirm your appointment.
      </p>

      <ul className="space-y-2.5 mb-6">
        {POINTS.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <svg className="w-4 h-4 text-navy shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-body">{p}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact#book"
        className="font-display block w-full text-center px-6 py-3.5 rounded-md bg-yellow text-navy-deep text-sm font-bold hover:bg-yellow-dark transition-colors shadow-sm"
      >
        Request My Free Estimate →
      </Link>

      <p className="mt-3 text-xs text-muted text-center">
        Prefer to talk it through? Call{" "}
        <a href={PHONE_HREF} className="text-navy font-semibold hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        — Mon–Sat, 7am–7pm.
      </p>
    </div>
  );
}
