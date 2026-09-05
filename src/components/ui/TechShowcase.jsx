import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data/stack";
import { BadgeGrid, FilterChip, CategoryHeader } from "./TechStack";

/**
 * The technology ecosystem on the home page — the same data and the same
 * badges as /technology, one discipline at a time. The full page adds what
 * we use each tool for and a search; this is the version a first visit
 * scans.
 */

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M7.2 5.2a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06L8.26 14.8a.75.75 0 1 1-1.06-1.06L10.88 10 7.2 6.3a.75.75 0 0 1 0-1.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function TechShowcase() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0];

  return (
    <div>
      <div
        role="group"
        aria-label="Technology disciplines"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
      >
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.id}
            glyph={c.glyph}
            label={c.short}
            count={c.items.length}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </div>

      {/* Keyed on the choice so a change re-runs the badges' stagger. */}
      <div key={active} className="mt-10">
        <CategoryHeader
          category={current}
          count={current.items.length}
          action={
            <Link
              to={`/technology?category=${current.id}`}
              className="btn-ghost shrink-0 !py-2 text-[13px]"
            >
              What we use each for
              <Arrow className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-10">
          <BadgeGrid items={current.items} />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 rounded-panel bg-brand-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="max-w-2xl text-[15px] leading-relaxed text-white/75">
          Chosen for maintainability, hiring and hosting — not for a conference talk. If your
          environment is standardised on something else, say so; we build in it.
        </p>
        <Link to="/technology" className="btn-glow shrink-0">
          Explore the full stack
          <Arrow className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
