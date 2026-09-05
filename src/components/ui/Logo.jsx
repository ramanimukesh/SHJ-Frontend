import React, { useState } from "react";

// React 17 has no built-in id hook; a module counter keeps each mounted mark's
// mask and clip ids unique. The header and footer both render one, and shared
// ids would make the second inherit the first's mask.
let markSeq = 0;

// A single channel swept through a solid field. Horizontals at y=24/60/96 with
// two r=18 bowls tangent to them at exact points, so the curve is smooth by
// construction. It runs past the field on both sides (x=-8 to 128) so it
// divides the field into two interlocking planes rather than slotting into it.
const CHANNEL = "M-8 96 H72 A18 18 0 1 0 72 60 H48 A18 18 0 1 1 48 24 H128";
// The same line closed over the top. Filling it paints exactly the upper plane,
// and the colour break lands on the centreline where the channel conceals it.
const UPPER = `${CHANNEL} V-8 H-8 Z`;

/**
 * The Sahajanand mark.
 *
 * The S is the negative space, not the ink: one channel divides a 104 field
 * into a cyan upper plane and a navy lower one, and the counter it leaves is
 * the letter. Drawn this way the mark is a single silhouette at any size
 * instead of a group of parts that drift, and it doubles as its own app tile.
 *
 * There is no literal T. Five constructions were tried — a stem off the top
 * run, descenders at three lengths, a full-width crossbar — and every one made
 * the mark read as "g" or "9" instead of "S". The T is carried by the
 * wordmark, which is where it can be read.
 */
export function LogoMark({ className = "", tone = "dark", flat = false, opaque = false }) {
  const onDark = tone === "dark";
  const [id] = useState(() => `stl-mark-${(markSeq += 1)}`);

  const lower = onDark ? "#ffffff" : "#0a1f3f";
  const upper = flat ? null : "#0fb5ce";

  const planes = (
    <g mask={`url(#m-${id})`}>
      <rect x="-8" y="-8" width="136" height="136" fill={lower} />
      {upper && <path d={UPPER} fill={upper} />}
    </g>
  );

  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Sahajanand Technologies">
      <defs>
        <mask id={`m-${id}`}>
          <rect x="-8" y="-8" width="136" height="136" fill="#fff" />
          <path d={CHANNEL} fill="none" stroke="#000" strokeWidth="18" strokeLinecap="butt" />
        </mask>
        <clipPath id={`c-${id}`}>
          <rect x="8" y="8" width="104" height="104" rx="24" />
        </clipPath>
      </defs>
      <g clipPath={`url(#c-${id})`}>
        {/* `opaque` fills the channel instead of leaving it transparent, for
            grounds whose colour is not ours to choose (tab bars, avatars). */}
        {opaque && <rect x="8" y="8" width="104" height="104" fill="#ffffff" />}
        {planes}
      </g>
    </svg>
  );
}

/** Mark + wordmark lockup used in the header and footer. */
export default function Logo({ tone = "dark", className = "" }) {
  const onDark = tone === "dark";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-11 w-11 shrink-0" />
      {/* Jost Medium rather than the site's Space Grotesk: the wordmark is
          fixed artwork, so it keeps its own geometric face regardless of what
          the headings do. 500 with open tracking reads calmer than 600 tight. */}
      <span className="font-logo leading-none">
        <span
          className={`block text-[16px] font-medium tracking-[0.1em] ${
            onDark ? "text-white" : "text-[#0a1f3f]"
          }`}
        >
          SAHAJANAND
        </span>
        <span
          className={`mt-[7px] block text-[7.5px] font-normal tracking-[0.3em] ${
            onDark ? "text-white/55" : "text-[#3e5a85]"
          }`}
        >
          TECHNOLOGIES LLC
        </span>
      </span>
    </span>
  );
}
