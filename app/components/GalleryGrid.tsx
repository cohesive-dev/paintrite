"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/content";

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "stain", label: "Stain-Work" },
] as const;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const items = GALLERY.filter((g) => filter === "all" || g.cat === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`font-display px-5 py-2.5 rounded-md text-sm font-bold transition-colors ${
              filter === f.key
                ? "bg-navy text-white"
                : "bg-white border border-line text-ink hover:border-navy hover:text-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((g) => (
          <figure
            key={g.image}
            className="group bg-white border border-line rounded-xl overflow-hidden hover:shadow-lg hover:border-navy hover:-translate-y-1 transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <div className="font-display font-bold text-ink">{g.title}</div>
              <div className="text-sm text-muted mt-0.5">{g.detail}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
