import React from "react";
import Reveal from "./Reveal";

/** "Why choose ..." benefits, as a two-column card list with gradient numerals. */
export default function WhyList({ items = [] }) {
  if (!items.length) return null;

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {items.map((item, i) => (
        <Reveal as="li" key={item.label} delay={60 * i} className="h-full">
          <div className="card card-hover h-full">
            <span className="font-display text-2xl font-bold tabular-nums tracking-tight text-brand-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink-900">
              {item.label.replace(/:$/, "")}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
