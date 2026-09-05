import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { pictureFor } from "../../data/media";

/** Dramatic dark hero used by every listing and detail page. */
export default function PageHero({ eyebrow, title, subtitle, crumbs = [], image, children }) {
  const pic = image ? pictureFor(image) : null;

  return (
    <section className="noise relative overflow-hidden bg-brand-950">
      {image && (
        <>
          {/* Full-bleed and above the fold, so it stays eager and gets the
              priority hint — but at the right width. It used to load the
              1600px original on a 375px phone. */}
          <img
            src={pic.src}
            srcSet={pic.srcSet}
            sizes="100vw"
            width={pic.width}
            height={pic.height}
            alt=""
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-950/85" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/45"
          />
        </>
      )}
      <div aria-hidden="true" className="mesh pointer-events-none absolute inset-0 opacity-75" />
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 animate-float rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="container-page relative py-16 sm:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            {/* -my-1.5/py-1.5 grows each crumb to a 24px target without adding
                24px of visual gap between the crumbs and the heading. */}
            <ol className="-my-1.5 flex flex-wrap items-center gap-x-2 text-[13px] font-medium text-white/65">
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2 py-1.5">
                  {c.to ? (
                    <Link to={c.to} className="inline-flex min-h-[24px] items-center transition hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="inline-flex min-h-[24px] items-center text-brand-300" aria-current="page">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span aria-hidden="true" className="text-white/50">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal className="max-w-4xl">
          {eyebrow && <p className="eyebrow text-brand-200">{eyebrow}</p>}
          <h1 className="mt-5 font-display text-display text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
