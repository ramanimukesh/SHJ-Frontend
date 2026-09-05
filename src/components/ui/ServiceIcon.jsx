import React from "react";

/**
 * Line icons for the service cards, keyed by slug.
 *
 * The cards previously carried nothing but a ghost numeral and text, which on a
 * white ground read as an unstyled wireframe — a bad look for a studio that
 * sells design. Single-weight 1.5px strokes on a 24 grid so they sit together
 * as one set rather than five borrowed glyphs.
 */
const PATHS = {
  // Artboard with a cursor — design surface.
  "digital-product-design": (
    <>
      <rect x="3" y="3" width="13" height="13" rx="2" />
      <path d="M12.5 12.5 21 21m-8.5-8.5v5.5m0-5.5h5.5" />
    </>
  ),
  // Stacked layers converging on a node — system structure.
  "software-architecture": (
    <>
      <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
      <path d="M3 16l9 5 9-5" />
      <path d="M3 12l9 5 9-5" />
    </>
  ),
  // Cycle with a node — continuous delivery.
  "engineering-devops": (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3v4.5h-4.5" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  // Handset.
  "mobile-app-development": (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  // Two figures, one joining — team extension.
  "staff-augmentation": (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M17 7.5v5M19.5 10h-5" />
    </>
  ),

  // ── Solutions (src/data/solutions.js `icon`) ────────────────────────────
  // Four panes — one system holding the records.
  system: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  // Two opposing arrows — steps that hand to each other.
  automation: (
    <>
      <path d="M3 7.5h12.5l-3-3" />
      <path d="M21 16.5H8.5l3 3" />
    </>
  ),
  // Framed bars.
  dashboard: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 16v-4M12 16V8M16.5 16v-6" />
    </>
  ),
  // Browser window with a profile row.
  portal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="8.5" cy="14.5" r="1.75" />
      <path d="M13 13.5h5M13 16.5h3.5" />
    </>
  ),
  // Three nodes, linked.
  integration: (
    <>
      <circle cx="6" cy="12" r="2.75" />
      <circle cx="18" cy="6" r="2.75" />
      <circle cx="18" cy="18" r="2.75" />
      <path d="M8.4 10.8 15.6 7.2M8.4 13.2l7.2 3.6" />
    </>
  ),
  // Code brackets with a slash — built, not bought.
  custom: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="M14 4.5 10 19.5" />
    </>
  ),
  // Sparkle.
  ai: (
    <>
      <path d="M11 4.5 12.8 9.7 18 11.5l-5.2 1.8L11 18.5l-1.8-5.2L4 11.5l5.2-1.8L11 4.5Z" />
      <path d="M18.5 3v3.5M16.75 4.75h3.5" />
    </>
  ),
  // Box with an up arrow — brought forward in place.
  modernize: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 16.5v-9M8.5 11 12 7.5l3.5 3.5" />
    </>
  ),
};

export default function ServiceIcon({ slug, className = "" }) {
  const paths = PATHS[slug];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths}
    </svg>
  );
}
