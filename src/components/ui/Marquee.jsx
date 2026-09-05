import React from "react";

/**
 * Infinite horizontal scroller. The children are rendered twice and the track
 * translates -50%, so the loop is seamless. Pauses on hover.
 *
 * The second copy exists only to make the wrap seamless. It was already marked
 * aria-hidden, but the links inside it stayed in the tab order — so a keyboard
 * user tabbed through fifteen technologies, then through the same fifteen
 * again, landing on elements a screen reader refuses to announce. `inert`
 * removes them from focus and from the accessibility tree together; the
 * tabIndex/pointer-events fallback covers browsers that do not support it yet.
 */
export default function Marquee({ items, renderItem, className = "" }) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div key={`${item.slug || item}-a-${i}`}>{renderItem(item)}</div>
        ))}
        <div aria-hidden="true" inert="" className="pointer-events-none flex gap-3">
          {items.map((item, i) => (
            <div key={`${item.slug || item}-b-${i}`} tabIndex={-1}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
