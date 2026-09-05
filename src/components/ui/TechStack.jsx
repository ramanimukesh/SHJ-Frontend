import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CATEGORIES, TECH_COUNT } from "../../data/stack";
import TechIcon, { brandColor, CategoryIcon } from "./TechIcon";

/**
 * The technology ecosystem: discipline navigation + search over ~100
 * technologies in eleven disciplines.
 *
 * One discipline is always selected — there is no "everything at once"
 * view. A hundred logos in one grid says we have heard of a lot of things;
 * one discipline at a time, each with what we use it for, says which of
 * those we would reach for and why. Search is the exception: it looks
 * across every discipline and shows the matches grouped by it.
 *
 * The active discipline is mirrored to ?category= so it can be linked to.
 */

const DEFAULT_ID = CATEGORIES[0].id;
const VALID_IDS = new Set(CATEGORIES.map((c) => c.id));

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

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2 17.5 17.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- the badge ---------- */

/**
 * One technology: its mark, large, on a white disc, with the name beneath.
 * The disc is the whole design — no card edge, no tint — so the logos carry
 * the colour and the grid reads as a row of marks rather than a row of boxes.
 *
 * A Link only where a detail page exists. A disc that lifts under the pointer
 * and then goes nowhere is worse than one that never offered.
 */
