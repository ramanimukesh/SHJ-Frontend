import React from "react";
import ICONS from "../../data/techIcons";

/**
 * A technology's mark, in one of three forms, in this order:
 *
 *  1. `logo`  — a static SVG under public/img/tech/, for named products whose
 *               mark simple-icons no longer distributes (AWS, Azure, Oracle,
 *               SQL Server, Playwright …). Carries its own colours.
 *  2. `icon`  — the real brand mark, from src/data/techIcons.js, filled with
 *               currentColor. The card sets that to the brand colour.
 *  3. `glyph` — a drawn glyph, for the entries that are capabilities rather
 *               than products: CI/CD, ETL, Computer Vision and friends have no
 *               logo to show, and inventing one would be worse than not. Also
 *               used for the two products with no redistributable mark at all
 *               (OpenAI, Power BI), drawn in the vendor's colour.
 *
 * Marks render in full colour: a technology ecosystem is recognised by its
 * logos, and a visitor scanning for "the AWS one" finds it by the orange.
 * The card keeps the colour from shouting by putting it on a tinted tile at
 * low opacity and only lifting to the full brand colour on hover.
 */

/* 24x24, stroke-based, to sit at the same visual weight as the brand marks. */
const GLYPHS = {
  plug: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 3v4.5M14.5 3v4.5" />
      <path d="M7.5 7.5h9v3.2a4.5 4.5 0 0 1-9 0V7.5Z" />
      <path d="M12 15.2V21" />
    </g>
  ),
  sparkles: (
    <g fill="currentColor">
      <path d="M11 2.5l1.55 4.35a3 3 0 0 0 1.8 1.8L18.7 10.2l-4.35 1.55a3 3 0 0 0-1.8 1.8L11 17.9l-1.55-4.35a3 3 0 0 0-1.8-1.8L3.3 10.2l4.35-1.55a3 3 0 0 0 1.8-1.8L11 2.5Z" />
      <path d="M18 15l.75 2.1a1.5 1.5 0 0 0 .9.9l2.1.75-2.1.75a1.5 1.5 0 0 0-.9.9L18 22.5l-.75-2.1a1.5 1.5 0 0 0-.9-.9L14.25 18.75l2.1-.75a1.5 1.5 0 0 0 .9-.9L18 15Z" />
    </g>
  ),
  /* OpenAI: a model as a ring of connected nodes. Deliberately not the
     vendor's knot — that mark is not ours to redraw. */
  model: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="19" cy="8" r="1.6" />
      <circle cx="19" cy="16" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <circle cx="5" cy="16" r="1.6" />
      <circle cx="5" cy="8" r="1.6" />
      <path d="M12 5.6v3.8M17.6 8.8l-3.3 1.9M17.6 15.2l-3.3-1.9M12 18.4v-3.8M6.4 15.2l3.3-1.9M6.4 8.8l3.3 1.9" />
    </g>
  ),
  chat: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5H9l-5 3 1.4-4.1A7.5 7.5 0 0 1 3 11.5 7.5 7.5 0 0 1 10.5 4h3A7.5 7.5 0 0 1 21 11.5Z" />
      <path d="M8 10h8M8 13.5h4.5" />
    </g>
  ),
  brain: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.6 6.6 12 9.6M6.6 12h4.9M6.6 17.4 12 14.4M14.4 9.6l2.9 1.7M14.4 14.4l2.9-1.7" />
      <circle cx="5" cy="6.6" r="1.7" />
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="5" cy="17.4" r="1.7" />
      <circle cx="13" cy="9.6" r="1.7" />
      <circle cx="13" cy="14.4" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </g>
  ),
  eye: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 12S6 5.75 12 5.75 21.5 12 21.5 12 18 18.25 12 18.25 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.9" />
    </g>
  ),
  bolt: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.2 2.5 4.5 13.5h6.3l-1 8 8.7-11h-6.3l1-8Z" />
    </g>
  ),
  pipeline: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6.5h5.5a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5H21" />
      <path d="M17.5 14 21 17.5 17.5 21" />
      <circle cx="3" cy="6.5" r="1.6" />
    </g>
  ),
  chart: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6M11.5 20.5V6M16.5 20.5v-9" />
    </g>
  ),
  /* Power BI: three rising bars, filled, in the vendor's yellow. */
  bars: (
    <g fill="currentColor">
      <rect x="3" y="12" width="4.6" height="9" rx="1.2" />
      <rect x="9.7" y="7" width="4.6" height="14" rx="1.2" />
      <rect x="16.4" y="3" width="4.6" height="18" rx="1.2" />
    </g>
  ),
  topology: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2.8" width="6" height="5" rx="1.4" />
      <rect x="2.5" y="16.2" width="6" height="5" rx="1.4" />
      <rect x="15.5" y="16.2" width="6" height="5" rx="1.4" />
      <path d="M12 7.8v4.4M12 12.2H5.5v4M12 12.2h6.5v4" />
    </g>
  ),
  agent: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="7.5" width="16" height="11" rx="3.2" />
      <path d="M12 3v4.5M8.5 12.5h.01M15.5 12.5h.01" />
      <path d="M9.5 15.6h5" />
    </g>
  ),
  loop: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.2 12a7.8 7.8 0 0 1 13.3-5.5l2.3 2.2" />
      <path d="M19.8 12a7.8 7.8 0 0 1-13.3 5.5l-2.3-2.2" />
      <path d="M20 4.2v4.5h-4.5M4 19.8v-4.5h4.5" />
    </g>
  ),
  text: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 6.2V4.5h15v1.7M12 4.5v15M9.2 19.5h5.6" />
    </g>
  ),
  trend: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 17.5 9 11.5l3.6 3.4L20.5 6.8" />
      <path d="M15.6 6.8h4.9v4.8" />
    </g>
  ),
  donut: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M12 3.6v5.1M18.9 16.2l-4.4-2.6" />
    </g>
  ),
  dashboard: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2.6" />
      <path d="M3 9h18M8 9v11" />
      <path d="M11.8 13.2h5.6M11.8 16.4h3.4" />
    </g>
  ),
  branch: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="5.5" r="2.2" />
      <circle cx="6.5" cy="18.5" r="2.2" />
      <circle cx="17.5" cy="12" r="2.2" />
      <path d="M6.5 7.7v8.6M8.7 5.9c4.6.5 6.3 2.4 6.7 5.4M8.7 18.1c4.6-.5 6.3-2.4 6.7-5.4" />
    </g>
  ),
  layers: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Z" />
      <path d="m3.5 12.2 8.5 4.6 8.5-4.6M3.5 16.6 12 21.2l8.5-4.6" />
    </g>
  ),
};

