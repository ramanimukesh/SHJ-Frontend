import React from "react";
import Reveal from "./Reveal";

/* Background per tone. `slate` and `brand` were being passed by About but were
   never defined here, so those two sections resolved to `undefined` and got no
   background at all — which left their white-on-brand stats sitting invisibly
   on the light page ground. */
const TONES = {
  white: "bg-white",
  /* The page ground. For bands whose own content is white cards, which need a
     ground to sit on rather than disappearing into one. */
  paper: "bg-paper",
  tint: "bg-ink-100",
  slate: "bg-ink-50",
  brand: "bg-brand-700",
  dark: "bg-canvas noise relative overflow-hidden",
};

/* Tones whose ground is dark enough to need inverted heading colours. */
const DARK_TONES = new Set(["dark", "brand"]);

/** Standard vertical rhythm + optional heading block. */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "white",
  children,
  className = "",
}) {
  // Falling back to `white` keeps an unrecognised tone merely plain rather than
  // silently dropping the background and stranding on-dark text.
  const surface = TONES[tone] || TONES.white;
  const dark = DARK_TONES.has(tone);
  const centered = align === "center";

  return (
    <section id={id} className={`${surface} py-24 sm:py-32 ${className}`}>
      {tone === "dark" && (
        <div aria-hidden="true" className="mesh pointer-events-none absolute inset-0" />
      )}

      <div className="container-page relative">
        {(eyebrow || title || intro) && (
          <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className={`eyebrow ${dark ? "text-brand-200" : ""}`}>{eyebrow}</p>
            )}
            {title && (
              <h2 className={`mt-5 h-section ${dark ? "text-white" : ""}`}>{title}</h2>
            )}
            {intro && (
              <p
                className={`mt-6 max-w-2xl ${centered ? "mx-auto" : ""} ${
                  dark ? "text-[17px] leading-relaxed text-white/75" : "prose-muted"
                }`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children && <div className={eyebrow || title ? "mt-14" : ""}>{children}</div>}
      </div>
    </section>
  );
}
