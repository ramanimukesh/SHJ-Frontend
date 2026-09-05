import React, { useEffect, useRef, useState } from "react";

/**
 * Fades content up the first time it scrolls into view.
 * Falls back to visible immediately where IntersectionObserver is absent
 * (notably jsdom), so tests still see the content.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    typeof window === "undefined" || typeof window.IntersectionObserver !== "function"
  );

  useEffect(() => {
    if (visible || !ref.current) return undefined;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