export default function TechIcon({ tech, className = "h-7 w-7" }) {
  if (tech.logo) {
    return (
      <img
        src={`/img/tech/${tech.logo}`}
        alt=""
        loading="lazy"
        decoding="async"
        draggable="false"
        className={`select-none object-contain ${tech.wide ? "scale-[1.4]" : ""} ${className}`}
      />
    );
  }

  const brand = tech.icon ? ICONS[tech.icon] : null;
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path d={brand.p} fill="currentColor" />
      </svg>
    );
  }

  if (tech.glyph && GLYPHS[tech.glyph]) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        {GLYPHS[tech.glyph]}
      </svg>
    );
  }

  // Monogram — the last resort for an entry with no artwork at all. Sized off
  // the string length so "aws" and "C#" both sit on the same optical centre.
  const text = tech.mono || tech.name.slice(0, 2);
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize={text.length > 3 ? 8 : text.length > 2 ? 9.75 : 11.5}
        fontWeight="700"
        letterSpacing="-0.4"
        style={{ fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        {text}
      </text>
    </svg>
  );
}

/** The technology's brand colour, as a hex string, or null. */
export function brandColor(tech) {
  if (tech.color) return tech.color;
  return tech.icon && ICONS[tech.icon] ? ICONS[tech.icon].c : null;
}

/**
 * The brand colour at low opacity, for the tile behind the mark. Returns an
 * rgba() string; JS rather than color-mix() so it holds in Safari < 16.2.
 */
export function brandTint(tech, alpha = 0.1) {
  const hex = brandColor(tech);
  if (!hex) return `rgba(15,23,42,${alpha})`;
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ---------- category icons ---------- */

/* One glyph per discipline, keyed by the category's `glyph` in stack.js. Same
   24-grid, same 1.6 stroke, so a category chip and a technology tile read as
   one family. */
const CATEGORY_GLYPHS = {
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.4" />
      <path d="M3 9.5h18M9.5 9.5V20" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6.5" rx="1.8" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="1.8" />
      <path d="M6.5 7.25h.01M6.5 16.75h.01" strokeWidth="2.2" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" />
      <path d="M10.5 18h3" />
    </>
  ),
  spark: (
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  cloud: (
    <path d="M7.2 18.5h9.4a4.15 4.15 0 0 0 .45-8.28 6.2 6.2 0 0 0-11.7-.9A3.65 3.65 0 0 0 7.2 18.5Z" />
  ),
  infinity: (
    <path d="M12 12c-1.7-2.5-3.2-4-5.4-4a4 4 0 0 0 0 8c2.2 0 3.7-1.5 5.4-4Zm0 0c1.7 2.5 3.2 4 5.4 4a4 4 0 0 0 0-8c-2.2 0-3.7 1.5-5.4 4Z" />
  ),
  shield: (
    <>
      <path d="M12 2.8 4.5 5.6v5.6c0 4.6 3.2 8.4 7.5 9.8 4.3-1.4 7.5-5.2 7.5-9.8V5.6L12 2.8Z" />
      <path d="m9 12 2.1 2.1L15.2 10" />
    </>
  ),
  storefront: (
    <>
      <path d="M3.5 9.5 5 4.5h14l1.5 5" />
      <path d="M3.5 9.5a2.8 2.8 0 0 0 5.6 0 2.9 2.9 0 0 0 5.8 0 2.8 2.8 0 0 0 5.6 0" />
      <path d="M5 12v8h14v-8M10 20v-5h4v5" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6M11.5 20.5V6M16.5 20.5v-9" />
    </>
  ),
  pen: (
    <>
      <path d="m13.5 5.5 5 5L8 21H3v-5L13.5 5.5Z" />
      <path d="m11.5 7.5 5 5M16 3l5 5" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </>
  ),
};

export function CategoryIcon({ glyph, className = "h-5 w-5" }) {
  const g = CATEGORY_GLYPHS[glyph] || CATEGORY_GLYPHS.grid;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {g}
    </svg>
  );
}
