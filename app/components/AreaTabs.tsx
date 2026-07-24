"use client";

import { useState } from "react";
import { AREA_REGIONS } from "@/lib/content";

/** Region tabs over the city list. Used on the landing page and /service-areas. */
export default function AreaTabs() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5 border-b border-line pb-3">
        {AREA_REGIONS.map((r, i) => (
          <button
            key={r.region}
            type="button"
            onClick={() => setTab(i)}
            aria-pressed={i === tab}
            className={`font-display px-4 py-2 rounded-md text-sm font-bold transition-colors ${
              i === tab
                ? "bg-navy text-white"
                : "bg-white border border-line text-ink hover:border-navy hover:text-navy"
            }`}
          >
            {r.region}
          </button>
        ))}
      </div>

      {/*
        Every region is rendered into the same grid cell so the block always
        reserves the height of the longest list — switching tabs never shifts
        the layout. Only the active list is visible/reachable.
      */}
      <div className="grid">
        {AREA_REGIONS.map((r, i) => (
          <div
            key={r.region}
            aria-hidden={i !== tab}
            inert={i !== tab ? true : undefined}
            className={`[grid-area:1/1] flex flex-wrap content-start gap-2.5 transition-opacity ${
              i === tab ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {r.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 bg-white border border-line rounded-full px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <svg className="w-3.5 h-3.5 text-navy" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.572l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {city}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
