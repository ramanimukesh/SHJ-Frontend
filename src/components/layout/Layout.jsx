import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "../ui/ChatWidget";

/** Resets scroll on route change; without it React Router keeps the offset. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Environments without a real viewport (jsdom, some embedded webviews)
    // either omit scrollTo or stub it out; there is nothing to scroll there and
    // nothing to report, so a failure is not worth taking the render down for.
    // `html { scroll-behavior: smooth }` applies to programmatic scrolls too,
    // so a plain scrollTo animated this: leaving a long page took about a
    // second, and the page you had just opened slid up past the header while
    // it ran. `behavior: "instant"` is the form that ignores the CSS property.
    //
    // Overriding the property around the call does NOT work: the browser
    // resolves scroll-behavior when it performs the scroll on a later frame,
    // not when scrollTo is called, so restoring it synchronously lets the
    // animation straight back in. That was measured, not assumed.
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      // Engines that reject the "instant" enum, and environments without a
      // real viewport (jsdom, some embedded webviews). An animated jump beats
      // not returning to the top at all; no viewport means nothing to do.
      try {
        window.scrollTo(0, 0);
      } catch {
        /* no-op */
      }
    }
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      {/* Keyboard and screen-reader users otherwise tab through the logo, five
          nav items and two header actions on every single page before reaching
          the content. Visually hidden until focused. */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Covers the code-split routes. The fallback holds roughly a screen of
            height on purpose: an empty box would let the footer jump up to meet
            the header for the frame or two the chunk takes to arrive. */}
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