export function TechBadge({ tech, index = 0, note = false }) {
  const linked = Boolean(tech.slug);
  const Tag = linked ? Link : "div";

  return (
    <Tag
      {...(linked ? { to: `/technology/${tech.slug}` } : {})}
      title={note ? undefined : tech.note}
      style={{
        "--tech": brandColor(tech) || "#0f172a",
        // Capped, or the last badge in a long view starts a second late.
        animationDelay: `${Math.min(index, 17) * 30}ms`,
      }}
      className="group flex h-full flex-col items-center text-center motion-safe:animate-fade-up"
    >
      <span
        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white
                   shadow-[0_1px_2px_rgba(15,23,42,.04),0_14px_32px_-12px_rgba(15,23,42,.22)]
                   ring-1 ring-inset ring-ink-900/[0.05] [color:var(--tech)]
                   transition-[transform,box-shadow] duration-300 ease-out
                   group-hover:-translate-y-1.5 group-hover:shadow-[0_2px_4px_rgba(15,23,42,.05),0_24px_44px_-14px_rgba(15,23,42,.28)]
                   sm:h-28 sm:w-28"
      >
        {/* Brand-coloured halo on hover — the disc's only ornament. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-0 ring-2 ring-[color:var(--tech)] ring-offset-2 ring-offset-paper
                     transition-opacity duration-300 group-hover:opacity-60"
        />
        <TechIcon tech={tech} className="h-11 w-11 sm:h-[52px] sm:w-[52px]" />
      </span>

      <span className="mt-4 font-display text-[15px] font-semibold leading-snug tracking-tight text-ink-900 sm:text-[16px]">
        {tech.name}
      </span>

      {note && (
        <span className="mt-1.5 max-w-[12rem] text-[13px] leading-snug text-ink-500">{tech.note}</span>
      )}

      {linked && (
        <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Learn more
          <Arrow className="h-3 w-3" />
        </span>
      )}
    </Tag>
  );
}

/** The grid the badges sit in. Shared so home and the full page line up. */
export function BadgeGrid({ items, note = false, offset = 0 }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 min-[420px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {items.map((t, i) => (
        <li key={`${t.category || ""}-${t.name}`} className="h-full">
          <TechBadge tech={t} index={offset + i} note={note} />
        </li>
      ))}
    </ul>
  );
}

/* ---------- discipline chrome ---------- */

export function FilterChip({ glyph, label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border py-2 pl-3 pr-3.5
                  font-display text-[13px] font-semibold transition-[background-color,border-color,color,box-shadow] duration-200 ${
                    active
                      ? "border-brand-600 bg-brand-600 text-white shadow-card"
                      : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  }`}
    >
      <CategoryIcon glyph={glyph} className={`h-4 w-4 ${active ? "text-white/85" : "text-ink-400"}`} />
      {label}
      <span className={`tabular-nums text-[11px] font-semibold ${active ? "text-white/70" : "text-ink-400"}`}>
        {count}
      </span>
    </button>
  );
}

/** Discipline heading: icon, name, count and the one line on what it is for. */
export function CategoryHeader({ category, count, action }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-surface bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
          <CategoryIcon glyph={category.glyph} className="h-[22px] w-[22px]" />
        </span>
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3
              id={`stack-${category.id}`}
              className="font-display text-[20px] font-semibold tracking-tight text-ink-900"
            >
              {category.label}
            </h3>
            <span className="text-[13px] font-semibold tabular-nums text-ink-500">
              {count} {count === 1 ? "technology" : "technologies"}
            </span>
          </div>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-ink-500">{category.blurb}</p>
        </div>
      </div>
      {action}
    </div>
  );
}

/* ---------- the component ---------- */

export default function TechStack() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("category");
  const [active, setActive] = useState(VALID_IDS.has(initial) ? initial : DEFAULT_ID);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  // A literal id rather than the React 18 hook: this project is on
  // React 17, and there is only ever one of these on a page.
  const searchId = "tech-stack-search";

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const select = useCallback(
    (id) => {
      setActive(id);
      setQuery("");
      setSearchParams({ category: id }, { replace: true });
    },
    [setSearchParams]
  );

  /* "/" focuses the search from anywhere on the page, the way it does on
     GitHub and most documentation sites. Ignored while typing elsewhere. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && (/^(input|textarea|select)$/i.test(t.tagName) || t.isContentEditable)) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // A search looks across every discipline; otherwise it is the active one.
  // Kept as groups so a query that hits three disciplines reads as three.
  const groups = useMemo(() => {
    return CATEGORIES.filter((c) => searching || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items
          .map((t) => ({ ...t, category: c.id, categoryLabel: c.label }))
          .filter(
            (t) =>
              !q ||
              t.name.toLowerCase().includes(q) ||
              c.label.toLowerCase().includes(q) ||
              c.short.toLowerCase().includes(q) ||
              t.note.toLowerCase().includes(q)
          ),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, q, searching]);

  const shown = groups.reduce((n, c) => n + c.items.length, 0);

  const status =
    shown === 0
      ? "No technologies match that search."
      : searching
      ? `Showing ${shown} of ${TECH_COUNT} technologies`
      : `${shown} technologies in ${groups[0].label}`;

  return (
    <div>
      {/* Toolbar. Sticks under the header so the filter stays reachable
          without scrolling back up. Solid, not translucent — the badges
          would show through it. */}
      <div className="sticky top-16 z-30 -mx-5 border-b border-ink-200 bg-paper px-5 py-3 sm:-mx-8 sm:px-8 sm:py-4 lg:top-[72px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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
                active={!searching && active === c.id}
                onClick={() => select(c.id)}
              />
            ))}
          </div>

          <div className="relative shrink-0 lg:w-72">
            <label htmlFor={searchId} className="sr-only">
              Search technologies
            </label>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              ref={inputRef}
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
              placeholder="Search every discipline…"
              autoComplete="off"
              className="input py-2 pl-9 pr-10 text-[14px] [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[6px] text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            ) : (
              <kbd
                aria-hidden="true"
                className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded-[5px] border border-ink-200 bg-ink-50 px-1.5 font-sans text-[11px] font-medium leading-5 text-ink-500 sm:block"
              >
                /
              </kbd>
            )}
          </div>
        </div>
      </div>

      {/* Result count. Visible because it is genuinely useful with a filter
          this wide, and it doubles as the live region for screen readers. */}
      <p aria-live="polite" className="mt-6 text-[13px] text-ink-500">
        {status}
      </p>

      {shown === 0 ? (
        <div className="mt-6 rounded-panel border border-dashed border-ink-300 bg-white p-10 text-center">
          <p className="font-display text-[17px] font-semibold text-ink-900">
            Nothing here matches “{query}”.
          </p>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink-600">
            We work well beyond this list — if you run something that is not on it, that is
            usually a conversation rather than a problem.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setQuery("")} className="btn-ghost">
              Clear search
            </button>
            <Link to="/contact" className="btn-primary">
              Ask about your stack
            </Link>
          </div>
        </div>
      ) : (
        /* Keyed on the filter so a change re-runs the stagger. */
        <div key={`${searching ? "search" : active}:${q}`} className="mt-8 space-y-16">
          {groups.map((c, gi) => (
            <section key={c.id} aria-labelledby={`stack-${c.id}`}>
              <CategoryHeader category={c} count={c.items.length} />
              <div className="mt-10">
                <BadgeGrid items={c.items} note offset={gi * 6} />
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
