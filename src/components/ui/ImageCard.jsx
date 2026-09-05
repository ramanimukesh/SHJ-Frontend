import React from "react";
import { Link } from "react-router-dom";
import { pictureFor } from "../../data/media";

/**
 * Editorial image card: photo with a gradient scrim, label and title sitting
 * on top. The image scales on hover — the standard enterprise "work" tile.
 *
 * `sizes` describes the real slot rather than the viewport: these cards are
 * one-up on phones, two-up from md and three-up from lg inside an 80rem page,
 * so the widest a tile ever gets is ~400px. Without it the browser assumes
 * 100vw and picks the largest candidate every time.
 */
const CARD_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw";

export default function ImageCard({ to, image, label, title, text, ratio = "aspect-[4/3]" }) {
  const pic = pictureFor(image);

  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-surface bg-ink-900 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className={`${ratio} w-full overflow-hidden`}>
        <img
          src={pic.src}
          srcSet={pic.srcSet}
          sizes={CARD_SIZES}
          width={pic.width}
          height={pic.height}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
        />
      </div>

      {/* Two scrims: a full wash to knock back busy photos, plus a stronger
          bottom ramp so the caption always clears contrast. */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand-950/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/88 via-45% to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-800/0 transition-colors duration-500 group-hover:bg-brand-800/25"
      />

      <div className="absolute inset-x-0 bottom-0 p-6">
        {label && (
          <span className="text-label uppercase text-brand-300">
            {label}
          </span>
        )}
        <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight text-white">
          {title}
        </h3>
        {text && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">{text}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Explore
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
