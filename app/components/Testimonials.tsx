"use client";

import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const stride = track.scrollWidth / TESTIMONIALS.length;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: Math.min(i * stride, maxScroll), behavior: "smooth" });
  };

  const scrolledIndex = () => {
    const track = trackRef.current;
    if (!track) return active;
    const stride = track.scrollWidth / TESTIMONIALS.length;
    return Math.round(track.scrollLeft / stride);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - 1) {
      setActive(TESTIMONIALS.length - 1);
      return;
    }
    setActive(scrolledIndex());
  };

  return (
    <section id="reviews" className="py-24 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="font-display text-xs font-bold text-navy uppercase tracking-widest mb-3">
            Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
            What San Diego homeowners say.
          </h2>
          <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-sm text-body">
            <span className="text-yellow-dark text-lg tracking-tight">★★★★★</span>
            <span className="font-semibold text-ink">5.0/5</span>
            <span>on Angi · Google Guaranteed · HomeAdvisor Screened &amp; Approved</span>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollToCard(Math.max(0, scrolledIndex() - 1))}
            className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-line bg-white shadow-sm text-ink flex items-center justify-center hover:border-navy hover:text-navy transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollToCard(Math.min(TESTIMONIALS.length - 1, scrolledIndex() + 1))}
            className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-line bg-white shadow-sm text-ink flex items-center justify-center hover:border-navy hover:text-navy transition-colors"
          >
            →
          </button>

          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((q) => (
              <div
                key={q.author + q.detail}
                className="snap-start shrink-0 basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] bg-white border border-line rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-yellow-dark text-lg mb-5 tracking-tight">★★★★★</div>
                <p className="text-[#2b3444] leading-relaxed mb-8 text-[15px]">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="font-display w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold">
                    {q.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{q.author}</div>
                    <div className="text-muted text-xs">{q.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((q, i) => (
            <button
              key={q.author + q.detail}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-navy" : "w-2 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
