import { BOOKING_URL } from "@/lib/site";

/**
 * The DripJobs appointment-request form, embedded so visitors never leave the
 * site. DripJobs sends no X-Frame-Options/CSP frame-ancestors today, but that's
 * their call to change — the "open in a new tab" link below is the escape hatch
 * if a browser or a future header ever blocks the frame, so a blank box can
 * never cost a lead.
 *
 * The form is long (contact, address, scheduling, photos). The frame is sized
 * generously and scrolls internally rather than trying to auto-fit: DripJobs is
 * cross-origin, so we can't measure its content height from here.
 */
export default function BookingEmbed() {
  return (
    <div>
      <div className="rounded-xl overflow-hidden border border-line shadow-lg bg-white">
        <iframe
          src={BOOKING_URL}
          title="Request an appointment with PaintRite Painters"
          loading="lazy"
          className="w-full h-[1400px] sm:h-[1250px] block"
        />
      </div>
      <p className="mt-4 text-center text-sm text-muted">
        Form not loading?{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy font-semibold hover:underline"
        >
          Open it in a new tab
        </a>{" "}
        instead.
      </p>
    </div>
  );
}
